const assert = require('node:assert/strict');
const path = require('node:path');
const Module = require('node:module');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const esbuild = Module.createRequire(require.resolve('vite/package.json'))('esbuild');

async function check() {
  const result = await esbuild.build({
    stdin: {contents: "export {ReviewCards} from './ReviewCards'; export {lemReview} from './lemReview'; export {getClientReviews} from './reviews'; export {copy} from './translations'; export {services} from './services'; export {aboutContent} from './about';", loader: 'tsx', resolveDir: path.resolve('src')},
    bundle: true, write: false, platform: 'node', format: 'cjs',
    external: ['react'], loader: {'.css': 'empty'}, define: {'import.meta.env.BASE_URL': '"/"'}
  });
  const compiled = new Module(__filename);
  compiled.filename = __filename;
  compiled.paths = module.paths;
  compiled._compile(result.outputFiles[0].text, __filename);
  const {ReviewCards, lemReview, getClientReviews, copy, services, aboutContent} = compiled.exports;
  for (const lang of Object.keys(copy)) {
    const reviews = getClientReviews(lang);
    assert.equal(lemReview[lang].text.trim().split(/\n\s*\n/).length, 6, `${lang}: LEM must contain all six paragraphs`);
    assert.equal(reviews.length, 4, `${lang}: missing client review`);
    assert.equal(reviews.find(review => review.id === 'lem').text, lemReview[lang].text);
    for (const field of ['names', 'descriptions', 'units']) assert.equal(copy[lang][field].length, services.length, `${lang}: incomplete ${field}`);
    for (const field of ['paragraphs', 'items', 'reviews']) assert.equal(aboutContent[lang][field].length, aboutContent.ru[field].length, `${lang}: incomplete ${field}`);
    const html = renderToStaticMarkup(React.createElement(ReviewCards, {lang}));
    assert.equal((html.match(/class="review-card-quote"/g) || []).length, 4);
    for (const review of reviews) {
      const fullText = renderToStaticMarkup(React.createElement('p', null, `«${review.text}»`));
      assert.ok(html.includes(fullText), `${lang}: rendered card does not contain the complete ${review.id} review`);
    }
    console.log(`${lang}: four rendered reviews; LEM has six complete paragraphs; service and section counts match RU`);
  }
}
check().catch(error => {console.error(error); process.exitCode = 1;});

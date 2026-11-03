const assert = require('node:assert/strict');
const path = require('node:path');
const Module = require('node:module');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const esbuild = Module.createRequire(require.resolve('vite/package.json'))('esbuild');

async function check() {
  const result = await esbuild.build({
    stdin: {contents: "export {Testimonials, quoteParagraphs} from './ReviewCards'; export {lemReview} from './lemReview'; export {getClientReviews} from './reviews'; export {copy} from './translations'; export {services} from './services'; export {aboutContent} from './about'; export {brief, buildBriefMessage} from './brief';", loader: 'tsx', resolveDir: path.resolve('src')},
    bundle: true, write: false, platform: 'node', format: 'cjs',
    external: ['react'], loader: {'.css': 'empty'}, define: {'import.meta.env.BASE_URL': '"/"'}
  });
  const compiled = new Module(__filename);
  compiled.filename = __filename;
  compiled.paths = module.paths;
  compiled._compile(result.outputFiles[0].text, __filename);
  const {Testimonials, quoteParagraphs, lemReview, getClientReviews, copy, services, aboutContent, brief, buildBriefMessage} = compiled.exports;
  for (const lang of Object.keys(copy)) {
    const reviews = getClientReviews(lang);
    assert.equal(lemReview[lang].text.trim().split(/\n\s*\n/).length, 6, `${lang}: LEM must contain all six paragraphs`);
    assert.equal(reviews.length, 4, `${lang}: missing client review`);
    assert.equal(reviews.find(review => review.id === 'lem').text, lemReview[lang].text);
    for (const field of ['names', 'descriptions', 'units']) assert.equal(copy[lang][field].length, services.length, `${lang}: incomplete ${field}`);
    for (const field of ['paragraphs', 'items', 'reviews']) assert.equal(aboutContent[lang][field].length, aboutContent.ru[field].length, `${lang}: incomplete ${field}`);
    for (const review of reviews) {
      // Selecting a client must render its complete original review, paragraph by paragraph.
      const html = renderToStaticMarkup(React.createElement(Testimonials, {lang, initialId: review.id}));
      assert.equal((html.match(/class="testimonial-quote"/g) || []).length, 1, `${lang}: exactly one selected review`);
      assert.equal((html.match(/class="testimonial-item"/g) || []).length, 4, `${lang}: four selectable clients`);
      const paragraphs = quoteParagraphs(review.text);
      assert.equal(paragraphs.join('\n\n'), `«${review.text}»`, `${lang}: ${review.id} paragraphs must rebuild the original text`);
      const fullText = paragraphs.map(paragraph => renderToStaticMarkup(React.createElement('p', null, paragraph))).join('');
      assert.ok(html.includes(fullText), `${lang}: selected ${review.id} review is not rendered in full`);
    }
    for (const [key, value] of Object.entries(brief.ru)) {
      if (Array.isArray(value)) assert.equal(brief[lang][key].length, value.length, `${lang}: incomplete brief ${key}`);
      else assert.ok(typeof brief[lang][key] === 'string' && brief[lang][key].trim(), `${lang}: missing brief ${key}`);
    }
    assert.equal(buildBriefMessage(lang, [], '  ', null), brief[lang].emptyMessage, `${lang}: empty brief must use the general message`);
    const fullBrief = buildBriefMessage(lang, brief[lang].needs.map((_, index) => index), 'Test Co, test.es', 0);
    for (const need of brief[lang].needs) assert.ok(fullBrief.includes(need), `${lang}: brief message is missing ${need}`);
    assert.ok(fullBrief.includes('Test Co, test.es') && fullBrief.includes(brief[lang].timing[0]), `${lang}: brief message is missing answers`);
    console.log(`${lang}: each of four reviews renders in full when selected; LEM has six complete paragraphs; service, section and brief counts match RU; brief message includes every answer`);
  }
}
check().catch(error => {console.error(error); process.exitCode = 1;});

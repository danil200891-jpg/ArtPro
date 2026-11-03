import type {Lang} from './services';
import {processSteps} from './process';
import './process.css';

/** Four production stages joined by a thin line: horizontal on desktop, vertical on smaller screens. */
export function ProcessSteps({lang}: {lang: Lang}) {
  const t=processSteps[lang];
  return <section className="section process" id="process" aria-labelledby="process-title">
    <div className="ambient-glow" aria-hidden="true"/>
    <div className="section-label"><span>04 / {t.label}</span></div>
    <h2 id="process-title">{t.title}</h2>
    <ol className="process-steps">{t.steps.map((step,index)=><li key={index} className="process-step">
      <span className="process-number" aria-hidden="true">{String(index+1).padStart(2,'0')}</span>
      <div className="process-content"><h3>{step.title}</h3><p>{step.text}</p></div>
    </li>)}</ol>
  </section>;
}

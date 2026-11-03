import {ArrowRight} from 'lucide-react';
import type {Lang} from './services';
import {challenges} from './challenges';
import './challenges.css';

/** Client problems and our answers: heading on the left, four thin-ruled rows on the right. */
export function ClientChallenges({lang}: {lang: Lang}) {
  const t=challenges[lang];
  return <section className="section challenges" id="challenges" aria-labelledby="challenges-title">
    <div className="ambient-glow" aria-hidden="true"/>
    <div className="section-label"><span>02 / {t.label}</span></div>
    <div className="challenges-layout">
      <div className="challenges-intro"><h2 id="challenges-title">{t.title}</h2><p>{t.intro}</p></div>
      <ul className="challenges-list">{t.rows.map(row=><li key={row.solution} className="challenge-row">
        <p className="challenge-problem">{row.problem}</p>
        <div className="challenge-solution">
          <h3><ArrowRight size={15} strokeWidth={1.75} aria-hidden="true"/>{row.solution}</h3>
          <p>{row.text}</p>
        </div>
      </li>)}</ul>
    </div>
  </section>;
}

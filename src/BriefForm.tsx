import React, {useState} from 'react';
import {ArrowUpRight, Check, Instagram, MessageCircle} from 'lucide-react';
import {contacts, type Lang} from './services';
import {brief, buildBriefMessage} from './brief';
import './brief.css';

type Props = {lang: Lang; message?: string; whatsappUrl: string; instagramFirst: boolean; selection?: React.ReactNode};

/** Final section (#contact): direct channels on the left, an optional brief sent to WhatsApp on the right. */
export function BriefForm({lang, message, whatsappUrl, instagramFirst, selection}: Props) {
  const t=brief[lang];
  const [needs, setNeeds] = useState<number[]>([]);
  const [company, setCompany] = useState('');
  const [timing, setTiming] = useState<number | null>(null);
  const toggleNeed=(index:number)=>setNeeds(current=>current.includes(index)?current.filter(item=>item!==index):[...current,index].sort());
  const submit=(event:React.FormEvent)=>{
    event.preventDefault();
    window.open(contacts.whatsapp+'?text='+encodeURIComponent(buildBriefMessage(lang,needs,company,timing,message)),'_blank','noopener,noreferrer');
  };
  const channels=instagramFirst?['instagram','whatsapp']:['whatsapp','instagram'];

  return <section className="section brief" id="contact" aria-labelledby="brief-title">
    <div className="ambient-glow" aria-hidden="true"/>
    <div className="section-label"><span>04 / {t.label}</span></div>
    <div className="brief-layout">
      <div className="brief-intro">
        <h2 id="brief-title">{t.title}</h2><p>{t.subtitle}</p>
        {selection}
        <div className="brief-direct"><span>{t.direct}</span>
          <div className="brief-links">{channels.map(channel=><a key={channel} className="brief-link" href={channel==='whatsapp'?whatsappUrl:contacts.instagram} target="_blank" rel="noopener noreferrer">
            {channel==='whatsapp'?<MessageCircle size={17} aria-hidden="true"/>:<Instagram size={17} aria-hidden="true"/>}{channel==='whatsapp'?'WhatsApp':'Instagram'}<ArrowUpRight size={15} aria-hidden="true"/>
          </a>)}</div>
        </div>
      </div>
      <form className="brief-form" onSubmit={submit}>
        <fieldset className="brief-field">
          <legend><span className="brief-number">01</span>{t.needsLabel}</legend>
          <p className="brief-hint">{t.needsHint}</p>
          <div className="brief-options brief-needs">{t.needs.map((need,index)=><label key={need} className="brief-option">
            <input type="checkbox" checked={needs.includes(index)} onChange={()=>toggleNeed(index)}/>
            <span><Check className="brief-check" size={14} strokeWidth={2} aria-hidden="true"/>{need}</span>
          </label>)}</div>
        </fieldset>
        <div className="brief-field">
          <label className="brief-legend" htmlFor="brief-company"><span className="brief-number">02</span>{t.companyLabel}</label>
          <input id="brief-company" className="brief-input" type="text" value={company} maxLength={200} autoComplete="organization" placeholder={t.companyPlaceholder} onChange={event=>setCompany(event.target.value)}/>
        </div>
        <fieldset className="brief-field">
          <legend><span className="brief-number">03</span>{t.timingLabel}</legend>
          <div className="brief-options brief-timing">{t.timing.map((option,index)=><label key={option} className="brief-option">
            <input type="radio" name="brief-timing" checked={timing===index} onChange={()=>setTiming(index)}/>
            <span><Check className="brief-check" size={14} strokeWidth={2} aria-hidden="true"/>{option}</span>
          </label>)}</div>
        </fieldset>
        <div className="brief-actions">
          <button type="submit" className="button primary"><MessageCircle size={19}/>{t.submit}<ArrowUpRight size={18}/></button>
        </div>
        <p className="brief-note">{t.note}</p>
      </form>
    </div>
  </section>;
}

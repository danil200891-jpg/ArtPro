import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, Menu, X, Clapperboard, Film, CalendarDays, Layers, Camera, Share2, Target, Video} from 'lucide-react';
import {copy, services, contacts, editorial, type Lang} from './config';
import {aboutContent} from './about';
import {presentation} from './presentation';
import {productionDetails} from './productionDetails';
import {ClientChallenges} from './ClientChallenges';
import {Testimonials} from './ReviewCards';
import {ProcessSteps} from './ProcessSteps';
import {BriefForm} from './BriefForm';
import {ServiceCard} from './ServiceCard';
import {serviceDetails} from './serviceDetails';
import './styles.css';
import './visuals.css';
import './motion.css';
import './glass.css';
import {usePageMotion} from './usePageMotion';

const logoUrl = import.meta.env.BASE_URL + 'artproduction-logo.webp';
const serviceIcons = [Clapperboard, Film, CalendarDays, Layers, Camera, Share2, Target, Video];
// Photography and filming without editing are no longer offered; their data stays for old links.
const hiddenServices: readonly string[] = ['photography','raw-footage'];
const visibleServices = services.filter(s=>!hiddenServices.includes(s.id));
const displayOrder = [...visibleServices.filter(s=>s.group===0), ...visibleServices.filter(s=>s.group===1)];
const navigation = [{id:'home',index:0},{id:'about',index:2},{id:'services',index:1},{id:'contact',index:3}];

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try { const saved=localStorage.getItem('art-lang'); return saved==='ru'||saved==='uk'||saved==='en'?saved:'es'; }
    catch { return 'es'; }
  });
  const [menu, setMenu] = useState(false);
  const t=copy[lang], e=editorial[lang], about=aboutContent[lang], ui=presentation[lang], details=productionDetails[lang], included=serviceDetails[lang];
  usePageMotion(lang);
  const params=new URLSearchParams(window.location.search);
  const selected=services.find(service=>service.id===params.get('service'));
  const instagramFirst=params.get('from')==='whatsapp';
  const message=selected?t.serviceMessage+t.names[services.indexOf(selected)]:t.message;
  const whatsappUrl=contacts.whatsapp+'?text='+encodeURIComponent(message);

  useEffect(() => {
    document.documentElement.lang=lang;
    document.title=t.seo;
    for (const [selector,content] of [
      ['meta[name="description"]',t.subtitle+' '+t.intro],
      ['meta[property="og:title"]',t.seo],
      ['meta[property="og:description"]',t.subtitle+' '+t.intro]
    ]) document.querySelector(selector)?.setAttribute('content',content);
    try { localStorage.setItem('art-lang',lang); } catch { /* Storage is optional. */ }
  }, [lang,t]);

  useEffect(() => {
    if (!selected) return;
    const timer=window.setTimeout(()=>document.getElementById(selected.id)?.scrollIntoView({block:'center'}),150);
    return ()=>window.clearTimeout(timer);
  }, [selected]);

  useEffect(() => {
    if (!menu) return;
    const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){setMenu(false);document.getElementById('menu-toggle')?.focus();}};
    document.addEventListener('keydown',close);
    return ()=>document.removeEventListener('keydown',close);
  },[menu]);

  return <>
    <a className="skip" href="#main">{t.view}</a>
    <header className="site-header">
      <a href="#home" className="brand" aria-label="ArtProduction" onClick={()=>setMenu(false)}>
        <img className="brand-logo" src={logoUrl} alt="ArtProduction" width="1125" height="822"/>
      </a>
      <nav id="main-navigation" className={menu?'open':''} aria-label={t.menu}>
        {navigation.map(({id,index})=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{t.nav[index]}</a>)}
      </nav>
      <div className="header-controls">
        <div className="languages" aria-label={e.language}>
          {(['es','ru','uk','en'] as Lang[]).map(l=><button key={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l==='uk'?'UA':l.toUpperCase()}</button>)}
        </div>
        <button id="menu-toggle" className="menu-toggle" aria-controls="main-navigation" aria-expanded={menu} aria-label={menu?t.close:t.menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      </div>
    </header>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="ambient-glow" aria-hidden="true"/>
        <div className="hero-meta"><span className="location">{t.location}</span></div>
        <div className="hero-identity">
          <h1 id="hero-title">ArtProduction<span aria-hidden="true">.</span></h1>
          <div className="hero-rule" aria-hidden="true"/>
        </div>
        <div className="hero-details">
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-intro"><p>{t.intro}</p><a className="button primary" href="#contact">{ui.contact}<ArrowUpRight size={19}/></a></div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>01 / {t.nav[2]}</span></div>
        <div className="about-layout">
          <h2 id="about-title">{about.title}</h2>
          <div className="about-story">{about.paragraphs.map((p,index)=><p key={p}>{index===1||index===about.paragraphs.length-1?<strong>{p}</strong>:p}</p>)}</div>
        </div>
      </section>

      <ClientChallenges lang={lang}/>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="ambient-glow" aria-hidden="true"/>
        <div className="section-label"><span>03 / {t.nav[1]}</span></div>
        <h2 id="services-title">{ui.services}</h2>
        <div className="service-groups">{t.categories.map((category,group)=><div className="service-group" key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="service-list">{displayOrder.filter(service=>service.group===group).map(service=>{
            const index=services.indexOf(service);
            return <ServiceCard key={service.id} id={service.id} number={String(displayOrder.indexOf(service)+1).padStart(2,'0')} Icon={serviceIcons[index]}
              name={t.names[index]} description={t.descriptions[index]} from={t.from} price={service.price} unit={t.units[index]}
              selected={selected?.id===service.id?t.selected:undefined} items={included.items[service.id as keyof typeof included.items]}
              note={service.id==='reels'?details.reelsMinimum:undefined} labels={{more:included.more,included:included.included,close:included.close,discuss:ui.contact}}
              discussUrl={contacts.whatsapp+'?text='+encodeURIComponent(t.serviceMessage+t.names[index])}/>;
          })}</div>
        </div>)}</div>
        <aside className="pricing-note"><p>{ui.pricingNote}</p></aside>
      </section>

      <Testimonials lang={lang}/>

      <ProcessSteps lang={lang}/>

      <BriefForm lang={lang} message={selected?message:undefined} whatsappUrl={whatsappUrl} instagramFirst={instagramFirst}
        selection={selected&&<p className="contact-selection">{ui.selected}: <span>{t.names[services.indexOf(selected)]}</span></p>}/>
    </main>
    <footer><span>ArtProduction</span><p>© {new Date().getFullYear()} · {t.rights}</p><span>{e.city}</span></footer>
  </>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);

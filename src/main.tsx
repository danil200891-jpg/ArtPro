import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Handshake, MessageSquare, ChevronDown, ArrowUpRight, Menu, X, Instagram, MessageCircle, Clapperboard, Film, CalendarDays, Layers, Camera, Share2, Target, Video} from 'lucide-react';
import {copy, services, contacts, editorial, type Lang} from './config';
import {aboutContent, rodynaDescription, coriumAttribution} from './about';
import {presentation} from './presentation';
import {productionDetails} from './productionDetails';
import './styles.css';
import './visuals.css';
import './motion.css';
import {usePageMotion} from './usePageMotion';

const logoUrl = import.meta.env.BASE_URL + 'artproduction-logo.webp';
const reviewClients = [
  {name:'MVP Esports Barcelona', image:'mvp-barcelona.png', url:'https://www.instagram.com/mvpesports.es/'},
  {name:'Korchma Rodyna', image:'korchma-rodyna.png', url:'https://www.instagram.com/korchma.rodyna/'},
  {name:'CORIUM Barcelona', image:'corium-barcelona.png', url:'https://coriumshops.com/'}
];
const serviceIcons = [Clapperboard, Film, CalendarDays, Layers, Camera, Share2, Target, Video];
const displayOrder = [...services.filter(s=>s.group===0), ...services.filter(s=>s.group===1)];
const navigation = [{id:'home',index:0},{id:'about',index:2},{id:'services',index:1},{id:'contact',index:3}];

function AboutAccordion({title, icon: Icon, children}: {title:string; icon:typeof MessageSquare; children:React.ReactNode}) {
  return <details className="about-reviews">
    <summary>
      <span className="reviews-heading"><Icon className="reviews-message" size={22} strokeWidth={1.5} aria-hidden="true"/><span className="reviews-title">{title}</span></span>
      <ChevronDown className="reviews-arrow" size={22} strokeWidth={1.5} aria-hidden="true"/>
    </summary>
    {children}
  </details>;
}

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try { const saved=localStorage.getItem('art-lang'); return saved==='ru'||saved==='uk'||saved==='en'?saved:'es'; }
    catch { return 'es'; }
  });
  const [menu, setMenu] = useState(false);
  const t=copy[lang], e=editorial[lang], about=aboutContent[lang], ui=presentation[lang], details=productionDetails[lang];
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
        <AboutAccordion title={about.reviewsTitle} icon={MessageSquare}>
          <div className="about-review-list">{about.reviews.map((review,index)=><blockquote key={index} className="about-review full-review">
            <p>«{review}»</p><cite>{reviewClients[index]?<span className="review-author">
              <img className={index===2?"corium-logo":undefined} src={import.meta.env.BASE_URL+reviewClients[index].image} alt={reviewClients[index].name} width={index===2?90:64} height={index===2?28:64} loading="lazy" decoding="async"/>
              <span><strong>{reviewClients[index].name}</strong>{index===1&&<span>{rodynaDescription[lang]}</span>}{index===2&&<span>{coriumAttribution[lang].description}</span>}<a href={reviewClients[index].url} target="_blank" rel="noopener noreferrer">{index===2?coriumAttribution[lang].website:"Instagram"}<ArrowUpRight size={12} aria-hidden="true"/></a></span>
            </span>:about.reviewLabel}</cite>
          </blockquote>)}</div>
        </AboutAccordion>
        <AboutAccordion title={about.approach} icon={Handshake}>
          <ul className="about-benefits">{about.items.map(item=><li key={item}><strong>{item.slice(0,item.indexOf('.')+1)}</strong>{item.slice(item.indexOf('.')+1)}</li>)}</ul>
        </AboutAccordion>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="ambient-glow" aria-hidden="true"/>
        <div className="section-label"><span>02 / {t.nav[1]}</span></div>
        <h2 id="services-title">{ui.services}</h2>
        <div className="service-groups">{t.categories.map((category,group)=><div className="service-group" key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="service-list">{services.map((service,index)=>{
            const Icon=serviceIcons[index];
            return service.group===group&&<article id={service.id} key={service.id} className={'service-card service-'+service.id+(selected?.id===service.id?' selected':'')}>
              <div className="service-visual" aria-hidden="true">
                <div className="visual-grid"/><div className="visual-frame"/>
                <span className="visual-index">{String(displayOrder.indexOf(service)+1).padStart(2,'0')}</span>
                <div className="visual-icon"><Icon strokeWidth={1.15}/></div>
                <span className="visual-corner"/>
              </div>
              <div className="card-content"><div className="service-description"><h4>{t.names[index]}</h4><p>{t.descriptions[index]}</p>{service.id==='reels'&&<p className="service-condition">{details.reelsMinimum}</p>}{selected?.id===service.id&&<span className="selected-label">{t.selected}</span>}</div>
                <div className="service-price"><div>{service.id!=='raw-footage'&&<span>{t.from}</span>}<strong>{service.price}{' '}<span className="price-currency">€</span></strong></div><span>{t.units[index]}</span></div>
              </div>
            </article>;
          })}</div>
        </div>)}</div>
        <aside className="pricing-note"><p>{ui.pricingNote}</p></aside>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="ambient-glow" aria-hidden="true"/>
        <div className="section-label"><span>03 / {t.nav[3]}</span></div>
        <div className="contact-layout"><h2 id="contact-title">{t.contactTitle}</h2><div className="contact-details"><p>{t.contactText}</p>
          {selected&&<p className="contact-selection">{ui.selected}: <span>{t.names[services.indexOf(selected)]}</span></p>}
          <div className="contact-actions">{(instagramFirst?['instagram','whatsapp']:['whatsapp','instagram']).map((channel,index)=><a key={channel} className={'button '+(index===0?'primary':'secondary')} href={channel==='whatsapp'?whatsappUrl:contacts.instagram} target="_blank" rel="noopener noreferrer">
            {channel==='whatsapp'?<MessageCircle size={19}/>:<Instagram size={19}/>}{channel==='whatsapp'?'WhatsApp':'Instagram'}<ArrowUpRight size={18}/>
          </a>)}</div>
        </div></div>
      </section>
    </main>
    <footer><span>ArtProduction</span><p>© {new Date().getFullYear()} · {t.rights}</p><span>{e.city}</span></footer>
  </>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);

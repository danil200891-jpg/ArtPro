import {useEffect, useId, useRef, useState} from 'react';
import {ArrowUpRight, ChevronDown, Quote} from 'lucide-react';
import {getClientReviews, reviewLabels, type ClientReview} from './reviews';
import type {Lang} from './services';
import './reviews.css';

/** Splits a review into its original paragraphs and wraps the whole text in quotation marks. */
export function quoteParagraphs(text: string) {
  const paragraphs=text.split('\n\n');
  return paragraphs.map((paragraph,index)=>(index===0?'«':'')+paragraph+(index===paragraphs.length-1?'»':''));
}

function ReviewLogo({review, className}: {review: ClientReview; className: string}) {
  const [failed, setFailed] = useState(false);
  if (!review.logo || failed) return null;
  return <img className={className} src={import.meta.env.BASE_URL+review.logo.src} alt="" width={review.logo.width} height={review.logo.height} loading="lazy" decoding="async" onError={()=>setFailed(true)}/>;
}

/** Client reviews: selectable clients on the left (above on mobile), the chosen review on the right. */
export function Testimonials({lang, initialId}: {lang: Lang; initialId?: string}) {
  const reviews=getClientReviews(lang), labels=reviewLabels[lang];
  const [activeId, setActiveId] = useState(initialId??reviews[0].id);
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number>();
  const [overflowing, setOverflowing] = useState(true);
  const featuredRef=useRef<HTMLElement>(null), textRef=useRef<HTMLDivElement>(null);
  const id=useId(), bodyId=`${id}-quote`, featuredId=`${id}-featured`;
  const active=reviews.find(review=>review.id===activeId)??reviews[0];

  useEffect(()=>{
    const text=textRef.current, featured=featuredRef.current;
    if(!text||!featured) return;
    // The collapsed height is constant, so switching reviews never makes the section jump.
    const measure=()=>{
      const full=Math.ceil(text.getBoundingClientRect().height);
      setFullHeight(full);
      setOverflowing(full>parseFloat(getComputedStyle(featured).getPropertyValue('--testimonial-height')));
    };
    measure();
    const observer=typeof ResizeObserver==='undefined'?undefined:new ResizeObserver(measure);
    observer?.observe(text);
    window.addEventListener('resize',measure);
    return ()=>{observer?.disconnect();window.removeEventListener('resize',measure);};
  },[active.text]);

  const select=(review:ClientReview)=>{ setActiveId(review.id); setExpanded(false); };
  const keepToggleVisible=()=>{
    const featured=featuredRef.current;
    if(!expanded && featured && featured.getBoundingClientRect().top<0) featured.scrollIntoView({block:'start',behavior:'instant'});
  };

  return <section className="section testimonials" id="reviews" aria-labelledby="reviews-title">
    <div className="ambient-glow" aria-hidden="true"/>
    <div className="section-label"><span>03 / {labels.section}</span></div>
    <h2 id="reviews-title">{labels.title}</h2>
    <div className="testimonials-layout">
      <ul className="testimonial-list" aria-label={labels.choose}>{reviews.map(review=><li key={review.id}>
        <button type="button" className="testimonial-item" aria-pressed={review.id===active.id} aria-controls={featuredId} onClick={()=>select(review)}>
          <span className="testimonial-item-logo"><ReviewLogo review={review} className="testimonial-logo-img"/></span>
          <span className="testimonial-item-text">
            <span className="testimonial-item-name">{review.name}</span>
            <span className="testimonial-item-excerpt">{review.text.split('\n\n')[0]}</span>
          </span>
        </button>
      </li>)}</ul>
      <figure className="testimonial-featured" id={featuredId} ref={featuredRef} aria-live="polite">
        <Quote className="testimonial-mark" size={26} strokeWidth={1.5} aria-hidden="true"/>
        <div className="testimonial-body" id={bodyId} data-overflow={overflowing} data-expanded={expanded} style={expanded&&fullHeight?{height:`${fullHeight}px`}:undefined} onTransitionEnd={keepToggleVisible}>
          <blockquote key={active.id} className="testimonial-quote"><div ref={textRef}>{quoteParagraphs(active.text).map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div></blockquote>
        </div>
        {overflowing && <button className="testimonial-toggle" type="button" aria-expanded={expanded} aria-controls={bodyId} onClick={()=>setExpanded(value=>!value)}>
          {expanded?labels.collapse:labels.expand}<span className="testimonial-sr-only"> — {active.name}</span><ChevronDown size={16} aria-hidden="true"/>
        </button>}
        <figcaption key={active.id} className="testimonial-author">
          <span className="testimonial-author-logo"><ReviewLogo review={active} className="testimonial-logo-img"/></span>
          <span className="testimonial-identity">
            <span className="testimonial-name">{active.name}</span>
            {active.description && <span className="testimonial-description">{active.description}</span>}
            {active.url && <a className="testimonial-link" href={active.url} target="_blank" rel="noopener noreferrer">{active.linkLabel||active.url}<ArrowUpRight size={12} aria-hidden="true"/></a>}
          </span>
        </figcaption>
      </figure>
    </div>
  </section>;
}

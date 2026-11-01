import React, {useEffect, useId, useRef, useState} from 'react';
import {ArrowUpRight, ChevronDown} from 'lucide-react';
import {getClientReviews, reviewLabels, type ClientReview} from './reviews';
import type {Lang} from './services';
import './reviews.css';

export function ReviewCard({review,lang}:{review:ClientReview;lang:Lang}) {
  const [expanded,setExpanded]=useState(false);
  const [fullHeight,setFullHeight]=useState<number>();
  const [failedLogo,setFailedLogo]=useState<string>();
  const textRef=useRef<HTMLParagraphElement>(null);
  const buttonRef=useRef<HTMLButtonElement>(null);
  const id=useId();
  const textId=`${id}-text`, nameId=`${id}-name`;
  const labels=reviewLabels[lang];

  useEffect(()=>{
    const text=textRef.current;
    if(!text) return;
    const measure=()=>setFullHeight(Math.ceil(text.getBoundingClientRect().height));
    measure();
    const observer=typeof ResizeObserver==='undefined'?undefined:new ResizeObserver(measure);
    observer?.observe(text);
    window.addEventListener('resize',measure);
    return ()=>{observer?.disconnect();window.removeEventListener('resize',measure);};
  },[review.text]);

  // Keep the control reachable if collapsing a long review moves it above the viewport.
  const keepButtonVisible=()=>{
    const button=buttonRef.current;
    if(!expanded && button && button.getBoundingClientRect().top<0) {
      button.scrollIntoView({block:'nearest',behavior:'instant'});
    }
  };

  return <article className="review-card" aria-labelledby={nameId} data-expanded={expanded}>
    <header className="review-card-header">
      <div className="review-card-company">
        {review.logo && failedLogo!==review.logo.src && <img className="review-card-logo" src={import.meta.env.BASE_URL+review.logo.src} alt="" width={review.logo.width} height={review.logo.height} loading="lazy" decoding="async" onError={()=>setFailedLogo(review.logo?.src)}/>}
        <div className="review-card-identity">
          <h3 id={nameId}>{review.url?<a href={review.url} target="_blank" rel="noopener noreferrer">{review.name}</a>:review.name}</h3>
          {review.url && <a className="review-card-link" href={review.url} target="_blank" rel="noopener noreferrer">{review.linkLabel||review.url}<ArrowUpRight size={12} aria-hidden="true"/></a>}
          {review.description && <p className="review-card-description">{review.description}</p>}
        </div>
      </div>
    </header>
    <div className="review-card-excerpt" id={textId} style={expanded?{height:fullHeight?`${fullHeight}px`:'auto'}:undefined} onTransitionEnd={keepButtonVisible}>
      <blockquote className="review-card-quote"><p ref={textRef}>«{review.text}»</p></blockquote>
    </div>
    <button ref={buttonRef} className="review-card-toggle" type="button" aria-expanded={expanded} aria-controls={textId} onClick={()=>setExpanded(value=>!value)}>
      {expanded?labels.collapse:labels.expand}<span className="review-card-sr-only"> — {review.name}</span><ChevronDown size={16} aria-hidden="true"/>
    </button>
  </article>;
}

export function ReviewCards({lang}:{lang:Lang}) {
  const listRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const list=listRef.current;
    if(!list) return;
    const headers=Array.from(list.querySelectorAll<HTMLElement>('.review-card-company'));
    // Equalise only the header space. Opening one review never stretches another.
    const measure=()=>{
      const height=Math.ceil(Math.max(0,...headers.map(header=>header.getBoundingClientRect().height)));
      list.style.setProperty('--review-header-height',`${height}px`);
    };
    measure();
    const observer=typeof ResizeObserver==='undefined'?undefined:new ResizeObserver(measure);
    headers.forEach(header=>observer?.observe(header));
    window.addEventListener('resize',measure);
    return ()=>{observer?.disconnect();window.removeEventListener('resize',measure);};
  },[lang]);

  return <div className="about-review-list" ref={listRef}>{getClientReviews(lang).map(review=><ReviewCard key={review.id} review={review} lang={lang}/>)}</div>;
}

import {useEffect} from 'react';

// Whole blocks reveal, not every small element: headings, text blocks, cards, review, process and brief groups.
const revealTargets='h1, h2, .section-label, .hero-details, .about-story, .challenges-intro p, .challenge-row, .category-title, .service-card, .pricing-note, .testimonial-list, .testimonial-featured, .process-steps, .brief-intro>p, .brief-direct, .brief-or, .brief-start, .brief-form';
const staggerStep=110, staggerSteps=6;

/**
 * Progressive enhancement: content stays visible if observers or motion are unavailable.
 * Each block is re-armed only after it has fully left the viewport, from the side it left on — no scroll handlers.
 * Scrolling down, blocks catch up from well below; scrolling up, they settle in from just above, quickly and without delay.
 */
export function usePageMotion(language: string) {
  useEffect(() => {
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets=Array.from(document.querySelectorAll<HTMLElement>(revealTargets));
    const backgrounds=Array.from(document.querySelectorAll<HTMLElement>('.ambient-glow'));
    let observer: IntersectionObserver | undefined;
    let backgroundObserver: IntersectionObserver | undefined;
    const reset=()=>{
      observer?.disconnect();
      backgroundObserver?.disconnect();
      targets.forEach(el=>{delete el.dataset.reveal;delete el.dataset.revealDir;el.style.removeProperty('--reveal-delay');el.style.removeProperty('--reveal-from');});
      backgrounds.forEach(el=>el.classList.remove('ambient-active'));
    };
    const hide=(el: HTMLElement, fromAbove: boolean)=>{
      const shift=fromAbove?-12:window.innerWidth<=700?64:72;
      el.style.setProperty('--reveal-from',`${shift}px`);
      el.dataset.revealDir=fromAbove?'up':'down';
      el.dataset.reveal='hidden';
    };
    const setup=()=>{
      reset();
      if(preference.matches || !('IntersectionObserver' in window)) return;
      observer=new IntersectionObserver(entries=>{
        // Blocks entering together from below are staggered top to bottom; from above they appear at once.
        const entering=entries.filter(entry=>entry.isIntersecting && (entry.target as HTMLElement).dataset.reveal==='hidden')
          .sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
        entering.forEach((entry,index)=>{
          const el=entry.target as HTMLElement;
          el.style.setProperty('--reveal-delay',el.dataset.revealDir==='up'?'0ms':`${Math.min(index,staggerSteps)*staggerStep}ms`);
          el.dataset.reveal='shown';
        });
        // Re-arm only once fully out of view, so nothing vanishes while the reader can still see it.
        entries.forEach(entry=>{
          if(!entry.isIntersecting && (entry.target as HTMLElement).dataset.reveal==='shown') hide(entry.target as HTMLElement,entry.boundingClientRect.top<0);
        });
      },{threshold:0});
      targets.forEach(el=>{
        hide(el,el.getBoundingClientRect().bottom<0);
        observer?.observe(el);
      });
      backgroundObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
        entry.target.classList.toggle('ambient-active',entry.isIntersecting);
      }));
      backgrounds.forEach(el=>backgroundObserver?.observe(el));
    };
    setup();
    preference.addEventListener('change',setup);
    return ()=>{reset();preference.removeEventListener('change',setup);};
  },[language]);
}

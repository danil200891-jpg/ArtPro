import {useEffect} from 'react';

/** Progressive enhancement: content stays visible if observers or motion are unavailable. */
export function usePageMotion(language: string) {
  useEffect(() => {
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets=Array.from(document.querySelectorAll<HTMLElement>('h1, h2, .category-title, .service-card'));
    const backgrounds=Array.from(document.querySelectorAll<HTMLElement>('.ambient-glow'));
    let observer: IntersectionObserver | undefined;
    let backgroundObserver: IntersectionObserver | undefined;
    const reset=()=>{
      observer?.disconnect();
      backgroundObserver?.disconnect();
      targets.forEach(el=>{el.classList.remove('motion-pending','motion-in');el.style.removeProperty('--reveal-delay');});
      backgrounds.forEach(el=>el.classList.remove('ambient-active'));
    };
    const setup=()=>{
      reset();
      if(preference.matches || !('IntersectionObserver' in window)) return;
      observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(!entry.isIntersecting) return;
          entry.target.classList.add('motion-in');
          observer?.unobserve(entry.target);
        });
      },{threshold:0,rootMargin:'0px 0px -18px 0px'});
      targets.forEach(el=>{
        // Stagger only neighbours in the same row; mobile cards appear individually.
        const siblings=el.parentElement?Array.from(el.parentElement.children):[];
        const columns=el.parentElement?getComputedStyle(el.parentElement).gridTemplateColumns.split(' ').length:1;
        const delay=el.matches('.service-card')&&columns>1?(siblings.indexOf(el)%Math.min(columns,3))*70:0;
        el.style.setProperty('--reveal-delay',`${delay}ms`);
        el.classList.add('motion-pending');
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

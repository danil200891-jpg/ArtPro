import {useEffect, useId, useRef, useState, type MouseEvent} from 'react';
import {Check, RefreshCw, X, type LucideIcon} from 'lucide-react';
import {WhatsAppIcon} from './WhatsAppIcon';

type Labels = {more:string; included:string; close:string; discuss:string};
type Props = {
  id:string; number:string; Icon:LucideIcon; name:string; description:string;
  from:string; price:number; unit:string; selected?:string;
  items?:string[]; note?:string; labels:Labels; discussUrl:string;
};

/** Glass service card; cards with included items flip on their Y axis to show them. */
export function ServiceCard({id, number, Icon, name, description, from, price, unit, selected, items, note, labels, discussUrl}: Props) {
  const [flipped, setFlipped] = useState(false);
  const interacted = useRef(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const backId = useId();
  const flippable = Boolean(items?.length);

  // Keyboard turns move focus to the visible side; mouse and touch turns leave it alone, so no focus ring lingers.
  useEffect(() => {
    if (interacted.current) (flipped ? closeButton : openButton).current?.focus({preventScroll:true});
  }, [flipped]);

  const toggle = (event: MouseEvent) => { interacted.current = event.detail === 0; setFlipped(value => !value); };
  // A tap anywhere on the card turns it, except on its own buttons and links.
  const onFaceClick = (event: MouseEvent) => {
    if (flippable && !(event.target as Element).closest('a,button') && !window.getSelection()?.toString()) toggle(event);
  };

  return <article id={id} className={'service-card service-'+id+(flippable?' is-flippable':'')+(flipped?' is-flipped':'')+(selected?' selected':'')}>
    <div className="service-flip">
      <div className="service-face service-front" inert={flipped} onClick={onFaceClick}>
        <span className="service-tint" aria-hidden="true"/>
        <div className="service-top">
          <span className="service-icon" aria-hidden="true"><Icon strokeWidth={1.6}/></span>
          <span className="service-number">{number}</span>
        </div>
        <div className="service-text">
          <h4>{name}</h4>
          <p>{description}</p>
          {selected && <span className="selected-label">{selected}</span>}
        </div>
        <div className="service-footer">
          <div className="service-cost"><span>{from}</span><strong>{price}{' '}<span className="price-currency">€</span></strong><small>{unit}</small></div>
          {flippable && <button ref={openButton} type="button" className="glass-pill service-more" aria-expanded={flipped} aria-controls={backId} onClick={toggle}>
            {labels.more}<RefreshCw size={12} strokeWidth={2} aria-hidden="true"/>
          </button>}
        </div>
      </div>
      {flippable && <div className="service-face service-back" id={backId} inert={!flipped} onClick={onFaceClick}>
        <span className="service-tint" aria-hidden="true"/>
        <div className="service-back-head">
          <h4>{name}</h4>
          <button ref={closeButton} type="button" className="service-close" aria-label={labels.close} onClick={toggle}><X size={14} strokeWidth={1.75}/></button>
        </div>
        <p className="service-included">{labels.included}</p>
        <ul className="service-includes">{items!.map(item=><li key={item}><span aria-hidden="true"><Check size={10} strokeWidth={2.5}/></span>{item}</li>)}</ul>
        {note && <p className="service-note">{note}</p>}
        <a className="glass-pill service-discuss" href={discussUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16}/>{labels.discuss}</a>
      </div>}
    </div>
  </article>;
}

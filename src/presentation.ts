import type {Lang} from './services';
export const presentation: Record<Lang, {contact:string; services:string; pricingNote:string; selected:string}> = {
 es: {contact:'Hablemos de tu proyecto',services:'Servicios y precios',pricingNote:'Los precios indicados son orientativos. El coste final de cada proyecto se calcula de forma individual y depende del formato de grabación, la complejidad de la edición y el volumen de trabajo. Todos los precios se indican sin IVA (+21%).',selected:'Servicio de interés'},
 ru: {contact:'Обсудить проект',services:'Услуги и цены',pricingNote:'Указанные цены являются ориентировочными. Окончательная стоимость каждого проекта рассчитывается индивидуально и зависит от формата съёмки, сложности монтажа и объёма работы. Все цены указаны без IVA (+21%).',selected:'Интересующая услуга'},
 en: {contact:'Let’s discuss your project',services:'Services & pricing',pricingNote:'The prices shown are indicative. The final cost of each project is calculated individually and depends on the filming format, editing complexity and scope of work. All prices exclude VAT (+21%).',selected:'Service of interest'}
};

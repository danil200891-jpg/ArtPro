import {aboutContent, coriumAttribution, rodynaDescription} from './about';
import {lemReview} from './lemReview';
import type {Lang} from './services';

export type ClientReview = {
  id:string;
  name:string;
  logo?:{src:string; width:number; height:number};
  url?:string;
  linkLabel?:string;
  description?:string;
  text:string;
};

// Add company data here; the card also supports reviews without a logo or a link.
export function getClientReviews(lang:Lang):ClientReview[] {
  return [
    {id:'mvp',name:'MVP Esports Barcelona',logo:{src:'mvp-barcelona.png',width:64,height:64},url:'https://www.instagram.com/mvpesports.es/',linkLabel:'Instagram',text:aboutContent[lang].reviews[0]},
    {id:'rodyna',name:'Korchma Rodyna',logo:{src:'korchma-rodyna.png',width:64,height:64},url:'https://www.instagram.com/korchma.rodyna/',linkLabel:'Instagram',description:rodynaDescription[lang],text:aboutContent[lang].reviews[1]},
    {id:'corium',name:'CORIUM Barcelona',logo:{src:'corium-barcelona.png',width:90,height:28},url:'https://coriumshops.com/',linkLabel:'coriumshops.com',description:coriumAttribution[lang].description,text:aboutContent[lang].reviews[2]},
    {id:'lem',name:'LEM Professional',logo:{src:'lem-professional.webp',width:1680,height:666},url:'https://lemprofessional.com/',linkLabel:'lemprofessional.com',description:lemReview[lang].description,text:lemReview[lang].text}
  ];
}

export const reviewLabels:Record<Lang,{expand:string;collapse:string;section:string;title:string;choose:string}> = {
  ru:{expand:'Читать полностью',collapse:'Свернуть',section:'Отзывы',title:'Что говорят наши клиенты?',choose:'Выберите отзыв'},
  es:{expand:'Leer completo',collapse:'Mostrar menos',section:'Opiniones',title:'¿Qué dicen nuestros clientes?',choose:'Elijan una opinión'},
  uk:{expand:'Читати повністю',collapse:'Згорнути',section:'Відгуки',title:'Що кажуть наші клієнти?',choose:'Оберіть відгук'},
  en:{expand:'Read full review',collapse:'Show less',section:'Reviews',title:'What do our clients say?',choose:'Choose a review'}
};

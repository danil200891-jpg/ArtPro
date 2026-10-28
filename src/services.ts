export type Lang = 'es' | 'ru' | 'uk' | 'en';
export const contacts = { instagram:'https://www.instagram.com/daniel_artpro/', whatsapp:'https://wa.me/34642164516' };
export const services = [
 {id:'reels',price:75,group:0,icon:'reels'},
 {id:'corporate',price:350,group:0,icon:'film'},
 {id:'events',price:400,group:0,icon:'event'},
 {id:'content',price:800,group:0,icon:'layers'},
 {id:'photography',price:150,group:0,icon:'camera'},
 {id:'smm',price:600,group:1,icon:'social'},
 {id:'ads',price:400,group:1,icon:'target'},
 {id:'raw-footage',price:100,group:0,icon:'video'}
] as const;

import type {Lang} from './services';
export const productionDetails: Record<Lang, {reelsMinimum:string;rawName:string;rawDescription:string;rawUnit:string}> = {
 ru: {reelsMinimum:'Минимальный заказ — 4 видео за одну съёмку.',rawName:'Видеосъёмка без монтажа',rawDescription:'Клиент получает отснятый материал без последующей обработки и монтажа.',rawUnit:'/ час'},
 es: {reelsMinimum:'Pedido mínimo: 4 vídeos por sesión de grabación.',rawName:'Grabación de vídeo sin edición',rawDescription:'Recibirás el material grabado, sin procesamiento posterior ni edición.',rawUnit:'/ hora'},
 uk: {reelsMinimum:'Мінімальне замовлення — 4 відео за одну зйомку.',rawName:'Відеозйомка без монтажу',rawDescription:'Клієнт отримує відзнятий матеріал без подальшої обробки та монтажу.',rawUnit:'/ годину'},
 en: {reelsMinimum:'Minimum order: 4 videos per filming session.',rawName:'Video filming without editing',rawDescription:'You receive the recorded footage without any subsequent processing or editing.',rawUnit:'/ hour'}
};

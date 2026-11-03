import type {Lang} from './services';
import {uaChallenges} from './ukrainian';

export type ChallengesCopy = {label:string; title:string; intro:string; rows:{problem:string; solution:string; text:string}[]};

export const challenges: Record<Lang, ChallengesCopy> = {
 uk: uaChallenges,
 es: {label:'Retos',title:'Por qué acuden a nosotros',intro:'Una empresa no necesita solo contenido bonito. Necesita resultados: reconocimiento de marca, la confianza de sus clientes y una presencia constante en redes sociales. Les ayudamos a conseguirlos.',rows:[
  {problem:'No tienen tiempo para el contenido',solution:'Nos encargamos de todo el proceso',text:'Desarrollamos las ideas, preparamos los guiones y organizamos el rodaje y la edición. Ustedes aprueban las decisiones clave; nosotros nos ocupamos de llevarlas a cabo.'},
  {problem:'Sus redes sociales no se actualizan con regularidad',solution:'Creamos un sistema de contenido',text:'Planificamos las publicaciones, grabamos Reels y preparamos fotos y materiales publicitarios para que la marca esté presente de forma constante ante su público.'},
  {problem:'El producto luce mejor en persona que en vídeo',solution:'Mostramos sus puntos fuertes',text:'Trabajamos la luz, la composición y los detalles para transmitir la calidad del producto, la atmósfera y el carácter de la marca.'},
  {problem:'Tienen contenido, pero pocas solicitudes',solution:'Unimos contenido y publicidad',text:'Creamos piezas publicitarias y les ayudamos con la publicidad segmentada para atraer a un público realmente interesado.'}]},
 ru: {label:'Задачи',title:'С чем к нам приходят',intro:'Бизнесу нужен не просто красивый контент. Ему нужен результат: узнаваемость, доверие клиентов и стабильное присутствие в социальных сетях. Мы помогаем решать эти задачи.',rows:[
  {problem:'Нет времени заниматься контентом',solution:'Берём процесс на себя',text:'Разрабатываем идеи, готовим сценарии, организуем съёмки и монтаж. Вы согласовываете ключевые решения, мы занимаемся реализацией.'},
  {problem:'Соцсети ведутся нерегулярно',solution:'Создаём систему контента',text:'Планируем публикации, снимаем Reels, готовим фото и рекламные материалы, чтобы бренд регулярно появлялся перед своей аудиторией.'},
  {problem:'Продукт выглядит лучше, чем на видео',solution:'Показываем его преимущества',text:'Работаем со светом, композицией и деталями, чтобы передать качество продукта, атмосферу и характер бренда.'},
  {problem:'Контент есть, а заявок мало',solution:'Соединяем контент и рекламу',text:'Разрабатываем рекламные креативы и помогаем с таргетированной рекламой, чтобы привлекать заинтересованную аудиторию.'}]},
 en: {label:'Challenges',title:'Why businesses come to us',intro:'A business needs more than good-looking content. It needs results: brand awareness, customer trust and a consistent presence on social media. We help you achieve them.',rows:[
  {problem:'No time for content',solution:'We take the process off your hands',text:'We develop ideas, write scripts and organise filming and editing. You approve the key decisions, and we handle the execution.'},
  {problem:'Social media updates are irregular',solution:'We build a content system',text:'We plan posts, film Reels and prepare photos and ad materials so your brand shows up regularly in front of its audience.'},
  {problem:'The product looks better in real life than on video',solution:'We bring out its strengths',text:'We work with light, composition and detail to convey the quality of the product, the atmosphere and the character of the brand.'},
  {problem:'Plenty of content, but few enquiries',solution:'We connect content and advertising',text:'We create ad creatives and help with targeted advertising to attract a genuinely interested audience.'}]}
};

import type {Lang} from './services';
import {uaServiceDetails} from './ukrainian';

// Back sides of the flip cards: what each video service includes.
export type ServiceDetailsCopy = {more:string; included:string; close:string; items:Record<'reels'|'corporate'|'events'|'content', string[]>};

export const serviceDetails: Record<Lang, ServiceDetailsCopy> = {
 uk: uaServiceDetails,
 es: {more:'Más detalles',included:'Qué incluye el servicio',close:'Cerrar',items:{
  reels:['Cámara profesional Sony.','Iluminación adicional.','Micrófono de solapa.','Edición básica y corrección de color.','Ambientación musical.','2 rondas de cambios.'],
  corporate:['Desarrollo del concepto y del guion.','Consulta con un especialista en SMM.','Cámara profesional, iluminación y micrófonos de solapa.','Grabación con estabilizador.','Edición avanzada y diseño de sonido.','Corrección de color avanzada.','2 rondas de cambios.'],
  events:['Grabación profesional del evento en vídeo.','Grabación con estabilizador.','Iluminación adicional si es necesario.','Grabación de sonido si es necesario.','Edición del vídeo final.','Corrección de color y ambientación musical.'],
  content:['Desarrollo del plan de contenidos.','Apoyo de un especialista en SMM.','Organización de grabaciones periódicas.','Cámara, iluminación y sonido profesionales.','Edición y corrección de color.','Adaptación del contenido a las redes sociales que necesiten.']}},
 ru: {more:'Подробнее',included:'Что входит в услугу',close:'Закрыть',items:{
  reels:['Профессиональная камера Sony.','Дополнительный свет.','Петличный микрофон.','Базовый монтаж и цветокоррекция.','Музыкальное оформление.','2 раунда правок.'],
  corporate:['Разработка концепции и сценария.','Консультация с SMM-специалистом.','Профессиональная камера, свет и петличные микрофоны.','Съёмка со стабилизатором.','Продвинутый монтаж и саунд-дизайн.','Расширенная цветокоррекция.','2 раунда правок.'],
  events:['Профессиональная видеосъёмка мероприятия.','Съёмка со стабилизатором.','Дополнительный свет при необходимости.','Запись звука при необходимости.','Монтаж итогового ролика.','Цветокоррекция и музыкальное оформление.'],
  content:['Разработка контент-плана.','Поддержка SMM-специалиста.','Организация регулярных съёмок.','Профессиональная камера, свет и звук.','Монтаж и цветокоррекция.','Адаптация контента под нужные социальные сети.']}},
 en: {more:'More details',included:'What’s included',close:'Close',items:{
  reels:['Professional Sony camera.','Additional lighting.','Lavalier microphone.','Basic editing and colour correction.','Music selection.','2 rounds of revisions.'],
  corporate:['Concept and script development.','Consultation with an SMM specialist.','Professional camera, lighting and lavalier microphones.','Filming with a stabiliser.','Advanced editing and sound design.','Advanced colour grading.','2 rounds of revisions.'],
  events:['Professional video coverage of the event.','Filming with a stabiliser.','Additional lighting if needed.','Sound recording if needed.','Editing of the final video.','Colour correction and music selection.'],
  content:['Content plan development.','Support from an SMM specialist.','Organisation of regular shoots.','Professional camera, lighting and sound.','Editing and colour correction.','Content adapted to the social networks you need.']}}
};

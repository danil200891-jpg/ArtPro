import type {Lang} from './services';
import {uaProcess} from './ukrainian';

export type ProcessCopy = {label:string; title:string; steps:{title:string; text:string}[]};

export const processSteps: Record<Lang, ProcessCopy> = {
 uk: uaProcess,
 es: {label:'Proceso',title:'Cómo trabajamos',steps:[
  {title:'Conversación',text:'Conocemos su proyecto y definimos las tareas, los objetivos y el resultado que desean.'},
  {title:'Idea y plan',text:'Desarrollamos el concepto, el guion y el plan de rodaje. Acordamos con ustedes los detalles clave.'},
  {title:'Rodaje',text:'Organizamos el rodaje, preparamos el equipo y hacemos realidad lo planificado.'},
  {title:'Edición y resultado',text:'Nos encargamos de la edición, la corrección de color y el sonido. Les entregamos el material final en los formatos acordados.'}]},
 ru: {label:'Процесс',title:'Как проходит работа',steps:[
  {title:'Обсуждение',text:'Знакомимся с вашим проектом, определяем задачи, цели и желаемый результат.'},
  {title:'Идея и план',text:'Разрабатываем концепцию, сценарий и план съёмки. Согласовываем ключевые детали.'},
  {title:'Съёмка',text:'Организуем съёмочный процесс, подготавливаем оборудование и реализуем задуманное.'},
  {title:'Монтаж и результат',text:'Выполняем монтаж, цветокоррекцию и работу со звуком. Передаём готовый материал в согласованных форматах.'}]},
 en: {label:'Process',title:'How we work',steps:[
  {title:'Discussion',text:'We get to know your project and define the tasks, goals and the result you want.'},
  {title:'Idea and plan',text:'We develop the concept, script and shooting plan, and agree on the key details with you.'},
  {title:'Filming',text:'We organise the shoot, prepare the equipment and bring the plan to life.'},
  {title:'Editing and delivery',text:'We handle editing, colour grading and sound, then deliver the finished material in the agreed formats.'}]}
};

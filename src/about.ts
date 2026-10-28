import {uaAbout} from './ukrainian';
import type { Lang } from './services';

type AboutContent = { title: string; paragraphs: string[]; approach: string; items: string[]; location: string };
export const aboutContent: Record<Lang, AboutContent> = {
 uk: uaAbout,
  ru: {
    title: 'ARTPRODUCTION —\nКРЕАТИВНАЯ КОМАНДА\nИЗ БАРСЕЛОНЫ',
    paragraphs: [
      'Мы — команда из Барселоны, специализирующаяся на профессиональной видеосъёмке, создании контента и продвижении бизнеса в социальных сетях.',
      'Мы помогаем брендам и компаниям выделяться среди конкурентов благодаря качественному визуальному контенту и продуманной стратегии продвижения.',
      'От идеи и съёмки до монтажа, оформления и ведения социальных сетей — мы объединяем творчество и маркетинг, чтобы создавать контент, который работает на ваш бизнес.'
    ],
    approach: 'Наш подход',
    items: ['Профессиональное видеопроизводство.', 'Креативный контент для брендов.', 'Ведение и развитие социальных сетей.', 'Индивидуальный подход к каждому проекту.'],
    location: 'Творчество и маркетинг · Барселона'
  },
  es: {
    title: 'ARTPRODUCTION —\nUN EQUIPO CREATIVO\nDE BARCELONA',
    paragraphs: [
      'Somos un equipo de Barcelona especializado en producción audiovisual profesional, creación de contenido y promoción de negocios en redes sociales.',
      'Ayudamos a marcas y empresas a diferenciarse de la competencia con contenido visual de calidad y una estrategia de comunicación bien definida.',
      'Desde la idea y el rodaje hasta la edición, el diseño y la gestión de redes sociales, unimos creatividad y marketing para crear contenido que impulse tu negocio.'
    ],
    approach: 'Nuestro enfoque',
    items: ['Producción audiovisual profesional.', 'Contenido creativo para marcas.', 'Gestión y desarrollo de redes sociales.', 'Un enfoque personalizado para cada proyecto.'],
    location: 'Creatividad y marketing · Barcelona'
  },
  en: {
    title: 'ARTPRODUCTION —\nA CREATIVE TEAM\nFROM BARCELONA',
    paragraphs: [
      'We are a Barcelona-based team specialising in professional video production, content creation and promoting businesses on social media.',
      'We help brands and companies stand out from the competition through high-quality visual content and a carefully considered marketing strategy.',
      'From concept and filming to editing, design and social media management, we bring creativity and marketing together to create content that works for your business.'
    ],
    approach: 'Our approach',
    items: ['Professional video production.', 'Creative content for brands.', 'Social media management and growth.', 'A tailored approach to every project.'],
    location: 'Creativity and marketing · Barcelona'
  }
};

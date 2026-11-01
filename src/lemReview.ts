import type {Lang} from './services';

// Shortened from the client's supplied review; translations preserve the author's voice.
export const lemReview: Record<Lang, {description:string; text:string}> = {
  ru: {
    description:'Дизайнерская мебель из массива дерева · Барселона',
    text:'У меня были идеи и образы для фильма о моём стуле, но превратить их в чёткое техническое задание я бы вряд ли смог. Вы почувствовали то, что я сам не мог до конца объяснить: настроение, характер и саму идею проекта. В результате получилось именно то, чего мне хотелось.\n\nЯ привык многое делать своими руками, но у каждого ремесла есть глубина, которую не заменят ни оборудование, ни собственный вкус. Спасибо за то, что вы помогли мне увидеть мою идею с другой стороны и нашли для неё точный визуальный язык. Теперь я знаю: хорошего видеографа стоит приглашать, когда хочешь получить результат, до которого самостоятельно, возможно, даже не догадался бы добраться.'
  },
  es: {
    description:'Muebles de diseño en madera maciza · Barcelona',
    text:'Tenía ideas e imágenes en mente para un vídeo sobre mi silla, pero difícilmente habría sabido convertirlas en un briefing claro. Supieron captar lo que yo mismo no lograba explicar del todo: la atmósfera, el carácter y la esencia del proyecto. El resultado fue exactamente lo que buscaba.\n\nEstoy acostumbrado a hacer muchas cosas con mis propias manos, pero cada oficio tiene una profundidad que ni el equipo ni el gusto personal pueden sustituir. Gracias por ayudarme a ver mi idea desde otra perspectiva y encontrar el lenguaje visual adecuado para expresarla. Ahora sé que merece la pena contar con un buen videógrafo cuando buscas un resultado que quizá ni siquiera habrías imaginado alcanzar por tu cuenta.'
  },
  uk: {
    description:'Дизайнерські меблі з масиву дерева · Барселона',
    text:'У мене були ідеї та образи для фільму про мій стілець, але перетворити їх на чітке технічне завдання я навряд чи зміг би. Ви відчули те, чого я сам не міг до кінця пояснити: настрій, характер і саму ідею проєкту. У результаті вийшло саме те, чого мені хотілося.\n\nЯ звик багато робити власноруч, але кожне ремесло має глибину, якої не замінять ані обладнання, ані власний смак. Дякую за те, що ви допомогли мені побачити мою ідею з іншого боку та знайшли для неї точну візуальну мову. Тепер я знаю: хорошого відеографа варто запрошувати, коли хочеш отримати результат, до якого самостійно, можливо, навіть не здогадався б дійти.'
  },
  en: {
    description:'Designer solid wood furniture · Barcelona',
    text:'I had ideas and images in mind for a film about my chair, but I doubt I could have turned them into a clear brief. You understood what I could not fully explain myself: the mood, the character and the very essence of the project. The result was exactly what I had hoped for.\n\nI am used to making many things with my own hands, but every craft has a depth that neither equipment nor personal taste can replace. Thank you for helping me see my idea from a different perspective and finding the right visual language for it. Now I know that a good videographer is worth bringing in when you want a result you might never have thought to reach on your own.'
  }
};

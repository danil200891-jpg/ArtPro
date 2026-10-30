import {uaAbout} from './ukrainian';
import type { Lang } from './services';

type AboutContent = { title: string; paragraphs: string[]; approach: string; items: string[]; location: string; reviewsTitle: string; reviewsIntro: string; reviews: string[]; reviewLabel: string };
export const aboutContent: Record<Lang, AboutContent> = {
 uk: uaAbout,
  ru: {
    title: "МЫ БЕРЁМ НА СЕБЯ ВАШ КОНТЕНТ,\nЧТОБЫ ВЫ МОГЛИ ЗАНИМАТЬСЯ БИЗНЕСОМ",
    paragraphs: [
        "У вас есть продукт, идеи и желание развиваться. Но не всегда есть время и понимание, как правильно показать всё это потенциальным клиентам.",
        "ArtProduction превращает ваши идеи в качественный визуальный контент, который помогает привлекать внимание к бизнесу, вызывать доверие и заинтересовывать новых клиентов.",
        "Мы организуем весь процесс: от идеи и съёмки до готовых видео, рекламных креативов и контента для социальных сетей. Вам не нужно контролировать каждый шаг или разбираться в технических деталях."
    ],
    approach: "Почему нам доверяют?",
    items: [
        "Профессиональное качество съёмки.",
        "Самостоятельность и гибкость в работе.",
        "Креативные идеи и внимание к деталям.",
        "Комфортная атмосфера на съёмке."
    ],
    location: "Вы занимаетесь своим бизнесом. Мы заботимся о том, чтобы его увидели.",
    reviewsTitle: "Что говорят о нас клиенты",
    reviewsIntro: "Отзывы раскрываются по нажатию.",
    reviewLabel: "Отзыв клиента",
    reviews: [
        "Мне нравится, что не нужно контролировать каждый шаг, то есть я даю полностью как бы вам креатив, а вы дальше придумываете.",
        "В ресторанном бизнесе важно не только создавать качественный продукт, но и правильно представлять его гостям.\n\nУ меня как у ресторатора есть идея, которую команда кухни превращает в готовое блюдо. А ArtProduction помогает превратить эту идею в визуальную историю, доступную нашим гостям.\n\nБлагодаря профессиональной съёмке мы можем показать то, что обычно остаётся за кадром: процесс приготовления, внимание к деталям, атмосферу и конечный результат.\n\nЭто позволяет потенциальным гостям увидеть ценность нашего продукта ещё до посещения ресторана.\n\nДля нас ArtProduction — команда, которая умеет превращать идеи в качественный визуальный контент.",
        "Вы помогаете мне за меня принимать решение, как будет выглядеть картинка, так как у вас экспертизы и насмотренности больше."
    ]
},
  es: {
    title: "NOS ENCARGAMOS DE TU CONTENIDO\nPARA QUE TÚ TE CENTRES EN TU NEGOCIO",
    paragraphs: [
        "Tienes un producto, ideas y ganas de crecer. Pero no siempre tienes tiempo ni sabes cómo mostrarlo a tus posibles clientes.",
        "En ArtProduction transformamos tus ideas en contenido visual de calidad que ayuda a dar visibilidad a tu negocio, generar confianza y despertar interés.",
        "Nos ocupamos del proceso: desde la idea y la organización del rodaje hasta los vídeos, las creatividades publicitarias y el contenido para redes sociales. Sin que tengas que supervisar cada paso."
    ],
    approach: "¿Por qué confían en nosotros?",
    items: [
        "Calidad audiovisual profesional.",
        "Autonomía y flexibilidad.",
        "Ideas creativas y atención al detalle.",
        "Un ambiente cómodo durante el rodaje."
    ],
    location: "Tú te ocupas de tu negocio. Nosotros ayudamos a que lo vean.",
    reviewsTitle: "Lo que dicen nuestros clientes",
    reviewsIntro: "Pulsa para leer las opiniones.",
    reviewLabel: "Opinión de un cliente",
    reviews: [
        "Me gusta no tener que supervisar cada paso. Os dejo la parte creativa y vosotros os encargáis de desarrollar las ideas.",
        "En la restauración, no solo es importante crear un producto de calidad, sino también saber presentarlo a los comensales.\n\nComo restaurador, tengo una idea que el equipo de cocina transforma en un plato terminado. Y ArtProduction nos ayuda a convertir esa idea en una historia visual que podemos compartir con nuestros comensales.\n\nGracias a una grabación profesional, podemos mostrar lo que normalmente queda entre bastidores: el proceso de elaboración, la atención al detalle, el ambiente y el resultado final.\n\nEsto permite que nuestros futuros comensales aprecien el valor de nuestro producto incluso antes de visitar el restaurante.\n\nPara nosotros, ArtProduction es un equipo que sabe transformar ideas en contenido visual de calidad.",
        "Me ayudáis a decidir cómo debe verse todo, porque tenéis más experiencia y criterio visual."
    ]
},
  en: {
    title: "WE TAKE CARE OF YOUR CONTENT\nSO YOU CAN FOCUS ON YOUR BUSINESS",
    paragraphs: [
        "You have a product, ideas and ambitions to grow. But you may not have the time or expertise to show them to potential customers.",
        "ArtProduction turns your ideas into high-quality visual content that helps your business get noticed, build trust and attract interest.",
        "We manage the process from ideas and production to finished videos, ad creatives and social media content, without you having to oversee every step."
    ],
    approach: "Why clients trust us",
    items: [
        "Professional production quality.",
        "Independence and flexibility.",
        "Creative ideas and attention to detail.",
        "A relaxed filming experience."
    ],
    location: "You focus on your business. We help people see it.",
    reviewsTitle: "What our clients say",
    reviewsIntro: "Expand to read their feedback.",
    reviewLabel: "Client feedback",
    reviews: [
        "I like not having to manage every step. I hand over the creative side and you come up with the ideas.",
        "In the restaurant business, it is important not only to create a quality product, but also to present it properly to guests.\n\nAs a restaurateur, I have an idea that the kitchen team turns into a finished dish. ArtProduction helps turn that idea into a visual story we can share with our guests.\n\nProfessional filming allows us to show what usually stays behind the scenes: the preparation process, the attention to detail, the atmosphere and the final result.\n\nThis allows potential guests to see the value of our product even before visiting the restaurant.\n\nFor us, ArtProduction is a team that knows how to turn ideas into quality visual content.",
        "You help me decide how the visuals should look because you have more experience and a better eye for it."
    ]
}
};

export const rodynaDescription: Record<Lang, string> = {
 ru: 'Украинский ресторан · Барселона',
 es: 'Restaurante ucraniano · Barcelona',
 uk: 'Український ресторан · Барселона',
 en: 'Ukrainian restaurant · Barcelona'
};

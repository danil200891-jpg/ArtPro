import {uaAbout} from './ukrainian';
import type { Lang } from './services';

type AboutContent = { title: string; paragraphs: string[]; approach: string; items: string[]; location: string; reviewsTitle: string; reviews: string[]; reviewLabel: string };
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
    location: "Мы превращаем ваши идеи в визуальные истории, которые раскрывают ценность вашего бизнеса и привлекают внимание потенциальных клиентов.",
    reviewsTitle: "Что говорят наши клиенты",
    reviewLabel: "Отзыв клиента",
    reviews: [
        "Для меня одно из главных преимуществ работы с ArtProduction — это возможность доверить команде идею и не контролировать каждый шаг.\n\nЯ могу обозначить задачу и передать творческую часть ребятам, зная, что они самостоятельно продумают, как лучше всё реализовать.\n\nОтдельно ценю высокий уровень съёмки, гибкость и подход к организации работы. Даже когда возникают непредвиденные ситуации, команда не перекладывает проблемы на клиента, а самостоятельно ищет решения.\n\nВ результате мы получаем качественный контент без необходимости постоянно вмешиваться в процесс.\n\nИменно за эту самостоятельность, профессионализм и творческий подход я ценю наше сотрудничество.",
        "В ресторанном бизнесе важно не только создавать качественный продукт, но и правильно представлять его гостям.\n\nУ меня как у ресторатора есть идея, которую команда кухни превращает в готовое блюдо. А ArtProduction помогает превратить эту идею в визуальную историю, доступную нашим гостям.\n\nБлагодаря профессиональной съёмке мы можем показать то, что обычно остаётся за кадром: процесс приготовления, внимание к деталям, атмосферу и конечный результат.\n\nЭто позволяет потенциальным гостям увидеть ценность нашего продукта ещё до посещения ресторана.\n\nДля нас ArtProduction — команда, которая умеет превращать идеи в качественный визуальный контент.",
        "Для развития бренда важно, чтобы потенциальные покупатели могли увидеть продукт, оценить его качество и заинтересоваться им ещё до покупки.\n\nНо когда занимаешься бизнесом, большая часть времени уходит на другие задачи. На создание контента, поиск идей и изучение актуальных форматов его часто просто не остаётся.\n\nС ArtProduction нам не нужно самостоятельно продумывать каждую съёмку. Команда предлагает визуальные решения, подбирает ракурсы и помогает представить наши изделия с лучшей стороны.\n\nОсобенно ценно, что мы можем доверить им творческую часть и организацию процесса. Это экономит наше время и позволяет сосредоточиться на основных задачах бизнеса."
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
    location: "Transformamos tus ideas en historias visuales que transmiten el valor de tu negocio y captan la atención de posibles clientes.",
    reviewsTitle: "Lo que dicen nuestros clientes",
    reviewLabel: "Opinión de un cliente",
    reviews: [
        "Para mí, una de las principales ventajas de trabajar con ArtProduction es poder confiar una idea al equipo sin tener que supervisar cada paso.\n\nPuedo plantear un objetivo y dejar la parte creativa en sus manos, sabiendo que encontrarán por su cuenta la mejor manera de llevarlo a cabo.\n\nValoro especialmente la gran calidad de las grabaciones, su flexibilidad y su forma de organizar el trabajo. Incluso cuando surgen imprevistos, el equipo no traslada los problemas al cliente, sino que busca soluciones de forma autónoma.\n\nEl resultado es un contenido de calidad, sin necesidad de intervenir constantemente en el proceso.\n\nSon precisamente esa autonomía, profesionalidad y creatividad las que hacen que valore nuestra colaboración.",
        "En la restauración, no solo es importante crear un producto de calidad, sino también saber presentarlo a los comensales.\n\nComo restaurador, tengo una idea que el equipo de cocina transforma en un plato terminado. Y ArtProduction nos ayuda a convertir esa idea en una historia visual que podemos compartir con nuestros comensales.\n\nGracias a una grabación profesional, podemos mostrar lo que normalmente queda entre bastidores: el proceso de elaboración, la atención al detalle, el ambiente y el resultado final.\n\nEsto permite que nuestros futuros comensales aprecien el valor de nuestro producto incluso antes de visitar el restaurante.\n\nPara nosotros, ArtProduction es un equipo que sabe transformar ideas en contenido visual de calidad.",
        "Para que una marca crezca, es importante que los posibles compradores puedan ver el producto, apreciar su calidad e interesarse por él incluso antes de comprarlo.\n\nPero cuando llevas un negocio, gran parte del tiempo se dedica a otras tareas. A menudo, apenas queda tiempo para crear contenido, buscar ideas y conocer los formatos actuales.\n\nCon ArtProduction no tenemos que planificar cada sesión por nuestra cuenta. El equipo propone soluciones visuales, elige los ángulos y nos ayuda a mostrar nuestras creaciones de la mejor manera.\n\nValoramos especialmente poder confiarles la parte creativa y la organización del proceso. Esto nos ahorra tiempo y nos permite centrarnos en las tareas principales del negocio."
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
    location: "We turn your ideas into visual stories that reveal the value of your business and attract the attention of potential customers.",
    reviewsTitle: "What our clients say",
    reviewLabel: "Client feedback",
    reviews: [
        "For me, one of the main advantages of working with ArtProduction is being able to trust the team with an idea without having to oversee every step.\n\nI can outline the task and hand over the creative side, knowing they will work out the best way to bring it to life on their own.\n\nI particularly value the high quality of their filming, their flexibility and the way they organise the work. Even when unexpected situations arise, the team does not pass the problems on to the client, but finds solutions independently.\n\nAs a result, we get quality content without having to constantly intervene in the process.\n\nIt is this independence, professionalism and creativity that makes me value our collaboration.",
        "In the restaurant business, it is important not only to create a quality product, but also to present it properly to guests.\n\nAs a restaurateur, I have an idea that the kitchen team turns into a finished dish. ArtProduction helps turn that idea into a visual story we can share with our guests.\n\nProfessional filming allows us to show what usually stays behind the scenes: the preparation process, the attention to detail, the atmosphere and the final result.\n\nThis allows potential guests to see the value of our product even before visiting the restaurant.\n\nFor us, ArtProduction is a team that knows how to turn ideas into quality visual content.",
        "For a brand to grow, potential customers need to be able to see the product, appreciate its quality and become interested in it before making a purchase.\n\nBut when you run a business, most of your time goes into other tasks. There is often simply no time left to create content, explore ideas or keep up with current formats.\n\nWith ArtProduction, we do not have to plan every shoot ourselves. The team proposes visual ideas, selects camera angles and helps present our products at their best.\n\nWe particularly value being able to trust them with the creative work and the organisation of the process. It saves us time and allows us to focus on the core tasks of our business."
    ]
}
};

export const rodynaDescription: Record<Lang, string> = {
 ru: 'Украинский ресторан · Барселона',
 es: 'Restaurante ucraniano · Barcelona',
 uk: 'Український ресторан · Барселона',
 en: 'Ukrainian restaurant · Barcelona'
};

export const coriumAttribution: Record<Lang, {description:string; website:string}> = {
 ru: {description:'Бренд кожаных сумок и аксессуаров · Барселона', website:'Официальный сайт'},
 es: {description:'Marca de bolsos y accesorios de piel · Barcelona', website:'Sitio web oficial'},
 uk: {description:'Бренд шкіряних сумок та аксесуарів · Барселона', website:'Офіційний сайт'},
 en: {description:'Leather bags and accessories brand · Barcelona', website:'Official website'}
};

export class Product {
  name: string = ''
  description: string = ''
  router: string = ''
  icon: string = ''

  static getProducts(): Product[] {
    return [
      {
        name: 'BÚSQUEDA DE ACTAS',
        description:
          '<p>Solicitamos y enviamos actas Italianas y Argentinas a todo el mundo, para que puedas contar con toda la documentación necesaria.</p>',
        router: '/services/proceedings',
        icon: 'assets/images/icons/pasaporto-green.png',
      },
      {
        name: 'ARMADO DE CARPETA',
        description:
          '<p>Nos encargamos de reunir toda la documentación necesaria, desde tu avo hasta vos, asegurando que cumpla con los requisitos del comune/consulado. Evitando errores y pérdidas de tiempo durante tu proceso de reconocimiento para la ciudadanía italiana.</p>',
        router: '/services/file',
        icon: 'assets/images/icons/backpack-green.png',
      },
      {
        name: 'ACOMPAÑAMIENTO EN ITALIA',
        description:
          '<p>Brindamos diferentes tipos de acompañamientos, en Torino para que puedas realizar tu reconocimiento, sin sobresaltos y sintiéndote cómodo y acompañado al momento de emigrar.</p>',
        router: '/services/accompaniment',
        icon: 'assets/images/icons/torino-green2.png',
      },
      {
        name: 'ARMÁ TU CARPETA VOS MISMO, NOSOTROS TE GUIAMOS',
        description:
          '<p>Si decidís armar vos mismo tu expediente familiar, pero preferís contar con una guía y acompañamiento que te explique el paso a paso, podemos ayudarte.</p>',
        router: '/services/guide',
        icon: 'assets/images/icons/shoes-green.png',
      },
      {
        name: 'ASESORÍA PERSONALIZADA',
        description:
          '<p>Servicio de orientación para que puedas evacuar todas las dudas que tengas respecto del trámite en general, de tu caso en particular, o de la solicitud y estilo de vida acá en Italia.</p>',
        router: '/services/advisory',
        icon: 'assets/images/icons/pizza-geen.png',
      },
      {
        name: 'SERVICIO DE APOSTILLAS',
        description:
          '<p>¿Necesitas apostillar documentos argentinos, para darle validez internacional a tus documentos?</p><p> Nosotros nos encargamos de apostillar en 10 días hábiles, 72hs y 48hs.</p>',
        router: '/services/apostille',
        icon: 'assets/images/icons/bicycle-green.png',
      },
      {
        name: 'ACTUALIZACIÓN DE EXPEDIENTE',
        description:
          '<p>¿Contas con la carpeta armada pero los documentos ya tienen varios años y queres actualizarlos para la presentación? Lo hacemos por vos, dejando todo listo y en perfectas condiciones para que puedas avanzar con tu trámite.</p>',
        router: '/services/proceedings',
        icon: 'assets/images/icons/brioche-green.png',
      },
      {
        name: 'CONTROL DE CARPETA',
        description:
          '<p>Controlamos rigurosamente tu documentación, para que cumpla con los requisitos solicitados por el consulado o comuna italiana y te orientamos sobre los pasos a seguir en caso de posibles errores.</p>',
        router: '/services/control',
        icon: 'assets/images/icons/motorcycle-green.png',
      },
    ]
  }
}

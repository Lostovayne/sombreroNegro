export interface DesignerInterface {
  sectionTitle: string;
  sectionSubTitle: string;
  image: string;
  imageAlt: string;
  designTeams: {
    [key: string]: {
      designers: {
        image: string;
        imageAlt: string;
        fullName: string;
        description: string;
      }[];
      teamDescription: string;
    };
  };
}

export const designerData: DesignerInterface = {
  sectionTitle: "Diseñadores del estudio",
  sectionSubTitle: "titulo principal portadas",
  image:
    "https://cdn.artandobject.com/sites/default/files/styles/gallery_item/public/davincivitruvelucviatour-edited.jpg?itok=4Eu82Kyn",
  imageAlt: "imagen de un dibujo de Davinci Vitruvius",
  designTeams: {
    teamOne: {
      designers: [
        {
          image: "/src/images/common/Image-not-found.webp",
          imageAlt: "alt imagen",
          fullName: "Davinci Vitruvius",
          description: "Lorem ipsum dolor sit amet.",
        },
        {
          image: "/src/images/common/Image-not-found.webp",
          imageAlt: "alt de imagen",
          fullName: "Leonardo Fibonacci",
          description: "Lorem ipsum dolor sit amet.",
        },
      ],
      teamDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    teamTwo: {
      designers: [
        {
          image: "/src/images/common/Image-not-found.webp",
          imageAlt: "alt de imagen",
          fullName: "Michelangelo Buonarroti",
          description: "Lorem ipsum dolor sit amet.",
        },
        {
          image: "/src/images/common/Image-not-found.webp",
          imageAlt: "alt de imagen",
          fullName: "Raphael Sanzio",
          description: "Lorem ipsum dolor sit amet.",
        },
      ],
      teamDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
};

export const contactPageData = {
  sectionTitle: "Contactos",
  imageSection: {
    image1: "/src/images/common/Image-not-found.webp",
    imageAlt1: "alt de imagen",
    image2: "/src/images/common/Image-not-found.webp",
    imageAlt2: "alt de imagen",
    image3: "/src/images/common/Image-not-found.webp",
    imageAlt3: "alt de imagen",
    description1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente consectetur",
  },
  infoSection: {
    title1: "Texto titulo",
    description: "pequena descripcion",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam consectetur placeat delectus, illo odio quaerat sequi? Quaerat dolor fugiat cum, officia earum, ex, asperiores neque quas a error sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam consectetur placeat delectus, illo odio quaerat sequi? Quaerat dolor fugiat cum, officia earum, ex, asperiores neque quas a error sint.",
    title2: "Sombrero Negro",
    contact1: "+56 9 5555 6666",
    contact2: "+56 9 5555 7777",
    email1: "sombreronegro.contacto@gmail.com",
    email2: "segundocorreo@gmail.com",
  },
};

export interface ServiceCardInterface {
  bgColor: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  biggerCard?: boolean;
}
export interface ServiceDataInterface {
  sectionTitle: string;
  cards: {
    [key: string]: ServiceCardInterface;
  };
}
export const servicePageData: ServiceDataInterface = {
  sectionTitle: "Servicios",
  cards: {
    card1: {
      bgColor: "bg-gray-200",
      image: "/images/services/servicio1.png",
      imageAlt: "alt de imagen",
      buttonText: "isologotipo",
      biggerCard: true,
    },
    card2: {
      bgColor: "bg-gray-400",
      image: "/images/services/servicio2.png",
      imageAlt: "alt de imagen",
      buttonText: "papeleria",
    },
    card3: {
      bgColor: "bg-gray-400",
      image: "/images/services/servicio3.png",
      imageAlt: "alt de imagen",
      buttonText: "folletos",
    },
    card4: {
      bgColor: "bg-gray-200",
      image: "/images/services/servicio4.png",
      imageAlt: "alt de imagen",
      buttonText: "catalogos",
      biggerCard: true,
    },
    card5: {
      bgColor: "bg-gray-200",
      image: "/images/services/servicio5.png",
      imageAlt: "alt de imagen",
      buttonText: "editorial",
      biggerCard: true,
    },
    card6: {
      bgColor: "bg-gray-400",
      image: "/images/services/servicio6.png",
      imageAlt: "alt de imagen",
      buttonText: "packaging",
    },
    card7: {
      bgColor: "bg-gray-400",
      image: "/images/services/servicio7.png",
      imageAlt: "alt de imagen",
      buttonText: "publicitario",
    },
    card8: {
      bgColor: "bg-gray-200",
      image: "/images/services/servicio8.png",
      imageAlt: "alt de imagen",
      buttonText: "redes sociales",
      biggerCard: true,
    },
  },
};

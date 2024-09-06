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
          image: "https://via.placeholder.com/320x256",
          imageAlt: "alt imagen",
          fullName: "Davinci Vitruvius",
          description: "Lorem ipsum dolor sit amet.",
        },
        {
          image: "https://via.placeholder.com/320x256",
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
          image: "https://via.placeholder.com/320x256",
          imageAlt: "alt de imagen",
          fullName: "Michelangelo Buonarroti",
          description: "Lorem ipsum dolor sit amet.",
        },
        {
          image: "https://via.placeholder.com/320x256",
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
    image1: "https://via.placeholder.com/500x300",
    imageAlt1: "alt de imagen",
    image2: "https://via.placeholder.com/500x300",
    imageAlt2: "alt de imagen",
    image3: "https://via.placeholder.com/500x300",
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

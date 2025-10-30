import { placeholderImages } from './placeholder-images';

export type Ebook = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  content: string;
};

export const ebooks: Ebook[] = [
  {
    id: 'recetas-dulces',
    title: '100 Recetas Dulces sin azúcar y sin gluten',
    description: 'Deliciosas receitas para uma vida mais doce e saudável.',
    imageId: 'recetas-dulces-cover',
    content: `<iframe src="https://drive.google.com/file/d/1Fd6fgXtNsjHBY2jKhIxtNsTsEjKZcrRv/preview" width="100%" height="600" allow="autoplay"></iframe>`,
  },
  {
    id: 'coberturas-y-salsas',
    title: 'Coberturas y Salsas Cremosas sin Lácteos',
    description: 'Incremente suas sobremesas com estas opções veganas.',
    imageId: 'helados-y-paletas-cover',
    content: `<iframe src="https://drive.google.com/file/d/1pxuvHC1FwzPy9Tm0dhDcdNyj6HylkULR/preview" width="640" height="480" allow="autoplay"></iframe>`,
  },
  {
    id: 'postres-rapidos',
    title: '(15 min) Postres Rápidos y Saludables',
    description: 'Sobremesas deliciosas que ficam prontas em um piscar de olhos.',
    imageId: 'postres-rapidos-cover',
    content: `<iframe src="https://drive.google.com/file/d/1I4NXAqVfv8T8WoFQyt6tzUQiRINpkb5o/preview" width="640" height="480" allow="autoplay"></iframe>`,
  },
  {
    id: 'helados-y-paletas',
    title: 'Recetas de Helados y Paletas Refrescantes',
    description: 'Refresque seus dias com sorvetes e picolés caseiros.',
    imageId: 'coberturas-y-salsas-cover',
    content: `<iframe src="https://drive.google.com/file/d/1fmHyV3U2YRbzPWJDV9wsB9hifpiX_U1p/preview" width="100%" height="600" allow="autoplay"></iframe>`,
  },
];

export const getEbookById = (id: string) => {
  const ebook = ebooks.find((doc) => doc.id === id);
  if (!ebook) {
    return null;
  }
  const image = placeholderImages.find((img) => img.id === ebook.imageId);
  return {
    ...ebook,
    imageUrl: image?.imageUrl,
    imageHint: image?.imageHint,
  };
};

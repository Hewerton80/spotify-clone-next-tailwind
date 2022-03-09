import { GenreNameEnum } from '../types/Album'

export interface IGenre {
  id: GenreNameEnum
  backgroudColor: string
  title: GenreNameEnum
  imgUrl: string
}

export const genres: IGenre[] = [
  {
    id: GenreNameEnum.Sertanejo,
    backgroudColor: '#c39687',
    title: GenreNameEnum.Sertanejo,
    imgUrl: 'sertanejo.jpeg',
  },
  {
    id: GenreNameEnum.PopLatino,
    backgroudColor: '#e1118b',
    title: GenreNameEnum.PopLatino,
    imgUrl: 'latina.jpg',
  },
  {
    id: GenreNameEnum.Pop,
    backgroudColor: '#8d67ab',
    title: GenreNameEnum.Pop,
    imgUrl: 'pop.jpg',
  },
  {
    id: GenreNameEnum.Funk,
    backgroudColor: '#2d46b9',
    title: GenreNameEnum.Funk,
    imgUrl: 'funk.jpeg',
  },
  {
    id: GenreNameEnum['Hip-Hop/Rap'],
    backgroudColor: '#ba5d07',
    title: GenreNameEnum['Hip-Hop/Rap'],
    imgUrl: 'hip-hop.jpg',
  },
  {
    id: GenreNameEnum['K-Pop'],
    backgroudColor: '#148a08',
    title: GenreNameEnum['K-Pop'],
    imgUrl: 'k-pop.jpg',
  },
  {
    id: GenreNameEnum.Reggae,
    backgroudColor: '#006450',
    title: GenreNameEnum.Reggae,
    imgUrl: 'reggae.jpeg',
  },
]

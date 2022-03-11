export enum GenreNameEnum {
  PopLatino = 'Pop Latino',
  Sertanejo = 'Sertanejo',
  Pop = 'Pop',
  Funk = 'Funk',
  'Hip-Hop/Rap' = 'Hip-Hop/Rap',
  'K-Pop' = 'K-Pop',
  Reggae = 'Reggae',
}
export enum GenreSlugEnum {
  'Pop Latino' = 'pop-latino',
  Sertanejo = 'sertanejo',
  Pop = 'pop',
  Funk = 'funk',
  'Hip-Hop/Rap' = 'hip-hop',
  'K-Pop' = 'k-pop',
  Reggae = 'reggae',
}

export interface IAlbum {
  artistId?: number
  amgArtistId?: string
  artistName?: string
  collectionName?: string
  collectionId?: string
  artistViewUrl?: string
  collectionViewUrl?: string
  artworkUrl60?: string
  artworkUrl100?: string
  trackCount?: number
  copyright?: string
  country?: string
  currency?: string
  releaseDate?: string
  primaryGenreName?: GenreNameEnum
}

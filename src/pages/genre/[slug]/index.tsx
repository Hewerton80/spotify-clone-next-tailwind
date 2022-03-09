import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../services/nextApi'
import { GenreSlugEnum, IAlbum } from '../../../types/Album'

function Genre() {
  const router = useRouter()

  const [albums, setAlbums] = useState<IAlbum[]>([])

  const getAlbumsByGenre = useCallback(async (slug: string) => {
    try {
      const response = await api.get<IAlbum[]>('/genre', {
        params: { slug },
      })
      setAlbums(response.data)
    } catch (error) {
      console.error('error: ', error)
    }
  }, [])

  useEffect(() => {
    if (!router.query?.slug) return
    const slugKey = Object.keys(GenreSlugEnum).find(
      (key) => GenreSlugEnum[key as keyof typeof GenreSlugEnum] === router.query?.slug
    )
    getAlbumsByGenre(String(slugKey))
  }, [router, getAlbumsByGenre])

  useEffect(() => {
    console.log(albums)
  }, [albums])

  return (
    <div className="flex flex-col h-full w-full mt-4 py-4">
      <h2 className="text-2xl text-white font-bold">Álbuns</h2>
      <div className="grid grid-cols-12 gap-6 h-full w-full mt-4">
        {albums.map((album, i) => (
          <div
            key={'album' + i}
            className={classNames(
              'flex flex-col',
              'bg-woodSmoke hover:bg-woodSmoke-hover duration-300 cursor-pointer',
              'w-full',
              'p-4 ',
              'aspect-[197/275] rounded-md',
              'col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2'
            )}
          >
            <div className="mb-4 aspect-square w-full shadow-lg h-fit rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="aspect-square w-full object-cover rounded-full "
                src={album.artworkUrl100}
                alt="https://github.com/hewerton80.png"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <h4
              className="text-white font-bold text-sm mb-1 line-clamp-1"
              title={album.artistName}
            >
              {album.artistName}
            </h4>
            <p
              className="text-lightGray text-sm line-clamp-1"
              title={album.collectionName}
            >
              {album.collectionName}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Genre

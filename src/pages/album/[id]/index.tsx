import { Duration } from 'luxon'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ButtonPlay from '../../../components/ui/buttons/ButtonPlay'
import TracksTable from '../../../components/ui/datadisplay/TracksTable'
import { BackGroundContext } from '../../../contexts/BackGroundContext'
import { PlayerContext } from '../../../contexts/PlayerContext'
import { api } from '../../../services/nextApi'
import { IAlbum } from '../../../types/Album'
import { ITrack } from '../../../types/Track'
// import Vibrant from 'node-vibrant'

function Album() {
  const { isPlaying, currentTrackIndex, trackList, playList } = useContext(PlayerContext)
  const { handleSetBackGroundStyle, handleSetHeaderStyle } = useContext(BackGroundContext)
  const router = useRouter()

  const [album, setAlbum] = useState<IAlbum | undefined>(undefined)
  const [tracks, setTracks] = useState<ITrack[] | undefined>(undefined)

  const getAlbumsById = useCallback(async (id: string) => {
    try {
      const response = await api.get('/album', { params: { id } })
      setAlbum(response.data.albumsResult)
      setTracks(response.data?.tracksResult)
    } catch (error) {
      console.error('error: ', error)
    }
  }, [])

  useEffect(() => {
    if (router.query?.id) {
      getAlbumsById(String(router.query?.id))
    }
  }, [router, getAlbumsById])

  useEffect(() => {
    handleSetHeaderStyle({
      background: 'transparent',
    })
    return () => {
      handleSetHeaderStyle(undefined)
    }
  }, [handleSetHeaderStyle])

  useEffect(() => {
    // let colors = '' )
    // ;(async () => {
    //   if (album?.artworkUrl100) {
    //     const palette = await Vibrant.from(album.artworkUrl100).getPalette()
    //     console.log(palette)
    //   }
    // })()
    handleSetBackGroundStyle({
      background:
        'linear-gradient(180deg, rgba(34,193,195,.7) 0%, rgba(253,187,45,0) 100%)',
    })

    return () => {
      handleSetBackGroundStyle(undefined)
    }
  }, [handleSetBackGroundStyle, album])

  const totalTrackTime = useMemo(() => {
    if (tracks) {
      const totalTime = tracks
        .map((t) => t.trackTimeMillis)
        .reduce((total, trackTimeMillis) => {
          return Number(total) + Number(trackTimeMillis)
        })
      const duration = Duration.fromMillis(Number(totalTime))
      return `${duration.toFormat('h')}h ${duration.toFormat('mm')}min`
    }
  }, [tracks])

  return (
    <>
      <div className="flex flex-col h-full w-full pb-4">
        <div className="flex py-8 min-h-[296px]">
          <div className="w-full max-w-[232px] shadow-lg mr-6 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              className="aspect-square w-full object-cover"
              src={
                album?.artworkUrl100 ||
                'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/bc/32/e0/bc32e05c-e17c-b40c-da40-27c03ec94df5/AppIcon-1x_U007emarketing-0-6-0-0-85-220.png/1200x630wa.png'
              }
              alt={album?.artistName}
              width={232}
              height={232}
              layout="fill"
            />
          </div>
          <div className="flex flex-col text-white justify-end">
            <h2 className="font-bold text-xs"> ÁLBUM </h2>
            <span className="font-bold text-5xl">{album?.collectionName}</span>
            <div className="flex items-center mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                className="w-6 h-6 rounded-full mr-1"
                src={
                  album?.artworkUrl60 ||
                  'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/bc/32/e0/bc32e05c-e17c-b40c-da40-27c03ec94df5/AppIcon-1x_U007emarketing-0-6-0-0-85-220.png/1200x630wa.png'
                }
                alt={album?.artistName}
                width={24}
                height={24}
              />
              <div className="text-sm space-x-1">
                <span className="font-bold">{album?.artistName}</span>
                <span>
                  {String(new Date(String(album?.releaseDate || '')).getFullYear())}
                </span>
                <span>•</span>
                <span>{totalTrackTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-6">
          {/* {console.log(album?.artistId, tracks?.[currentTrackIndex]?.artistId)} */}
          <ButtonPlay
            onClick={() => playList(tracks || [], 0)}
            isPlaying={
              isPlaying &&
              (album?.collectionId === trackList?.[currentTrackIndex]?.collectionId ||
                album?.artistId === trackList?.[currentTrackIndex]?.artistId)
            }
          />
        </div>
        <TracksTable tracks={tracks || []} />
      </div>
    </>
  )
}

export default Album

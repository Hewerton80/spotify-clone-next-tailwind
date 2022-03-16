import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useMemo,
} from 'react'
import { ITrack } from '../types/Track'

// type Track = {
//     title: string,
//     members: string,
//     thumbnail: string,
//     duration: number,
//     url: string;
// }

type PlayerContextData = {
  trackList: Array<ITrack>
  currentTrackIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  play: (track: ITrack) => void
  playList: (list: ITrack[], index: number) => void
  setPlayingState: (state: boolean) => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  playNext: () => void
  playPrevious: () => void
  clearPlayerState: () => void
  trackIsPlaying: (trackId: number) => boolean
  hasNext: boolean
  hasPrevious: boolean
  trackListIsEmpty: boolean
}

type PlayerContextProviderProps = {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({ children }: PlayerContextProviderProps) {
  const [trackList, setTrackList] = useState<ITrack[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(true)
  const [isShuffling, setIsShuffling] = useState(false)

  const play = useCallback((track: ITrack) => {
    setTrackList([track])
    setCurrentTrackIndex(0)
    setIsPlaying(true)
  }, [])

  const playList = useCallback((tracks: ITrack[], index: number) => {
    setTrackList(tracks)
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying((currentIsPlayng) => !currentIsPlayng)
  }, [])

  const toggleLoop = useCallback(() => {
    setIsLooping((currentIsLooping) => !currentIsLooping)
  }, [])

  const toggleShuffle = useCallback(() => {
    setIsShuffling((currentIsShuffle) => !currentIsShuffle)
  }, [])

  const clearPlayerState = useCallback(() => {
    setTrackList([])
    setCurrentTrackIndex(0)
  }, [])

  const setPlayingState = useCallback((state: boolean) => {
    setIsPlaying(state)
  }, [])

  const trackIsPlaying = useCallback(
    (trackId: number) => {
      return isPlaying && trackList?.[currentTrackIndex]?.trackId === trackId
    },
    [isPlaying, trackList, currentTrackIndex]
  )

  const hasPrevious = useMemo(() => currentTrackIndex > 0, [currentTrackIndex])

  const hasNext = useMemo(
    () => isShuffling || currentTrackIndex + 1 < trackList.length,
    [isShuffling, currentTrackIndex, trackList]
  )

  const playNext = useCallback(() => {
    const nextIndex = currentTrackIndex + 1
    if (isShuffling) {
      const nextRandomTrackIndex = Math.floor(Math.random() * trackList.length)
      setCurrentTrackIndex(nextRandomTrackIndex)
    } else if (hasNext) {
      setCurrentTrackIndex(nextIndex)
    }
  }, [trackList, hasNext, isShuffling, currentTrackIndex])

  const playPrevious = useCallback(() => {
    if (hasPrevious) {
      setCurrentTrackIndex(currentTrackIndex - 1)
    }
  }, [hasPrevious, currentTrackIndex])

  const trackListIsEmpty = useMemo(() => {
    return trackList.length === 0
  }, [trackList])

  return (
    <PlayerContext.Provider
      value={{
        trackList,
        currentTrackIndex,
        isPlaying,
        isLooping,
        isShuffling,
        hasNext,
        hasPrevious,
        trackListIsEmpty,
        play,
        playList,
        playNext,
        playPrevious,
        setPlayingState,
        clearPlayerState,
        toggleLoop,
        togglePlay,
        toggleShuffle,
        trackIsPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

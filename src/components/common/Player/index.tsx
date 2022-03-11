import { HTMLAttributes, useContext, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { PlayerContext } from '../../../contexts/PlayerContext'

interface PlayerProps extends HTMLAttributes<HTMLDivElement> {}

function Player({ className, ...rest }: PlayerProps) {
  const { trackList, currentTrackIndex, isPlaying, setPlayingState, playNext } =
    useContext(PlayerContext)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <div className={classNames(styles.root, className)} {...rest}>
      <footer>
        <audio
          ref={audioRef}
          controls
          src={trackList?.[currentTrackIndex]?.previewUrl}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
          onEnded={playNext}
        />
      </footer>
    </div>
  )
}

export default Player

import { HTMLAttributes, useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { PlayerContext } from '../../../contexts/PlayerContext'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Duration } from 'luxon'
import PlayButton from '../../ui/buttons/PlayButton'
import Image from 'next/image'

interface PlayerProps extends HTMLAttributes<HTMLDivElement> {}

function Player({ className, ...rest }: PlayerProps) {
  const {
    trackList,
    currentTrackIndex,
    isPlaying,
    trackListIsEmpty,
    setPlayingState,
    playNext,
    togglePlay,
  } = useContext(PlayerContext)

  const [progress, setProgress] = useState(0)
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
        <div className={styles.footer_left}>
          {!trackListIsEmpty && (
            <>
              <Image
                src={trackList?.[currentTrackIndex]?.artworkUrl100 || ''}
                alt={trackList?.[currentTrackIndex]?.artistName}
                width={56}
                height={56}
              />
              <div>
                <span title={trackList?.[currentTrackIndex]?.trackName}>
                  {trackList?.[currentTrackIndex]?.trackName}
                </span>
                <p title={trackList?.[currentTrackIndex]?.artistName}>
                  {trackList?.[currentTrackIndex]?.artistName}
                </p>
              </div>
            </>
          )}
        </div>
        <div className={styles.footer_center}>
          <div className={styles.player_btns}>
            <PlayButton
              isPlaying={isPlaying}
              disabled={trackListIsEmpty}
              size="sm"
              variant="light"
              onClick={togglePlay}
            />
          </div>
          <div className={styles.player_bar}>
            <span>{Duration.fromMillis(progress * 1000).toFormat('mm:ss')}</span>
            <Slider
              className={styles.slider}
              min={0}
              max={audioRef?.current?.duration || 0}
              value={progress}
              range={false}
              // allowCross={false}
              onChange={(currentTime) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = currentTime as number
                  setProgress(currentTime as number)
                }
              }}
            />
            <span>
              {Duration.fromMillis((audioRef.current?.duration || 0) * 1000).toFormat(
                'mm:ss'
              )}
            </span>
          </div>
          <audio
            ref={audioRef}
            // controls
            src={trackList?.[currentTrackIndex]?.previewUrl}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={playNext}
            onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
          />
        </div>
        <div className={styles.footer_right}></div>
      </footer>
    </div>
  )
}

export default Player

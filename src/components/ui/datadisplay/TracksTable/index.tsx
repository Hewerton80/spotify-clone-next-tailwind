import classNames from 'classnames'
import { Duration } from 'luxon'
import { useCallback, useContext, useState } from 'react'
import { PlayerContext } from '../../../../contexts/PlayerContext'
import { ITrack } from '../../../../types/Track'
import ClockIncon from '../../../icons/ClockIncon'
import PlayIcon from '../../../icons/PlayIcon'
import styles from './styles.module.css'

interface TracksTableProps {
  className?: string
  tracks: ITrack[]
}

function TracksTable({ className, tracks }: TracksTableProps) {
  const { isPlaying, currentTrackIndex, trackList, playList } = useContext(PlayerContext)

  const [previewSelectdIndex, setPreviewSelectdIndex] = useState<undefined | number>(
    undefined
  )

  const handleClickTrack = useCallback(
    (trackIndex: number) => {
      setPreviewSelectdIndex(trackIndex)
      if (trackIndex === previewSelectdIndex) {
        playList(tracks, trackIndex)
        // play(tracks[trackIndex])
      }
    },
    [tracks, previewSelectdIndex, playList]
  )

  return (
    <div role="table" className={classNames(styles.root, className)}>
      <div className={styles.head}>
        <div className={styles.head_left}>
          <span>#</span>
          <span>TÍTULO</span>
        </div>

        <span className="flex">
          <ClockIncon />
        </span>
      </div>
      <div className={classNames(styles.body, className)}>
        {tracks.map((track, i) => {
          console.log(
            tracks?.[currentTrackIndex]?.trackId,
            track?.trackId,
            tracks?.[currentTrackIndex]?.trackId === track?.trackId
          )
          return (
            <div
              key={'track' + i}
              onClick={() => handleClickTrack(i)}
              className={classNames(styles.item, {
                [styles.item_preview_select]: previewSelectdIndex === i,
                [styles.item_playing]:
                  isPlaying && trackList?.[currentTrackIndex]?.trackId === track?.trackId,
              })}
            >
              <div className={styles.item_left}>
                <span className={styles.item_left_index}>{i + 1}</span>
                <span className={styles.item_left_play_icons}>
                  <PlayIcon size={16} color="#fff" />
                </span>
                <div className={styles.item_left_description}>
                  <p> {track?.trackName} </p>
                  <span>{track?.artistName} </span>
                </div>
              </div>
              <div className={styles.item_right}>
                <span>
                  {Duration.fromMillis(Number(track.trackTimeMillis)).toFormat('mm:ss')}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TracksTable

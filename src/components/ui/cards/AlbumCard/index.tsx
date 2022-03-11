import classNames from 'classnames'
import Link from 'next/link'
// import Image from 'next/image'
// import Link from 'next/link'
import { IAlbum } from '../../../../types/Album'
import styles from './styles.module.css'

interface AlbumsCardProps {
  album: IAlbum
}

function AlbumsCard({ album }: AlbumsCardProps) {
  return (
    <Link href={`/album/${album.collectionId}`}>
      <a key={album.collectionId} className={classNames(styles.root)}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="aspect-square w-full object-cover rounded-full "
            src={album.artworkUrl100}
            alt={album.collectionName}
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <h4 title={album.collectionName}>{album.collectionName}</h4>
        <p title={album.artistName}>{album.artistName}</p>
      </a>
    </Link>
  )
}

export default AlbumsCard

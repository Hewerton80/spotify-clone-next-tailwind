import Image from 'next/image'
import Link from 'next/link'
import { GenreSlugEnum } from '../../../../types/Album'
import { IGenre } from '../../../../utils/genres'
import styles from './styles.module.css'

interface GenresCardCardProps {
  genre: IGenre
}

function GenresCardCard({ genre }: GenresCardCardProps) {
  return (
    <Link href={`/genre/${GenreSlugEnum[genre.id]}`} key={genre.id}>
      <a
        className={styles.root}
        style={{
          backgroundColor: genre.backgroudColor,
        }}
      >
        <h3>{genre.title}</h3>
        <span>
          <Image
            src={`/images/${genre.imgUrl}`}
            alt={genre.title}
            width={100}
            height={100}
          />
        </span>
      </a>
    </Link>
  )
}

export default GenresCardCard

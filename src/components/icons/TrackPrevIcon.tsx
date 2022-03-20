import { IconProps } from '.'
import assets from '../../../assets.json'

function TrackPrevIcon({ color = assets.colors.lightGray, size = 16 }: IconProps) {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      viewBox="0 0 16 16"
      fill={color}
      //   class="Svg-sc-1bi12j5-0 hDgDGI"
    >
      <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
    </svg>
  )
}

export default TrackPrevIcon
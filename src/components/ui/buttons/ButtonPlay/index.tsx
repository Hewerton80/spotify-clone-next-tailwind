import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import PlayIcon from '../../../icons/PlayIcon'
import StopIcon from '../../../icons/StopIcon'
import styles from './styles.module.css'

const btnsSizesVariants = {
  sm: { sizeBtn: 32, sizeIcon: 16 },
  lg: { sizeBtn: 56, sizeIcon: 28 },
}
interface ButtonPlayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPlaying?: boolean
  size?: 'sm' | 'lg'
  variant?: 'primary' | 'light'
}

function ButtonPlay({
  className,
  isPlaying,
  size = 'lg',
  variant = 'primary',
  ...rest
}: ButtonPlayProps) {
  return (
    <button
      className={classNames(styles.root, styles[size], styles[variant], className)}
      {...rest}
    >
      {isPlaying ? <StopIcon /> : <PlayIcon />}
    </button>
  )
}

export default ButtonPlay

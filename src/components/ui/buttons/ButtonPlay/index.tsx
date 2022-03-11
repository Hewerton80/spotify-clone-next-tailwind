import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import PlayIcon from '../../../icons/PlayIcon'
import styles from './styles.module.css'

interface ButtonPlayProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function ButtonPlay({ className, children, ...rest }: ButtonPlayProps) {
  return (
    <button className={classNames(styles.root, className)} {...rest}>
      {children}
    </button>
  )
}

export default ButtonPlay

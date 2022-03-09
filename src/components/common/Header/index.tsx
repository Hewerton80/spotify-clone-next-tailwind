import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ className, ...rest }: HeaderProps) {
  return <header className={classNames(styles.root, className)} {...rest}></header>
}

export default Header

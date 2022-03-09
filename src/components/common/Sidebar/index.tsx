import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

interface SidebarProps {
  children?: ReactNode
}

function Sidebar({ children }: SidebarProps) {
  return <nav className={classNames(styles.root)}> </nav>
}

export default Sidebar

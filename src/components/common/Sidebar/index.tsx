import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import SpotfyLogo from '../../icons/SpotfyLogo'
import Link from 'next/link'
import HomeIncon from '../../icons/HomeIcon'
import { useRouter } from 'next/router'
import HomeOutlineIncon from '../../icons/HomeOutlineIcon'

interface SidebarProps extends HTMLAttributes<HTMLElement> {}

function Sidebar({ children, className, ...rest }: SidebarProps) {
  const router = useRouter()
  return (
    <nav className={classNames(styles.root, className)} {...rest}>
      <Link href="/">
        <a className={styles.logo_wrapper}>
          <SpotfyLogo />
        </a>
      </Link>
      <ul className={styles.list}>
        <li
          className={classNames({
            [styles.active]: router.pathname === '/',
          })}
        >
          <Link href="/">
            <a>
              {router.pathname === '/' ? <HomeIncon /> : <HomeOutlineIncon />}
              <span>Início</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar

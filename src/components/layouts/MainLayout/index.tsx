import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import Header from '../../common/Header'
import Player from '../../common/Player'
import Sidebar from '../../common/Sidebar'
import styles from './styles.module.css'

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

function MainLayout({ className, children, ...rest }: MainLayoutProps) {
  // const {}
  return (
    <>
      <div className={classNames(styles.root, className)} {...rest}>
        <Sidebar />

        <div>
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <Player />
    </>
  )
}

export default MainLayout

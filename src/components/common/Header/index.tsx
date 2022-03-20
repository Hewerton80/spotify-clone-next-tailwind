import { HTMLAttributes, useContext } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import IconButton from '../../ui/buttons/IconButton'
import ArrowLeftIcon from '../../icons/ArrowLeftIcon'
import ArrowRightIcon from '../../icons/ArrowRight'
import { useRouter } from 'next/router'
import { HistoryRoutesContext } from '../../../contexts/HistoryRoutes'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ className, ...rest }: HeaderProps) {
  const router = useRouter()
  const { canGoback, canGofront, goBack, goFront } = useContext(HistoryRoutesContext)
  // console.log(router)
  return (
    <header className={classNames(styles.root, className)} {...rest}>
      <div>
        <IconButton
          className="mr-4"
          variant="dark"
          size="sm"
          icon={<ArrowLeftIcon color="#fff" size={22} />}
          disabled={!canGoback}
          onClick={goBack}
        />
        <IconButton
          variant="dark"
          // disabled
          size="sm"
          icon={<ArrowRightIcon color="#fff" size={22} />}
          disabled={!canGofront}
          onClick={goFront}
          // onClick={() => router.push(historyRoutes[historyRoutes.length - 1])}
        />
      </div>
    </header>
  )
}

export default Header

import { PlayerProvider } from './PlayerContext'
import { ReactNode } from 'react'
import { BackGroundProvider } from './BackGroundContext'

interface ProvidersPropos {
  children?: ReactNode
}
export default function Providers({ children }: ProvidersPropos) {
  return (
    <PlayerProvider>
      <BackGroundProvider>{children}</BackGroundProvider>
    </PlayerProvider>
  )
}

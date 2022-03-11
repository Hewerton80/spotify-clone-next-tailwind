import { PlayerProvider } from './PlayerContext'
import { ReactNode } from 'react'

interface ProvidersPropos {
  children?: ReactNode
}
export default function Providers({ children }: ProvidersPropos) {
  return <PlayerProvider>{children}</PlayerProvider>
}

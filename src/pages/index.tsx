import React from 'react'
import type { NextPage } from 'next'
import { genres } from '../utils/genres'
import GenresCardCard from '../components/ui/cards/GenresCard'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full w-full mt-4 py-4">
      <h2 className="text-2xl text-white font-bold">Navegar por todas as seções</h2>
      <div className="grid grid-cols-12 gap-6 h-full w-full mt-4">
        {genres.map((genre) => (
          <React.Fragment key={genre.id}>
            <GenresCardCard genre={genre} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Home

import TopArtists from '@/components/Artists/Artists'
import HomePage from '@/components/Home/Home'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-rubik font-bold pt-10">
       <TopArtists/>

    </div>
  )
}

export default Home
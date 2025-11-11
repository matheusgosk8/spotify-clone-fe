'use client'

import TopArtists from '@/components/Artists/ArtistsList'
import { useNavBar } from '@/providers/NavProvider'

type Props = {}

const Home = (props: Props) => {
  const { isOpen } = useNavBar();

  return (
    <div
    className={`
      relative min-h-screen bg-background text-foreground transition-all duration-300 ease-in-out pt-10
      ${isOpen ? "md:ml-64" : "md:ml-0"}
    `}
  >
      
      <div className='flex flex-col gap-1 p-6'>
        <h2 className="text-2xl font-semibold">Top artistas</h2>
        <p>Aqui você encontra os seus artistas preferidos</p>
      </div>

    <TopArtists/>
  </div>
  )
}

export default Home
'use client'

import Profile from '@/components/Profile/Profile'
import { useNavBar } from '@/providers/NavProvider'

type Props = {}

const Home = (props: Props) => {
  const { isOpen } = useNavBar();

  return (
    <div
    className={`
      relative min-h-screen bg-background text-foreground transition-all duration-300 ease-in-out pt-10 pl-16
      ${isOpen ? "md:ml-64" : "md:ml-0"}
      `}
      >
      
     <Profile/>

  </div>
  )
}

export default Home
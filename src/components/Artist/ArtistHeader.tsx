import { ArtistAlbum } from '@/types/spotifyTypes'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {
    artistsAlbum: ArtistAlbum
}

const ArtistHeader = ({ artistsAlbum }: Props) => {
    return (
        <div className='flex flex-row justify-between w-full'>
            <h1 className="text-2xl font-bold mb-6 cursor-pointer hover:opacity-70 transition-opacity">
                <Link href={'/artistas'} className='w-fit flex flex-row gap-2 items-center'><BsArrowLeft /> {artistsAlbum.artists[0].name}</Link>
            </h1>

            <div className='h-16 w-16 rounded-full border flex items-center justify-center border-white p-2 text-center'>
               <span className='text-center'> {artistsAlbum.artists[0].name.substring(1, 0)}</span>
            </div>
        </div>
    )
}

export default ArtistHeader
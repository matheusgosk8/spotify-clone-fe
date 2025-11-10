
import { SpotifyPlaylistItem } from '@/types/spotifyTypes'
import AlbumItem from './PlaylistItem'

type pageProps = {
    playList?: SpotifyPlaylistItem[]
}

const PlaylistsList = ({playList}: pageProps) => {


    return (
        <div className="">
            {playList?.length === 0 || !playList ? (
                <p className="text-accent">Nenhum álbum encontrado para este artista.</p>
            ) : (
                <>
                    <div className="flex flex-col gap-6">
                        {playList.map((item, index) => (
                           <AlbumItem playlist={item} index={index}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default PlaylistsList
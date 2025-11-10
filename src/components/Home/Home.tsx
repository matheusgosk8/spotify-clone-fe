'use client'

import { spotifyTopArtistsStub, artistsAlbumsStub, userPlaylists } from '@/mocks/spotifyMocks'
import { Section } from './HomeCards'

export default function HomePage() {
  return (
    <main className="min-h-screen w-ful bg-background text-foreground p-6 space-y-10 overflow-x-hidden">
      <section>
        <h1 className="text-3xl font-bold mb-4">Bem-vindo(a) de volta 👋</h1>
        <p className="text-accent text-sm">Veja seus artistas, álbuns e playlists favoritas</p>
      </section>

      <Section
        title="Artistas mais ouvidos"
        items={spotifyTopArtistsStub.items.map(artist => ({
          id: artist.id,
          name: artist.name,
          image: artist.images?.[0]?.url,
          subtitle: artist.genres.slice(0, 2).join(', '),
        }))}
      />

      <Section
        title="Últimos álbuns"
        items={artistsAlbumsStub.map(album => ({
          id: album.id,
          name: album.name,
          image: album.images?.[0]?.url,
          subtitle: album.artists?.[0]?.name,
        }))}
      />

      <Section
        title="Suas playlists"
        items={userPlaylists.map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          image: playlist.images?.[0]?.url,
          subtitle: `${playlist.tracks.total} faixas`,
        }))}
      />
    </main>
  )
}




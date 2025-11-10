"use client";

import Image from "next/image";
import Link from "next/link";
import { spotifyTopArtistsStub } from "@/mocks/spotifyMocks"; // ajuste o path conforme sua estrutura

export default function TopArtists() {
  const artists = spotifyTopArtistsStub.items;

  return (
    <section className="min-h-screen flex flex-col justify-start items-start h-full w-full bg-background text-foreground p-6 space-y-10 overflow-x-hidden">
      <h2 className="text-2xl font-semibold mb-4">Seus artistas mais ouvidos</h2>

      <div className="flex flex-col gap-6 overflow-x-auto pb-3">
        {artists.map((artist, index) => (
          <Link
            href={artist.external_urls.spotify}
            target="_blank"
            key={index}
            className="flex flex-row hover:bg-gray-900 cursor-pointer transition-colors text-white gap-5 shrink-0 group items-center justify-center p-2  rounded-3xl"
          >

            <div className="w-15 h-15 rounded-full">
            <Image
                src={artist.images?.[0]?.url ?? "/placeholder.png"}
                alt={artist.name}
                width={112}
                height={112}
                className="rounded-full w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <label className="font-light">
              {artist.name}
            </label>
           
          </Link>
        ))}
      </div>
    </section>
  );
}

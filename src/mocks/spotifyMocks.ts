import { ArtistAlbum, SpotifyRawPlaylist } from "@/types/spotifyTypes";


// src/types/spotify.ts
export type SpotifyExplicitContent = {
    filter_enabled: boolean;
    filter_locked: boolean;
};

export type SpotifyExternalUrls = {
    spotify: string;
};

export type SpotifyFollowers = {
    href: string | null;
    total: number;
};

export type SpotifyImage = {
    url?: string;
    height?: number | null;
    width?: number | null;
};

export type SpotifyProfile = {
    country: string;
    display_name: string;
    email: string;
    explicit_content: SpotifyExplicitContent;
    external_urls: SpotifyExternalUrls;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    images: SpotifyImage[];
    product: string;
    type: string;
    uri: string;
};

export type SpotifyAuthResponse = {
    accessToken: string;
    refreshToken: string;
    profile: SpotifyProfile;
};


export interface SpotifyPaginatedResponse<T> {
    href: string
    items: T[]
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
}

export interface SpotifyArtist {
    id: string
    name: string
    type: "artist"
    popularity: number
    genres: string[]
    href: string
    uri: string
    followers: {
        href: string | null
        total: number
    }
    images: {
        height: number
        width: number
        url: string
    }[]
    external_urls: {
        spotify: string
    }
}

export interface SpotifyPlaylistTracks {
    href: string;
    total: number;
}

export interface SpotifyPlaylistItem {
    description: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: {
        height: number
        width: number
        url: string
    }[]
    name: string;
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: SpotifyPlaylistTracks;
    type: string;
    uri: string;
}

export type RawSpotifyProfile = {
    country?: string;
    display_name?: string;
    email?: string;
    followers?: { href?: string; total?: number } | null;
    href?: string;
    id?: string;
    images?: {
        height: number
        width: number
        url: string
    }[] | null
    product?: string;
}

export type SpotifyProfileCallback = {
    id: string
    country: string
    display_name: string
    email: string
    followers: {
        href: string | null
        total: number
    }
    href: string
    images: {
        height: number
        width: number
        url: string
    }[]
    product: string
}


export const spotifyTopArtistsStub: SpotifyPaginatedResponse<SpotifyArtist> = {
    items: [
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        },
        {
            external_urls: {
                spotify: "https://open.spotify.com/artist/0qJpY7K8p7g6sacvaGNt6i"
            },
            followers: {
                href: null,
                total: 260504
            },
            genres: ["deathcore", "death metal", "metalcore", "metal", "djent"],
            href: "https://api.spotify.com/v1/artists/0qJpY7K8p7g6sacvaGNt6i",
            id: "0qJpY7K8p7g6sacvaGNt6i",
            images: [
                {
                    height: 640,
                    url: "https://i.scdn.co/image/ab6761610000e5eb1b610ecb62f7bf79f6406385",
                    width: 640
                },
                {
                    height: 320,
                    url: "https://i.scdn.co/image/ab676161000051741b610ecb62f7bf79f6406385",
                    width: 320
                },
                {
                    height: 160,
                    url: "https://i.scdn.co/image/ab6761610000f1781b610ecb62f7bf79f6406385",
                    width: 160
                }
            ],
            name: "Fit For An Autopsy",
            popularity: 49,
            type: "artist",
            uri: "spotify:artist:0qJpY7K8p7g6sacvaGNt6i"
        }
    ],
    total: 457,
    limit: 1,
    offset: 0,
    href: "https://api.spotify.com/v1/me/top/artists?offset=0&limit=1&locale=*",
    next: "https://api.spotify.com/v1/me/top/artists?offset=1&limit=1&locale=*",
    previous: null
}



export const artistsAlbumsStub: ArtistAlbum[] = [
    {
        id: "4ZYfWm41dWgewV1yMV4zmU",
        name: "The Nothing That Is",
        release_date: "2024-10-25",
        images: [
            {
                url: "https://i.scdn.co/image/ab67616d0000b273c5d42a4f27b8d268704d66c4",
                height: 640,
                width: 640
            },
            {
                url: "https://i.scdn.co/image/ab67616d00001e02c5d42a4f27b8d268704d66c4",
                height: 300,
                width: 300
            },
            {
                url: "https://i.scdn.co/image/ab67616d00004851c5d42a4f27b8d268704d66c4",
                height: 64,
                width: 64
            }
        ],
        total_tracks: 10,
        album_type: "album",
        artists: [
            {
                id: "0qJpY7K8p7g6sacvaGNt6i",
                name: "Fit For An Autopsy"
            }
        ]
    }, 
    {
        id: "4ZYfWm41dWgewV1yMV4zmU",
        name: "The Nothing That Is",
        release_date: "2024-10-25",
        images: [
            {
                url: "https://i.scdn.co/image/ab67616d0000b273c5d42a4f27b8d268704d66c4",
                height: 640,
                width: 640
            },
            {
                url: "https://i.scdn.co/image/ab67616d00001e02c5d42a4f27b8d268704d66c4",
                height: 300,
                width: 300
            },
            {
                url: "https://i.scdn.co/image/ab67616d00004851c5d42a4f27b8d268704d66c4",
                height: 64,
                width: 64
            }
        ],
        total_tracks: 10,
        album_type: "album",
        artists: [
            {
                id: "0qJpY7K8p7g6sacvaGNt6i",
                name: "Fit For An Autopsy"
            }
        ]
    }, 
    {
        id: "4ZYfWm41dWgewV1yMV4zmU",
        name: "The Nothing That Is",
        release_date: "2024-10-25",
        images: [
            {
                url: "https://i.scdn.co/image/ab67616d0000b273c5d42a4f27b8d268704d66c4",
                height: 640,
                width: 640
            },
            {
                url: "https://i.scdn.co/image/ab67616d00001e02c5d42a4f27b8d268704d66c4",
                height: 300,
                width: 300
            },
            {
                url: "https://i.scdn.co/image/ab67616d00004851c5d42a4f27b8d268704d66c4",
                height: 64,
                width: 64
            }
        ],
        total_tracks: 10,
        album_type: "album",
        artists: [
            {
                id: "0qJpY7K8p7g6sacvaGNt6i",
                name: "Fit For An Autopsy"
            }
        ]
    }, 
]


export const userPlaylists: SpotifyPlaylistItem[] = [
    {
        description: "Playlist criada para testes",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
    , {
        description: "",
        external_urls: {
            spotify: "https://open.spotify.com/playlist/1AKWv3z2o0pgNesI2cdkmR"
        },
        href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR",
        id: "1AKWv3z2o0pgNesI2cdkmR",
        images: [
            {
                url: "https://mosaic.scdn.co/640/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 640,
                width: 640
            },
            {
                url: "https://mosaic.scdn.co/300/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 300,
                width: 300
            },
            {
                url: "https://mosaic.scdn.co/60/ab67616d00001e0216b101f81a8284ec71048d91ab67616d00001e021c3ce27107f364d992ec5857ab67616d00001e0239ff5634f8dce027635b73deab67616d00001e02ee7b975fd8df8b5cde55876b",
                height: 60,
                width: 60
            }
        ],
        name: "sk8-25",
        primary_color: null,
        public: false,
        snapshot_id: "AAAAH8jiLbsz5EHPhogJ0jMPqIGdPTCV",
        tracks: {
            href: "https://api.spotify.com/v1/playlists/1AKWv3z2o0pgNesI2cdkmR/tracks",
            total: 27
        },
        type: "playlist",
        uri: "spotify:playlist:1AKWv3z2o0pgNesI2cdkmR"
    }
]

// src/store/stubs/userProfileStub.ts
export const userProfileStub: SpotifyProfile = {
    country: "BR",
    display_name: "mtsgosk8",
    email: "mtsgosk8@hotmail.com",
    explicit_content: {
      filter_enabled: false,
      filter_locked: false,
    },
    external_urls: {
      spotify: "https://open.spotify.com/user/mtsgosk8",
    },
    followers: {
      href: null,
      total: 0,
    },
    href: "https://api.spotify.com/v1/users/mtsgosk8",
    id: "mtsgosk8",
    images: [
      {
        height: 300,
        url: "https://i.scdn.co/image/ab6775700000ee85ebd2403830dd9d984a56cf3a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67757000003b82ebd2403830dd9d984a56cf3a",
        width: 64,
      },
    ],
    product: "premium",
    type: "user",
    uri: "spotify:user:mtsgosk8",
  };
  
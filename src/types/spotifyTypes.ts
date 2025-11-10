export type SpotifyImages = {
    height: number;
    width: number;
    url: string;
}

export type SpotifyProfile = {
    id: string
    country: string
    display_name: string
    email: string
    followers: {
        href: string | null
        total: number
    }
    href: string
    images: Array<SpotifyImages>
    product: string
}

export type PaginationType = {
    limit: number;
    offset: number
}

export type SpotfyTokenFnType = {
    code: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
}

export type SignInPayload = {
    id: string;
    access_token: string
    refresh_token: string
    expires_in: number;
}


export type DecodedSpotifyJWT = {
    id: string;
    access_token: string
    refresh_token: string
    iat: number
    exp: number,
    itExpired?: boolean
}


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
    images: SpotifyImages[]
    external_urls: {
        spotify: string
    }
}

export type ArtistAlbum = {
    id: string;
    name: string;
    release_date: string;
    images: SpotifyImages[];
    total_tracks: number;
    album_type: string;
    artists: { id: string; name: string; }[];
};

export interface SpotifyArtistAlbumsResponse {
    items: ArtistAlbum[];
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
    images: SpotifyImages[];
    name: string;
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: SpotifyPlaylistTracks;
    type: string;
    uri: string;
}

export type CreatePlaylisBody = {
    name: string;
    public: boolean;
    collaborative: boolean;
    description: string
}

export type SpotifyRawPlaylist = {
    description: string;
    collaborative: boolean,
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: { url: string; height: number; width: number }[] | null;
    name: string;
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: SpotifyPlaylistTracks;
    type: string;
    uri: string;
};

export type RawSpotifyProfile= {
    country?: string;
    display_name?: string;
    email?: string;
    followers?: { href?: string; total?: number } | null;
    href?: string;
    id?: string;
    images?: SpotifyImages[] | null
    product?: string;
}
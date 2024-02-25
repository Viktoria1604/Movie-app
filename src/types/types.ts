export interface IMovie {
    name: string;
    genre_ids: number[];
    title:string;
    overview:string;
    poster_path: string| undefined;
    vote_average: number;
    release_date: string;
    id:number;
    myrate?: number;
}

export interface IGettedMovies{
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IGettedGenres{
    genres: IGenres[];

}

export interface IGenres{
    id:number,
    name:string
}

import React, { useEffect, useState } from 'react'

const Movie = () => {
    const [movieList, setMovieList] = useState([])

    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=e7e933bf19172916edaa7475773c231e')
            .then(res => res.json())
            .then(json => setMovieList(json.results))
    }
    useEffect(() => {
        getMovie()
    }, [])

    console.log(movieList)

    return (
        <div className='w-full'>
            <div className='flex flex-wrap'>
                {movieList.map((movie) => {
                    return (
                        <img className='w-[18rem] h=[15rem]' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    )
                })}
            </div>

        </div>
    )
}

export default Movie
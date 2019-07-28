import React, {useContext} from 'react'

import MovieContext from './MovieContext';

export default function Extra() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            {movies.map((movies, index) => {
                return <li>{movies.price}</li>
            })}
        </div>
    )
}


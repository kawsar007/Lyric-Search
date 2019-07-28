// import React, {useState, useContext} from 'react';
// import Movie from './Movie';
// import {MovieContext} from './MovieContext';

// export default function MovieList() {

//     const [movies, setMovies] = useContext(MovieContext);
    
//     return (
//         <div>
//             {movies.map((movie, index) => {
//                 return <Movie movie={movie} key={index}/>
//             })}
//         </div>
//     )
// }


import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

export default function MovieList() {

    const [movies, setMovies] = useContext(MovieContext);
    
    return (
        <div>
            {movies.map((movie, index) => {
                return <Movie movie={movie} key={index}/>
            })}
        </div>
    )
}
// import React, {useContext} from 'react';
// import {MovieContext} from './MovieContext';

// export default function Nav() {
//     const [movies, setMovies] = useContext(MovieContext);
//     return (
//         <div>
//             <h2>Kawsar Ahamed</h2>
//             <p>List of Movies: {movies.length}</p>
//         </div>
//     )
// }


import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h2>Kawsar Ahamed</h2>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}
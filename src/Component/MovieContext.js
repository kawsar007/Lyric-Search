// import React, {useState, createContext} from 'react';

// export const MovieContext = createContext();

// export default function MovieProvider(props) {
//     const [movies, setMovies] = useState([
//         {
//             name: 'Harry Potter',
//             price: '$20',
//             id: 4375
//         },
//         {
//             name: 'Mr. Been',
//             price: '$20',
//             id: 4759
//         },
//         {
//             name: 'Charley Chaplin',
//             price: '$30',
//             id: 4359
//         }
//     ])
//     return (
//         <MovieContext.Provider value={[movies, setMovies]}>
//             {props.children}
//         </MovieContext.Provider>
//     )
// }


import React, {useState} from 'react';

export const MovieContext = React.createContext();

export default function MovieProvider(props) {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$20',
            id: 4375
        },
        {
            name: 'Mr. Been',
            price: '$20',
            id: 4759
        },
        {
            name: 'Charley Chaplin',
            price: '$30',
            id: 4359
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

//export const Consumer = MyContext.Consumer;
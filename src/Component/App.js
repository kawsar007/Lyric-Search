// import React, { Component } from 'react';
// import './App.css';
// import MovieList from './MovieList';
// import Nav from './Nav';
// import MovieProvider from './MovieContext';
// import AddMovie from './AddMovie';


// function App () {

//         return (
//             <MovieProvider>
//                 <div className="App">
//                     <Nav/><hr/>
//                     <AddMovie/>
//                     <MovieList/>
//                 </div>
//             </MovieProvider>
//         );
//     }

// export default App;


import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import MovieProvider from './MovieContext';
import AddMovie from './AddMovie';


function App () {

        return (
            <MovieProvider>
                <div className="App">
                    <Nav/><hr/>
                    <AddMovie/>
                    <MovieList/>
                </div>
            </MovieProvider>
        );
    }

export default App;
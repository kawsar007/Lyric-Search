import React from 'react'
import Track from '../Tracks/Tracks';
import Search from '../Tracks/Search';
//import { Consumer } from '../../Context';

 const Index = () => {
    return (
        <React.Fragment>
            <Search/>
           <Track/>
        </React.Fragment>  
    )
}
export default Index;
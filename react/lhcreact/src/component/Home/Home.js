import React from 'react';
import Search from './Search';
import Header from '../Header';

import './home.css'

const Home=()=>{
        return(
            <><Header/>
            <div>
                <Search/>
            </div>
            </>
        )
    }

export default Home;
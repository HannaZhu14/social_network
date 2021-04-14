import preloader from '../../../assets/images/Spinner-1s-137px.svg';
import React from 'react';


const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'loading'}/>
        </div>
    );
}

export default Preloader;
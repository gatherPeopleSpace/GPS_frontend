import { checkPropTypes } from 'prop-types';
import React from 'react';

const PhotoItem=(props)=>{
    return(
        <div> 
            <img src={props.photo}></img>
        </div>
    );
}

export default PhotoItem;
import React from 'react';

const Footer=(props)=>{
    console.log(props.title)
    return(
        <>
        <div style={{width:'100%',display:'inline-block'}}></div>
            <hr/>
            <center>
                <h3>&copy; LoveHandiCrafts.com {props.year}</h3>
            </center>
        </>
    )
}

export default Footer;
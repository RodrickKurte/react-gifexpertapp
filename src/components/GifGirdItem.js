import React from 'react'

export const GifGirdItem = ( {id, title, url} ) => {

    console.log(id, title,url);
    return (
        <div className="card">
            <img src={url} alt={ title}></img>
            <p> {title} </p>
        </div>
    )
}

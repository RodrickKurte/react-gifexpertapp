import React, {useState, useEffect} from 'react'
import {GifGirdItem} from '../components/GifGirdItem';
import { getGifs} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { data:images, loading} = useFetchGifs( category );


    return (
        <>
            <h3> { category}</h3>

            { loading && <p className="animate_animated animate__flash">Loading</p>}
            <div className="card-grid">

                    {
                        images.map( ( img ) => (
                            <GifGirdItem 
                                key= {img.id}
                                { ...img }
                            />
                        ))
                    }
                
            </div>
        </>
    )
}

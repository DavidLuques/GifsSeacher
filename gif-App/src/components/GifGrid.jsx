import React from 'react';
import { GifGridItem } from './GifGridItem';
import { UseFetchGifs } from '../hooks/UseFetchGifs';

export const GifGrid = ({ cate }) => {

    const { images, isLoading } = UseFetchGifs(cate);
    console.log({ images, isLoading })

    return (
        <>
            <h3>{cate}</h3>
            {(isLoading) ? <h2>Loading... </h2> : (<div className='card-grid'>
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
            )}

        </>
    );
};

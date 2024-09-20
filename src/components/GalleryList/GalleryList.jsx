// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem/GalleryItem.jsx';


function GalleryList() {
    const [images, setImages] = useState([]);

    function fetchGallery() {
        axios({
            method: 'GET',
            url: '/api/gallery'
        }).then(response => {
            setImages(response.data);
        }).catch(err => console.error('Error getting items.',err));
    }

    useEffect(fetchGallery, []);


    return (
        <div data-testid="galleryList">
            {images.map((image) =>  <GalleryItem image={image} key={image.id} fetchGallery={fetchGallery}/>)}
        </div>
    )
}


export default GalleryList;
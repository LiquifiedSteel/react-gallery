// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem/GalleryItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GalleryItem/GalleryItem.css';
import { Container, Row } from "react-bootstrap";


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
        <Container>
            <div data-testid="galleryList" id='galleryContainer'>
                <Row xs={1} lg={2}>
                        {images.map((image) =>  <GalleryItem image={image} key={image.id} fetchGallery={fetchGallery}/>)}
                </Row>
            </div>
        </Container>
    )
}


export default GalleryList;
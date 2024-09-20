import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({image, fetchGallery}) {
    const [visible, setVisible] = useState(true)
    function addLike(image) {
        axios({
            method: "PUT",
            url: `/api/gallery/like/${image}`
        }).then(response => {
            console.log('adding a like', image.id);
            fetchGallery();
        }).catch(err => console.error('error adding a like', err));
    }

    return (
        <div data-testid="galleryItem">
            <h3>{image.title}</h3>
            {visible ? <img className="image" onClick={() => setVisible(!visible)} src={image.url}/> : <h4 onClick={() => setVisible(!visible)}>{image.description}</h4>}
            <button data-testid="like" onClick={() => addLike(image.id)}>👍🏻</button>
            <p>{image.likes===0? 'No' : image.likes} {image.likes===1? 'person loves' : 'people love'} this!</p>
        </div>
    )
}

export default GalleryItem;
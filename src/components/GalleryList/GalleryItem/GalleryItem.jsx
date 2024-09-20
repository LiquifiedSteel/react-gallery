import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({image, fetchGallery}) {
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
            <img className="image" src={image.url}/>
            <button onClick={() => addLike(image.id)}>👍🏻</button>
            <p>{image.likes===0? 'No' : image.likes} {image.likes===1? 'person loves' : 'people love'} this!</p>
        </div>
    )
}

export default GalleryItem;
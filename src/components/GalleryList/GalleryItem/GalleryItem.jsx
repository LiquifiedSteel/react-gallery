import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Card } from "react-bootstrap";

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
        <Col>
            <div className='galItem'>
                <Card>
                    <div data-testid="galleryItem" className='cardEle'>
                        <Card.Header>
                            <h3>{image.title}</h3>
                        </Card.Header>
                        
                        {visible ? <Card.Img className='imgs' onClick={() => setVisible(!visible)} src={image.url}/> : <Card.Text className='imgs' onClick={() => setVisible(!visible)}>{image.description}</Card.Text>}
                        <Card.Body>
                            <div className='likes'>
                                <span>{image.likes===0? 'No' : image.likes} {image.likes===1? 'person loves' : 'people love'} this! </span>
                                <button id='likeBtn' data-testid="like" onClick={() => addLike(image.id)}>👍🏻</button>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </Col>
    )
}

export default GalleryItem;
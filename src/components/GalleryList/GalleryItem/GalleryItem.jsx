


function GalleryItem({image, fetchGallery}) {

    return (
        <div data-testid="galleryItem">
            <img src={image.url}/>
        </div>
    )
}

export default GalleryItem;
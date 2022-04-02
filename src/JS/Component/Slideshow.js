import React from 'react';
import { Carousel } from 'react-carousel-minimal';

export default function Slideshow(props) {

    const { carouseldata,width ,height} = props;

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <Carousel
                    data={carouseldata}
                    automatic={true}
                    time={4000}
                    width={width}
                    height={height}
                    radius='10px'
                    slideNumber={false}
                    captionPosition='bottom'
                    dots={true}
                    pauseIconColor='white'
                    pauseIconSize='40px'
                    slideBackgroundColor='darkgrey'
                    slideImageFit='cover'
                    thumbnails={false}
                    thumbnailWidth='100px'
                    style={{
                        textAlign: 'center',
                        maxHeight: '500px',
                    }}
                />
            </div>
        </div>
    );
}
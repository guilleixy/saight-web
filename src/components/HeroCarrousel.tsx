import React, { useEffect, useRef } from 'react';

const images = [
    'aws-icon.svg',
    'chatgpt-icon.svg'
    // Add more image URLs here
];

const HeroCarousel: React.FC = () => {
    const carouselTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carouselTrack = carouselTrackRef.current;
        if (carouselTrack) {
            const firstImage = carouselTrack.children[0] as HTMLElement;
            const lastImage = carouselTrack.children[carouselTrack.children.length - 1] as HTMLElement;
            const cloneFirstImage = firstImage.cloneNode(true) as HTMLElement;
            const cloneLastImage = lastImage.cloneNode(true) as HTMLElement;

            carouselTrack.insertBefore(cloneLastImage, firstImage);
            carouselTrack.appendChild(cloneFirstImage);

            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${firstImage.offsetWidth}px)`;
            setTimeout(() => {
                carouselTrack.style.transition = 'all 0.5s';
            }, 30);

            let index = 0;
            setInterval(() => {
                index++;
                carouselTrack.style.transform = `translateX(-${index * firstImage.offsetWidth}px)`;

                if (index === carouselTrack.children.length - 2) {
                    index = 0;
                    carouselTrack.style.transition = 'none';
                    carouselTrack.style.transform = `translateX(-${firstImage.offsetWidth}px)`;
                    setTimeout(() => {
                        carouselTrack.style.transition = 'all 0.5s';
                    }, 30);
                }
            }, 3000); // Change the interval time as per your requirement
        }
    }, []);

    return (
        <div className="hero-carousel">
            <div className="carousel-track" ref={carouselTrackRef}>
                {images.map((image, index) => (
                    <img key={index} src={image} className='carousel-img' alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
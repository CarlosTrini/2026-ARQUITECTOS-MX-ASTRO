import react, { useState } from 'react';

interface Props {
    images: string[];
    classContainer?: string;
    classThumbsContainer?: string;
    classImageContainer?: string;
}


const ImageGrid: react.FC<Props> = ({ images, classContainer = '', classThumbsContainer = '', classImageContainer = '' }) => {
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);


    const contClass = classContainer !== '' ? classContainer : 'flex-col flex-col-reverse lg:flex-row';
    const thumbsClass = classThumbsContainer !== '' ? classThumbsContainer : 'lg:flex-col';
    const imageClass = classImageContainer !== '' ? classImageContainer : 'h-100 w-full';

    return (
        <>
            <div className={`gap-3  flex ${contClass}  `}>
                {/* Thumbnails */}
                <div className={`flex ${thumbsClass}  `}>
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveGalleryIndex(idx)}
                            className={`relative aspect-video w-24 rounded-lg overflow-hidden border-2 transition-all ${activeGalleryIndex === idx
                                ? 'border-tertiary scale-105 shadow-md shadow-tertiary/30'
                                : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
                <div className={`aspect-video ${imageClass}  rounded-lg overflow-hidden bg-dark shadow-inner`}>
                    <img
                        src={images[activeGalleryIndex]}
                        alt={`foto ${activeGalleryIndex + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default ImageGrid;
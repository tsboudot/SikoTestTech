import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import { useMediaQuery } from 'react-responsive';


// Exemple de données
const tweetsData = [
    {
        id: 1,
        title: " Feedback positif",
        text: "Sérieux, à l'écoute, et très disponible",
        ratingStars: 4, // Exemple de note en étoiles
        ratingNumbers: { likes: 20, retweets: 10 },
        author: "Auteur 1",
        date: "2022-01-15",
    },
    {
        id: 2,
        title: " Bonne expérience",
        text: "Sérieux, à l'écoute, et très disponible",
        ratingStars: 4, // Exemple de note en étoiles
        ratingNumbers: { likes: 20, retweets: 10 },
        author: "Auteur 1",
        date: "2022-01-15",
    },
    {
        id: 3,
        title: " Aide inestimable",
        text: "Sérieux, à l'écoute, et très disponible",
        ratingStars: 4, // Exemple de note en étoiles
        ratingNumbers: { likes: 20, retweets: 10 },
        author: "Auteur 1",
        date: "2022-01-15",
    },
    {
        id: 4,
        title: " Feedback positif",
        text: "Sérieux, à l'écoute, et très disponible",
        ratingStars: 4, // Exemple de note en étoiles
        ratingNumbers: { likes: 20, retweets: 10 },
        author: "Auteur 1",
        date: "2022-01-15",
    },
    {
        id: 5,
        title: " Feedback positif",
        text: "Sérieux, à l'écoute, et très disponible",
        ratingStars: 4, // Exemple de note en étoiles
        ratingNumbers: { likes: 20, retweets: 10 },
        author: "Auteur 1",
        date: "2022-01-15",
    },
    {
        id: 6,
        title: " Feedback positif",
        text: "Sérieux, à l'écoute, et très disponible",
        ratingStars: 4, // Exemple de note en étoiles
        ratingNumbers: { likes: 20, retweets: 10 },
        author: "Auteur 1",
        date: "2022-01-15",
    },

];

const CarouselTweets: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const tweetsToShow = isMobile ? 2 : 3;

    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                className="w-full"
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const indicatorClasses = `inline-block h-4 w-4 mx-2 rounded-full ${isSelected ? 'bg-blue-500 cursor-pointer' : 'bg-gray-300 cursor-pointer'}`;
                    return (
                        <li
                            className={indicatorClasses}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            role="button"
                            tabIndex={0}
                            title={`${label}: ${index + 1}`}
                        />
                    );
                }}
            >
                {tweetsData.slice(0, tweetsToShow).map(tweet => (
                    <div key={tweet.id} className="carousel-box bg-white p-8 rounded shadow-md">
                        <h3 className="text-xl font-bold mb-4">{tweet.title}</h3>
                        <p className="text-gray-700 mb-2">{tweet.text}</p>
                        <p className="text-gray-500">Author: {tweet.author}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselTweets;
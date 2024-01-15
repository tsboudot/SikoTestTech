import React, { useState, useEffect } from "react";

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
    // ... Ajoutez autant d'objets de tweet que nécessaire
];

const CarouselTweets: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tweetsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + tweetsData.length) % tweetsData.length);
    };

    useEffect(() => {
        // Défilement automatique toutes les 30 secondes
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % tweetsData.length);
        }, 3000);

        // Nettoyer l'intervalle lors du démontage du composant
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel flex flex-wrap justify-center">
                {tweetsData.map((tweet, index) => (
                    <div
                        key={tweet.id}
                        className={`slide ${index === currentIndex ? "active" : ""} ${index === currentIndex ? "sm:w-full md:w-1/2 lg:w-1/3" : "sm:w-1/2 md:w-1/3 lg:w-1/4"
                            }`}
                    >
                        <h2 className="text-red">{tweet.title}</h2>
                        <p className="text-red">{tweet.text}</p>
                        <div className="ratings">
                            <div className="rating-stars">Rating: {tweet.ratingStars} stars</div>
                            <div className="rating-numbers">
                                Likes: {tweet.ratingNumbers.likes} | Retweets: {tweet.ratingNumbers.retweets}
                            </div>
                        </div>
                        <div className="author-date">
                            <p>{tweet.author}</p>
                            <p>{tweet.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselTweets;
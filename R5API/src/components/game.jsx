import { useEffect, useState } from "react";
import "./game.css";

function Game() {
    const [dogImg, setDogImg] = useState("");
    const [breed, setBreed] = useState("");
    const [score, setScore] = useState(0);
    const [seenBreeds, setSeenBreeds] = useState([]);
    const [message, setMessage] = useState("");
    const [totalShown, setTotalShown] = useState(0);

    const fetchDog = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
     
            const data = await response.json();

            setDogImg(data.message);

            const parts = data.message.split("/");
            const breedPart = parts[4];
            const breedName = breedPart.split("-")[0];
            setBreed(breedName);
        } catch (error) {
            console.error("error");
        }
    };
    useEffect(() => {
        fetchDog();
    }, []);

    const handleAnswer = (answer) => {
        const hasSeenBreed = seenBreeds.includes(breed);

        if  (answer === "yes" && hasSeenBreed) 
             {
            setScore((prev) => prev + 1);
            setMessage("Have seen this breed!");
        } 
        
        else if (answer === "no" && !hasSeenBreed) {
             setMessage("Have never seen this breed!");
        }
        else if (answer === "yes" && !hasSeenBreed) {
            setMessage("Have never seen this breed!");
        } else if (answer === "no" && hasSeenBreed) {
            setMessage("Have seen this breed!");
        }
        if (!hasSeenBreed) {
            setSeenBreeds((prev) => [...prev, breed]);
        }
            
            

        setTimeout(() => {
            fetchDog();
            setMessage("");
        }, 1200);
    };

    const unseenCount = Math.max(0, seenBreeds.length > 0 ? seenBreeds.length : 0);

    return (
        <div className="game-container">
            <h1>Have you seen this breed?</h1>

            <h2>Score: {score}</h2>

            {dogImg && (
        <img src={dogImg} alt="Random Dog" className="dog-image" />)}
        <p>Have you seen this dog breed before?</p>

        <div className="button-container">
            <button onClick={() => handleAnswer("yes")} className="yes-button">Yes</button>
            <button onClick={() => handleAnswer("no")} className="no-button">No</button>
        </div>


            <h3>{message}</h3>

            <p>Seen Breeds: {seenBreeds.length}</p>
            <p>Unseen Breeds: {totalShown - seenBreeds.length}</p>
        </div>
    );
}

export default Game;
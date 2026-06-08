import { useEffect, useState } from "react";
import "./game.css";

function Game() {
    const [dogImg, setDogImg] = useState("");
    const [breed, setBreed] = useState("");
    const [score, setScore] = useState(0);
    const [seenBreeds, setSeenBreeds] = useState([]);
    const [message, setMessage] = useState("");
    const [round, setRound] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const TOTAL_ROUNDS = 20;

    const roundsLeft = TOTAL_ROUNDS -round;


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
    console.error(error);
    }
};

    useEffect(() => {
        fetchDog();
    }, []);

    const handleAnswer = (answer) => {
        if (gameOver) return;


        if  (answer === "yes")  
             {
            setScore((prev) => prev + 1);
            setMessage("You have seen this breed!");
             } else { 
            setMessage("You have never seen this breed!");
        }

        const nextRound = round + 1;
        setRound(nextRound);
        if (nextRound >= TOTAL_ROUNDS) {
            setGameOver(true);
            return;
        }
        
        setTimeout(() => {
            fetchDog();
            setMessage("");
        }, 1500);
    };

    const getResultText = () => {
        if (score >= 15) { return "You are a Dog Expert!";}
        if (score >= 10) {return "You are a Dog Friend!";}
        return "You are a Dog Newbie!";
    };

    return (
        <div className="game-container">
            <h1>Have you seen this breed?</h1>

            <h2>Score: {score}/{TOTAL_ROUNDS}</h2>
            <h3>Rounds left: {roundsLeft}</h3>

            {!gameOver && (
                <>
                {dogImg && (
        
        <img src={dogImg} alt="Random Dog" className="dog-image" />
            
        )}
 
        <p>Have you seen this dog breed before?</p>
            

        <div className="button-container">
            <button onClick={() => handleAnswer("yes")} className="yes-button">Yes</button>
            <button onClick={() => handleAnswer("no")} className="no-button">No</button>
        </div>

            <h3>{message}</h3>
            </>

    )}

            {gameOver && (
                <div>
                <h2> End Of Game</h2>
                <h3> You have seen {score} / {TOTAL_ROUNDS} breeds</h3>
                <p>{getResultText()}</p>
                </div>

            )} 
            </div>
        );
    }
                
export default Game;
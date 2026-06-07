import { useEffect, useState } from "react";
import "./game.css";

function Game() {
    const [dogImg, setDogImg] = useState("");
    const [breed, setBreed] = useState("");
    const [score, setScore] = useState(0);
    const [seenBreeds, setSeenBreeds] = useState([]);
    const [message, setMessage] = useState("");
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
        if (answer === "yes" && hasSeenBreed) || 
            (answer === "no" && !hasSeenBreed)
             {

            setScore(score + 1);
            setMessage("Have seen this breed!");
        } else {
            setMessage("Have never seen this breed!");
        }

        if (!hasSeenBreed) {
            setSeenBreeds ((prev) => [...prevBreeds, breed]);
        }

        
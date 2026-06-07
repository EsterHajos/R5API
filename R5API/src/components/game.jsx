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
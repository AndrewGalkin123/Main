import React, { useState } from 'react';
import { styles } from "/Casino/casino/src/styles"

const Roulette = () => {
    let nums = ["00", "0"];
    for (let i = 1; i <= 36; i++) {
        nums.push(i < 10 ? + i.toString() : i.toString());
    }

    const generateRandom = () => {
        const randomIndex = Math.floor(Math.random() * nums.length); // Генерация случайного индекса массива
        return nums[randomIndex];
    }

    const [randomResult, setRandomResult] = useState("");

    const handleClick = () => {
        const result = generateRandom();
        setRandomResult(result);
    }

    return (
        <main style={styles.Roulette}>
            <button onClick={handleClick}>Крутить</button>
            <p>{randomResult}</p>
            <br></br>
            <p>Ваше число:</p>
            <input></input><button>Подтвердить</button>
            <p>Ваша ставка:</p>
            <input></input><button>Подтвердить</button>
        </main>
    )
}

export default Roulette;

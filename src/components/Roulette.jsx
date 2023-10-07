import React, { useState } from 'react';
import { styles } from "/Casino/casino/src/styles"
import Header from './Header';

const Roulette = ({ chips, onChipsChange })  => {

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
        const numberInput = document.getElementById("number");
        const bidInput = document.getElementById("bid");
        if (numberInput.value > 36) {
            return alert("Такого числа нету");
          }
          if (numberInput.value !== "" && bidInput.value !== "") {
            const bid = parseInt(bidInput.value, 10);

            // Проверяем, не превышает ли ставка текущее количество фишек
            if (bid <= chips) {
                const result = generateRandom();
                setRandomResult(result);
      
                // Вычитаем ставку из текущего количества фишек и обновляем состояние
                const newChips = chips - bid;
                onChipsChange(newChips); // Вызываем функцию обратного вызова для обновления фишек
            } else {
                alert("Недостаточно фишек для совершения ставки.");
            }
        }

    }

    return (
        <main style={styles.Roulette}>
           
            {randomResult}
            <br></br>
            <p>Ваше число:</p>
            <input id="number" type="number"></input><button>Подтвердить</button>
            <p>Ваша ставка:</p>
            <input id="bid" type="number"></input><button onClick={handleClick}>Подтвердить</button>
            <form>
                <p>
                    <input type="radio" value="even" name="number" />EVEN
                </p>
                <p>
                    <input type="radio" value="odd" name="number" />ODD
                </p>
            </form>
            <form>
                <p>
                    <input type="radio" value="even" name="number" />1-18
                </p>
                <p>
                    <input type="radio" value="odd" name="number" />19-36
                </p>
            </form>
        </main>
    )
}

export default Roulette;

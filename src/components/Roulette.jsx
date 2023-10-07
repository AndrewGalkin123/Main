import React, { useState } from 'react';
import { styles } from "/Casino/casino/src/styles"

const Roulette = ({ chips, onChipsChange }) => {

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
        const evenRadio = document.getElementById("evenRadio");
        const oddRadio = document.getElementById("oddRadio");
        const even = document.getElementById("even");
        const odd = document.getElementById("odd");

        if (numberInput.value > 36) {
            return alert("Такого числа нету");
        }
        let oddNumber = 0;
        let evenNumber = 0;
        if (oddRadio.checked) {
            oddNumber = parseInt(odd.value, 10);
        } else if (evenRadio.checked) {
            evenNumber = parseInt(even.value, 10);
        }

        const bid = parseInt(bidInput.value, 10) + oddNumber || evenNumber;
        const number = parseInt(numberInput.value, 10);
        console.log(bid)
        if (bid > chips) {
            alert("Недостаточно фишек")
        }

        // Проверяем, не превышает ли ставка текущее количество фишек
        if (bid <= chips) {
            const result = generateRandom();
            setRandomResult(result);
            let newChips = chips - bid;  // Вычитаем ставку из текущего количества фишек и обновляем состояние
            if (result === number) {
                newChips += 36 * bid
            }
            if (evenRadio.checked && result % 2 === 0) {
                newChips += evenNumber * 2
            } else if (oddRadio.checked && result % 2 !== 0) {
                newChips += oddNumber * 2
            }

            onChipsChange(newChips); // Вызываем функцию обратного вызова для обновления фишек

        }


    }

    return (
        <main style={styles.Roulette}>

            {randomResult}
            <br></br>
            <p>Ваше число:</p>
            <input id="number" type="number"></input>
            <p>Ваша ставка:</p>
            <input id="bid" type="number"></input>
            <br></br>
            <br></br>
            <form>

                <input type="radio" value="0" name="number" id="evenRadio" />EVEN

                <input id="even"></input>
                <br></br>
                <br></br>
                <input type="radio" value="0" name="number" id="oddRadio" />ODD

                <input id="odd"></input>
            </form>
            <form>
                <p>
                    <input type="radio" value="even" name="number1" />1-18
                </p>
                <p>
                    <input type="radio" value="odd" name="number1" />19-36
                </p>
            </form>
            <br></br>
            <button onClick={handleClick}>Подтвердить</button>
        </main>
    )
}

export default Roulette;

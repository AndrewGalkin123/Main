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

        if (numberInput.value > 36 || numberInput.value < 0) {
            return alert("Такого числа нету");
        }
       
        let bid =  Number(bidInput.value)
        if (oddRadio.checked) {
            bid += Number(odd.value)
        } else if (evenRadio.checked)  {
            bid += Number(even.value)
        }
       
       
        const number = parseInt(numberInput.value, 10);
     
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
            if (evenRadio.checked && result % 2 === 0 && Number(even.value) !== 0) {
                newChips += Number(even.value) * 2
            } else if (oddRadio.checked && result % 2 !== 0 && Number(odd.value) !== 0) {
                newChips += Number(odd.value) * 2
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

                <input type="radio" name="number" id="evenRadio" />EVEN

                <input type="number" id="even"></input>
                <br></br>
                <br></br>
                <input type="radio" name="number" id="oddRadio" />ODD

                <input type="number" id="odd"></input>
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

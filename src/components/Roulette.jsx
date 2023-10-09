import React, { useState } from 'react';
import { styles } from "/Casino/casino/src/styles"
import "./Roulette.css"

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
        const firstHalfRadio = document.getElementById("firstHalfRadio");
        const secondHalfRadio = document.getElementById("secondHalfRadio")
        const firstHalf = document.getElementById("firstHalf");
        const secondHalf = document.getElementById("secondHalf")

        if (numberInput.value > 36 || numberInput.value < 0) {
            return alert("Такого числа нету");
        }

        let bid = Number(bidInput.value)
        if (oddRadio.checked && Number(odd.value) > 0) {
            bid += Number(odd.value)
        } else if (evenRadio.checked && Number(even.value) > 0) {
            bid += Number(even.value)
        }

        if (firstHalfRadio.checked && Number(firstHalf.value) > 0) {
            bid += Number(firstHalf.value)
        } else if (secondHalfRadio.checked && Number(secondHalf.value) > 0) {
            bid += Number(secondHalf.value)
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
            if (evenRadio.checked && result % 2 === 0 && Number(even.value) > 0) {
                newChips += Number(even.value) * 2
            } else if (oddRadio.checked && result % 2 !== 0 && Number(odd.value) > 0) {
                newChips += Number(odd.value) * 2
            }
            if (firstHalfRadio.checked && result >= 1 && result <= 18 && Number(firstHalf.value) > 0) {
                newChips += Number(firstHalf.value) * 2
            } else if (secondHalfRadio.checked && result > 18 && result <= 36 && Number(secondHalf.value) > 0) {
                newChips += Number(secondHalf.value) * 2
            }

            onChipsChange(newChips); // Вызываем функцию обратного вызова для обновления фишек

        }


    }

    return (
        <main style={styles.Roulette}>
            <span className='result'>
                Результат: {randomResult}
            </span>

            <form>
                <br></br>
                <p>Ваше число:</p>
                <input className='input' id="number" type="number"></input>
                <p>Ваша ставка:</p>
                <input className='input' id="bid" type="number"></input>
            </form>
            <br></br>
            <br></br>
            <form>
                <div className='forms'>
                    <input className='inputRadio' type="radio" name="number" id="evenRadio" />EVEN

                    <input className='input' type="number" id="even"></input>
                </div>
                <br></br>
                <br></br>
                <div className='forms'>
                    <input className='inputRadio' type="radio" name="number" id="oddRadio" />ODD

                    <input className='input' type="number" id="odd"></input>
                </div>
            </form>
            <br></br>
            <form>
                <div className='forms'>
                    <input className='inputRadio' type="radio" name="number" id="firstHalfRadio" />1-18

                    <input className='input' type="number" id="firstHalf"></input>
                </div>
                <br></br>
                <br></br>
                <div className='forms'>
                    <input className='inputRadio' type="radio" name="number" id="secondHalfRadio" />19-36

                    <input className='input' type="number" id="secondHalf"></input>
                </div>
            </form>
            <br></br>
            <button id='roll-button' onClick={handleClick}>Крутить</button>
        </main>
    )
}

export default Roulette;

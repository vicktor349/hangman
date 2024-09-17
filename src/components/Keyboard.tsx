import React from 'react'
import styles from "../styles/Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

const Keyboard = ({ activeLetter, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
    return (
        <div className='grid grid-cols-auto-fit-minmax gap-2'>
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key)
                const isInActive = inactiveLetters.includes(key)
                return (
                    <button onClick={() => addGuessedLetter(key)}
                        disabled={isInActive || isActive}
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${isInActive ? styles.inactive : ""}`}
                        key={key}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard
import React from 'react'

const HangmanWord = () => {
    const word = "hello"
    const guessedLetters = ["l"]
    return (
        <div className='flex gap-1 text-8xl font-bold capitalize font-mono'>
            {word.split("").map((letter, index) => (
                <span className='border-b border-black' key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
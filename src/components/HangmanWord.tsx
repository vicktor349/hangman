import React from 'react'


type HangmanDrawingProps = {
    guessedLetters: string[]
    wordToGuess: string
}

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanDrawingProps) => {
    const word = "hello"
    return (
        <div className='flex gap-1 text-8xl font-bold capitalize font-mono'>
            {wordToGuess.split("").map((letter, index) => (
                <span className='border-b border-black' key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
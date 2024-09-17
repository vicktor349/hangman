import React from 'react'


type HangmanDrawingProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false }: HangmanDrawingProps) => {
    return (
        <div className='flex gap-1 text-8xl font-bold capitalize font-mono'>
            {wordToGuess.split("").map((letter, index) => (
                <span className='border-b border-black' key={index}>
                    <span
                        style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color: !guessedLetters.includes(letter) && reveal ? "red" : "black" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
import React from 'react'

const HEAD = (
    <div className="w-[70px] h-[70px] rounded-full border-[10px] border-black border-solid absolute top-[50px] right-[-30px]" />
)

const BODY = (
    <div className="w-[10px] h-[150px] bg-black absolute top-[120px] right-0" />
)

const RIGHT_ARM = (
    <div className="w-[130px] h-[10px] bg-black absolute top-[120px] right-[-115px] rotate-[-30deg]" />
)

const LEFT_ARM = (
    <div className="w-[130px] h-[10px] bg-black absolute top-[120px] right-[-5px] rotate-[30deg]" />
)

const RIGHT_LEG = (
    <div className="w-[130px] h-[10px] bg-black absolute top-[300px] right-[-108px] rotate-[40deg]" />
)

const LEFT_LEG = (
    <div className="w-[130px] h-[10px] bg-black absolute top-[300px] right-[-10px] rotate-[140deg]" />
)





const HangmanDrawing = () => {
    return (
        <div className='relative'>
            <div className='absolute w-[10px] h-[50px] bg-black top-0 right-0' />
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div className='w-[200px] h-[10px] ml-[120px] bg-black' />
            <div className='h-[400px] w-[10px] bg-black ml-[120px]' />
            <div className='h-[10px] w-[250px] bg-black' />
        </div>
    )
}

export default HangmanDrawing
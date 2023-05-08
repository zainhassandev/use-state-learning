import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
export const Count = () => {
    const [count, setCount] = useState(0);
    const decriment = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Wellcome to my counter app</h1>
            <p>The count is:{count}</p>
            <Button onClick={decriment}>-</Button>
            <Button onClick={increment}>+</Button>
        </div>
    )
}

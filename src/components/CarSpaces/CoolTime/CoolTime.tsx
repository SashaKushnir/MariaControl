import React from 'react'

export const CoolTime: React.FC<{ seconds: number }> = ({seconds}) => {
    const hours = Math.trunc(seconds / 3600)
    let newSec = seconds - hours * 3600;
    const minutes = Math.trunc(newSec / 60)
    newSec-= minutes * 60
    const sec = newSec
    return <div>

        {(hours >= 1) && <span>
            {hours} год </span>}
        {((minutes >= 1) || (hours >= 1)) && <span>
            {minutes} хв </span>}
        {((sec >= 1) || (minutes >= 1) || (hours >= 1)) && <span>
            {sec} сек
        </span>}
    </div>
}
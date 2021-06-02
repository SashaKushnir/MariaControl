import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {CarSpaceItemType} from "../../redux/parking/parkingR";
import s from './CarSpaceItem.module.css'
import {parkingA} from "../../redux/parking/parkingA";
import {CoolTime} from "./CoolTime/CoolTime";

export const CarSpaceItem: React.FC<CarSpaceItemType> = ({id, disabled, callQueuedTime}) => {
    const d = useDispatch()
    const [timer, setTimer] = useState(0)
    let aInterval: any

    const timing = () => {
        if(disabled)
            aInterval = setInterval(() => {setTimer(timer + 1)}, 1000)
    }

    useEffect(() => {
        timing()
        return () => {
            clearInterval(aInterval)
        }
    },[timer])
    useEffect(() => {
        if(disabled) {
            setTimer(1)
        }
    },[disabled])
    const bookSpace = () => {
        if(!disabled){
            d(parkingA.bookSpaceItem(id))
            d(parkingA.countSpaces())
        }

    }
    return <div className={`${s.spaceI} ${disabled?s.disabled:s.selected}`} onClick={bookSpace}>
        <div>Парковочне місце №{id}</div>
        <div>
            <CoolTime seconds={timer}/>
        </div>
    </div>
}

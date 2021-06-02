import React, {Dispatch, useEffect, useState} from 'react'
import {RootState} from "../../redux/store";
import {connect, ConnectedProps, useDispatch, useSelector} from "react-redux";
import {CarSpaceItem} from "./CarSpaceItem";
import s from './CarSpaces.module.css'
import {parkingA} from "../../redux/parking/parkingA";
import {render} from "react-dom";
import {compose} from "redux";
import {CarSpaceItemType} from "../../redux/parking/parkingR";

export const CarSpaces = () => {
    const [allBooked, setAllBookedFlag] = useState(false)
    const carsSpaces = useSelector((state: RootState) => state.parkingR.carSpaces).map((spaceI, index) => {
        return <CarSpaceItem id={spaceI.id} disabled={spaceI.disabled} callQueuedTime={new Date().getTime()}
                             key={spaceI.id}/>
    })
    const d = useDispatch()
    useEffect(() => {
        d(parkingA.countSpaces())
    })
    const empty = useSelector((state: RootState) => state.parkingR.emptySpaces)
    const fooledSpaces = useSelector((state: RootState) => state.parkingR.fooledSpaces)
    useEffect(() => {
        if (fooledSpaces === carsSpaces.length)
            setAllBookedFlag(true)
        else
            setAllBookedFlag(false)
    }, [fooledSpaces])
    return <div>
        <div>
            1 година паркування – безкоштовно! Тариф – 20 грн/година»
        </div>
        <div className={s.spaceArrWrapper}>
            {carsSpaces}
        </div>
        <div>
            {empty} вільних місць
        </div>
        <div>
            {fooledSpaces} зайнятих місць
        </div>
        {allBooked && <div>
            Вибачте, але вільних місць на парковці немає
        </div>}
    </div>
}

type CaeSpacessInter = ConnectedProps<typeof connector>
class CarSpacess extends React.Component<CaeSpacessInter, { allBooked: boolean }> {
    constructor(props: CaeSpacessInter) {
        super(props);
        this.state = {
            allBooked: false
        }
    }
    componentDidMount() {
        this.props.count()

    }
    componentDidUpdate(prevProps: Readonly<CaeSpacessInter>, prevState: Readonly<{ allBooked: boolean }>, snapshot?: any) {
        if(prevProps.fooledSpaces !== this.props.fooledSpaces) {
            if (this.props.fooledSpaces === this.props.carsSpaces.length) {
                this.setState({
                    allBooked: true
                })
            }
        }
    }

    render() {
    return <div>
        <div>
            1 година паркування – безкоштовно! Тариф – 20 грн/година»
        </div>
        <div className={s.spaceArrWrapper}>
            {
                this.props.carsSpaces.map((spaceI, index) => {
            return <CarSpaceItem id={spaceI.id} disabled={spaceI.disabled} callQueuedTime={new Date().getTime()}
            key={spaceI.id}/>})
            }
        </div>
        <div>
            {this.props.emptySpaces} вільних місць
        </div>
        <div>
            {this.props.fooledSpaces} зайнятих місць
        </div>
        {this.state.allBooked && <div>
            Вибачте, але вільних місць на парковці немає
        </div>}
    </div>
}
}
const mstp = (state:RootState) => ({
    carsSpaces: state.parkingR.carSpaces,
    fooledSpaces: state.parkingR.fooledSpaces,
    emptySpaces: state.parkingR.emptySpaces,
})

const connector = connect(mstp, {
    count: parkingA.countSpaces})


export default compose(
    connector
)(CarSpacess)

// useEffect(() => {
//     if (fooledSpaces === carsSpaces.length)
//         setAllBookedFlag(true)
//     else
//         setAllBookedFlag(false)
// }, [fooledSpaces])
import {ActionsTypes} from "../store";
import {parkingA} from "./parkingA";

interface InitialParkingType {
    carSpaces : Array<CarSpaceItemType>
    emptySpaces: number
    fooledSpaces : number
}

export interface CarSpaceItemType {
    id: number
    disabled: boolean
    callQueuedTime?: number
}

export const createRandomCarSpace = (parkingSpace: number = 10): Array<CarSpaceItemType> => {
    const carSpaces:Array<CarSpaceItemType> = []
    for (let i = 0; i < parkingSpace; i ++) {
        carSpaces.push({
            id: i + 1,
            disabled: false,
        })
    }
    return carSpaces.map((carSpace) => {
        carSpace.disabled =  Math.random() < 0.5
        return carSpace
    })
}

const initialParking : InitialParkingType = {
    carSpaces: createRandomCarSpace(),
    emptySpaces: 0,
    fooledSpaces: 0
}

export const parkingR = (parkingState: InitialParkingType = initialParking, action: ActionsTypes<typeof parkingA>): InitialParkingType => {
    switch (action.type) {
        case "SET_BOOKED_ITEM":
            return {
                ...parkingState,
                carSpaces: [...parkingState.carSpaces].map((carSpaceItem) => {
                    if(carSpaceItem.id === action.id) {
                        carSpaceItem.disabled = true
                    }
                    return carSpaceItem
                })
            }
        case "COUNT_SPACES":
            return {
                ...parkingState,
                emptySpaces: parkingState.carSpaces.reduce((acum, curr) => {
                    if(!curr.disabled)
                        acum++
                    return acum
                }, 0),
                fooledSpaces: parkingState.carSpaces.reduce((acum, curr) => {
                    if(curr.disabled)
                        acum++
                    return acum
                }, 0),
            }
        default:
            return parkingState
    }
}
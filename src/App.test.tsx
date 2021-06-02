import React from 'react';
import {parkingR} from "./redux/parking/parkingR";
import {parkingA} from "./redux/parking/parkingA";
import ReactDOM from 'react-dom';
import {AppWrapper} from "./App";
import CarSpacess, {CarSpaces, Componentt} from "./components/CarSpaces/CarSpaces";
;
const ReactTestRenderer = require('react-test-renderer');



/*
* Testing components
* */

/*Testing whole app*/
test("Check for app component being rendered and crashed", () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppWrapper/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
//  End of testing App

//  End of testing components


/*
  *Testing reducer: parkingR
*/
const testState = {
  carSpaces: [
    {
      id: 1,
      disabled: false,
    },
    {
      id: 2,
      disabled: true,
    },
    {
      id: 3,
      disabled: false,
    }
  ],
  emptySpaces: 0,
  fooledSpaces: 0
}
/*
* Testing action countSpaces*/
test("count fooled and empty parking spaces", () => {
  // Preparing data and actions
  const action = parkingA.countSpaces()
  // run reducer
  const newState = parkingR(testState, action)
  // expectations
  expect(newState.fooledSpaces).toBe(1)
  expect(newState.emptySpaces).toBe(2)
})

describe("component", () => {
  test("check for state", () => {

    const renderer = ReactTestRenderer.create(
       <CarSpacess/>
    );
    const instance = renderer.getInstance()
    expect(instance?.state.allBooked).toBeFalsy()
  })
})
/*
* Testing action bookSpaceItem*/
test("check if parking space has become fooled", () => {
  // Preparing data and actions
  const action = parkingA.bookSpaceItem(1)
  // run reducer
  const newState = parkingR(testState, action)
  // expectations
  expect(newState.carSpaces[0].disabled).toBe(true)
})
//  End of testing parkingR
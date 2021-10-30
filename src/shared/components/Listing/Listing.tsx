/**
 * @fileoverview ./src/shared/components/Listing/Listing.tsx
 * @description
 * Listing child component for List parent component.
 */
import React, { Props } from 'react'
import Accordian from '../../models/Accordian'

const Listing: React.FC<Accordian> = (props: Accordian) => {
  const OFF_STATE = 'off'
  const ON_STATE = 'on'
  const clickHandler = (event: React.UIEvent<HTMLHeadingElement>) => {
    const DEFAULT_TAB_OFFSET: number = 1
    const initArray: string[] = []
    const newState = initArray.concat(props.listDataFromApi)
    const tabIndexSelection: number = (event && event.target) 
      ? event && event.target && event.target['tabIndex']
      : DEFAULT_TAB_OFFSET
    const ind: number = (tabIndexSelection-1)

    newState[ind] = props.localState[ind] !== OFF_STATE
      ? OFF_STATE 
      : ON_STATE
    props.updateOr(newState)
  }
  return (
    <li className="A-list-component__listing">
      <h2 className="A-list-component__header"
          tabIndex={(props.index+1)}
          aria-expanded={props.localState[props.index] !== props.val ? 'true' : 'false'}
          onKeyPress={clickHandler}
          onClick={clickHandler}>section {props.index}</h2>
      <ul className={props.localState[props.index]}>
        <li>data regarding listing ({props.index}): {props.val}</li>
      </ul>
    </li>
  )
}

export default Listing

// EOF

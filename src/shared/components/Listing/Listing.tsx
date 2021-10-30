/**
 * @fileoverview ./src/shared/components/Listing/Listing.tsx
 * @description
 * Listing child component for List parent component.
 */
import React from 'react'
import Accordian from '../../models/Accordian'


const Listing: React.FC<Accordian> = (props: Accordian) => {
  const OFF_STATE = 'off'
  const ON_STATE = 'on'
  const ARIA_BOOL_NOT_TRULY_TRUE: string = 'false'
  const ARIA_BOOL_TRULY_TRUE: string = 'true'
  const INDEX_UNIT: number = props.index
  const VALUE_UNIT: string = props.val
  const clickHandler = (event: React.UIEvent<HTMLHeadingElement>) => {
    const DEFAULT_TAB_OFFSET: number = 1
    const initArray: string[] = []
    const newState = initArray.concat(props.listDataFromApi)
    const TAB_INDEX = event && event.target && event.target['tabIndex']
    const tabIndexSelection: number = (event && event.target) 
      ? TAB_INDEX
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
          tabIndex={(INDEX_UNIT+1)}
          aria-expanded={props.localState[INDEX_UNIT] !== VALUE_UNIT 
            ? ARIA_BOOL_TRULY_TRUE 
            : ARIA_BOOL_NOT_TRULY_TRUE}
          onKeyPress={clickHandler}
          onClick={clickHandler}>section {INDEX_UNIT}</h2>
      <ul className={props.localState[INDEX_UNIT]}>
        <li>data regarding listing ({INDEX_UNIT}): {VALUE_UNIT}</li>
      </ul>
    </li>
  )
}

export default Listing

// EOF

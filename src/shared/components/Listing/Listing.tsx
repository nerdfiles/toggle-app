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
  const ARIA_BOOL_NOT_TRULY_TRUE: boolean = false
  const ARIA_BOOL_TRULY_TRUE: boolean = true
  const sectionHeaderOnClick = (event: React.UIEvent<HTMLHeadingElement>) => {
    const DEFAULT_TAB_OFFSET: number = 1
    const initData: string[] = []
    const newState = initData.concat(props.getDataFromApi)
    const TAB_INDEX = event && event.target && event.target['tabIndex']
    const tabIndexSelection: number = (event && event.target) 
      ? TAB_INDEX
      : DEFAULT_TAB_OFFSET
    const INDEX_UNIT: number = (tabIndexSelection-1)

    newState[INDEX_UNIT] = props.localState[INDEX_UNIT] !== OFF_STATE
      ? OFF_STATE 
      : ON_STATE
    props.updateOr(newState)
  }

  return (
    <li className="A-list-component__listing">
      <h2 className="A-list-component__header"
          tabIndex={(props.index+1)}
          aria-expanded={props.localState[props.index] !== props.val 
            ? ARIA_BOOL_TRULY_TRUE 
            : ARIA_BOOL_NOT_TRULY_TRUE}
          onKeyPress={sectionHeaderOnClick}
          onClick={sectionHeaderOnClick}>section {props.index}</h2>
      <ul className={props.localState[props.index]}>
        <li>data regarding listing ({props.index}): {props.val}</li>
      </ul>
    </li>
  )
}

export default Listing

// EOF

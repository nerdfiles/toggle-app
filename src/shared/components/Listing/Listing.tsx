/**
 * @fileoverview ./src/shared/components/Listing/Listing.tsx
 * @description
 * Listing child component for List parent component.
 */
import React from 'react'
import Accordian from '../../models/Accordian'
import DataShell from '../../models/DataShell'


const Listing: React.FC<Accordian> = (props: Accordian) => {
  const OFF_STATE = 'off'
  const ON_STATE = 'on'
  const ARIA_BOOL_NOT_TRULY_TRUE: boolean = false
  const ARIA_BOOL_TRULY_TRUE: boolean = true
  const resetData = (shellList: DataShell[]) => {
    shellList.forEach((val) => {
      val.mode = 'off'
    })
  }
  const sectionHeaderOnClick = (event: React.UIEvent<HTMLHeadingElement>) => {
    resetData(props.getDataFromApi)
    const DEFAULT_TAB_OFFSET: number = 1
    const initData: DataShell[] = []
    const newState: DataShell[] = initData.concat(props.getDataFromApi)
    const TAB_INDEX: number = event && event.target && event.target['tabIndex']
    const tabIndexSelection: number = (event && event.target) 
      ? TAB_INDEX
      : DEFAULT_TAB_OFFSET
    const INDEX_UNIT: number = (tabIndexSelection-1)
    console.log(TAB_INDEX)

    const itemModeContext = newState && newState[INDEX_UNIT] 
      ? newState[INDEX_UNIT] 
      : { mode: 'off' }
    itemModeContext.mode = props && props.localState 
      && props.localState[INDEX_UNIT] 
      && props.localState[INDEX_UNIT].mode !== OFF_STATE
        ? OFF_STATE 
        : ON_STATE
    props.updateOr(newState)
  }

  return (
    <li className="A-list-component__listing">
      <h2 className="A-list-component__header"
          tabIndex={(props.index+1)}
          aria-expanded={props.localState[props.index].mode !== props.val.mode
            ? ARIA_BOOL_TRULY_TRUE 
            : ARIA_BOOL_NOT_TRULY_TRUE}
          onKeyPress={sectionHeaderOnClick}
          onClick={sectionHeaderOnClick}>section {props.index}</h2>
      <ul className={props.localState[props.index].mode}>
        <li>init data regarding listing ({props.index}): {props.val.mode}</li>
      </ul>
    </li>
  )
}

export default Listing

// EOF

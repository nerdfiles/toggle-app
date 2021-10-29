import React, { Props } from 'react'

interface SetLocalState {
  (localState: string): string;
}

interface Accordian {
  localState: object,
  listDataFromApi: string[],
  key: number,
  index: number,
  val: string,
  setLocalState: SetLocalState
}

const Listing: React.FC<Accordian> = ({ listDataFromApi, index, val, localState, setLocalState }: Accordian) => {
  const OFF_STATE = 'off'
  const ON_STATE = 'on'

  const clickHandler = (e: any) => {
    const newState = [].concat(listDataFromApi)
    const tabIndexSelection = e.target.tabIndex
    newState[(tabIndexSelection-1)] = localState[(tabIndexSelection-1)] !== OFF_STATE
      ? OFF_STATE 
      : ON_STATE
    setLocalState(newState)
  }
  return (
    <li className="A-list-component__listing">
      <h2 className="A-list-component__header"
          tabIndex={(index+1)}
          aria-expanded={localState[index] !== val ? 'true' : 'false'}
          onKeyPress={clickHandler}
          onClick={clickHandler}>section {index}</h2>
      <ul className={localState[index]}>
        <li>data regarding listing ({index}): {val}</li>
      </ul>
    </li>
  )
}

export default Listing

import React, { Props } from 'react'

interface SetLocalState {
  (payload: any[]): void;
}

interface Accordian {
  localState: object,
  listDataFromApi: any[],
  key: number,
  index: number,
  val: string,
  updateOr: SetLocalState
}

const Listing: React.FC<Accordian> = (props: Accordian) => {
  const OFF_STATE = 'off'
  const ON_STATE = 'on'

  const clickHandler = (event: React.FormEvent<HTMLHeadingElement>) => {
    const a: any[] = []
    const newState: any[] = a.concat(props.listDataFromApi)
    console.log(event)
    const tabIndexSelection: number = 1
    const ind: number = (tabIndexSelection-1)
    newState[ind] = props.localState[ind] !== OFF_STATE
      ? OFF_STATE 
      : ON_STATE
    props.updateOr({ payload: newState })
  }
  return (
    <li className="A-list-component__listing">
      <h2 className="A-list-component__header"
          tabIndex={''+(index+1)}
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

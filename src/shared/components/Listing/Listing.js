import React from 'react'

const Listing: React.FC = ({ data, index, val, sectionState, setSectionState }) => {
  const OFF_STATE = 'off'
  const ON_STATE = 'on'

  const clickHandler = (e) => {
    const newState = [].concat(data)
    const tabIndexSelection = e.target.tabIndex
    newState[(tabIndexSelection-1)] = sectionState[(tabIndexSelection-1)] !== OFF_STATE
      ? OFF_STATE 
      : ON_STATE
    setSectionState(newState)
  }
  return (
    <li className="A-list-component__listing">
      <h2 className="A-list-component__header"
          tabIndex={(index+1)}
          aria-expanded={sectionState[index] !== val ? 'true' : 'false'}
          onKeyPress={clickHandler}
          onClick={clickHandler}>section {index}</h2>
      <ul className={sectionState[index]}>
        <li>data regarding listing ({index}): {val}</li>
      </ul>
    </li>
  )
}

export default Listing

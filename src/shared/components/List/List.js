import React, { useState } from 'react';

const List: React.FC = () => {
  const listDataFromApi = ['off', 'off', 'off'];
  const [sectionState, setSectionState] = useState(listDataFromApi)
  const clickHandler = (e) => {
    const newState = [].concat(listDataFromApi)
    const tabIndexSelection = e.target.tabIndex
    newState[(tabIndexSelection-1)] = sectionState[(tabIndexSelection-1)] !== 'off' ? 'off' : 'on'
    setSectionState(newState)
  }

  return (
    <>
      <div className="O-list-component__container">
        <ul aria-label="list of whateverness" 
            className="M-list-component__list">
          {
            listDataFromApi.map((val, index) => {
              return (
                <li className="A-list-component__listing" key={index}>
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
            })
          }
        </ul>
      </div>
    </>
  );
}

export default List;

import React, { useState } from 'react';
import apiData from '../../services/api'
import Listing from '../Listing/Listing';

const List: React.FC = () => {
  const listDataFromApi = ['off', 'off', 'off'];
  //const asyncDataFromApi = await apiData();
  const [localState, setLocalState] = useState(listDataFromApi)
  return (
    <>
      <div className="O-list-component__container">
        <ul aria-label="list of whateverness" 
            className="M-list-component__list">
          {
            (listDataFromApi && listDataFromApi.length)
            ? listDataFromApi.map((val, index) => {
              return (
                <Listing localState={localState} 
                         listDataFromApi={listDataFromApi}
                         setLocalState={setLocalState} 
                         key={index} 
                         index={index} 
                         val={val} />
              )
            })
            : <div>None</div>
          }
        </ul>
      </div>
    </>
  );
}

export default List;

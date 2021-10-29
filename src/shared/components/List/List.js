import React, { useState } from 'react';
import apiData from '../../services/api'
import Listing from '../Listing/Listing.js';

const List: React.FC = async () => {
  const listDataFromApi = ['off', 'off', 'off'];
  //const asyncDataFromApi = await apiData();
  const [sectionState, setSectionState] = useState(listDataFromApi)
  return (
    <>
      <div className="O-list-component__container">
        <ul aria-label="list of whateverness" 
            className="M-list-component__list">
          {
            listDataFromApi.length
            ? listDataFromApi.map((val, index) => {
              return (
                <Listing sectionState={sectionState} 
                         setSectionState={setSectionState} 
                         key={index} 
                         data={listDataFromApi} 
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

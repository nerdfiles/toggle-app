/**
 * @fileoverview ./src/shared/components/List/List.tsx
 * @description
 * A list container component.
 *
 * listDataFromApi could be a list of objects instead of "stateful" strings, 
 * which are loaded via pubsub (think resthooks.org) for async REST with HATEOAS 
 * or just by some async promise-work; e.g., 
 * ```
 * [{ status: 'off', content: 'blah blah' }, { status: 'off', content: 'blah blah' }, ...]
 * ```
 * then map over the objects, check the status property for meaningful truth 
 * or whatever hierarchicalization you wish in business logic
 */
import React, { useState } from 'react';
import apiData from '../../services/api'
import Listing from '../Listing/Listing';


const List: React.FC = () => {
  const listDataFromApi: string[] = ['off', 'off', 'off'];
  //const asyncDataFromApi = await apiData();
  const [localState, setLocalState] = useState(listDataFromApi)
  const updateOr = (payload: string[]) => {
    setLocalState(payload)
  }

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
                         updateOr={updateOr} 
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

// EOF

/**
 * @fileoverview ./src/shared/components/List/List.tsx
 * @description
 * A list container component.
 *
 * getDataFromApi could be a list of objects instead of "stateful" strings, 
 * which are loaded via pubsub (think resthooks.org) for async REST with HATEOAS 
 * or just by some async promise-work; e.g., 
 * ```
 * [{ status: 'off', content: 'blah blah' }, { status: 'off', content: 'blah blah' }, ...]
 * ```
 * then map over the objects, check the status property for meaningful truth 
 * or whatever hierarchicalization you wish in business logic
 *
 * say
 *
 * const asyncDataFromApi = await apiData();
 */
import React, { useState } from 'react';
import apiData from '../../services/api'
import Listing from '../Listing/Listing';
import DataShell from '../../models/DataShell'


const List: React.FC = () => {
  const getDataFromApi: DataShell[] = [
    { mode: 'off' }, 
    { mode: 'off' }, 
    { mode: 'off' }, 
    { mode: 'on' }, 
    { mode: 'off' }, 
    { mode: 'off' }
  ];
  const [localState, setLocalState] = useState(getDataFromApi)
  const updateOr = (payload: DataShell[]) => {
    setLocalState(payload)
  }

  return (
    <>
      <div className="O-list-component__container">
        <h1>list component</h1>
        <ul aria-label="list of whateverness" 
            className="M-list-component__list">
          {
            (getDataFromApi && getDataFromApi.length)
            ? getDataFromApi.map((val, index) => {
              return (
                <Listing localState={localState} 
                         getDataFromApi={getDataFromApi}
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

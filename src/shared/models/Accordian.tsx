/**
 * @fileoverview
 * @description
 */

import DataShell from './DataShell'


interface SetLocalState {
  (payload: DataShell[]): void;
}

interface Accordian {
  localState: DataShell[],
  getDataFromApi: DataShell[],
  key: number,
  index: number,
  val: DataShell,
  updateOr: SetLocalState
}

export default Accordian

// EOF

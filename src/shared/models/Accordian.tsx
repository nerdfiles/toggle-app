/**
 * @fileoverview
 * @description
 */
interface SetLocalState {
  (payload: string[]): void;
}

interface Accordian {
  localState: string[],
  getDataFromApi: string[],
  key: number,
  index: number,
  val: string,
  updateOr: SetLocalState
}

export default Accordian

// EOF

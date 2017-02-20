import { ActionCreator, ActionCreatorsMapObject, Dispatch } from 'redux';
declare function wrapActionCreator<T extends ActionCreator<T> | ActionCreatorsMapObject>(actionCreators: any): (dispatch: Dispatch<any>) => T;
export default wrapActionCreator;

import { FETCH_PROJECT_DATA } from '../constants/actionTypes';

const initialState = {
  projects: []
}
  
export const reducers = (data = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_DATA:
      data.projects = action.payload;
      return {...data};
    default:
      return data;
  }
};
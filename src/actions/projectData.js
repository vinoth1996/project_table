import { FETCH_PROJECT_DATA } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProjectData = () => async (dispatch) => {
    try {
        const {data} = await api.getProjectData();
        dispatch({ type: FETCH_PROJECT_DATA, payload: data.data });
    } catch (error) {
        console.log(error.message);
    }
}
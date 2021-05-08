import axios from 'axios';

const url = "http://timeapi.kaaylabs.com/api/v1/project_view/";

export const getProjectData = () => axios.get(url);
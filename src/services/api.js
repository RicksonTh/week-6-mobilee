import axios from 'axios';

const api = axios.create({
//Intacia-se o axios para definir uma variável baseUrl nele
    baseURL: 'https://week-6-b.herokuapp.com',
});

export default api;
//Exporta a api
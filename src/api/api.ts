import axios from 'axios';

export default axios.create({
    baseURL: 'https://equipo4-4c-2do-parcial-awos.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json' 
    }
});
//const BASE_API = 'http://192.168.1.12:3333';
const BASE_API = 'https://radios-api-production.up.railway.app'


export default {
   
    getRadios: async () => {
        const response = await fetch(`${BASE_API}/radios/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        return response;
    }
   
  
  
   
};
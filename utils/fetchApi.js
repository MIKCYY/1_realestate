import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
   const {data} = await axios.get((url), {
     headers: {
       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key':  'd33e876dadmsh280f1e81d8c884ap1b9a20jsn2949d79c2435',
       
  }
   
   });
   return data; 
}

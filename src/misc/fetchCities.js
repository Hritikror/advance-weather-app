import React from 'react'


const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const GEO_API_OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

const fetchCities = async (input) => {
    try {
        const response = await fetch(
          `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
          GEO_API_OPTIONS
        );
    
        const data = await response.json();
        console.log(data)
        return data;
      } catch (error) {
        console.log(error);
        return;
      }

}

export default fetchCities

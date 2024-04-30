import React, {useState, useContext} from 'react'
import './Search.css'
import { AsyncPaginate } from 'react-select-async-paginate'
import fetchCities from '../../misc/fetchCities'
import WaetherDataContext from './../../misc/Context'

const Search = () => {
  

  // return (
  //   <div className='search-box'>
  //     <input placeholder='Search City...'/>
  //   </div>
  // )
  const {settingUpWeatherData, searchValue, setSearchValue } = useContext(WaetherDataContext);

  async function loadOptions(enteredData) {
    //console.log(enteredData)
    const cities = await fetchCities(enteredData);
    //console.log(cities)
    return {
      options: cities.data.map((city) => {
        return {
          value: `${city.name}`,
          label: `${city.name}, ${city.countryCode}`,
        };
        
      }),
    }
  }

  function onChangeHandler(inputValue) {
    console.log(inputValue)
    setSearchValue(inputValue)
    settingUpWeatherData(inputValue.value)
  }

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
      className='search-box'
    />
  )
}

export default Search

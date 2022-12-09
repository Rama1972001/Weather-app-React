import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoUrl, Api } from "../api";

const SearchSection = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GeoUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            Api
        )

            .then(resp => resp.json())
            .then(resp => {
                return {
                    options: resp.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div className="app-top">
            <AsyncPaginate className="top-input"
                placeholder="Search For City"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            /></div>

    );
}

export default SearchSection;
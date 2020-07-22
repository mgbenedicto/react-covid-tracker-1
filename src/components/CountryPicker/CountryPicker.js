import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleChangeCountry }) => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const countriesAPI = async () => {
            setCountryData(await fetchCountries());
        };

        countriesAPI();
    }, [setCountryData]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=''
                onChange={(e) => {
                    handleChangeCountry(e.target.value);
                }}
            >
                <option value=''>-Global-</option>
                {countryData.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;

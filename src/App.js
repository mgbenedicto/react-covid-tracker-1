import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleChangeCountry = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        //set state
        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                    <img
                        className={styles.image}
                        src='https://www.pon-cat.com/application/files/7915/8400/2602/home-banner.jpg'
                        alt='virus1'
                    />
                    <div className={styles.textcontainer}>
                        <h1 className={styles.headertext}>COVID-19 Tracker</h1>
                        <p className={styles.subtext}>
                            Based on covid19.mathdro.id/api
                        </p>
                    </div>
                </div>
                <Cards data={data} />
                <CountryPicker handleChangeCountry={this.handleChangeCountry} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;

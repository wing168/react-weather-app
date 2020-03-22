import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

import './search-bar.styles.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }


render () {
    const { input } = this.state;
    const { searchedWeather } = this.props;
    return(
        <div className='form p-3'>
            <form onSubmit={searchedWeather}>
                <div className='search-bar form-group d-flex mx-auto mt-3'>
                    <input type='text' className='form-control' value={input} name='city'  placeholder='Search by city' onChange={this.handleChange} ></input>
                    <button type="submit" className='search-submit'><FontAwesomeIcon icon={faSearchLocation} /></button>
                    
                </div>  
            </form>
           
        </div>
    );
};
}

export default SearchBar;
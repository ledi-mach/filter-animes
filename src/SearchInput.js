import React, { useState } from 'react';
import useDebounce from './useDebounce';

const SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const deboucedChange = useDebounce(onChange, 500);

    const handleChange = (event) => {
        setDisplayValue(event.target.value);
        deboucedChange(event.target.value);
    }
    return (
        <div className='search-input'>

            <label className="label-input">
                <input type="text"
                    className='input-field'
                    value={displayValue}
                    onChange={handleChange}
                    placeholder='Digite o anime aqui.' />
            </label>
            
        </div>
    )
}

export default SearchInput;
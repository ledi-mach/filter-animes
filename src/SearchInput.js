import React, { useState } from 'react';
import useDebounce from './useDebounce';

const SearchInput = ({ value, onChange }) => { //value é valor do texto e onChange a função que vamos chamar quando o texto mudar;
    const [displayValue, setDisplayValue] = useState(value);
    const deboucedChange = useDebounce(onChange, 500);

    const handleChange = (event) => {
        setDisplayValue(event.target.value);
        deboucedChange(event.target.value);
    }
    return (
        <input type="text"
            value={displayValue}
            onChange={handleChange} />
    )
}

export default SearchInput;
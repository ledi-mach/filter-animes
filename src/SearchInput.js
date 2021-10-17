import React from 'react';

const SearchInput = ({value, onChange}) => { //value é valor do texto e onChange a função que vamos chamar quando o texto mudar;

const handleChange = (event) => {
onChange(event.target.value);
}
    return (
    <input type="text" value={value} onChange={handleChange} />
)
}

export default SearchInput;
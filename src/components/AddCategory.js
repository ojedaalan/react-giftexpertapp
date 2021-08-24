import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('');
    //console.log(inputValue);
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length>1){
            setcategories( cats => [ inputValue, ...cats]);
            setInputValue('');

        }
       // console.log('Submit hecho')
       
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
                />
        </form>
    )
}

AddCategory.prototype = {
    setcategories: PropTypes.func.isRequired

}

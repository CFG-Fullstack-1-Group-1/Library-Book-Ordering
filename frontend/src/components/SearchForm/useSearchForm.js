import { useState, useEffect } from 'react';
import validateSearchInfo from './validateSearchInfo';

const useSearchForm = validateSearchInfo => {

    const [values, setValues] = useState({
        // Make sure the values are the same as the name attribute in Form.js so you can automatically fill stuff in
        title: '',
        author: '',
        year: ''
    });

    const [errors, setErrors] = useState({});

// e is short for event 
// This will update the values of the form inputs
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // We are displaying the error values within the use form function itself by returning errors and running our validations
        setErrors(validateSearchInfo(values));
    };

    return { handleChange, values, handleSubmit, errors };
}; 
// https://youtu.be/KGFG-yQD7Dw

export default useSearchForm;
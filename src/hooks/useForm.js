import { useState } from 'react';

const useForm = ( initialState = {} ) => {

    const [ values, setValues ] = useState( initialState );

    const handleInputChange = ({ target }) => {
        const {name, value} = target;

        setValues({
            ...values,
            [name]: value
        });
    };    


    return [values, handleInputChange ];
}

export default useForm;
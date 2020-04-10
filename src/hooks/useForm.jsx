import {useState} from 'react';

export const useForm = (intialValues, cbFunc) => {
    const [values, setValues] = useState(intialValues);

    const handleSubmit = e => {
        e.preventDefault();
        cbFunc()
    }

    const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value})

    const handleResetForm = () => setValues(intialValues);

    return [values, handleChange, handleSubmit, handleResetForm]
}
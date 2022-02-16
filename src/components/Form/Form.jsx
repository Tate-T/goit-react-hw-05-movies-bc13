import { useState } from 'react';
import s from './Form.module.css';

const Form = ({ onSubmit }) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.currentTarget;
        setQuery(value)
    }

    const OnSubmit = (e) => {
        e.preventDefault()
        onSubmit(query)
        setQuery('')
    }

    return (
        <form action="" className={s.form} onSubmit={onSubmit}>
            <label htmlFor="" className={s.label} onChange={handleInputChange}>
                <input type="text" name={query} className={s.input} />
            </label>
            <button>Search</button>
        </form>
    )
}

export default Form
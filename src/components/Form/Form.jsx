import { useState } from 'react';
import s from './Form.module.css';

const Form = ({ onSubmit }) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setQuery(value)
    }

    const OnSubmit = (e) => {
        e.preventDefault()
        onSubmit(query)
        setQuery('')
    }

    return (
        <form action="" className={s.form} onSubmit={OnSubmit}>
            <label className={s.label} >
                <input type="text" value={query} name='query' className={s.input} onChange={handleInputChange} />
            </label>
            <button>Search</button>
        </form>
    )
}

export default Form
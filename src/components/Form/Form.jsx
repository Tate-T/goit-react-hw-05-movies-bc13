import { useState } from 'react';
import s from './Form.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setQuery(value)
    }

    const OnSubmit = (e) => {
        e.preventDefault()
        if (query.trim() === '') {
            toast.info('Enter the name of movie');
            return
        }
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

Form.propTypes = {
    query: PropTypes.string
}

export default Form
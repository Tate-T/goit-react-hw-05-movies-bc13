import s from './MoviesPage.module.css';

const MoviesPage = () => {
    return (
        <>
            <form action="" className={s.form}>
                <label htmlFor="" className={s.label}>
                    <input type="text" className={s.input} />
                </label>
                <button>Search</button>
            </form>
            <ul>
                <li>
                    Link
                </li>
            </ul>
        </>
    )
}

export default MoviesPage
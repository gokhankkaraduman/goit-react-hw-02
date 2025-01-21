import style from './Description.module.css';

function Description() {

    return (
    <div className={style.container}>
        <h1 className={style.title}>Sip Happens Cafè</h1>
        <p className={style.text}>Please leave your feedback about our service by selecting one of the options below</p>
    </div>
    );
}

export default Description;
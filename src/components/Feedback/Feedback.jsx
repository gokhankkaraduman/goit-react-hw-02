import style from './Feedback.module.css';

function Feedback ({ feedback, total, positive}) {
    return (
        <div className={style.feedback}>
            <p  className={style.text}>Good: {feedback.good}</p>
            <p className={style.text}>Neutral: {feedback.neutral}</p>
            <p className={style.text}>Bad: {feedback.bad}</p>
            <p className={style.text}>Total: {total}</p>
            <p className={style.text}>Positive: {positive} % {positive > 50 ? ("🎉🎊") : positive === 50 ? "😊" :("🙁")}</p>
        </div>
    )
}

export default Feedback;
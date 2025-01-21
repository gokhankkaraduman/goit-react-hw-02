import styles from './Options.module.css';
function Options ({ updateFeedback, resetFeedback, totalFeedback }) {

    return (
        <div className={styles.options}>
            <button className={styles.good} onClick={() => updateFeedback('good')} >
                Good
            </button>
            <button className={styles.neutral} onClick={() => updateFeedback('neutral')}> 
                Neutral
            </button>
            <button className={styles.bad}  onClick={() => updateFeedback('bad')}>
                Bad
            </button>
            {
                totalFeedback > 0 ? (<button className={styles.reset} onClick={() => resetFeedback()}> Reset</button>) : null }
        </div>
    )
}
export default Options;
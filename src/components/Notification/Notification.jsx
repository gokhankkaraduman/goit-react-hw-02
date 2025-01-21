import  style from './Notification.module.css';

function Notification (){
    return (
        <div className={style.notification}>
            <p className={style.text}>There is no feedback yet</p>
        </div>
    )
}
export default Notification;
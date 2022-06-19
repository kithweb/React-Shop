import style from './FerstDisplay.module.scss'

function FerstDisplay (){
    return(
        <div className={style.container}>
            <h2 className={style.mainText}>Исключительное качество без компромиссов</h2>
            <p className={style.afterText}>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
            <a href="#" className={style.rederect}>ПОДРОБНЕЕ</a>

        </div>
    )
}
export default FerstDisplay;
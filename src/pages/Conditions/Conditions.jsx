import "./Conditions.css";

const Conditions = () =>{
    return(
        <div className="conditions">
            <div className="conditionsTitle">
            Общие условия
            </div>
            <div className="conditionsText">
            1.1. Интернет-магазин книжек является онлайн-платформой, которая позволяет покупать книги через интернет.
            </div>
            <div className="conditionsText conditionsTextLast">
            1.2. Мы работаем в соответствии с законодательством Украины.
            </div>
            <div className="conditionsTitle">
            Регистрация на сайте
            </div>
            <div className="conditionsText">
            2.1. Для того чтобы сделать заказ в интернет-магазине, необходимо зарегистрироваться на сайте.
            </div>
            <div className="conditionsText">
            2.2. При регистрации необходимо указать достоверную информацию.
            </div>
            <div className="conditionsText conditionsTextLast">
            2.3. Все персональные данные пользователей хранятся в соответствии с политикой конфиденциальности.
            </div>
            <div className="conditionsTitle">
            Оформление заказа
            </div>
            <div className="conditionsText conditionsTextLast">
            3.1. Чтобы оформить заказ, необходимо добавить выбранные товары в корзину и заполнить необходимые поля в форме заказа.
            </div>
            <div className="conditionsTitle">
            Доставка
            </div>
            <div className="conditionsText">
            4.1. Информация о доставке доступна на странице "Доставка"
            </div>
            <div className="conditionsText">
            4.2. Стоимость доставки рассчитывается автоматически и зависит от способа доставки и адреса доставки.
            </div>
            <div className="conditionsText conditionsTextLast">
            4.3. Оплата заказа производится онлайн при оформлении заказа.
            </div>
            <div className="conditionsTitle">
            Возврат
            </div>
            <div className="conditionsText">
            5.1. Информация о возврате товара доступна на странице "Возврат".
            </div>
            <div className="conditionsText conditionsTextLast">
            5.2. Если вы обнаружили дефект или брак товара, пожалуйста, обратитесь к нам в течение 7 дней с момента получения товара.
            </div>
            <div className="conditionsTitle">
            Ограничения ответственности
            </div>
            <div className="conditionsText">
            6.1. Мы не несем ответственности за возможные ошибки в описании товара.
            </div>
            <div className="conditionsText conditionsTextLast">
            6.2. Мы не несем ответственности за задержки в доставке, вызванные обстоятельствами непреодолимой силы.
            </div>
        </div>
    )
}

export default Conditions;
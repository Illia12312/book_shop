import "./Delivery.css";

const Delivery = () =>{
    return(
        <div className="delivery">
            <div className="deliveryUcrania">
                <h3 className="deliveryUcraniaTitle">Доставка по Украине</h3>
                <div className="deliveryUcraniaText">
                    <h4 className="deliveryUcraniaTextTitle">Доставка Укрпошта Експрес</h4>
                    <div className="deliveryUcraniaTextText">
                    Стоимость доставки составляет 30 грн. Без комиссий. Заказ будет доставлен в отделение Укрпочты в течение 3-5 дней. 
                    Заказ может бесплатно храниться в отделении Укрпочты 7 календарных дней. На 
                    8-й день заказ автоматически отправляется обратно отправителю. 
                    Для получения отправления необходим паспорт или удостоверение личности.
                    </div>
                    <div className="deliveryUcraniaTextText deliveryUcraniaTextTextBigMargin">
                    <b>Обратите внимание:</b> заказы отправляются на следующий рабочий день после оформления.
                    </div>
                    <h4 className="deliveryUcraniaTextTitle">Курьерская доставка Новой почты</h4>
                    <div className="deliveryUcraniaTextText deliveryUcraniaTextTextBigMargin">
                    Стоимость доставки составляет 95 грн. Без комиссий.
                    </div>
                </div>
            </div>
            <div className="deliveryWorld">
                <h3 className="deliveryUcraniaTitle deliveryWorld">Міжнародна доставка Nova Poshta Global</h3>
                <div className="deliveryUcraniaTextText">
                Nova Poshta Global с 2015 года предоставляет услуги международной 
                экспресс-доставки для своих клиентов, отправляя документы, посылки, грузы в Украину и наоборот в кратчайшие сроки.
                </div>
                <div className="deliveryUcraniaTextText">
                Стоимость доставки зависит от страны назначения, веса и габаритов отправления.
                 Рассчитывается во время оформления заказа.
                </div>
            </div>
        </div>
    )
}

export default Delivery;
import "./Payment.css";

const Payment = () =>{
    return(
        <div className="payment">
            <h3 className="paymentTitle">Оплата наличными</h3>
            <div className="paymentText">Покупку можно оплатить
             наличными или картой при доставке заказа на почтовое отделение. К каждому заказу прилагается товарный чек.</div>
             <h3 className="paymentTitle">Оплата банковским переводом</h3>
             <div className="paymentText">Если вы решили оплатить заказ с помощью банковского перевода, 
             то при оформлении заказа вам необходимо указать форму оплаты 
             "Банковский перевод". Когда заказ будет оформлен, наш менеджер свяжется с вами для подтверждения заказа и отправки счета.</div>
        </div>
    )
}

export default Payment;
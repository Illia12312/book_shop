import "./Return.css";

const Return = () =>{
    return(
        <div className="return">
            <div className="returnStart">
            Надеемся, что вы останетесь довольны своей покупкой в нашем интернет-магазине книг. Однако, если 
            вам по какой-либо причине нужно 
            вернуть или обменять товар, мы готовы предоставить вам качественный сервис по обработке возвратов.
            </div>
            <h3 className="returnTitle">Возврат товара</h3>
            <div className="returnText">
            Если вы хотите вернуть товар, то вы можете сделать это в течение 14 дней после получения заказа. 
            Товар должен быть в оригинальной упаковке и в состоянии, пригодном для продажи. Просим вас 
            связаться с нами по электронной почте или телефону, чтобы уточнить детали возврата и получить инструкции по отправке товара.
            </div>
            <h3 className="returnTitle">Обмен товара</h3>
            <div className="returnText">
            Если вам нужно обменять товар, пожалуйста, свяжитесь с нами по электронной почте 
            или телефону, чтобы уточнить детали обмена. Мы поможем вам выбрать другой товар из нашего ассортимента и организуем обмен.
            </div>
            <h3 className="returnTitle">Примечание</h3>
            <div className="returnText returnTextLast">
            Возврат денег производится после получения и проверки возвращенного товара. 
            Стоимость доставки не возвращается, если возврат происходит 
            по причинам, не связанным с дефектом товара или ошибкой со стороны нашего магазина.
            </div>
            <div className="returnText">
            Спасибо, что выбрали наш интернет-магазин книг! Если у вас есть какие-либо вопросы или проблемы, 
            не стесняйтесь связаться с нашей службой поддержки клиентов. Мы всегда готовы помочь вам!
            </div>
        </div>
    )
}

export default Return;
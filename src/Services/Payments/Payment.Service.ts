import { Payment, PaymentRegister } from "../../Models/Payments/Payment.Model";
import { getHeaderConfig, paymentAxios } from "../../Utilities";



const storePayment = async (paymentData : PaymentRegister) : Promise<Payment> => {
    try {
        const respose = await paymentAxios.post('/store', paymentData, getHeaderConfig()); 
        return respose.data;
    } catch (error) {
        throw new Error("Error al agregar miembro");
    }
}

export {storePayment}
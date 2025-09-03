import masterCard from "../../../assets/icons/paymentMethods/mastercard.svg";
import visa from "../../../assets/icons/paymentMethods/visa.svg";

function PaymentMethods() {
  return (
    <div className="flex">
      <img src={visa} alt="visa" className="w-12 me-2" />
      <img src={masterCard} alt="mastercard" className="w-12 ms-2" />
    </div>
  );
}

export default PaymentMethods;

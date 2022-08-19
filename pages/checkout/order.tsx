import {
  CustomerInfo,
  DeliveryCart,
  DiscountCard,
  OrderInfo,
  PaymentCart,
} from "../../components";

type Props = {};

export default function Orders({}: Props) {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CustomerInfo />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <PaymentCart />
              </div>
              <div className="col-md-6">
                <DeliveryCart />
              </div>
            </div>
            <DiscountCard />
            <OrderInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

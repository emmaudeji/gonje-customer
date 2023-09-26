import moment from "moment";
import Image from "next/image";
import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Loader from "../Loader";

const NotificationInfoModal = ({ toggleModal, isOpen, data }) => {
  const products = data?.orders?.products || [];
  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <div className="payment_type ">
        <div className="top-heading  pt-2">
          <h3>Order Detail</h3>
        </div>
        <div>
          <div className="row">
            <div className="col order-id-no">
              <p>{`Order# ${data?.order_id}`}</p>
              <p>
                {data?.updated_at
                  ? moment(data?.updated_at).format("DD-MM-yyyy")
                  : ""}
              </p>
            </div>
            <div className="col ">
              <p
                className="text-end"
                style={{ color: data?.orders?.status?.color }}
              >
                {data?.orders?.status?.name}
              </p>
            </div>
          </div>
          <div>
            <p className="text-center tracking-order-no">
              {" "}
              Order tracking number : {data?.orders?.tracking_number}
            </p>
            <div className="products_wraper">
              {products.map((item, index) => {
                return (
                  <div key={`key_${index}`}>
                    <div className="d-flex align-items-start">
                      {item.image && item.image.thumbnail && (
                        <Image
                          src={item.image.thumbnail}
                          width={50}
                          height={50}
                        />
                      )}
                      <div className="ps-3">
                        <p className="item-tt">{item?.name}</p>
                        <p className="desc-noti">{item?.description}</p>
                        <div className="d-flex">
                          <p className="item-pp">${item?.sale_price}</p>
                          <p className="noti-quant">Qty:{item?.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="item-tt">Total : ${data?.orders?.total} </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationInfoModal;

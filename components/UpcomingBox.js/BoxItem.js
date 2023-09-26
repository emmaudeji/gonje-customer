import Image from "next/image";
import React from "react";

const BoxItem = ({ item, updateToCart }) => {
  return (
    <div className="col-xl-6 col-lg-12 col-md-12">
      <div className="cart-wrap d-flex">
        <div className="cart-item-img">
          <Image height={100} width={100} src={item?.productImage} alt="" />
        </div>
        <div className="item-details d-flex">
          <div className="w-75">
            <h6>{item?.productName}</h6>

            <div className="add">
              <a
                className="quan"
                onClick={() => {
                  updateToCart({
                    quantity: item.productQuantity,
                    productID: item.productID,
                    shop_id: item.shop_id,
                    value: 2,
                  });
                }}
              >
                <Image
                  height={20}
                  width={20}
                  src="/assets/images/delete-icon.svg"
                  alt=""
                />
              </a>
              <span className="quan">{item?.productQuantity}</span>
              <a
                onClick={() => {
                  updateToCart({
                    quantity: item.productQuantity,
                    productID: item.productID,
                    shop_id: item.shop_id,
                    value: 0,
                  });
                }}
                className="quan"
              >
                -
              </a>
              <a
                onClick={() => {
                  updateToCart({
                    quantity: item.productQuantity,
                    productID: item.productID,
                    shop_id: item.shop_id,
                    value: 1,
                  });
                }}
                className="quan"
              >
                +
              </a>
            </div>
          </div>
          <div className="item-total w-25">
            <strong>${item?.productPrice}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;

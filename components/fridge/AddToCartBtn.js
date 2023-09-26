import { useEffect, React, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProductPop from "./productPopup";
import Image from "next/image";
export default function AddToCartBtn({ slug }) {
  // add product in to carts
  const [productslug, productSlug] = useState("");
  const [openproduct, openProduct] = useState(false);
  const onOpenProductModal = () => openProduct(true);
  const onCloseProductModal = () => openProduct(false);
  const productSlugs = (slug) => {
    productSlug(slug);
  };

  return (
    <>
      <button
        onClick={() => {
          productSlugs(slug);
          onOpenProductModal();
        }}
        type="button"
        className="btn btn-light"
      >
        <Image height={15} width={20} src="/assets/images/cart-1.svg" alt="" />
        ADD
      </button>

      <Modal
        open={openproduct}
        showCloseIcon={false}
        center
        onClose={onCloseProductModal}
        onOverlayClick={onCloseProductModal}
      >
        <ProductPop
          CloseProductModal={onCloseProductModal}
          productslug={productslug}
        ></ProductPop>
      </Modal>
    </>
  );
}

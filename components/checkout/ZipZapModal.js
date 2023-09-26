import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ZipZapModal = () => {
  return (
    <Modal open={true} showCloseIcon={false} onClose={() => {}}>
      <div className="payment_type " style={{ height: "500px" }}>
        <iframe
          style={{ width: "100% ", height: "100%" }}
          src="https://sandbox.zip.co/checkout?co=co_5lHP0DOqyqLh8VjHSSBwj6&m=039b44bb-6b55-4ae5-bd69-b257da489746"
        />
      </div>
    </Modal>
  );
};

export default ZipZapModal;

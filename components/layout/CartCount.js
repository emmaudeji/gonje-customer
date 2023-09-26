import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function CartCount() {
  const [cartcount, setcartCount] = useState(0);
  const cart = useSelector((state) => state.carts);

  return (
    <>
      <span className="badge bg-secondary">{cart}</span>
    </>
  );
}

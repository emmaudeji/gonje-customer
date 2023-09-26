import Product from "../../components/products";
import { useRouter } from "next/router";
const ProductPage = () => {
  const router = useRouter();
  return (
    <>
      <Product shopId={router.query.shopId}></Product>
    </>
  );
};
export default ProductPage;

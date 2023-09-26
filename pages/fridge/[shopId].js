import Fridge from "../../components/fridge";
import { useRouter } from "next/router";
const FridgePage = () => {
  const router = useRouter();

  return (
    <>
      <Fridge shopId={router.query.shopId}></Fridge>
    </>
  );
};
export default FridgePage;

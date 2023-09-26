import Whatnew from "../../components/whatnew";
import { useRouter } from "next/router";
const WhatnewPage = () => {
  const router = useRouter();
  console.log(router.query.shopId);
  return (
    <>
      <Whatnew shopId={router.query.shopId}></Whatnew>
    </>
  );
};
export default WhatnewPage;

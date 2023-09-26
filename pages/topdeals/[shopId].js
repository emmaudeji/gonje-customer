import TodayDeals from "../../components/topdeals";
import { useRouter } from "next/router";
const TopdealsPage = () => {
  const router = useRouter();
  return (
    <>
      <TodayDeals shopId={router.query.shopId}></TodayDeals>
    </>
  );
};
export default TopdealsPage;

import TodaySale from "../../components/todaysale";
import { useRouter } from "next/router";
const TodaySalePage = () => {
  const router = useRouter();
  return (
    <>
      <TodaySale shopId={router.query.shopId}></TodaySale>
    </>
  );
};
export default TodaySalePage;

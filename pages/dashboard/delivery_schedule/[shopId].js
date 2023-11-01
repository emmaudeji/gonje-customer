import DeliverySchedule from "../../../components/dashboard/DeliverySchedule";
import { useRouter } from "next/router";
const Deliveryschedule = () => {
  const router = useRouter();
  // console.log(router.query.shopId);

  return (
    <>
      <DeliverySchedule shopId={router.query.shopId}></DeliverySchedule>
    </>
  );
};
export default Deliveryschedule;

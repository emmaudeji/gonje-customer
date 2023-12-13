import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import useSWRInfinite from "swr/infinite";

///
import { fetcher } from "@/util/fetcher";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/button";



import moment from "moment";
import NotificationInfoModal from "./NotificationInfoModal";
const NotificationsContainer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationData, setNotification] = useState();

  return (
    <div className="notifications">
      <div className="row m-0">
        <div className="col-lg-9 mx-auto">
          <div className="outer-layer-noti all-notification">
            <div className="top-heading">
              <h3>Notifications</h3>
            </div>
            <NotificationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsContainer;

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  console.log("pageindex:", pageIndex, "prev page data", previousPageData);
  return `my/notifications?limit=${pageIndex + 9}`; // SWR key
};
const NotificationComponent = () => {
  const PAGE_SIZE = 6;
  // const [pagesize, setPagesize] =useState(5)
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  if (!data) return "loading";
  ///flatten what the fetcher returns
  const notifications = data?.[0]?.data?.notifications;
  console.log(data[0]?.data?.notifications);
  const isEmpty = data?.[0]?.length === 0;
  // We can now calculate the number of all notifications
  let totalNotifications = 0;
  for (let i = 0; i < data.length; i++) {
    totalNotifications += data[i].length;
  }

  return (
    <div>
      {notifications.map((item, index) => (
        <div
          className="slice d-flex justify-content-between align-items-center"
          key={`key_${index}`}
        >
          <div className="who-post d-flex align-items-center">
            <div className="md:block hidden">
              <Image src="/assets/images/G.svg" height={50} width={50} alt="" />
            </div>
            <div className="posted-time">
              <strong>{item.message}</strong>
              {/* <p className="pt-1">{item.orders.tracking_number}</p> */}
              <p className="pt-1">
                {item.updated_at
                  ? moment(item.updated_at).format("DD-MM-YYYY")
                  : ""}{" "}
              </p>
            </div>
          </div>
          <div className="recipe-img">
            <strong>{item.total}</strong>
            <p>{item.message}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <Button className="bg-gonje-green" onClick={() => setSize(size + 1)}>
          Load more
        </Button>
      </div>

      {isEmpty && <EmptyState errorName={`No Notification Found`} />}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  updateNotificationCount,
} from "../../actions/getNotifications";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import moment from "moment";
import NotificationInfoModal from "./NotificationInfoModal";
import Image from "next/image";
const NotificationsContainer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationData, setNotification] = useState();

  const notification = useSelector((state) => {
    return state.notificationReducer.notification;
  });

  useEffect(async () => {
    await dispatch(updateNotificationCount());

    dispatch(
      getNotifications({
        page,
      })
    )
      .then((res) => {
        if (res.data.data.length === 0) {
          setHasMore(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  const fetchMoreData = () => {
    setPage((page) => {
      return page + 1;
    });
    dispatch(
      getNotifications({
        page: page + 1,
      })
    )
      .then((res) => {
        if (res.data.data.length === 0) {
          setHasMore(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notifications">
      <div className="row m-0">
        <div className="col-lg-9 mx-auto">
          <div className="outer-layer-noti all-notification">
            <div className="top-heading">
              <h3>Notifications</h3>
            </div>
            <InfiniteScroll
              dataLength={notification?.length || 0}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Loader />}
            >
              {notification && notification.length > 0 ? (
                notification?.map((item, index) => {
                  console.log(notification)
                  return (
                    <div
                      className="slice d-flex justify-content-between align-items-center"
                      key={`key_${index}`}
                      onClick={() => {
                        setNotification(item);
                        toggleModal();
                      }}
                    >
                      <div className="who-post d-flex align-items-center">
                        <div>
                          <Image
                            src="/assets/images/G.svg"
                            height={50}
                            width={50}
                            alt=""
                          />
                        </div>
                        <div className="posted-time">
                          <strong>{item.message}</strong>
                          <p className="pt-1">{item.orders.tracking_number}</p>
                          <p className="pt-1">
                            {item.orders.updated_at
                              ? moment(item.orders.updated_at).format(
                                  "DD-MM-YYYY"
                                )
                              : ""}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="recipe-img">
                        <strong>{item.orders.total}</strong>
                        <p style={{ color: item.orders.status.color }}>
                          {item.message}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Data</p>
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <NotificationInfoModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        data={notificationData}
      />
    </div>
  );
};

export default NotificationsContainer;

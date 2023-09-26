import { LISTING_NOTIFICATIONS, UPDATE_NOTIFICATIONS_STATUS } from "../actions/type";

function notificationReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case LISTING_NOTIFICATIONS: {
      const oldNotifications = state.notification || [];
      const new_Notifications = payload?.data?.data || [];
      return {
        ...state,
        notification: [...oldNotifications, ...new_Notifications],
        unreadCount: payload.count,
      };
    }

    case UPDATE_NOTIFICATIONS_STATUS : {

      return {
        ...state,
        unreadCount :0,
      }
    }

    default:
      return state;
  }
}

export default notificationReducer;

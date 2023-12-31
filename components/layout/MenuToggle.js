import { useDispatch, useSelector } from "react-redux";
import { storeClassName } from "../../actions/setclass.js";
export default function MenuToggle() {
  const dispatch = useDispatch();

  const storeData = () => {
    dispatch(storeClassName(true));
  };

  return (
    <>
      <button
        id="menu-toggle"
        onClick={() => {
          storeData();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>
    </>
  );
}

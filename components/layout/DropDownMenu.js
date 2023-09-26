import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function DropDownMenu() {
  const router = useRouter();
  return (
    <>
      <li>
        <a
          className="dropdown-item"
          onClick={() => {
            router.push("/upcomingBox");
          }}
        >
          <Image
            className="me-2"
            src="/assets/images/upcoming-box-dropdown.svg"
            alt=""
            height={15}
            width={35}
            layout="fixed"
          />{" "}
          Upcoming box
        </a>
      </li>
      <hr />
      <li>
        <Link href="/pantry" className="dropdown-item" >
            {" "}
            <Image
              height={15}
              width={35}
              className="me-2"
              src="/assets/images/order-drop.svg"
              alt=""
            />{" "}
            My Order
        
        </Link>
      </li>
      <hr />
      {/* <li>
        <a className="dropdown-item" href="#">
          <Image
            height={15}
            width={35}
            className="me-2"
            src="/assets/images/my-cart-drop.svg"
            alt=""
          />{" "}
          My cart
        </a>
      </li> */}
      {/* <hr /> */}
      <li>
        <Link href="/manage_account" className="dropdown-item" >
            <Image
              height={15}
              width={35}
              className="me-2"
              src="/assets/images/card.svg"
              alt=""
            />{" "}
            Manage Account
          
        </Link>
      </li>
      <hr />
      <li>
        <a className="dropdown-item" href="/notifications">
          <Image
            height={15}
            width={35}
            className="me-2"
            src="/assets/images/notification-drop.svg"
            alt=""
          />
          Notifications
        </a>
      </li>
      <hr />
      <li>
        <Link href="/wallet" className="dropdown-item" >
            <Image
              height={15}
              width={35}
              className="me-2"
              src="/assets/images/wallet-drop.svg"
              alt=""
            />
            Wallet
        
        </Link>
      </li>
      <hr />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
export default function DropDownMenu() {
  const links = [
    {
      href: "/upcomingBox",
      image: "/assets/images/upcoming-box-dropdown.svg",
      label: "Upcoming box",
    },
    {
      href: "/pantry",
      image: "/assets/images/order-drop.svg",
      label: "My Order",
    },
    {
      href: "/manage_account",
      image: "/assets/images/card.svg",
      label: "Manage Account",
    },
    {
      href: "/my/transactions",
      image: "/assets/images/card.svg",
      label: "Transaction History",
    },
    {
      href: "/wallet",
      image: "/assets/images/wallet-drop.svg",
      label: "Wallet",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>
            <p className="dropdown-item flex gap-x-2 items-center">
              <Image
                className="me-2 shrink-0"
                src={link.image}
                alt={link.label}
                height={10}
                width={25}
              />
              <span className="text-sm w-6 text-ellipsis">{link.label}</span>
            </p>
          </Link>
          <hr />
        </li>
      ))}
      <hr />
    </>
  );
}

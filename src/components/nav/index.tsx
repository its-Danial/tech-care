import clsx from "clsx";
import styles from "./nav.module.css";
import Image from "next/image";

export default function Nav() {
  const links = [
    {
      icon: "/assets/icons/home_FILL0_wght300_GRAD0_opsz24.svg",
      label: "Overview",
      active: false,
    },
    {
      icon: "/assets/icons/group_FILL0_wght300_GRAD0_opsz24.svg",
      label: "Patients",
      active: true,
    },
    {
      icon: "/assets/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
      label: "Schedule",
      active: false,
    },
    {
      icon: "/assets/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg",
      label: "Message",
      active: false,
    },
    {
      icon: "/assets/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
      label: "Transactions",
      active: false,
    },
  ];

  return (
    <nav className={clsx(styles.nav, "flex items-center justify-between px-8")}>
      <Image
        src="/assets/icons/TestLogo.svg"
        alt="TestLogo"
        width="211"
        height="48"
      />
      <div className="flex h-[63px] w-[663px] items-center justify-between py-[11px]">
        {links.map((link) => (
          <div
            key={link.label}
            className={clsx(
              "flex h-full cursor-pointer items-center space-x-[17px]",
              link.active && styles.active,
            )}
          >
            <Image src={link.icon} alt={link.label} width="17" height="16" />
            <span
              className={clsx(
                styles["link-label"],
                "text-sm font-semibold leading-5 text-[var(--unnamed-color-072635)]",
              )}
            >
              {link.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex h-[44px] w-[241px] flex-row items-center space-x-2">
        <Image
          src="/assets/patients/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
          width="44"
          height="44"
          alt="senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc"
        />
        <div className="item flex h-full w-full flex-1 justify-between">
          <div className="flex h-full flex-1 flex-col justify-center text-xs">
            <span className="text-[var(--unnamed-color-072635] font-semibold">
              Dr. Jose Simmons
            </span>
            <span className="text-[var(--unnamed-color-707070)]">
              General Practitioner
            </span>
          </div>
          <div className="border-[var(--unnamed-color-ededed] flex h-full items-center space-x-3 border-l border-solid pl-3">
            <Image
              src="/assets/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
              width="19"
              height="20"
              alt="settings icon"
            />
            <Image
              src="/assets/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              width="4"
              height="18"
              alt="settings icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

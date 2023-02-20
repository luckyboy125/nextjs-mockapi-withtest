import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";

const font = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const navbar = ["Home", "About Us", "Products"];
  const navigate = useRouter();
  const NavStringType = (str: string) => {
    return "/" + str.replace(/\s/g, "").toLowerCase();
  };

  const handleNav = (nav: string) => {
    navigate.push(nav === navbar[0] ? "/" : NavStringType(nav));
  };
  return (
    <div className={styles.root}>
      {navbar.map((nav: string, index: number) => {
        return (
          <div
            className={
              navigate.pathname === NavStringType(nav)
                ? styles.activeItem
                : navigate.pathname === "/" && nav === navbar[0]
                ? styles.activeItem
                : styles.item
            }
            key={index}
            onClick={() => handleNav(nav)}
          >
            <h3 className={font.className}>{nav}</h3>
          </div>
        );
      })}
    </div>
  );
}

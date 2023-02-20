import { Roboto } from "@next/font/google";
import styles from "@/styles/Footer.module.css";

const font = Roboto({ weight: "500", subsets: ["latin"] });

export default function Footer() {
  return (
    <div className={styles.root}>
      <p className={font.className}>This is a test task</p>
      <h5 className={font.className}>Copyright@2022</h5>
    </div>
  );
}

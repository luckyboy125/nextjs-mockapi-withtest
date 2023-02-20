import { Inter } from "@next/font/google";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import styles from "@/styles/AboutUs.module.css";

const font = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1 className={font.className}>TEAM☻</h1>
      </div>

      <Grid container spacing={4} className={styles.imageRoot}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={styles.imageItem}>
            <Image
              src="/team/person1.png"
              width={270}
              height={270}
              alt="team"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={styles.imageItem}>
            <Image
              src="/team/person2.jpg"
              width={270}
              height={270}
              alt="team"
              priority
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={styles.imageItem}>
            <Image
              src="/team/person3.jpg"
              width={270}
              height={270}
              alt="team"
              priority
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={styles.imageItem}>
            <Image
              src="/team/person4.jpg"
              width={270}
              height={270}
              alt="team"
              priority
            />
          </div>
        </Grid>
      </Grid>

      <div className={styles.contactUsRoot}>
        <h1 className={font.className}>OUR CONTACTS.</h1>
        <div className={styles.contactItem}>
          <Image src="/icon/position.svg" width={30} height={30} alt="icon" />
          <span className={font.className}>
            S Sanderson Ave, Hemet, California, USA
          </span>
        </div>
        <div className={styles.contactItem}>
          <Image src="/icon/phone.svg" width={30} height={30} alt="icon" />
          <span className={font.className}>+123456789</span>
        </div>
        <div className={styles.contactItem}>
          <Image src="/icon/email.svg" width={30} height={30} alt="icon" />
          <span className={font.className}>example@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

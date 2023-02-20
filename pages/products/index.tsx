import { Inter } from "@next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import styles from "@/styles/Products.module.css";

const font = Inter({ subsets: ["latin"] });

interface resProps {
  createdAt: string;
  job: string;
  description: string;
}

export default function Products() {
  const [data, setData] = useState([]);
  const init = async () => {
    try {
      const response = await axios.get("/api/staticdata");
      setData(response.data);
    } catch (e: any) {
      console.log(e);
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1 className={font.className}>Products☻</h1>
      </div>
      <div className={styles.contentItem}>
        <Grid container spacing={4} className={styles.imageRoot}>
          {data?.map((item: resProps, key: number) => {
            return (
              <Grid item xs={12} sm={12} md={6} key={key}>
                <div className={styles.item}>
                  <div className={styles.itemFront}>
                    <Image
                      src="/icon/product_icon.svg"
                      alt="13"
                      width={45}
                      height={45}
                      priority
                    />
                  </div>
                  <div className={styles.itemMain}>
                    <div className={styles.itemHeader}>
                      <h1 className={font.className}>{item.description}</h1>
                    </div>
                    <div className={styles.itemDiv}></div>
                    <div className={styles.itemDes}>
                      <h5 className={font.className}>{item.job}</h5>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

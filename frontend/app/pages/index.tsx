import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useClock from "@/hooks/time"; // pathを適切に設定してください。
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { date, clockTime } = useClock();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Link href={`/signup`}>新規登録</Link>
        </div>
        <div>
          <Link href={`/login`}>ログイン</Link>
        </div>
      </div>

      <div className={styles.titleBlock}>
        <h1>学習時間管理アプリ</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.clock}>
          <p className={styles.clockDate}>{date}</p>
          <p className={styles.clockTime}>{clockTime}</p>
        </div>
      </div>

      <div className={styles.buttonBlock}>
        <div className={styles.startButton}>
          <a href="#">開始</a>
        </div>
        <div className={styles.endButton}>
          <a href="#">終了</a>
        </div>
      </div>
    </>
  );
}

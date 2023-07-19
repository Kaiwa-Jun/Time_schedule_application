import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/login.module.css";
import { registerUser } from "./api/usersession";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await registerUser(email, password);

      // 新規ユーザー登録成功のメッセージを表示します。
      alert("新規ユーザー登録に成功しました！");
    } catch (error) {
      // 新規ユーザー登録失敗のメッセージを表示します。
      alert("新規ユーザー登録に失敗しました。");
    }
  };

  return (
    <>
      <Head>
        <title>ログイン画面</title>
      </Head>
      <div>
        <div>
          <Link href={`/login`}>ログイン</Link>
        </div>
        <div>
          <Link href={`/`}>ホーム</Link>
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.titleBlock}>
          <h1>学習時間管理アプリ</h1>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.loginBlock}>
          <div className={styles.loginTitle}>
            <h3>SignUp</h3>
          </div>
          <div className={styles.idPassword}>
            <form onSubmit={handleSubmit}>
              <div className={styles.textForm}>
                <input
                  type="text"
                  name="ID"
                  id="30"
                  placeholder="ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  id="16"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.button}>
                <div className={styles.registerButton}>
                  <button type="submit">新規登録</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

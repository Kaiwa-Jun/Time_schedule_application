import React, { useState, FormEvent } from "react";
import Head from "next/head";
import axios from "axios";
import styles from "@/styles/login.module.css";
import { loginUser } from "./api/usersession";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = await loginUser(email, password);

      // レスポンスからトークンとユーザー情報を取得し、ローカルストレージに保存します。
      const token = data.jwt;
      const user = data.resource;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // ログイン成功のメッセージを表示し、ユーザーをホームページにリダイレクトします。
      alert("ログインに成功しました！");
      window.location.href = "/";
    } catch (error) {
      // ログイン失敗のメッセージを表示します。
      alert("ログインに失敗しました。");
    }
  };

  return (
    <>
      <Head>
        <title>ログイン画面</title>
      </Head>
      <div className={styles.title}>
        <div className={styles.titleBlock}>
          <h1>学習時間管理アプリ</h1>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.loginBlock}>
          <div className={styles.loginTitle}>
            <h3>login</h3>
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
                <div className={styles.loginButton}>
                  <button type="submit">ログイン</button>
                </div>
                <div className={styles.registerButton}>
                  <p>
                    新規登録の方は<a href="signup.html">コチラ</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

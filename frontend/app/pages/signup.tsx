import React from "react";
import Head from "next/head";
import styles from "@/styles/login.module.css";

const SignUp = () => {
    return (
    <>
        <Head>
            <title>ログイン画面</title>
        </Head>
        {/* <!-- 見出しタイトル --> */}
    <div className={styles.title}>
        <div className={styles.titleBlock}>
            <h1>学習時間管理アプリ</h1>
        </div>
    </div>
    {/* <!-- ID/パスワード部分 --> */}
    <div className={styles.login}>
        <div className={styles.loginBlock}>
            <div className={styles.loginTitle}>
                <h3>SignUp</h3>
            </div>
            <div className={styles.idPassword}>
                <form action="" method="post">
                    <div className={styles.textForm}>
                        <input type="password" name="ID" id="30" placeholder="ID"/>
                        <input type="password" name="password" id="16" placeholder="password"/>
                    </div>
                    <div className={styles.button}>
                        {/* <!-- value等確認　データの受け取りどうするか --> */}
                        <div className={styles.registerButton}>
                        <button type="submit" >新規登録</button>
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

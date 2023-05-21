import React, { useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/list.module.css";

const TimeCard = () => {
  useEffect(() => {
    document.title = "打刻リスト画面";
  }, []);

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

    <div className={styles.list}>
        <table>
            <tr>
                <th>日時</th>
                <th>開始時刻</th>
                <th>終了時間</th>
                <th>学習時間</th>
            </tr>
            <tr>
                {/* <!-- サーバーサイドから引っ張ってくる --> */}
                <td className="day">111 </td>
                <td className="startTime">222</td>
                <td className="finishTime">333</td>
                <td className="totalTime">444</td>
            </tr>
        </table>
    </div>


    {/* <!-- ボタン部分 --> */}
    <div className="button">
        <div className="buttonBlock">
            <div className="backButton">
                <a href="#">戻る</a>
            </div>
        </div>
    </div>

    </>
  );
};

export default TimeCard;

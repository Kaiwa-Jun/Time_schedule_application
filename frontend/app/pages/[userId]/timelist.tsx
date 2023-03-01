import React, { useEffect } from "react";
import Head from "next/head";

const TimeCard = () => {
  useEffect(() => {
    document.title = "打刻リスト画面";
  }, []);

  return (
    <>
      <Head>
        <title>打刻リスト画面</title>
      </Head>
      <h1>打刻リスト画面</h1>
    </>
  );
};

export default TimeCard;

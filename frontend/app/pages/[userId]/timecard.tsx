import React, { useEffect, useState } from "react";
import Head from "next/head";

const TimeCard = () => {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showEndButton, setShowEndButton] = useState(true);
  const [message, setMessage] = useState("");

  const handleStartClick = () => {
    setShowStartButton(false);
    setShowEndButton(false);
    setMessage("学習を開始しました！頑張りましょう！");
    setTimeout(() => {
      setMessage("");
      setShowStartButton(true);
      setShowEndButton(true);
    }, 3000);
  };

  const handleEndClick = () => {
    setShowStartButton(false);
    setShowEndButton(false);
    setMessage("学習を終了しました！次回も頑張りましょう！");
    setTimeout(() => {
      setMessage("");
      setShowStartButton(true);
      setShowEndButton(true);
    }, 3000);
  };

  useEffect(() => {
    document.title = "打刻画面";
  }, []);

  return (
    <>
      <Head>
        <title>打刻画面</title>
      </Head>
      <h1>打刻画面</h1>
      {showStartButton && <button onClick={handleStartClick}>開始</button>}
      {showEndButton && <button onClick={handleEndClick}>終了</button>}
      {message && <p>{message}</p>}
    </>
  );
};

export default TimeCard;

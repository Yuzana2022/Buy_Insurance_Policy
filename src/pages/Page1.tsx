import React from "react";
import styles from "../css/pages.module.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();
  const start = () => {
    navigate("/policy");
  };

  return (
    <div className={`${styles.center} ${styles.p_16}`}>
      <div className={`${styles.h_1} ${styles.mb_16}`}>
        <span>Hello There!</span>
      </div>
      <div className={`${styles.h_5} ${styles.mb_16}`}>
        <span>
          Let's buy some insurance. It is going to take only a few steps.
        </span>
      </div>
      <button className={`${styles.start_button}`} onClick={start}>
        Start
      </button>
    </div>
  );
}

export default Page1;

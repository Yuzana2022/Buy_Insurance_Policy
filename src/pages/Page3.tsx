import React, { useEffect } from "react";
import styles from "../css/pages.module.css";
import { useNavigate } from "react-router-dom";

function Page3() {
  let navigate = useNavigate();

  const [policy, setPolicy] = React.useState({
    id: "",
    name: "",
    age: "",
    country: {
      id: "0",
      name: "Hong Kong",
      currency: {
        id: "0", // think about UUID/GUID
        name: "HKD",
        rate: 1,
      },
    },
    package: {
      id: "0",
      name: "Standard",
      morePercent: 0,
    },
    premium: 0,
  });

  useEffect(() => {
    const tempPolicy = JSON.parse(localStorage.getItem("policy") || "{}");
    if (tempPolicy) {
      setPolicy(tempPolicy);
    }
  }, []);

  const back = () => {
    navigate("/policy");
  };

  const buy = () => {
    navigate("/");
  };

  return (
    <>
      <div className={`${styles.center} ${styles.p_16}`}>
        <div className={`${styles.h_1} ${styles.mb_16}`}>
          <span>Summary</span>
        </div>
        <div className={`${styles.h_5} ${styles.mb_16}`}>
          <span>{policy.name}</span>
        </div>
        <div className={`${styles.mb_16}`}>
          <span>Name: {policy.name}</span>
        </div>
        <div className={`${styles.mb_16}`}>
          <span>Age: {policy.age}</span>
        </div>
        <div className={`${styles.mb_16}`}>
          <span>Where do you live: {policy.country.name}</span>
        </div>
        <div className={`${styles.mb_16}`}>
          <span>Package: {policy.package.name}</span>
        </div>
        <div className={`${styles.mb_16}`}>
          <span>
            Premium: {policy.premium} {policy.country.currency.name}
          </span>
        </div>
        <button
          className={`${styles.back_button} ${styles.mr_8}`}
          onClick={back}
        >
          Back
        </button>
        <button className={`${styles.start_button}`} onClick={buy}>
          Buy
        </button>
      </div>
    </>
  );
}

export default Page3;

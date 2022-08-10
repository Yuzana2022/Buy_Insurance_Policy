import styles from "../css/pages.module.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const goToPage1 = () => {
    navigate("/");
  };

  return (
    <div className={`${styles.center} ${styles.p_16}`}>
      <div className={`${styles.h_1} ${styles.mb_16}`}>
        <span>Ooops</span>
      </div>
      <div className={`${styles.h_5} ${styles.mb_16}`}>
        <div><span>Your age is over our accepted limit. </span></div>
        <div><span>We are sorry but we cannot insure you now.</span></div>
      </div>
      <button className={`${styles.start_button}`} onClick={goToPage1}>
        OK:(
      </button>
    </div>
  );
}

export default ErrorPage;

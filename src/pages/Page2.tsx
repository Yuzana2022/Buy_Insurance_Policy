import React, { useEffect } from "react";
import styles from "../css/pages.module.css";
import { Country, Package } from "../interfaces/policy.interface";
import countries from "../data/countries";
import packages from "../data/packages";
import { useNavigate } from "react-router-dom";
import { setItemWithObject } from "../auth/LocalStorage";

import { useSearchParams } from "react-router-dom";

function Page2() {
  let navigate = useNavigate();

  const [searchparams] = useSearchParams();
  let id = searchparams.get("id");
  console.log("id", id);
  const [policy, setPolicy] = React.useState({
    id: "",
    name: "",
    age: 0,
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

  const [countryArray, setCountries] = React.useState<Country[]>([]);

  const [packageArray, setPackages] = React.useState<Package[]>([]);
  const [basePremium, setBasePremium] = React.useState(0);
  const [currentCurrency, setCurrentCurrency] = React.useState(
    countries[0].currency
  );
  const [currentPackage, setCurrentPackage] = React.useState(
    packages[0]
  );

  useEffect(() => {
    setCountries(countries);
    setPackages(packages);
  }, []);

  useEffect(() => {
    calculatePremium();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCurrency,currentPackage]);

  const next = () => {
    if (policy.age > 100) navigate("/error");
    else {
      setItemWithObject("policy", policy);
      navigate("/page3");
    }
  };

  const back = () => {
    navigate("/");
  };

  const valueChangedName = (e: any) => {
    let temp = policy;
    temp.name = e.target.value;
    setPolicy({
      ...temp,
      name: temp.name,
    });
  };

  const valueChangedAge = (e: any) => {
    let temp = policy;
    temp.age = e.target.value;
    setPolicy({
      ...temp,
      age: parseInt(e.target.value),
    });
    calculatePremium();
  };

  const packageChanged = (pkg: Package) => {
    let temp = policy;
    temp.package = pkg;
    setCurrentPackage(pkg);
    setPolicy({
      ...temp,
      package: pkg,
    });
  };

  const valueCountryChanged = (e: any) => {
    let index = countryArray.findIndex((c: Country) => c.id === e.target.value);
    if (index >= 0) {
      setCurrentCurrency(countryArray[index].currency);
      let temp = policy;
      temp.country = countryArray[index];
      setPolicy({
        ...temp,
        country: countryArray[index],
      });
    }
  };

  const calculatePremium = () => {
    if (currentCurrency) {
      let temp = policy;
      let tempPremium  = 10 * temp.age * currentCurrency.rate;
      setBasePremium(10 * temp.age * currentCurrency.rate);
      temp.premium =
      currentPackage.id === "0"
          ? tempPremium
          : tempPremium + (tempPremium * (currentPackage.morePercent / 100));
          
      setPolicy({
        ...temp,
        premium: temp.premium,
      });
    }
  };

  return (
    <div className={`${styles.center} ${styles.p_16}`}>
      <div className={`${styles.h_1} ${styles.mb_16}`}>
        <span>Tell us about yourself</span>
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.form_input}`}>
          <div>
            <span>Name</span>
          </div>
          <input
            className={`${styles.cus_input}`}
            type="text"
            value={policy.name}
            onChange={valueChangedName}
            placeholder="Add Text"
          />
        </div>
        <div className={`${styles.form_input}`}>
          <div>
            <span>Age</span>
          </div>
          <input
            className={`${styles.cus_input}`}
            type="number"
            value={policy.age}
            onChange={valueChangedAge}
            placeholder="Add Age"
          />
        </div>
        <div className={`${styles.form_input}`}>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Where do you live
          </label>
          <select
            id="countries"
            className={`${styles.cus_input}`}
            onChange={valueCountryChanged}
          >
            {countryArray &&
              countryArray.length > 0 &&
              countryArray.map((country: any) => (
                <>
                  <option value={country.id}>{country.name}</option>
                </>
              ))}
          </select>
        </div>
        {packageArray && packageArray.length > 0 && (
          <>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value=""
                  checked={
                    currentPackage && currentPackage.id === "0"
                  }
                  onChange={() => packageChanged(packageArray[0])}
                />
                &nbsp;
                {packageArray[0].name}
              </label>
            </div>
            <br></br>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value=""
                  checked={
                    currentPackage && currentPackage.id === "1"
                  }
                  onChange={() => packageChanged(packageArray[1])}
                />
                &nbsp;
                {packageArray[1].name}(+
                {basePremium * (packageArray[1].morePercent / 100)}
                {currentCurrency.name}, {packageArray[1].morePercent} %)
              </label>
            </div>
            <br></br>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value=""
                  checked={
                    currentPackage && currentPackage.id === "2"
                  }
                  onChange={() => packageChanged(packageArray[2])}
                />
                &nbsp;
                {packageArray[2].name} (+
                {basePremium * (packageArray[2].morePercent / 100)}
                {currentCurrency.name}, {packageArray[2].morePercent}
                %)
              </label>
            </div>
            <br></br>
          </>
        )}
        Your Premium is: {policy.premium}
        {currentCurrency.name}
        <br></br>
        <br></br>
        <button
          className={`${styles.back_button} ${styles.mr_8}`}
          onClick={back}
        >
          Back
        </button>
        <button className={`${styles.start_button}`} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Page2;

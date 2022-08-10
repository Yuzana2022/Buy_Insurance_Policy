import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from './css/pages.module.css';

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
     <div className={`${styles.content}`}>
          <div className={`${styles.center}`}>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/policy" element={<Page2 />}>
              <Route path=":id" element={<Page2 />} />
            </Route>
            <Route path="/page3" element={<Page3 />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            >
            </Route>
          </Routes>
          </div>
      </div>
    </>
  );
}

export default App;

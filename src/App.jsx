// rafce
import React, { Suspense } from "react";
// import custome styling from style.js
import styles from "./style";
// import All components
import {
  Navbar,
  Status,
  Hero,
  Business,
  Billing,
  CardDeal,
  Testimonails,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Status />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonails />
        <Clients />
        <CTA />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;

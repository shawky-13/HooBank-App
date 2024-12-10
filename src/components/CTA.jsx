// import layout from styles.js
import styles, { layout } from "../style";
// import button component
import Button from "./Button";
const CTA = () => (
  <section
    className={`${layout.section} ${styles.flexCenter} ${styles.marginY}`}
  >
    <div className="flex flex-col justify-between items-center w-full p-10 bg-black-gradient-2 rounded-[20px] flex-wrap text-center sm:text-left sm:flex-row">
      <div className="flex flex-col items-start font-poppins mb-10 sm:mb-0">
        <h2 className={`${styles.heading2} mb-5`}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[445px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;

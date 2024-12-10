// import styles from style.js file
import styles, { layout } from "../style";
// import button component
import Button from "./Button";
// import card image
import { card } from "../assets";
const CardDeal = () => (
  <section className={`${layout.section} gap-20`}>
    <div
      className={`flex flex-col w-full font-poppins ${styles.smFlexCenter} ${layout.sectionInfo} sm:w-1/2`}
    >
      <h2 className={`${styles.heading2} text-center sm:text-left`}>
        Find a better card deal in few easy steps.
      </h2>
      <p
        className={`${styles.paragraph} text-[18px] leading-[30px] mb-10 mt-10 text-center sm:text-left`}
      >
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button style="w-[170px]" />
    </div>
    <div className={`${layout.sectionImg} relative`}>
      <img
        src={card}
        alt="card_deal"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className=" absolute right-0 top-0 w-[100%] h-[100%] z-[3] rounded-full blue__gradient " />
      <div className=" absolute left-0 bottom-0 w-[50%] h-[20%] z-[0] rounded-full pink__gradient " />
    </div>
  </section>
);

export default CardDeal;

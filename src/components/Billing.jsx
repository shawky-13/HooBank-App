// import styles
import styles, { layout } from "../style";
// import billing image
import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${styles.flexCenter} ${layout.sectionReverse} gap-20`}
    >
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div className=" absolute z-[3] top-0 left-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className=" absolute z-[0] bottom-0 left-0 w-[90%] h-[90%] rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div
        className={`flex flex-col w-full font-poppins ${styles.smFlexCenter} sm:w-1/2 `}
      >
        <h2 className={`${styles.heading2} text-center sm:text-left`}>
          Easily control your billing & invoicing.
        </h2>
        <p
          className={`${styles.paragraph} text-[18px] leading-[30px] mb-10 mt-10 text-center sm:text-left`}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`${styles.flexStart}`}>
          <img src={google} alt="google_play" className="mr-5 cursor-pointer" />
          <img src={apple} alt="apple_store" className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billing;

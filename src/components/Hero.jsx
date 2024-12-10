// import styles from style file
import styles from "../style";
// importing robot & diconunt images
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`${styles.paddingY} flex flex-col space-y-8 md:space-y-0 md:flex-row`}
  >
    <div
      className={`flex-1 ${styles.flexCenter} ${styles.smFlexStart} flex-col`}
    >
      <div className="rounded-[10px] p-3 bg-black-gradient w-fit flex justify-between items-center mb-2 cursor-pointer transition-all duration-300 animate-pulse">
        <img src={discount} alt="discount" />
        <div
          className={`${styles.paragraph} uppercase font-poppins text-[12px] sm:text-[18px]`}
        >
          <span className="text-white">20%</span> discount for
          <span className="text-white"> 1month </span> account
        </div>
      </div>
      <div className=" relative w-full text-center sm:text-left">
        <h1 className=" capitalize text-white text-[65px] sm:text-[72px]">
          the next <br className="hidden sm:block" />
          <span className="text-gradient"> generation </span>
          <br className="hidden sm:block" />
          payment method
        </h1>
        <div className={`hidden ss:block ${styles.flexCenter} z-30`}>
          <GetStarted />
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </div>
    <div className={`${styles.flexCenter} flex flex-1 relative my-10 md:my-0`}>
      <img
        src={robot}
        alt="robot"
        className="w-[100%] h-[100%] translate-x-16 relative z-20"
      />
      {/* gradient start */}
      <div className="absolute z-[0] w-[80%] h-[70%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[90%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[100%] h-[90%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div
      className={`ss:hidden ${styles.flexCenter} relative w-[200px] h-[200px] mx-auto`}
    >
      <GetStarted />
    </div>
  </section>
);

export default Hero;

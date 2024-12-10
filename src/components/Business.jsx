// import some custom styles & layout from style.js file
import styles, { layout } from "../style";
// import features from constants folder in index.js file
import { features } from "../constants";
// import button && CardDeal component
import Button from "./Button";

// create Feature component
const Feature = ({ icon, content, title, index, lenght }) => (
  <div
    className={`w-full ${styles.flexCenter} duration-400 transition-all rounded-[20px] px-3 py-4 mb-2 ${index === lenght ? " bg-black-gradient" : ""} feature-card`}
  >
    <div
      className={`${styles.flexCenter} w-[64px] h-[64px] mr-3 bg-[#09977C1A] p-2 rounded-full`}
    >
      <img src={icon} alt="icon" className="w-[38px] h-[38px]" />
    </div>
    <div
      className={`flex flex-col flex-1 ${styles.flexStart} font-poppins mb-3`}
    >
      <span className="block text-[18px] text-white mb-3">{title}</span>
      <p className={`${styles.paragraph} text-[16px]`}>{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={` ${styles.flexCenter} ${layout.section} gap-20 relative`}
  >
    <div
      className={`flex flex-col w-full font-poppins ${styles.smFlexCenter} sm:w-1/2 `}
    >
      <h2 className={`${styles.heading2} text-center sm:text-left`}>
        You do the business, we’ll handle the money.
      </h2>
      <p
        className={`${styles.paragraph} text-[18px] leading-[30px] mb-10 mt-10 text-center sm:text-left`}
      >
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button style="w-[170px]" />
    </div>

    <div className={`flex flex-col flex-1 ${styles.flexCenter}`}>
      {/* call CardDeal Component */}
      {features.map((feature, index) => (
        <Feature
          key={feature.id}
          lenght={features.length - 2}
          index={index}
          {...feature}
        />
      ))}
    </div>
    {/* note: that i use spread syntax in line 55 to spread all the properites of the feature array as a props into the component */}
    {/* gradient start */}
    <div className="absolute z-[0] w-[20%] h-[10%] top-0 left-0 pink__gradient" />
    <div className="absolute z-[1] w-[30%] h-[20%] rounded-full white__gradient bottom-20" />
    <div className="absolute z-[0] w-[40%] h-[30%] left-20 bottom-40 blue__gradient" />
    {/* gradient end */}
  </section>
);

export default Business;

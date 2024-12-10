// import feedback from constants folder in index.js file
import { feedback } from "../constants/index";
// import quote image from assets folder
import { quotes } from "../assets";
// import styles && layout from style file
import styles, { layout } from "../style";
const Testimonails = () => (
  <section className={` flex flex-col ${styles.marginY} relative z-[2]`}>
    <div
      className={`flex flex-col items-center justify-between w-full mb-10 font-poppins sm:flex-row`}
    >
      <h2
        className={`${styles.heading2} text-center sm:text-left mb-5 sm:mb-0`}
      >
        What people are <br className="hidden sm:block" /> saying about us
      </h2>
      <p className={`${styles.paragraph} text-center sm:text-left`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-col sm:flex-row`}>
      {feedback.map((feed, index) => (
        <div
          key={feed.id}
          className={`feature-card rounded-[20px] p-10 transition-all duration-200 ${styles.flexStart} flex-col ${feedback.length - 1 === index ? "mr-0" : "mr-5"}`}
        >
          <img src={quotes} alt="quotes" className="w-[42px] h-[27px] mb-5" />
          <p
            className={`${styles.paragraph} leading-[32px] text-[18px] font-poppins font-normal max-w-[290px]`}
          >
            {feed.content}
          </p>
          <div className={`${styles.flexCenter} flex-row mt-10`}>
            <img
              src={feed.img}
              alt={feed.id}
              className="w-[48px] h-[48px] rounded-full mr-5"
            />
            <div className="flex flex-col font-poppins">
              <h4 className={`text-white text-[20px] leading-[32px]`}>
                {feed.name}
              </h4>
              <h4 className={`text-dimWhite text-[16px] leading-[24px]`}>
                {feed.title}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className=" absolute top-0 -left-1/2 w-[50%] h-[100%] blue__gradient z-[0]" />
  </section>
);

export default Testimonails;

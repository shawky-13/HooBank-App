// import styles from style file
import styles from "../style";
// import arrowUp image
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className=" absolute top-10 right-10 w-[90px] h-[90px] bg-blue-gradient rounded-full cursor-pointer p-[2px]">
    <div
      className={`${styles.flexCenter}  w-full h-full bg-black-gradient rounded-full transition-all duration-100 hover:scale-95 `}
    >
      <div className={`${styles.flexStart} flex-col font-poppins font-normal`}>
        <p className={`${styles.flexCenter} text-gradient capitalize`}>
          get
          <img src={arrowUp} alt="arrow-up" className="ml-1" />
        </p>
        <p className=" capitalize text-gradient">started</p>
      </div>
    </div>
  </div>
);

export default GetStarted;

// import stats array from index.js in constants folder
import { stats } from "../constants";
// import styles from style.js
import styles from "../style";
const Status = () => (
  <section
    className={`flex flex-col ${styles.smFlexStart} mb-10 space-y-10 sm:space-y-0 sm:flex-row`}
  >
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className={`${styles.flexCenter} text-white ${index === stats.length - 1 ? "pb-0 sm:pl-5 sm:pb-0" : " pb-5 sm:px-5 sm:pb-0"} flex-col sm:flex-row `}
      >
        <h2 className=" text-[41px] ">{stat.value}</h2>
        <span className="text-gradient text-[21px] font-poppins uppercase ml-4 sm:mr-16">
          {stat.title}
        </span>
        {index === stats.length - 1 ? (
          ""
        ) : (
          <div className={`w-[1px] h-[15px] bg-[#FFFFFF] hidden sm:block`} />
        )}
      </div>
    ))}
  </section>
);

export default Status;

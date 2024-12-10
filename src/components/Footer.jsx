// import footerlinks  && socialMedia  from constants folder in index.js file
import { footerLinks, socialMedia } from "../constants";
// import styles from style file
import styles from "../style";
// import bank logo from assets folder
import { logo } from "../assets";
const Footer = () => (
  <footer
    className={`${styles.smFlexCenter} justify-between flex-col flex-wrap mt-10 bg-black ${styles.padding} font-poppins space-y-10 relative z-[5] sm:space-y-0`}
  >
    <div className="w-full mb-10 flex justify-between items-center flex-wrap flex-col space-y-10 sm:space-y-0 sm:flex-row">
      <div className={`${styles.flexStart} flex-col flex-1`}>
        <a href="#home">
          <img
            src={logo}
            alt="bank_logo"
            className="w-[266px] h-[76px] mb-10 transition-all hover:scale-90 "
          />
        </a>
        <p
          className={`${styles.paragraph} max-w-[312px] text-[18px] leading-[32px]`}
        >
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div
        className={`${styles.flexStart} justify-between flex-1 flex-wrap w-full gap-10 sm:gap-0`}
      >
        {
          // map through footerLinks array and display each link
          footerLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between"
            >
              <h3 className="text-white text-[18px] font-medium mb-5">
                {link.title}
              </h3>
              <ul className="flex flex-col items-start">
                {link.links.map((link1, index) => (
                  <li
                    key={link1.name}
                    className={`${link.links.length - 1 === index ? "mb-0" : "mb-4"}`}
                  >
                    <a
                      href={link1.link}
                      target="_blank"
                      className=" no-underline capitalize font-poppins text-[16px] text-dimWhite leading-[24px] transition-all hover:text-teal-600 "
                    >
                      {link1.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
    <div className="flex w-full justify-center items-center pt-10 border-t-[1px] border-t-dimWhite flex-col space-y-10 sm:justify-between sm:space-y-0 sm:flex-row">
      <p
        className={`${styles.paragraph} text-[18px] font-normal text-center sm:text-left`}
      >
        copyright @ 2024 HooBank. All Rights Reserved.
      </p>
      <div className="flex justify-between items-center w-[190px]">
        {socialMedia.map((social) => (
          <a
            href={social.link}
            key={social.id}
            target="_blank"
            className=" no-underline capitalize font-poppins text-[16px] text-dimWhite leading-[24px] "
          >
            <img
              src={social.icon}
              alt={social.id}
              className=" transition-all hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
    <div className=" absolute z-[2] top-0 left-0 w-[100%] h-[15%] blue__gradient " />
  </footer>
);

export default Footer;

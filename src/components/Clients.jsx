// import clients from constants folder in index.js
import { clients } from "../constants/index";
// import styles from styles.js
import styles from "../style";
const Clients = () => (
  <section id="clients" className={`${styles.marginY}`}>
    <div className="flex flex-col flex-wrap justify-between items-center sm:flex-row ">
      {clients.map((client) => (
        <img
          src={client.logo}
          alt={client.id}
          className="w-[192px] cursor-pointer mb-10 transition-all hover:scale-95 sm:mb-0"
          key={client.id}
        />
      ))}
    </div>
  </section>
);
export default Clients;

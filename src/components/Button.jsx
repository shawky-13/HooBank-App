const Button = ({ style }) => (
  <div>
    <button
      type="button"
      className={`${style} rounded-[10px] bg-blue-gradient capitalize py-3 px-5 font-normal font-poppins outline-none cursor-pointer transition-all duration-200 active:scale-95`}
    >
      get started
    </button>
  </div>
);

export default Button;

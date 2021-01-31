const Input = ({ value, placeHolder, onChange, type, ...props }) => {
  return (
    <input
      className="flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
      type={type}
      placeHolder={placeHolder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default Input;

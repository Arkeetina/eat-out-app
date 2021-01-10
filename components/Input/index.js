import Head from "next/head";

const Input = ({ value, type }) => {
  return (
    <input
      className="w-50 rounded-xl border border-gray-300"
      type={type}
      value={value}
    />
  );
};

export default Input;

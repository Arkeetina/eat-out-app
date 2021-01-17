const Input = ({ value, onChange, type, ...props }) => {
  return (
    <input
      className="w-50 rounded-xl border border-gray-300"
      type={type}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default Input;
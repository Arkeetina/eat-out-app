const Textarea = ({ value, onChange, type, ...props }) => {
  return (
    <textarea
      className="w-50 rounded-xl border border-gray-300"
      type={type}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default Textarea;

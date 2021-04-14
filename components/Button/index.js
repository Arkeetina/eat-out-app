const Button = ({ value, label, onClick, type, ...props }) => {
  return (
    <button
      type={type}
      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
    >
      {label}
    </button>
  );
};

export default Button;

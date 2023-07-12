const Button = ({
  children,
  buttonOnClick,
  bgColor,
  bgSize,
  title,
  isWalletConnected,
}) => {
  return (
    <button
      className={`text-yellow-50 ${bgSize} px-2 rounded-md uppercase transition duration-200 ${bgColor} disabled:bg-gray-500 disabled:cursor-not-allowed`}
      onClick={buttonOnClick}
      disabled={isWalletConnected}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;

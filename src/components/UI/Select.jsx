const Select = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-1/4 h-8 border-2 flex justify-center items-center text-xl"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-center text-xl"
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

interface SelectButtonProps {
  text: string;
  value: any;
  handleSelected: (value: string) => void;
  selectedValue?: any;
}

const SelectButton = ({
  text,
  value,
  selectedValue,
  handleSelected,
}: SelectButtonProps) => {
  const handleSelectedChange = () => {
    handleSelected(value);
  };
  return (
    <button
      onClick={handleSelectedChange}
      className={`${
        value !== "" && (value === selectedValue)
          ? "bg-blue text-white"
          : "bg-white text-black"
      } w-full h-[50px] rounded shadow-drop-down-shadow font-medium text-xs md:text-sm`}
    >
      {text}
    </button>
  );
};

export default SelectButton;

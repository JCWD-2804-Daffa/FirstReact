import { FC } from "react";

interface TailwindButtonProps {
  id: string;
  title: string;
  type: "submit" | "reset" |"button";
  onClick: () => void;
}

const TailwindButton: FC<TailwindButtonProps> = ({
  id,
  title,
  type,
  onClick,
}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      id={id}
    >
      {title}
    </button>
  );
};

export default TailwindButton;

import { FC } from "react";

interface ReusableProps {
  description: string;
}

const ReusableText: FC<ReusableProps> = ({ description }) => {
  return (
    <div>
      <div>ReusableText</div>
      <div>{description}</div>
    </div>
  );
};

export default ReusableText;
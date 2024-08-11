import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
  para1: string;
  para2: string;
}

const ExperienceCard = ({ title, subTitle, icon, para1, para2 }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
        <p className="text-base tracking-wide ">{para1}</p>
        <p className="text-base tracking-wide ">{para2}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

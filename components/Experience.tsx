import Title from "./Title";
import { MdWork } from "react-icons/md";
import wanbuffer from "../public/img/experience/wanbuffer.webp";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Wanbuffer Services"
          subTitle="Web Developer(Intern) April 2023 - August 2023"
          icon={<img src={wanbuffer.src} alt="Icon" />}
          para1="• Successfully built the Backend of a Ecommerce website"
          para2="• Built Various APIs Using Node.js, Express, And Used MongoDB as
          &nbsp;&nbsp;a Database"
        />
      </div>
    </div>
  );
};

export default Experience;

import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          As a JavaScript backend developer with hands-on experience from a
          four-month internship and completed projects, I offer comprehensive
          services in web development with a focus on backend technologies.
          <br />
          <br />
          Here&#39;s what makes me stand out: <br />
          <br />
          Practical Experience: During my internship, Actively contributed to
          projects using JavaScript, Express, Node.js, and MongoDB. This
          hands-on experience has honed my skills in building scalable and
          efficient backend systems. <br />
          <br />
          Project Portfolio: Completed projects that showcase my ability to
          develop robust backend solutions. For example, Built RESTful APIs,
          implemented authentication and authorization mechanisms, and
          integrated databases to store and retrieve data efficiently. my
          combination of practical experience, project portfolio,
          problem-solving skills, adaptability, and collaborative approach makes
          me well-equipped to deliver high-quality backend development services
          tailored to your needs.
        </p>
        <p>
          Looking for better opportunities to enhance key skills and stay
          up-to-date with the latest best practices in web development. Excited
          to continue growing as a developer and making meaningful contributions
          to projects and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;

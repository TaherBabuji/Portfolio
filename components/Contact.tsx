import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold">Contact with me!</h1>
        <p className="text-lg tracking-wide font-medium text-center">
          I&#39;m always open to new opportunities and would love to discuss how I
          can contribute to your team.Let&#39;s talk about how my skills and
          experience can be a perfect fit for your needs.
        </p>
        <a href="mailto:aliasgertaher@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/TaherBabuji" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/taher-babuji/"
        />
        <SocialLink title="Twitter / X" link="https://x.com/Taher_b14" />
      </div>
    </div>
  );
};

export default Contact;

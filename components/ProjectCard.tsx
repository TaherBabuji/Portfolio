import Image from "next/image";
interface Props {
  title: string;
  link: string;
  link_demo: string;
  img: string;
}

const ProjectCard = ({ title, link, img, link_demo }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <a href={link} target="_blank">
        <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
          <Image
            className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
            width={350}
            height={350}
            src={img}
            alt="Amazonclone"
          />
          <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
            {title}
          </p>
        </div>
      </a>
      <a href={link} className="mt-4 hover:text-blue-500">
        <h1 className="text-2xl  font-bold text-white hover:text-blue-500">
          {link_demo}
        </h1>
      </a>
    </div>
  );
};

export default ProjectCard;

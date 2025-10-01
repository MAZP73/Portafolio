type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tech,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block bg-green-900 p-5 rounded-lg hover:bg-green-800 transition"
    >
      <img src={image} alt={title} className="rounded mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-green-800 text-sm rounded-full text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

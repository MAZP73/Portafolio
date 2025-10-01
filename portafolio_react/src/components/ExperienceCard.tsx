type ExperienceProps = {
  company: string;
  role: string;
  date: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ExperienceCard({
  company,
  role,
  date,
  description,
  tech,
  link,
}: ExperienceProps) {
  return (
    <div className="bg-green-900 p-6 rounded-lg hover:bg-green-800 transition">
      <p className="text-sm text-gray-400">{date}</p>
      <h3 className="text-xl font-semibold mt-2">
        <a href={link} target="_blank" rel="noreferrer">{role} · {company}</a>
      </h3>
      <p className="mt-3 text-gray-300">{description}</p>
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
    </div>
  );
}

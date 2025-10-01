import { experiences } from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <section className="space-y-8">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} {...exp} />
      ))}
    </section>
  );
}

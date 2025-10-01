import { socials } from "../data/social";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socials.map((social) => {
        const Icon = social.icon; // aquí conviertes la referencia en componente
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}

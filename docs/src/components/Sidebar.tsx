import SocialLinks from "./SocialLinks";

type Props = {
  section: string;
  setSection: (s: string) => void;
};

export default function Sidebar({ section, setSection }: Props) {
  const links = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  const handleClick = (id: string) => {
    setSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- Versión MÓVIL (top header) --- */}
      <div className="md:hidden w-full p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Miguel Zambrano</h1>
        <h2 className="text-sm text-gray-400">Software Engineering Student</h2>
        <p className="mt-2 text-xs text-gray-400">
          I build accessible, pixel-perfect digital experiences for the web, while continuously seeking opportunities to learn, improve, and grow as a developer.
        </p>

        {/* Links de navegación horizontales (como tabs) */}
        <nav className="mt-4 flex space-x-6 overflow-x-auto">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`pb-1 border-b-2 ${
                section === link.id
                  ? "border-white text-white font-semibold"
                  : "border-transparent text-gray-400 hover:text-white"
              } transition`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>

      {/* --- Versión DESKTOP (sidebar fijo a la izquierda) --- */}
      <aside className="hidden md:flex w-72 min-h-screen flex-col justify-between p-8 border-r border-gray-700 fixed left-0 top-0">
        <div>
          <h1 className="text-3xl font-bold">Miguel Zambrano</h1>
          <h2 className="text-lg text-gray-400">Software Engineering Student</h2>
          <p className="mt-2 text-sm text-gray-400">
            I build accessible, pixel-perfect digital experiences for the web, while continuously seeking opportunities to learn, improve, and grow as a developer.
          </p>

          <nav className="mt-10 space-y-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`block text-left w-full ${
                  section === link.id
                    ? "text-white font-semibold"
                    : "text-gray-400"
                } hover:text-white transition`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <SocialLinks />
      </aside>
    </>
  );
}
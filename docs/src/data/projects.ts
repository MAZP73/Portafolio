import dataImg from "../assets/data.png";
import frontecoImg from "../assets/fronteco.png";
import duzamImg from "../assets/duzam.png";
import asistemiImg from "../assets/asistemi.png";

export const projects = [
  {
    title: "Frontend carbon footprint calculator",
    description:
      "A service-oriented carbon footprint calculator was developed, specifically the frontend of the web application, implemented with Vue.js and TailwindCSS. This project involved developing the entire user interface and interactive elements, including features such as exporting reports in PDF format, making API calls using Axios, and implementing a modular architecture for components and files, ensuring a clean and scalable design.",
    image: frontecoImg,
    link: "https://github.com/ncastellanosort/carbon_footprint_frontend",
    tech: ["Vue", "Api Rest", "Tailwind", "Vite"],
  },
  {
    title: "Data from the carbon footprint calculator",
    description:
      "This section describes the development of a service for the carbon footprint calculator. This service is responsible for receiving data from the frontend via HTTP POST requests. It processes the data, formats it in JSON, and, using a JWT (JSON Web Token), includes the authentication token in the request headers. Finally, it communicates with the endpoint of the service that performs the actual calculation, ensuring secure and reliable data transfer in accordance with RESTful API principles.",
    image: dataImg,
    link: "https://github.com/umb-mazp73/carbon_footprint_data",
    tech: ["FasApi", "Python"],
  },
  {
    title: "Website for a Duzam S.A.S",
    description:
      "Visual improvements were made to the company's website, focusing primarily on the projects section. The organization of this section was completely restructured, resulting in a clearer, more consistent, and user-friendly layout.",
    image: duzamImg,
    link: "https://duzam.com.co/",
    tech: ["wordpress", "Hosting", "Elementor", "MySQL", "PHP"],
  },
  {
    title: "Website for a Asistemi S.A.S",
    description:
      "Visual enhancements and a complete restructuring of the manufacturing area were implemented. In addition, a new services section was added, and usability improvements were made to the website, making it more practical, accessible, and easier to navigate.",
    image: asistemiImg,
    link: "https://asistemi.com.co/",
    tech: ["wordpress", "Hosting", "Elementor", "MySQL", "PHP"],
  },
];

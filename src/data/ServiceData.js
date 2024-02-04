import { SiAdobeindesign } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: <SiAdobeindesign />,
    description:
      "UI/UX design focuses on creating intuitive, visually appealing interfaces that enhance user satisfaction. It involves understanding user needs, designing seamless interactions, and optimizing the overall experience of using a product or service. UI/UX designer uses tools like Figma, Adobe Photoshop.",
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: <FaCode />,
    description:
      "Frontend development involves building the client-side of web applications, focusing on the user interface and user experience. Frontend developers use languages like HTML, CSS, and JavaScript to create responsive, interactive interfaces that users interact with directly in their web browsers.",
  },
  {
    id: 3,
    title: "Backend Development",
    icon: <FaCodeBranch />,
    description:
      "Backend development involves building the server-side of web applications, handling data storage, security, and communication between the server and the client. Backend developers use languages like Python, Ruby, Java, or Node.js to build the logic and functionality that powers the frontend interface, often interacting with databases and other external systems.",
  },
];
export default data;

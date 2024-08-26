import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codasauras,
  neuralabs,
  anaconda,
  cpp,
  c,
  canva,
  jupyter,
  kaggle,
  keras,
  numpy,
  pandas,
  python,
  sklearn,
  tensorflow,
  vscode,
  mentoring,
  webdrishti,
  shushruta,
  arijit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Tensorflow",
    icon: mobile,
  },
  {
    title: "Scikit Learn",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Visual Studion Code",
    icon: vscode,
  },
  {
    name: "Kaggle",
    icon: kaggle,
  },
  {
    name: "Scikit Learn",
    icon: sklearn,
  },
  {
    name: "Anaconda",
    icon: anaconda,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Founder & CTO",
    company_name: "NeuraLabs",
    icon: neuralabs,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Driving the development and maintenance of machine learning applications using TensorFlow, Keras, and other advanced ML technologies, ensuring robust and scalable solutions aligned with NeuraLabs mission and vision.",
      "Leading and collaborating with cross-functional teams, including data scientists, engineers, and product managers, to deliver high-quality, innovative products that leverage cutting-edge machine learning algorithms.",
      "Implementing state-of-the-art ML models and ensuring that all solutions maintain high accuracy, efficiency, and adaptability across different use cases.",
      "Overseeing code reviews and model evaluations, offering constructive feedback, and fostering a culture of continuous improvement and technical excellence within the ML development team.",
    ],
  },
  {
    title: "Vice President",
    company_name: "Codasauras",
    icon: codasauras,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Guiding the development and maintenance of machine learning projects within the Codasauras coding community, utilizing TensorFlow, Keras, and other ML technologies to ensure that solutions are both innovative and scalable.",
      "Leading collaborations with community members, including developers, data scientists, and engineers, to foster a supportive environment that encourages the sharing of knowledge and the creation of high-impact machine learning projects.",
      "Implementing and sharing best practices for building ML models, ensuring that community projects adhere to industry standards for accuracy, efficiency, and cross-platform adaptability.",
      "Conducting code reviews and providing mentorship, offering constructive feedback to community members, and promoting a culture of continuous learning and technical excellence within Codasauras.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhinaba Biswas is a talented aspiring machine learning developer with strong technical skills and a passion for learning. His creative problem-solving and deep understanding of ML concepts enable him to deliver efficient solutions, positioning him for future success.",
    name: "Subhodip Koley",
    designation: "Assistant Professor",
    company: "Department of Information Technology@JISCE",
    image: "https://scontent.fccu13-3.fna.fbcdn.net/v/t39.30808-6/456784911_1896305164179020_8366942366692819042_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SkfQJU1BvNEQ7kNvgHIZFV1&_nc_ht=scontent.fccu13-3.fna&oh=00_AYAZq2NYq6Ra7IcRQ4d1jqiZado-LLEVVs_RsNWizBpcAw&oe=66D282E6",
  },
  {
    testimonial:
      "Skilled ML developer with a strong grasp of algorithms and data analysis, delivering innovative AI solutions with precision and efficiency",
    name: "Arijit Das",
    designation: "Student",
    company: "Department of CST@JISCE",
    image: arijit,
  },
  {
    testimonial:
      "Abhinaba Biswas is an impressive aspiring machine learning developer with a sharp mind and a strong passion for the field. His ability to tackle complex problems with innovative solutions showcases his potential. Abhinaba's commitment to growth and continuous learning makes him a valuable asset in the ML community.",
    name: "Akash Nath",
    designation: "CEO",
    company: "NeuraLabs",
    image: "https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-6/441322032_416722544563768_188312473311785929_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QWmfUeJe58EQ7kNvgHP0Ujb&_nc_ht=scontent.fccu13-1.fna&oh=00_AYDfNMr4NJkUkEbsMNlEwSQMNzgWOAJumBU1WP3uiMoRDw&oe=66D2AE58",
  },
];

const projects = [
  {
    name: "Mentoring",
    description:
      "Web-based platform where any college's Mentor & Mentee easily register themselves & interact each-other without facing any issue. Also it records Mentor & Mentee interaction. It has a feature to conduct a mentorship through online video calling mode.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "htmlcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mentoring,
    source_code_link: "https://github.com/abhinababiswas01/Mentoring",
  },
  {
    name: "Shushruta",
    description:
      "ML based website where user can diagnosis disease e.g. Diabetes, Heart & Parkinson's disease with it's simplest UI users can easily diagnose themselves.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: shushruta,
    source_code_link: "https://github.com/abhinababiswas01/Sushruta",
  },
  {
    name: "Webdrishti",
    description:
      "ML & Web based chrome extension that allows users to detect the dark patterns on any E-Commerce websites.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "chromeApi",
        color: "pink-text-gradient",
      },
    ],
    image: webdrishti,
    source_code_link: "https://github.com/abhinababiswas01/WebDrishti",
  },
];

export { services, technologies, experiences, testimonials, projects };

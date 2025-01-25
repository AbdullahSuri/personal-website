// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "Web Design",
//     description: "Creating visually appealing and user-friendly web designs.",
//   },
//   {
//     id: 2,
//     title: "Frontend Development",
//     description: "Building responsive and interactive user interfaces.",
//   },
//   {
//     id: 3,
//     title: "Backend Development",
//     description: "Developing robust server-side logic and databases.",
//   },
//   {
//     id: 4,
//     title: "Full-Stack Development",
//     description: "Combining both frontend and backend development skills.",
//   },
//   {
//     id: 5,
//     title: "Content Writing",
//     description: "Writing content for your business and companies.",
//   },
//   {
//     id: 6,
//     title: "Digital Marketing",
//     description: "Promote your business with our digital marketing team.",
//   },
// ];
// const Service = () => {
  // return (
  //   <div className="bg-black text-white py-20" id="service">
  //     <div className="container mx-auto px-8 md:px-16 lg:px-24">
  //       <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {services.map((service) => (
  //           <div
  //             key={service.id}
  //             className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
  //             transition-transform duration-300 hover:scale-105"
  //           >
  //             <div
  //               className="text-right text-2xl font-bold text-transparent bg-clip-text
  //             bg-gradient-to-r from-green-600 to-blue-400"
  //             >
  //               {service.id}
  //             </div>
  //             <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
  //             bg-gradient-to-r from-green-400 to-blue-500">
  //               {service.title}
  //             </h3>
  //             <p className="mt-2 text-gray-300">{service.description}</p>
  //             <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
// };

// export default Service;


import React from "react";
import { FaDocker, FaDatabase, FaRegLightbulb, FaRobot, FaBrain, FaStream, FaClipboardCheck } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";

const skillsData = [
  {
    category: "Backend Development",
    icon: <BiCodeBlock className="w-6 h-6 text-blue-500 mr-2" />,
    skills: [
      { name: "PHP", level: "90%" },
      { name: "SQL", level: "85%" },
      { name: "Node.js", level: "75%" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <FaDocker className="w-6 h-6 text-blue-400 mr-2" />,
    skills: [
      { name: "Docker", level: "80%" },
      { name: "GitHub for Version Control", level: "90%" },
    ],
  },
  {
    category: "Machine Learning Tools",
    icon: <FaRobot className="w-6 h-6 text-yellow-500 mr-2" />, // Replaced SiAdversarial with FaRobot
    skills: [
      { name: "Adversarial Training", level: "70%" },
      { name: "LlamaIndex", level: "65%" },
      { name: "OpenAI", level: "75%" },
      { name: "Streamlit", level: "80%" },
    ],
  },
  {
    category: "Data Management",
    icon: <FaDatabase className="w-6 h-6 text-green-500 mr-2" />,
    skills: [
      { name: "SQL", level: "85%" },
      { name: "Data Visualization", level: "80%" },
      { name: "Pandas and Numpy", level: "90%" },
    ],
  },
  {
    category: "Project Management",
    icon: <FaRegLightbulb className="w-6 h-6 text-purple-500 mr-2" />,
    skills: [
      { name: "Sprint-based Development", level: "80%" },
      { name: "Timeboxing", level: "75%" },
    ],
  },
  {
    category: "Design & Compliance",
    icon: <FaClipboardCheck className="w-6 h-6 text-red-500 mr-2" />, // Replaced MdCompliance with FaClipboardCheck
    skills: [
      { name: "Responsive Design", level: "85%" },
      { name: "Compliance Audits", level: "70%" },
    ],
  },
  {
    category: "Collaboration",
    icon: <FaRegLightbulb className="w-6 h-6 text-pink-500 mr-2" />,
    skills: [
      { name: "Cross-functional Teamwork", level: "90%" },
      { name: "Product & Design Collaboration", level: "85%" },
    ],
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="space-y-8">
          {skillsData.map((category) => (
            <div key={category.category}>
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={`${category.category}-${skill.name}`} className="flex items-center">
                    <label htmlFor={skill.name} className="w-2/12">
                      {skill.name}
                    </label>
                    <div className="grow bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105"
                        style={{ width: skill.level }}
                        aria-label={`${skill.name} proficiency: ${skill.level}`}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Service;

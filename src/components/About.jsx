import React from "react";
import AboutImage from "../assets/me.png";

const About = () => {
    return (
      <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-top md:space-x-12">
            <img
              src={AboutImage}
              alt=""
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            />
            <div className="flex-1">
              <p className="text-lg mb-8 text-left">
              I am Abdullah Khan Suri, a Computer Science student at New York University specializing in software development and artificial intelligence. With hands-on experience as a Teaching Assistant, Software Development Intern, and Machine Learning Intern, I have led projects that enhance user experiences and implement advanced AI solutions.  Additionally, I have contributed to cutting-edge research in adversarial machine learning and developed data-driven tools to support educational initiatives. Passionate about leveraging technology to solve real-world problems, I am dedicated to continuous learning and innovation in the tech landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="python" className="w-2/12">
                    Python
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-11/12"
                    ></div>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="machine-learning" className="w-2/12">
                    C++/C
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-11/12"
                    ></div>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="react-js" className="w-2/12">
                    React & JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                    ></div>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="pytorch" className="w-2/12">
                    AWS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-7/12"
                    ></div>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="github" className="w-2/12">
                    Pytorch
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-8/12"
                    ></div>
                    </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between text-center">
                  <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                          3+
                      </h3>
                      <p>Years of Coding Experience</p>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                          20+
                      </h3>
                      <p>Projects Completed</p>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                          10+
                      </h3>
                      <p>Leadership Roles</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-xl">Software Engineer</p>
      </header>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Summary</h2>
        <p className="mt-4">
          A highly skilled software engineer with expertise in web development
          and a strong passion for creating efficient and scalable applications.
          Experienced in JavaScript, React, and Node.js.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Experience</h2>
        <ul className="list-disc list-inside mt-4">
          <li className="mb-4">
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-lg">ABC Company</p>
            <p className="text-lg">June 2019 - Present</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed and maintained web applications using React and
                Node.js.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver high-quality
                software solutions.
              </li>
              <li>
                Implemented responsive designs to ensure optimal user experience
                across various devices.
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-bold">Junior Software Engineer</h3>
            <p className="text-lg">XYZ Company</p>
            <p className="text-lg">January 2018 - May 2019</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Assisted in the development of web applications using HTML, CSS,
                and JavaScript.
              </li>
              <li>
                Participated in code reviews and provided constructive feedback
                to improve code quality.
              </li>
              <li>
                Worked closely with senior engineers to debug and fix software
                issues.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Education</h2>
        <ul className="list-disc list-inside mt-4">
          <li className="mb-4">
            <h3 className="text-xl font-bold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-lg">University of ABC</p>
            <p className="text-lg">2014 - 2018</p>
          </li>
        </ul>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 mt-4">
          <li className="text-lg">JavaScript</li>
          <li className="text-lg">React</li>
          <li className="text-lg">Node.js</li>
          <li className="text-lg">HTML</li>
          <li className="text-lg">CSS</li>
          <li className="text-lg">Git</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

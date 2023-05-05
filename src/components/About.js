import React from "react";

export default function About() {
  return (
    <section id="about" className="rounded-full">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" 
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Hey, I'm Arjun Dadhwal!👋🏻
          </h1>
          <br/>
          <br/>
          <p className="mb-8 leading-relaxed text-black">

          I'm a junior majoring in Computer Science at Arizona State University. I'm passionate about Software Development and enjoy learning more about my field by developing applications that solve real world problems.
          </p>
        </div>
        <div className="">
          <img
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-solid border-grey-900"
            alt="Arjun"
            src="https://i.imgur.com/3zDsMXv.jpg"
          />
        </div>
      </div>
    </section>
  );
}

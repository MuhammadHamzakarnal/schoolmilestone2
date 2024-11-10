import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image"; // Import next/image for optimized images

const About: React.FC = () => {
  return (
    <div>
      <Header />

      <div
        className="bg-cover bg-center h-72 relative"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      ></div>

      <h1 className="text-6xl font-bold text-center text-red-600 mb-6 mt-4">
        About Us
      </h1>

      <div className="py-10 px-6 relative z-10">
        <h2 className="text-5xl font-bold text-black mb-6">
          History of Our School
        </h2>

        <div className="flex flex-wrap gap-8 justify-start">
          <div className="flex-1">
            <p className="text-lg sm:text-xl text-black mb-4 font-bold">
              Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
              nibh magna. Proin risus erat, fringilla vel purus sit amet.
            </p>
            <p className="text-lg sm:text-xl text-slate-300 font-thin">
              Mauris mollis lobortis turpis, eget accumsan ante aliquam quis.
              Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis
              fermentum faucibus est, sed vehicula velit sodales vitae.
            </p>
          </div>

          <div className="flex-1">
            <p className="text-lg sm:text-xl text-black font-bold mb-4">
              Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
              nibh magna. Proin risus erat, fringilla vel purus sit amet.
            </p>
            <p className="text-lg sm:text-xl text-slate-300 font-thin">
              Mauris mollis lobortis turpis, eget accumsan ante aliquam quis.
              Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis
              fermentum faucibus est, sed vehicula velit sodales vitae.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <h3 className="text-5xl font-bold text-black">It was a great year</h3>
      </div>

      <div className="p-10 py-3 bg-red-500">
        <div className="flex flex-col md:flex-row items-center justify-between py-10">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 w-full md:w-1/2 p-6 bg-red-500 rounded-lg">
            {/* Replaced <img> with <Image> for optimization */}
            <Image
              src="https://themes.muffingroup.com/be/school2/wp-content/uploads/2018/08/home_school2_pic15.jpg"
              alt="Our School Building"
              className="max-w-[80%] h-auto mx-auto rounded-lg shadow-lg"
              width={800} // Specify the width
              height={500} // Specify the height
            />
          </div>

          <div className="w-full md:w-1/2 p-6 bg-red-500 rounded-lg text-lg sm:text-xl text-slate-600">
            <h4 className="text-xl font-bold text-white mb-4 font-sans ">
              Lorem Ipsum: A Placeholder for Text
            </h4>
            <p className="text-white font-serif font-thin ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Donec eget justo eu ante pretium cursus non a dui. Nam
              interdum, risus at pellentesque suscipit, sapien eros iaculis
              lorem, sit amet hendrerit orci nisl id quam. Quisque id mi erat.
              Sed ac egestas orci. Proin ac auctor eros. Ut suscipit leo ac
              ligula efficitur, sed laoreet lorem scelerisque. Phasellus auctor
              nulla et libero ullamcorper gravida.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Contact: React.FC = () => {
  return (
    <div>
      <Header></Header>
    <div className="py-16 px-6 bg-gray-50">
      
      <h1 className="text-5xl font-bold text-center text-red-600 mb-8">Contact Us</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-black">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Contact Information</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold text-black">Phone</h3>
            <p className="text-lg text-gray-600">+1 (123) 456-7890</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-black">Email</h3>
            <p className="text-lg text-gray-600">zku@gmail.com</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-black">Address</h3>
            <p className="text-lg text-gray-600">Futrure colony  Street 1 karachi pakistan</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a>
            </div>
          </div>
          
        
          <div className="mt-8">
            <h3 className="text-xl font-bold text-black mb-4">Our Location</h3>
            <iframe
              className="w-full h-60 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9003669308016!2d-46.57323928447406!3d-23.584404565460144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf027498f9ac61%3A0x1b9b34c3e9cc3a1c!2sSão%20Paulo%2C%20SP!5e0!3m2!1sen!2sbr!4v1638244985182!5m2!1sen!2sbr"
              allowFullScreen
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Contact;

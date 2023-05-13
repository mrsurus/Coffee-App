import React from 'react';

const Banner = () => {
  return (
    <section
      className="bg-center h-screen bg-cover py-16"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" text-base-200 md:w-1/2 mt-40 ml-2 ">
          <h1 className="text-4xl font-bold mb-4">Your First Touch</h1>
          <p className="text-xl mb-8">
          Caffeine Oasis is a cozy and inviting place that offers a variety of coffee drinks, 
          baked goods, and light snacks to its customers. The ambiance of a coffee shop is often warm
           and welcoming, with comfortable seating, soft lighting, and a relaxed atmosphere. Customers can enjoy their coffee and treats while 
          reading a book, catching up with friends, or getting some work done on their laptops.
          </p>
          <button size="lg" className="btn bg-white text-black hover:bg-gray-300">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

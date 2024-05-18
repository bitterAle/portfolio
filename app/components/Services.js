import React from 'react';

const Services = () => {
    return (
        <div>
            <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg hover:rotate-2 sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://i.pinimg.com/236x/d3/53/12/d35312eb4b37c7142612b0ff365a1f9b.jpg"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Why Mitch</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="/about"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          know more
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Services;

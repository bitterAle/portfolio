import React from 'react';

const Work = () => {
  return (
    <div>
      <section className=" p-0">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold  sm:text-4xl">Trusted by Businesses Everywhere</h2>

      <p className="mt-4  sm:text-xl">
        I've been able to work with some amazing people and craft functional UIs
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
    </div>
  );
}

export default Work;

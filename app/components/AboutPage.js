import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className='  p-0'>
            <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      I’m Mitchel Sultan. I live in Nairobi, where I develop beautiful functional websites.  </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden bg-black rotate-2 rounded-md sm:h-80 lg:h-full">
        <img
          alt=""
          src="/Mitchtop.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
            eius quidem quam repellat.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
            voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
            dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
            aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
            voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
          </p>
          <div className=' flex flex-col gap-3'>
                <span><img
                src='/git.svg'
                width={20}
                height={20}></img> Follow Me on Github</span>
                <span><img
                src='/insta.svg'
                width={20}
                height={20}></img> Follow me on Instagram</span>
                <span><img
                src='/link.svg'
                width={20}
                height={20}></img> Follow me on Linkdin</span>
                <span><img
                src='/twit.svg'
                width={20}
                height={20}></img> Follow me on Twitter</span>
            </div>
        </article>

      </div>
    </div>
  </div>
</section>

            </div>
        </div>
    );
}

export default AboutPage;

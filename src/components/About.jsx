import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-24 bg-gray-950 text-white" id="about">
      <div className="container flex items-center gap-12">
        <div className="w-[35%]">
          <div className="w-full p-14 bg-black bg-opacity-70 rounded-lg shadow-[0_0_10px_2px_rgba(225,225,225,0.2)]">
            <Image
              src="/images/hacker.webp"
              priority={true}
              height={2000}
              width={2000}
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
        <div className="w-[65%] flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <small className="text-xl font-medium text-gray-400">About</small>
            <h2 className="text-4xl font-semibold text-rose-600">
              About Myself
            </h2>
          </div>
          <div className="flex flex-col items-start gap-2 text-gray-300">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              harum ipsa aut delectus eaque ipsum numquam commodi ex vel, fugit
              cupiditate consequatur ullam at dignissimos, magni nobis molestias
              qui laboriosam doloribus corporis, voluptates alias. Saepe
              assumenda perferendis incidunt fugit nostrum eum odio error ad
              possimus sunt qui, excepturi corporis consequuntur tempora maiores
              sequi? Nulla illum id, maiores obcaecati asperiores rem ipsam
              expedita molestias reiciendis consequuntur accusantium ab dolorum
              non iure laborum, vel distinctio dolorem, doloribus ullam.
              Aliquam, in, accusantium nam iusto tempora esse blanditiis ducimus
              sed ipsam laboriosam voluptas impedit quis culpa hic, similique
              ab. Quas asperiores perspiciatis nobis assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores quas tenetur, placeat quis architecto tempore aliquid nisi
              consectetur omnis in dolor doloremque esse tempora magnam qui modi
              voluptatem. Provident, ipsum ea! Alias molestias perferendis,
              facere corporis quibusdam harum ipsum?
            </p>
          </div>
          <a href="#" className="inline-block py-1 px-2 bg-rose-600">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

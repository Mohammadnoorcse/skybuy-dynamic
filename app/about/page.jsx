"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            We Build Digital Experiences That Inspire
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our goal is to create meaningful products that connect people,
            empower businesses, and push technology forward.
          </p>
        </div>
      </section>

      {/* COMPANY MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At our company, we aim to deliver scalable, secure, and modern
            digital solutions. From idea to launch, we focus on user-friendly
            interfaces, robust backend systems, and world-class performance.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Over the years, we’ve helped startups, businesses, and enterprises
            bring their ideas to life using modern technologies like React,
            Next.js, Laravel, Node, and cloud-based tools.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/assets/mission.avif"
            width={550}
            height={400}
            alt="Mission"
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Vision & Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-indigo-600">Innovation</h3>
              <p className="text-gray-600 mt-3">
                We embrace new technologies and always push boundaries to create
                better solutions.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-indigo-600">Quality</h3>
              <p className="text-gray-600 mt-3">
                We prioritize user experience, performance, and scalability in
                every project.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-indigo-600">Integrity</h3>
              <p className="text-gray-600 mt-3">
                We maintain transparency, trust, and long-term relationships
                with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((id) => (
            <div key={id} className="text-center bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src={`/team${id}.jpg`}
                width={150}
                height={150}
                alt="Team Member"
                className="rounded-full mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Team Member {id}</h3>
              <p className="text-gray-600 text-sm">Software Engineer</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE / HISTORY */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h2>
          <div className="space-y-10 border-l-4 border-indigo-600 pl-8">
            <div>
              <h3 className="text-xl font-bold">2020 – Founded</h3>
              <p className="text-gray-600">
                Started as a small team passionate about coding and digital
                innovation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">2021 – First Milestone</h3>
              <p className="text-gray-600">
                Completed our first enterprise-level project with outstanding feedback.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">2023 – Expansion</h3>
              <p className="text-gray-600">
                Grew into a full-fledged development company with global clients.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">2025 – Today</h3>
              <p className="text-gray-600">
                Continuing to build advanced digital solutions with passion,
                creativity, and modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 bg-[#167389] text-white text-center">
        <h2 className="text-4xl font-bold">Want to Work With Us?</h2>
        <p className="mt-3 text-lg opacity-90">
          Let's build something great together.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

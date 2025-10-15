import React from "react";
import face1 from "../../../../assets/Face1.jpg";
import face2 from "../../../../assets/Face2.jpg";
import face3 from "../../../../assets/Face3.jpg";
import face4 from "../../../../assets/Face4.jpg";



const testimonials = [
  {
    id: 1,
    name: "Nai Ampem Darko Attopee I",
    quote:
      "The Noghusam Cocoa Pod Breaking Machine has completely transformed our farm operations! What used to take us hours is now done in minutes. It's efficient, easy to use, and has significantly boosted our productivity.",
    image: face2,
    alt: "Portrait of Nai Ampem Darko Attopee I",
  },
  {
    id: 2,
    name: "Mr. Ebenezer Pascal Ghunney",
    quote:
      "Since the introduction of the Noghusam Cocoa Pod Breaking Machine, work on our farm has become much easier. What used to take a full day now takes less than an hour. This innovation has truly brought relief and progress to our community farmers.",
    image: face3,
    alt: "Portrait of Mr. Ebenezer Pascal Ghunney",
  },
  {
    id: 3,
    name: "Nana Opoku Kwarteng",
    quote:
      "The Noghusam Cocoa Pod Breaking Machine represents true progress for our farmers. Its efficiency has lightened our workload and increased productivity across our communities. I commend the makers for this valuable contribution to agriculture.",
    image: face1,
    alt: "Portrait of Nana Opoku Kwarteng",
  },
  {
    id: 4,
    name: "Mrs. Sally Amaki Darko Attopee",
    quote:
      "This machine has saved us so much time and effort. We no longer have to rely on excessive manual labor, and our workers are safer. A game-changer for the cocoa industry!",
    image: face4,
    alt: "Portrait of Mrs. Sally Amaki Darko Attopee",
  },
];

export default function Testimonials({ items = testimonials }) {
  return (
    <section
      className="bg-[#F7F7F7] py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl font-extrabold mb-8 leading-tight"
        >
          Happy <span className="text-[#FE5C24]">Clients</span>
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <article
              key={t.id}
              className="bg-white p-6 shadow-lg border border-slate-200 rounded-lg text-justify transform transition-transform duration-300 hover:scale-105 focus-within:scale-105"
            >
              <figure className="flex flex-col h-full">
                <blockquote className="text-sm flex-1">
                  <svg
                    className="inline-block mb-2 h-6 w-6 align-top opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M7.17 6A4.17 4.17 0 0 0 3 10.17v3.66A4.17 4.17 0 0 0 7.17 18h.33a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.17zM17.17 6A4.17 4.17 0 0 0 13 10.17v3.66A4.17 4.17 0 0 0 17.17 18h.33a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-0.33z"
                    />
                  </svg>

                  <p className="mt-2 leading-relaxed">{t.quote}</p>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-full object-cover flex-shrink-0 border-2 border-[#FE5C24]"
                  />

                  <div className="text-left">
                    <p className="text-sm font-semibold">{t.name}</p>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

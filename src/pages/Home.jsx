import AboutInnovator from "./home/sections/AboutInnovator";
import AboutProduct from "./home/sections/AboutProduct";
import Contact from "./home/sections/Contact";
import Hero from "./home/sections/Hero";
import Showcase from "./home/sections/Showcase";
import Testimonials from "./home/sections/Testimonials";

function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutProduct />
      </section>
      <section id="innovator">
        <AboutInnovator />
      </section>
      <section id="products">
        <Showcase />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </main>
  );
}

export default Home;

import { Banner } from "./Components/Banner";
import { Catogarey } from "./Components/Catogarey";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Productgrid } from "./Components/Productgrid";
import { Reviews } from "./Components/Reviews";
import { Services } from "./Components/Services";
import { Types } from "./Components/Types";
import { Insta } from "./Components/Insta";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section id="home" className="w-full">
          <Hero />
        </section>

        {/* Category Section */}
        <section id="products" className="w-full">
          <Catogarey />
        </section>

        {/* Types Section */}
        <section id="types" className="w-full">
          <Types />
        </section>

        {/* Services Section */}
        <section id="services" className="w-full">
          <Services />
        </section>

        {/* Product Grid Section */}
        <section id="products" className="w-full">
          <Productgrid />
        </section>

        {/* Banner Section */}
        <section className="w-full">
          <Banner />
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="w-full">
          <Reviews />
        </section>

        {/* Instagram Section */}
        <section className="w-full">
          <Insta />
        </section>

        {/* Footer Section */}
        <section id="contact" className="w-full">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;

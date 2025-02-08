
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
      <div className="w-full">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Category Section */}
        <section id="products">
          <Catogarey />
        </section>

        {/* Types Section */}
        <section id="services">
          <Types />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Product Grid Section */}
        <section id="products">
          <Productgrid />
        </section>

        {/* Banner Section */}
        <section>
          <Banner />
        </section>

        {/* Reviews Section */}
        <section id="reviews">
          <Reviews />
        </section>

        {/* Instagram Section */}
        <section>
          <Insta />
        </section>

        <section id="contact">
        <Footer />
        </section>
        
      </div>
    </>
  );
};

export default App;
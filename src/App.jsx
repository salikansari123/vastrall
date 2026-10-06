import { useState, useEffect } from 'react'
import Navigation from './homepage/navigation/Navigation'
import Hero from './homepage/hero/Hero'
import Bedge from './homepage/trustbadges/Bedge'
import Categories from './homepage/categories/Categories'
import Bestseller from './homepage/bestseller/Bestseller'
import Promobanner from './homepage/promobanner/Promobanner'
import Bottombanner from './homepage/bottombanner/Bottombanner'
import Footer from './homepage/footer/Footer'


const App = () => {

  const heroData = [
    {
      id: 1,
      backgroundImage: "",
      title: "UP TO 40% OFF ON WOMEN'S WEAR",
      description: "Discover trendy, comfortable and high quality wear at Vastrall.",
      buttonText: "Shop now",
      buttonLink: "/shop"
    }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bestSellers")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error("error", err))
  }, []);

  return (
    <div className='min-h-screen bg-[#f7f5f2] font-sans text-[#1e1b18]'>
      <div className='mx-auto max-w-430px bg-[#f7f5f2] shadow-[0_8px_30px_rgba(15,23,42,0.08)]'>
        <Navigation />

        <div className='px-3 pb-3'>
          {heroData.map((elem) => (
            <Hero
              key={elem.id}
              title={elem.title}
              description={elem.description}
              button={elem.buttonText}
              link={elem.buttonLink}
            />
          ))}
        </div>

        <div className='px-3'>
          <Bedge />
          <Categories />
          <Bestseller data={data} />
          <Promobanner />
          <Bottombanner />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App

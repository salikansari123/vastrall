import React from 'react'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Bedge from './components/trustbadges/Bedge'
import Categories from './components/categories/Categories'
import Bestseller from './components/bestseller/Bestseller'
import Promobanner from './components/promobanner/Promobanner'
import Bottombanner from './components/bottombanner/Bottombanner'
import Footer from './components/footer/Footer'


const App = () => {

  const heroData = [
    {
      id: 1,
      backgroundImage: "",
      title: "FASHION FOR THE ENTIRE FAMILY",
      description: "Discover trendy, comfortable and high quality wear at Vastrall.",
      buttonText: "Explore Now",
      buttonLink: "/shop"
    }
  ];
  return (
    <div className='bg-linear-to-r to-blue-300/50 from bg-slate-200'>

      <Navigation />

      {heroData.map(function (elem) {
        return <Hero key={elem.id} title={elem.title} description={elem.description} button={elem.buttonText} link={elem.buttonLink}/>
      })
      }
      <Bedge />

      <Categories />

      <Bestseller />

      <Promobanner />

      <Bottombanner />

      <Footer />

    </div>
  )
}

export default App

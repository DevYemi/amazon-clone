import React from 'react'
import Product from './product'

function Home() {
    return (
        <div className='home'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" className="home__img" />
            <div className="home__row">
                <Product
                    id={1}
                    title={"This is the new product that i want you to pay more attention to are you feeling me right now modafucker"}
                    ratings={5}
                    price={300}
                    image={"https://images-na.ssl-images-amazon.com/images/I/419JyktaYoL._AC_SY400_.jpg"}
                />
                  <Product
                    id={2}
                    title={"Garmin Forerunner 235, GPS Running Watch, Black/Gray"}
                    ratings={4}
                    price={162.00}
                    image={"https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"}
                />
            </div>
            <div className="home__row">
                <Product
                    id={3}
                    title={"UPPAbaby VISTA Travel Bag with TravelSafe"}
                    ratings={5}
                    price={9.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/61iQuqq3JwL._SX425_.jpg"}
                />
                <Product
                    id={4}
                    title={"BioShock Big Daddy Backpack"}
                    ratings={5}
                    price={79.75}
                    image={"https://images-na.ssl-images-amazon.com/images/I/912Jm1mF1qL._SX425_.jpg"}
                />
                  <Product
                    id={5}
                    title={"Infantino Flip 4-in-1 Convertible Carrier, Grey"}
                    ratings={5}
                    price={26.91}
                    image={"https://images-na.ssl-images-amazon.com/images/I/A1uC6oYXshL._SY450_.jpg"}
                />
            </div>
            <div className="home__row">
                <Product
                    id={6}
                    title={"DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"}
                    ratings={4}
                    price={64.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg"}
                />
            </div>
        </div>
    )
}

export default Home
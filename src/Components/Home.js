import React from 'react';
import "../Style/Home.css";
import Sidebar from './Sidebar';
import Heading from './Heading';
import Product from './Product';
import Categories from './Categories';

function Home() {
  return (
    <div className='container'>
        <Sidebar />
        
        <div className="home_row">
        <Categories 
            title="Refrigirator"
            image="/images/prod01.jpg" 
             />

            <Categories 
            title="Phones & Tablet"
            image="/images/xiaomi.jpg" 
           />

             <Categories 
            title="Televisions"
            image="/images/tv.jpg" 
           />

            <Categories 
            title="Grossaries"
            image="/images/groceries.jpg" 
            />

            <Categories 
            title="Electronics"
            image="/images/electronics.jpg" 
           />

            <Categories 
            title="Snickers"
            image="/images/snickers.jpg" 
            />

            <Categories 
            title="Digital Products"
            image="/images/digital.jpg" 
           />
         </div>

         <Heading heading="Top Selling Items" className="heading" />
         <div className="home_row">
             <Product 
            title="2 in 1 short sleeve.."
            price={29.19}
            image="/images/yshirt.jpg" 
            rating={5} />

            <Product 
            title="2 in 1 short sleeve.."
            price={29.19}
            image="/images/Bshirt.jpg" 
            rating={5} />

             <Product 
            title="stone wrist band"
            price={29.19}
            image="/images/wristband.jpg" 
            rating={5} />

             <Product 
            title="Sleek Bag"
            price={29.19}
            image="/images/schoolbag.jpg" 
            rating={5} />

            <Product 
            title="Hand Cream"
            price={29.19}
            image="/images/suncream.jpg" 
            rating={5} />

             <Product 
            title="2 in 1 short sleeve.."
            price={29.19}
            image="/images/roundneck.jpg" 
            rating={5} />

            <Product 
            title="Body Cream"
            price={29.19}
            image="/images/cream.jpg" 
            rating={5} />
         </div>

         <Heading heading="Flash Sales" className="heading" />
         <div className="home_row">
         <Product 
            title="Portable Table fan"
            price={29.19}
            image="/images/fan01.jpg" 
            rating={5} />
             <Product 
            title="Rechargeable Standing Fan"
            price={29.19}
            image="/images/fan02.jpg" 
            rating={5} />
             <Product 
            title="Portable Table fan"
            price={29.19}
            image="/images/fan03.jpg" 
            rating={5} />

            <Product 
            title="Portable Table fan"
            price={29.19}
            image="/images/recharg01.jpg" 
            rating={5} />
             <Product 
            title="Portable Table fan"
            price={29.19}
            image="/images/recharg02.jpg" 
            rating={5} />
             <Product 
            title="Portable Table fan"
            price={29.19}
            image="/images/recharg03.jpg" 
            rating={5} />

            <Product 
            title="Body Cream"
            price={29.19}
            image="/images/cream.jpg" 
            rating={5} />
         </div>
    </div>
  )
}

export default Home

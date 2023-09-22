/* eslint-disable no-unused-vars */

import{ useRef, useEffect, useState } from 'react'; // Import useRef and useEffect
import data from '../amazon_results'
import Bdata from '../best-sellers'
import Prod from '../components/Prod'
import MainContent from '../components/MainContent';
import './css/shop.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; 
import Best from '../components/Best';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import CustomerReview from '../components/CustomerReview'; 
import Bestseller from '../components/Bestseller';


// Convert the data object into an array of arrays
const dataArray = Object.values(data);

// Flatten the array of arrays to get a single array of all objects
const flattenedArray = dataArray.flat();




// Convert the data object into an array of arrays
const BdataArray = Object.values(Bdata);

// Flatten the array of arrays to get a single array of all objects
const BflattenedArray = BdataArray.flat();





function generateCustomerReviews(reviewsData) {
  return reviewsData.map((review, index) => (
    <CustomerReview
      key={index} // Make sure to provide a unique key prop
      name={review.name}
      rating={review.rating}
      comment={review.comment}
    />
  ));
}

const Shop = () => {
  const bigBoxRef = useRef(null); // Create a ref for the bigBox container
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
 
  const reviewsData = [
    { name: "John Doe", rating: 4.5, comment: "Great product! Highly recommended." },
    { name: "Jane Smith", rating: 5, comment: "Excellent service and quality." },
    { name: "Alice Johnson", rating: 4.0, comment: "Good value for the price." },
    { name: "Bob Brown", rating: 3.5, comment: "Average experience, could be better." },
    { name: "Eva White", rating: 5, comment: "I love this product! Will buy again." },
    { name: "Michael Davis", rating: 4.0, comment: "Fast shipping and well-packaged." },
    { name: "Sophia Wilson", rating: 4.5, comment: "Impressed with the quality." },
    { name: "William Lee", rating: 3.0, comment: "It's okay, not bad, not great." },
    { name: "Olivia Garcia", rating: 4.5, comment: "Very satisfied with my purchase." },
    { name: "James Martinez", rating: 3.5, comment: "Could improve customer support." },
    // Add more review data objects as needed
  ];
  

  // Function to scroll the carousel to the left
  const scrollLeft = () => {
    if (bigBoxRef.current) {
      bigBoxRef.current.scrollLeft -= bigBoxRef.current.offsetWidth;
    }
  };

  // Function to scroll the carousel to the right
  const scrollRight = () => {
    if (bigBoxRef.current) {
      bigBoxRef.current.scrollLeft += bigBoxRef.current.offsetWidth;
    }
  };

  // Function to start auto-scrolling
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startAutoScroll = () => {
    if (!isHovered) {
      // Scroll right when not hovered
      scrollRight();
    }
  };

  useEffect(() => {
    const interval = setInterval(startAutoScroll,3000); // Adjust the interval as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [isHovered, startAutoScroll]);

  return (
    <>
      <MainContent />

      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
      >
        <div className="bigBox" ref={bigBoxRef}>
          {flattenedArray.map((prod) => (
            <Prod key={prod.id} data={prod} />
          ))}
        </div>
      </div>

      {/* Add buttons for scrolling */}
      <div className='scrollbtn'>
        <button onClick={scrollLeft}><FaArrowLeft/> </button>
        <button onClick={scrollRight}><FaArrowRight/></button>
      </div>

     

      <Best/>

     <div className="section2">
      
      
      

            <div className="reviewBox">

             


                  <div className="reviews">
                    <h1>Client feedback</h1>
                        
                  {generateCustomerReviews(reviewsData)}

             
                        
                  </div>

                  <Footer/>

            </div>
     
            <div className="best-seller" >
          
              {BflattenedArray.map((prod) => (
                <Bestseller key={prod.id} data={prod} />
              ))}
            </div>
     </div>

      
    </>
  );
};

export default Shop;

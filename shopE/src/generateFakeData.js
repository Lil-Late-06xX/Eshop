function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // List of adjectives and nouns
const adjectives = [
    "Sleek",
    "Elegant",
    "Luxurious",
    "Modern",
    "Vintage",
    "Stylish",
    "Colorful",
    "Durable",
    "Fancy",
    "Chic",
  ];
  
  const nouns = [
    "Chair",
    "Table",
    "Laptop",
    "Shoes",
    "Watch",
    "Bag",
    "Sofa",
    "Camera",
    "Jacket",
    "Guitar",
  ];
  
  // Function to generate a random product name
  function generateRandomProductName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  }



  const sampleSentences = [
    "Enhance your daily routine with this high-quality product.",
    "Experience the ultimate comfort and style with our latest offering.",
    "Elevate your lifestyle with this versatile and durable product.",
    "Stay on the cutting edge of technology with this innovative solution.",
    "Discover a world of possibilities with this top-of-the-line product.",
    "Designed to meet your every need, this product is a game-changer.",
    "Upgrade your collection with this unique and elegant addition.",
    "Crafted with precision and care, this product is built to last.",
    "Join thousands of satisfied customers who have chosen this outstanding product.",
    "Experience the future today with this revolutionary creation.",
  ];
  
  // Function to generate a random product description
  function generateRandomProductDescription() {
    const randomIndex = Math.floor(Math.random() * sampleSentences.length);
    return sampleSentences[randomIndex];
  }
  


const generateFakeData = (numProducts) => {
    const products = [];
  
    for (let id = 1; id <= numProducts; id++) {
      const name = `${generateRandomProductName()}`;
      const price = parseFloat((Math.random() * 100).toFixed(2));
      const description = `${generateRandomProductDescription()}`;
      const image = `https://picsum.photos/id/${getRandomInt(1,100)}/200 `; // Replace with actual image URLs
  
      products.push({
        id,
        name,
        price,
        description,
        image,
      });
    }
  
    return products;
  };
  
  export default generateFakeData;
  
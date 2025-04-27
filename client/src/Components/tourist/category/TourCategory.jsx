import CategoryCard from "./CategoryCard";
import culturalImg from "../../../Asset/images/cultural-tour.jpg";
import relaxImg from "../../../Asset/images/advent3.png";
import adventureImg from "../../../Asset/images/advent2.png";
import "./TourCategory.scss";
const TourCategory = () => {
  const categories = [
    {
      id: 1,
      cardImg: adventureImg,
      heading: "Adventure Tours",
      content:
        "Embark on thrilling journeys that push your limits and ignite your spirit of adventure. From mountain treks and water sports to wildlife safaris and extreme sports, our adventure tours are designed for those who crave excitement and unforgettable experiences.",
    },
    {
      id: 2,
      cardImg: culturalImg,
      heading: "Cultural Tours",
      content:
        "Dive deep into the rich tapestry of history and tradition with our cultural tours. Explore ancient ruins, partake in local festivals, and savor authentic cuisine as you immerse yourself in the heart of different cultures and communities.",
    },
    {
      id: 3,
      cardImg: relaxImg,
      heading: "Relaxation and Wellness Tours",
      content:
        "Unwind and rejuvenate with our relaxation and wellness tours, offering serene escapes from everyday life. Enjoy tranquil beaches, luxurious spa treatments, and holistic wellness retreats that nourish your mind, body, and soul.",
    },
  ];
  return (
    <div className="trip">
      <h1>Our Tour Categories</h1>
      <p>
        Discover the world through our diverse tour categories, tailored to
        satisfy every traveler's passion..
      </p>
      <div className="tripcard">
        {categories.map((cat) => {
          return (
            <CategoryCard
              key={cat.id}
              cardImg={cat.cardImg}
              heading={cat.heading}
              content={cat.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TourCategory;

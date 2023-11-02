import CareerReviews from "./CareerReviews";
import careerImage1 from "../../assets/CareerReview1.png";
import careerImage2 from "../../assets/CareerReview2.png";

const CareerMiddleSection = () => {
  return (
    <>
      <CareerReviews
        image={careerImage1}
        quote="Respecting one’s individuality is the only constant that echoes throughout the organization and makes RELDYN, truly RELDYN."
        name="Prasad"
        position="Asistant Marketing Manager"
        review="Result Oriented, Marketing Enthusiast with over 3 years of experience and a proven track record of successfully developing and implementing integrated marketing and communications strategy from end to end. Adept in managing multiple tasks and meeting deadlines whilst exhibiting a creative approach to his work, Prasad is a flexible and versatile professional who is able to maintain a sense of humour under pressure and make tough decisions independently."
        isRowReverse={false}
      />
      <CareerReviews
        image={careerImage2}
        quote="I chose RELDYN because I was inspired by how interesting and diverse the experience was going to be."
        name="Ravi"
        position="Operation Manager"
        review="worked in the airline and credit-card industries for 5 years prior to joining McKinsey. While attending business school, she spent the summer in our Dallas office; she joined the firm full-time in Chicago after graduation. Tarra started on the consulting track, but has spent the last year on a rotation as a retail operations knowledge expert focusing on store operations and customer experience."
        isRowReverse={true}
      />
    </>
  );
};

export default CareerMiddleSection;

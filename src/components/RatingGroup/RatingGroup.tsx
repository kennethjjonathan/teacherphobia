import { IRating } from "@/interface/IRating";
import RatingBarAndElaboration from "../RatingBarAndElaboration/RatingBarAndElaboration";

type RatingGroupProps = {
  rating: IRating;
};

const RatingGroup = ({ rating }: RatingGroupProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      <RatingBarAndElaboration
        rating_matrix={rating.difficulty}
        label="Difficulty"
      />
      <RatingBarAndElaboration
        rating_matrix={rating.career_support}
        label="Career Support"
      />
      <RatingBarAndElaboration
        rating_matrix={rating.hazing_culture}
        label="Hazing Culture"
      />
      <RatingBarAndElaboration
        rating_matrix={rating.worth_the_money}
        label="Worth the Money"
      />
      <RatingBarAndElaboration
        rating_matrix={rating.experience_with_the_teacher}
        label="Experience with the teachers"
      />
      <RatingBarAndElaboration
        rating_matrix={rating.curriculum}
        label="Curriculum"
      />
      <RatingBarAndElaboration
        rating_matrix={rating.school_area}
        label="School Area"
      />
    </div>
  );
};

export default RatingGroup;

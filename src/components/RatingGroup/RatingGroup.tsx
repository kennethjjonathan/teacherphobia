import { ISchool } from "@/interface/ISchool";
import RatingBar from "../RatingBar/RatingBar";

type RatingGroupProps = {
  school: ISchool;
};

const RatingGroup = ({ school }: RatingGroupProps) => {
  return (
    <div>
      <RatingBar rating={school.rating.difficulty} label="Difficulty" />
      <RatingBar rating={school.rating.career_support} label="Career Support" />
      <RatingBar rating={school.rating.hazing_culture} label="Hazing Culture" />
      <RatingBar
        rating={school.rating.worth_the_money}
        label="Worth the Money"
      />
      <RatingBar
        rating={school.rating.experience_with_the_teacher}
        label="Experience with the teachers"
      />
      <RatingBar rating={school.rating.curriculum} label="Curriculum" />
      <RatingBar rating={school.rating.school_area} label="School Area" />
    </div>
  );
};

export default RatingGroup;

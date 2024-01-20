import { RatingAndElaboration } from "@/interface/IRating";
import RatingBar from "../RatingBar/RatingBar";

type RatingBarAndElaborationProps = {
  rating_matrix: RatingAndElaboration;
  label: string;
};

const RatingBarAndElaboration = ({
  rating_matrix,
  label,
}: RatingBarAndElaborationProps) => {
  return (
    <div className="w-full space-y-3">
      <RatingBar rating={rating_matrix.score} label={label} />
      {rating_matrix.elaboration && <p className="text-default-500 text-sm">{rating_matrix.elaboration}</p>}
    </div>
  );
};

export default RatingBarAndElaboration;

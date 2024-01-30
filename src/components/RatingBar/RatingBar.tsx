import { Progress } from "@nextui-org/react";

type RatingBarProps = {
  rating: number;
  label: string;
  minValue?: number;
  maxValue?: number;
};

function generateColor(rating: number): "success" | "warning" | "danger" {
  if (rating < 2) return "danger";
  if (rating < 4) return "warning";
  return "success";
}

const RatingBar = ({
  rating,
  label,
  minValue = 0,
  maxValue = 5,
}: RatingBarProps) => {
  return (
    <Progress
      color={generateColor(rating)}
      label={label}
      valueLabel={`${rating}/${maxValue}`}
      value={rating}
      minValue={minValue}
      maxValue={maxValue}
      showValueLabel
      size="sm"
    />
  );
};

export default RatingBar;

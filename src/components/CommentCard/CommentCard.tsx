import { IComment } from "@/interface/IComment";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import RatingGroup from "../RatingGroup/RatingGroup";

type CommentCardProps = {
  comment: IComment;
};

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Card>
      <CardHeader>
        <p className="text-small text-default-500">
          {"A reviewer from "}
          <span className="font-semibold text-foreground">{`${comment.major}`}</span>
          {" major"}
        </p>
      </CardHeader>
      <CardBody className="w-full space-y-3">
        <p className="text-small w-full">{comment.comment}</p>
        <RatingGroup rating={comment.rating} />
      </CardBody>
    </Card>
  );
};

export default CommentCard;

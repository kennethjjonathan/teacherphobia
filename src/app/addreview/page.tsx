"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addReviewSchema = z.object({
    difficulty: z.number(),

});

const AddReviewPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof addReviewSchema>>({
    resolver: zodResolver(addReviewSchema),
  });
  return (
    <div className="container space-y-5">
      <div className="w-full space-y-3">
        <p className="w-full text-small">
          On a scale from 1 to 5, how hard is it you think?
        </p>
        <Input
          type="number"
          label="Difficulty"
          description="1: very easy, 5: very hard"
        />
      </div>
      <div className="w-full space-y-3">
        <p className="w-full text-small">
          On a scale from 1 to 5, how supportive do you think the university is
          towards its students&apos; future careers?
        </p>
        <Input
          type="number"
          label="Career Support"
          description="1: not supportive, 5: very supportive"
        />
      </div>
      <div className="w-full space-y-3">
        <p className="w-full text-small">
          On a scale from 1 to 5, how great is your experience with the hazing
          culture in the university?
        </p>
        <Input
          type="number"
          label="Hazing Culture"
          description="1: very bad experience (too military, not benefecial), 5: great experience (friendly, get a lot of valuable lessons)"
        />
      </div>
      <div className="w-full space-y-3">
        <p className="w-full text-small">
          On a scale from 1 to 5, how worthy is the university compared to the
          money?
        </p>
        <Input
          type="number"
          label="Worth the Money"
          description="1: not worth the money, 5: worth the money"
        />
      </div>
      <div className="w-full space-y-3">
        <p className="w-full text-small">
          How is the curriculum? do you think it's relevant in the working
          context?
        </p>
        <Input
          type="number"
          label="Curriculum"
          description="1: not accurate, 5: accurate"
        />
      </div>
      <div className="w-full space-y-3">
        <p className="w-full text-small">
          Do you think the area around the school is conducive
          &#40;student-friendly&#41;?
        </p>
        <Input
          type="number"
          label="School Area"
          description="1: not conducive, 5: conducive"
        />
      </div>
      <div>
        <Textarea
          label="Comment"
          placeholder="your overall thoughts on the school"
          fullWidth
          minRows={5}
        />
      </div>
    </div>
  );
};

export default AddReviewPage;

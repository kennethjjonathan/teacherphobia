"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addReviewSchema = z.object({
  difficulty: z.coerce.number(),
  career_support: z.coerce.number(),
  hazing_culture: z.coerce.number(),
  worth_the_money: z.coerce.number(),
  experience_with_the_teacher: z.coerce.number(),
  curriculum: z.coerce.number(),
  school_area: z.coerce.number(),
  comment: z.string(),
});

const AddReviewPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof addReviewSchema>>({
    resolver: zodResolver(addReviewSchema),
  });

  const onSubmit = async (formData: z.infer<typeof addReviewSchema>) => {
    console.log("Masuk");
    console.log(formData)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="w-full space-y-3">
          <p className="w-full text-small">
            On a scale from 1 to 5, how hard is it you think?
          </p>
          <Input
            isInvalid={errors.difficulty ? true : false}
            errorMessage={errors.difficulty?.message}
            {...register("difficulty")}
            type="number"
            label="Difficulty"
            description="1: very easy, 5: very hard"
          />
        </div>
        <div className="w-full space-y-3">
          <p className="w-full text-small">
            On a scale from 1 to 5, how supportive do you think the university
            is towards its students&apos; future careers?
          </p>
          <Input
            isInvalid={errors.career_support ? true : false}
            errorMessage={errors.career_support?.message}
            {...register("career_support")}
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
            isInvalid={errors.hazing_culture ? true : false}
            errorMessage={errors.hazing_culture?.message}
            {...register("hazing_culture")}
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
            isInvalid={errors.worth_the_money ? true : false}
            errorMessage={errors.worth_the_money?.message}
            {...register("worth_the_money")}
            type="number"
            label="Worth the Money"
            description="1: not worth the money, 5: worth the money"
          />
        </div>
        <div className="w-full space-y-3">
          <p className="w-full text-small">
            How is your experience with the teacher?
          </p>
          <Input
            isInvalid={errors.worth_the_money ? true : false}
            errorMessage={errors.worth_the_money?.message}
            {...register("experience_with_the_teacher")}
            type="number"
            label="Experience with the teacher"
            description="1: not worth the money, 5: worth the money"
          />
        </div>
        <div className="w-full space-y-3">
          <p className="w-full text-small">
            How is the curriculum? do you think it's relevant in the working
            context?
          </p>
          <Input
            isInvalid={errors.curriculum ? true : false}
            errorMessage={errors.curriculum?.message}
            {...register("curriculum")}
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
            isInvalid={errors.school_area ? true : false}
            errorMessage={errors.school_area?.message}
            {...register("school_area")}
            type="number"
            label="School Area"
            description="1: not conducive, 5: conducive"
          />
        </div>
        <Textarea
          isInvalid={errors.comment ? true : false}
          errorMessage={errors.comment?.message}
          {...register("comment")}
          label="Comment"
          placeholder="your overall thoughts on the school"
          fullWidth
          minRows={5}
        />
        <Button
          color="primary"
          type="submit"
          fullWidth
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddReviewPage;

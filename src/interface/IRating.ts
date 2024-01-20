export interface IRating {
  difficulty: RatingAndElaboration;
  career_support: RatingAndElaboration;
  hazing_culture: RatingAndElaboration;
  worth_the_money: RatingAndElaboration;
  experience_with_the_teacher: RatingAndElaboration;
  curriculum: RatingAndElaboration;
  school_area: RatingAndElaboration;
}

export type RatingAndElaboration = {
  score: number;
  elaboration?: string;
};

export interface ISchool {
  uuid: number;
  name: string;
  web_url: string;
  address: string;
  rating_amount: number;
  rating: {
    difficulty: number;
    career_support: number;
    hazing_culture: number;
    worth_the_money: number;
    experience_with_the_teacher: number;
    curriculum: number;
    school_area: number;
  };
}

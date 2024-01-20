import { IRating } from "./IRating";

export interface ISchool {
  uuid: number;
  name: string;
  web_url: string;
  address: string;
  rating_amount: number;
  rating: IRating
}

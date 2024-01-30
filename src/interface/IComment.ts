import { IRating } from "./IRating";

export interface IComment {
  uuid: number;
  school_uuid: number;
  comment: string;
  major: string;
  rating: IRating;
}

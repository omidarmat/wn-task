import { UserRole } from "./users";

export interface Feedback {
  id: string;
  name: string;
  role: UserRole;
  content: string;
  img: string;
}

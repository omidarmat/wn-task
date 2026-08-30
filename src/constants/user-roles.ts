import { UserRole } from "@/types/dtos/users";

export const USER_ROLES: Record<UserRole, { faName: string }> = {
  guest: {
    faName: "مهمان",
  },
  user: {
    faName: "کاربر",
  },
};

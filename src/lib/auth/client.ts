import { createAuthClient } from "better-auth/react";

const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://random.com";

export const { $Infer, ...authClient } = createAuthClient({
  baseURL: `${host}/api/auth`,
  plugins: [],
});

export type UserType = typeof $Infer.Session.user;
export type SessionType = typeof $Infer.Session.session;
export type UserSessionType = {
  user: UserType;
  session: SessionType;
};

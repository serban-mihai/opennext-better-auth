import { BetterAuthOptions, betterAuth } from "better-auth";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";

import { getCloudflareContext } from "@opennextjs/cloudflare";

// ? This needs to be a function!
export const auth = () =>
  betterAuth({
    database: {
      db: new Kysely({
        dialect: new D1Dialect({
          database: getCloudflareContext().env.AUTH_DB,
        }),
      }),
      type: "sqlite",
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 24 * 60 * 60, // 24 hour
      },
    },
    advanced: {
      useSecureCookies: getCloudflareContext().env.RUNTIME_ENV === "remote",
      crossSubDomainCookies: {
        enabled: true,
      },
      defaultCookieAttributes: {
        sameSite:
          getCloudflareContext().env.RUNTIME_ENV === "remote" ? "none" : "lax",
        secure: getCloudflareContext().env.RUNTIME_ENV === "remote",
        domain: getCloudflareContext().env.COOKIE_DOMAIN,
      },
    },
    secret: getCloudflareContext().env.BETTER_AUTH_SECRET,
    baseURL: getCloudflareContext().env.BETTER_AUTH_URL,
    basePath: "/api/auth",
    trustedOrigins:
      getCloudflareContext().env.BETTER_AUTH_TRUSTED_ORIGINS?.split(","),
    emailAndPassword: {
      enabled: true,
    },
    plugins: [],
    hooks: {},
  } satisfies BetterAuthOptions);

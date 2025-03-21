-- Migration number: 0002 	 2025-02-13T18:29:16.309Z
PRAGMA defer_foreign_keys = on;
alter table "user"
add column "twoFactorEnabled" integer;
create table if not exists "twoFactor" (
    "id" text not null primary key,
    "secret" text not null,
    "backupCodes" text not null,
    "userId" text not null references "user" ("id")
);
create table if not exists "passkey" (
    "id" text not null primary key,
    "name" text,
    "publicKey" text not null,
    "userId" text not null references "user" ("id"),
    "credentialID" text not null,
    "counter" integer not null,
    "deviceType" text not null,
    "backedUp" integer not null,
    "transports" text,
    "createdAt" date
);
create table if not exists "ssoProvider" (
    "id" text not null primary key,
    "issuer" text not null,
    "oidcConfig" text,
    "samlConfig" text,
    "userId" text not null references "user" ("id"),
    "providerId" text not null unique,
    "organizationId" text,
    "domain" text not null
);
PRAGMA defer_foreign_keys = off;
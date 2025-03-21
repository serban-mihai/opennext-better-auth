import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import "server-only";

export const metadata: Metadata = {
  title: {
    default: "random",
    template: `%s - random`,
  },
  description: "...",
  // metadataBase: new URL(SITE_URL),
  keywords: [
    "SaaS",
    "Next.js",
    "React",
    "TypeScript",
    "Cloudflare Workers",
    "Edge Computing",
  ],
  authors: [{ name: "Lubomir Georgiev" }],
  creator: "Lubomir Georgiev",
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: SITE_URL,
    // title: SITE_NAME,
    // description: SITE_DESCRIPTION,
    // siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "random",
    description: "...",
    creator: "@LubomirGeorg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// This component will be wrapped in Suspense in the BaseLayout
async function SessionProvider({ children }: { children: React.ReactNode }) {
  // These async operations will be handled by Suspense in the parent component
  return <div>{children}</div>;
}

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense
          fallback={<ThemeProviderFallback>{children}</ThemeProviderFallback>}
        >
          <SessionProvider>{children}</SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}

function ThemeProviderFallback({ children }: { children: React.ReactNode }) {
  return <div className="size-screen">{children}</div>;
}

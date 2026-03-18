import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://projects-by-kevin.vercel.app"),
  title: "Kevin Samson — Full-stack Developer",
  description:
    "Full-stack developer specializing in AI-driven automation and blockchain technology. Based in Abu Dhabi, UAE.",
  openGraph: {
    title: "Kevin Samson — Full-stack Developer",
    description:
      "Full-stack developer specializing in AI-driven automation and blockchain technology. Based in Abu Dhabi, UAE.",
    url: "https://projects-by-kevin.vercel.app/",
    images: [
      {
        url: "/api/og?title=Kevin+Samson",
        width: 1200,
        height: 630,
        alt: "Kevin Samson — Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Samson — Full-stack Developer",
    description:
      "Full-stack developer specializing in AI-driven automation and blockchain technology. Based in Abu Dhabi, UAE.",
    images: ["/api/og?title=Kevin+Samson"],
  },
  alternates: {
    canonical: "https://projects-by-kevin.vercel.app/",
  },
};

export default function Home() {
  return <HomeClient />;
}

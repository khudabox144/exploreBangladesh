import config from "@/config";
import { getSEOTags } from "@/libs/seo";

// export const metadata = getSEOTags({
//   title: `Sign-in to ${config.appName}`,
//   canonicalUrlRelative: "/auth/signin",
// });

export const metadata = {
  title: "My Travel Project",  
  description: "Explore beautiful places in Bangladesh",
};

export default function Layout({ children }) {
  return <>{children}</>;
}

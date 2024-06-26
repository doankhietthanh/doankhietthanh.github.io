import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.github className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer">
        <Icons.facebook className="h-6 w-6 fill-current" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <Icons.twitter className="h-5 w-5 fill-current" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
        <Icons.linkedin className="h-5 w-5 fill-current" />
        <span className="sr-only">Linkedin</span>
      </Link>
    </div>
  );
};

export default Social;

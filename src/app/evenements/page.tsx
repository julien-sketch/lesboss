import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function EventsPage() {
  redirect(siteConfig.nextEventHref);
}

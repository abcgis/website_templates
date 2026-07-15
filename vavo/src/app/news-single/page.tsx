import { NewsSingle } from "@/components/NewsSingle";
import { Copyright } from "@/components/Copyright";

export const metadata = {
  title: "Vavo | News Single",
  description:
    "What is development and branding - a Vavo news article.",
};

export default function NewsSinglePage() {
  return (
    <>
      <div className="waited" />
      <NewsSingle />
      <Copyright />
    </>
  );
}

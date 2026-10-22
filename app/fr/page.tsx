import type { Metadata } from "next";
import HomePage from "../../components/HomePage";
import { homeCopy } from "../../lib/home-copy";

const copy = homeCopy.fr;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
};

export default function Page() {
  return <HomePage copy={copy} />;
}

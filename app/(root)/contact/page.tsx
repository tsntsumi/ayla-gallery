import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <>
      <center>
        <h2 className="text-2xl font-bold mb-2">Contact Page:</h2>
        <p>Under construction...</p>
      </center>
    </>
  );
}

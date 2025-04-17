"use client";
import React, { useState } from "react";

const NewsletterFooterSection = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  return (
    <div className="flex flex-col gap-3 border-b md:border p-4 md:border-t-0 md:border-b-0  ">
      <span className="text-xl">Newsletter</span>
      <span>Subscribe for updates</span>
      <div className="flex relative gap-5">
        <input
          className="border border-black px-2 text-sm "
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          placeholder="youremail@gmail.com"
        />
        <button className="bg-accent px-4 py-2 border cursor-pointer ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterFooterSection;

import React from "react";
import companies from "../../lib/companies";
const company = companies.find((company) => company.id === 2);

export default function Header() {

  
  return (
    <header className="header">
      <h1 data-text={`Hi ${company.name}...`}>
        Hi {company.name}...
      </h1>
      <p>
        I wanted to demonstrate how much I'd love to work at {company.name} in my
        own way. This is my "cover letter" but on a webpage so it's not boring.
        Hope you enjoy!
      </p>
    </header>
  );
}

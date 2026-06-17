import { MapPin } from "lucide-react";
import React from "react";

const ContactBranches = () => {
  return (
    <div className="container px-4 mt-[100px] mb-[120px] md:mb-[200px]">
      <h3 className="font-bold">Explore Our World</h3>
      <p className="text-lg text-secondary-foreground font-medium mt-[30px]">
        {"We'd love to talk about how we can help you."}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[60px]">
        {branches.map((branche, ind) => (
          <div key={ind}>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2 w-6 h-6" />
              <p className="text-xl font-semibold">{branche.name}</p>
            </div>
            <ul className="pl-8 text-secondary-foreground mt-3">
              {branche.contacts.map((contact, ind) => (
                <li key={ind}>{contact}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const branches = [
  {
    name: "United States",
    contacts: [
      "4100 Wolcott Ave NE,",
      "87109, New York, USA.",
      "(505) 855-5500",
      "info@onion.usa",
    ],
  },
  {
    name: "United Kindom",
    contacts: [
      "20 New Bond St",
      "W1S 2UE, London, UK.",
      "020 3214 9200",
      "info@onion.uk",
    ],
  },
  {
    name: "Canada",
    contacts: [
      "118-1959 152 St",
      "Surrey, British Columbia",
      "V4A 9E3, Canada.",
      "(604) 536-8244",
      "info@onion.canada",
    ],
  },
  {
    name: "Brazil",
    contacts: [
      "Praça Júlio de Castilhos, 52",
      "Moinhos de Vento, Porto Alegre",
      "90430-020, Brazil.",
      "(51) 3312-2815",
      "info@onion.brazil",
    ],
  },
];

export default ContactBranches;

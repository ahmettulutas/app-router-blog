import React from "react";
import { People } from "../people/page";

export default function People({ data }: { data: People["results"] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-10">
      {data?.map((person) => (
        <article
          key={person.name}
          className="border rounded-md border-gray-300 p-4"
        >
          <p className="font-semibold">{person.name}</p>
          <ul className=" list-disc pl-4">
            <li>
              <p>{person.birth_year}</p>
            </li>
            <li>
              <p>{person.eye_color}</p>
            </li>
            <li>
              <p>{person.gender}</p>
            </li>
          </ul>
        </article>
      ))}
    </div>
  );
}

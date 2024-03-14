import People from "../components/people";
import Paginate from "../components/paginate";

type Person = {
  name: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export type People = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};

const getPeople = async (page: string): Promise<People> => {
  const res = await fetch(`https://swapi.py4e.com/api/people?page=${page}`);
  const data = await res.json();
  return data;
};

async function PeoplePage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const current = searchParams.page;
  const people = await getPeople(current);

  return (
    <div className="grid w-full">
      <h1 className="text-center my-2 text-xl font-bold">
        Current Page is {current}
        <br />
      </h1>
      {people?.results && <People data={people.results} />}
      <hr />
      <Paginate />
    </div>
  );
}

export default PeoplePage;

// https://jsonplaceholder.typicode.com/posts/2
// https://random-data-api.com/api/users/random_user
// https://random-data-api.com/api/address/random_address

type User = {
  id: number;
  first_name: string;
};
type Address = {
  id: number;
  street_name: string;
};
async function getUser(): Promise<User> {
  const res = await fetch("https://random-data-api.com/api/users/random_user");
  return res.json();
}

async function getAddress(): Promise<Address> {
  const res = await fetch(
    "https://random-data-api.com/api/address/random_address",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function DataFetching() {
  const user = await getUser();
  const address = await getAddress();
  return (
    <div className="grid w-screen h-screen place-items-center">
      <h1 className="text-4xl">{user.first_name}</h1>
      <h1 className="text-4xl">{address.street_name}</h1>
    </div>
  );
}

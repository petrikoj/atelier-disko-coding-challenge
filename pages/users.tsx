import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Users() {
  const { data, error } = useSWR("/api/allusers", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.firstname}</li>
      ))}
    </ul>
  );
}

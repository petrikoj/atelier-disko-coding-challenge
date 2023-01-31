import got from "got";

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_SITE_HOST}`;
  console.log(url);
  const data = await got(url + "/api/allusers").json();
  console.log("RESPONSE FROM GETSTATICPROPS", data);
  return { props: { data } };
}
export default function Users({ data }) {
  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.firstname}</li>
      ))}
    </ul>
  );
}

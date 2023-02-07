import { User } from "@prisma/client";
import got from "got";
import { GetServerSideProps, NextApiResponse } from "next";
import Table, {
  ColumnDefinitionType,
} from "../../components/dataTable/dataTable";
import Header from "../../components/header/header";

export type ApiResponse = {
  data: {
    users: User[];
  };
} & NextApiResponse;

// Fetching the data as an authorized request with getServerSideProps
// and pass it to the page component as props
export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_SITE_HOST}/api/allusers`;
  const options = {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  };
  const data: ApiResponse = await got(url, options).json();
  return { props: { data } };
};

// Rendering the data in the generic table component by defining
// the columns based on the properties of the User type
const Users = ({ data }: ApiResponse) => {
  const columns: ColumnDefinitionType<User, keyof User>[] = [
    { key: "firstname", header: "First name" },
    { key: "lastname", header: "Last name" },
  ];
  return (
    <>
      <Header pageName="Registrations" />
      <Table data={data.users} columns={columns} />
    </>
  );
};

export default Users;

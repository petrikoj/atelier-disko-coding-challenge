import { User } from "@prisma/client";
import got from "got";
import { GetServerSideProps } from "next";
import Table, {
  ColumnDefinitionType,
} from "../../components/dataTable/dataTable";

export interface ApiResponse {
  data: {
    users: User[];
  };
}
// Fetching the data with getServerSideProps and pass it to the
// page component as props
export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_SITE_HOST}`;
  console.log(url);
  const data: ApiResponse = await got(url + "/api/allusers").json();
  return { props: { data } };
};
// Rendering the data in the generic table component by defining
// the columns based on the properties of the User type
const Users = ({ data }: ApiResponse) => {
  const columns: ColumnDefinitionType<User, keyof User>[] = [
    { key: "firstname", header: "First name" },
    { key: "lastname", header: "Last name" },
  ];
  return <Table data={data.users} columns={columns} />;
};

export default Users;

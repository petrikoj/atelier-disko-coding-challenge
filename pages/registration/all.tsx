import { User } from "@prisma/client";
import got from "got";
import { NextApiResponse } from "next";
import Link from "next/link";
import Button from "../../components/button/button";
import Table, {
  ColumnDefinitionType,
} from "../../components/dataTable/dataTable";
import Header from "../../components/header/header";
import styles from "../../styles/index.module.css";

export type ApiResponse = {
  data: {
    users: User[];
  };
  error?: string;
} & NextApiResponse;

// Rendering the data in the generic table component by defining
// the columns based on the properties of the User type
const Users = ({ data, error }: ApiResponse) => {
  if (error)
    return (
      <>
        <div className={styles.error}>
          <div className={styles.main}>
            <Header pageName={error} />
            <Link href="/" passHref>
              <a>
                <Button>Home</Button>
              </a>
            </Link>
          </div>
        </div>
      </>
    );

  if (data) {
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
  }
};

// Fetching the data as an authorized request with getServerSideProps
// and pass it to the page component as props
export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_SITE_HOST}/api/allusers`;
  const options = {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  };

  try {
    const data: ApiResponse = await got(url, options).json();
    return { props: { data } };
  } catch (error) {
    if (error instanceof Error)
      return {
        props: { error: error.message },
      };
  }
}

export default Users;

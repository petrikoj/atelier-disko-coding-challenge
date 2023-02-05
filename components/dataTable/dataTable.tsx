import styles from "./dataTable.module.css";

export interface ColumnDefinitionType<T, K extends keyof T> {
  key: K;
  header: string;
}

export interface TableProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
}

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

function TableHeader<T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) {
  const headers = columns.map((column, index) => {
    return (
      <th className={styles.theader} key={`headCell-${index}`}>
        {column.header}
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
}

function TableRows<T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>) {
  const rows = data?.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {columns.map((column, index2) => {
          return (
            <td className={styles.trows} key={`cell-${index2}`}>
              {`${row[column.key]}`}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

export default function Table<T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>) {
  return (
    <table className={styles.root}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
}

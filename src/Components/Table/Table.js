import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoDocumentTextOutline } from "react-icons/io5";

function TableData({ heading, rows }) {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, borderSpacing: "1rem" }}
          aria-label=""
          className="table-data"
        >
          <TableHead className="table-head">
            <TableRow>
              {heading.map((ele) => {
                return (
                  <TableCell>
                    <span className="head">{ele}</span>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.No}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.entries(row).map(([key, value], valueIndex) => {
                  if (key === "Status") {
                    return (
                      <TableCell key={valueIndex}>
                        <p className={`status ${value}`}>{value}</p>
                      </TableCell>
                    );
                  }
                  if (key === "Amount" || key === "Price") {
                    return <TableCell>${value}</TableCell>;
                  }
                  if (key === "Invoices") {
                    return (
                      <TableCell>
                        <div className="download">
                          <IoDocumentTextOutline />{" "}
                          <div className="download-text">Download</div>
                        </div>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell key={valueIndex} className="Tablecell">
                        {value}
                      </TableCell>
                    );
                  }
                })}
                {/* <TableCell className="Tablecell">{row.No}</TableCell>
                <TableCell className="Tablecell">{row.Id_customer}</TableCell>
                <TableCell className="Tablecell">{row.Customer_name}</TableCell>
                <TableCell className="Tablecell">{row.Item_name}</TableCell>
                <TableCell className="Tablecell">{row.Order_Date}</TableCell>
                <TableCell className="Tablecell">
                  <span className={`status ${row.Status}`}>{row.Status}</span>
                </TableCell>
                <TableCell className="Tablecell">{row.Price}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableData;

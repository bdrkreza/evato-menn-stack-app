import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, TablePagination, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
export default function Orders() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#D23F57",
          padding: "0px 5px 20px",
        }}
      >
        <LocalMallIcon sx={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "normal",
            color: "black",
          }}
        >
          My Orders
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            backgroundColor: "#f6f9fc",
            borderCollapse: "separate",
            borderSpacing: "0px 10px",
            borderRadius: 2,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: "16px" }}>
                Order#
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                Status
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 600, fontSize: "16x" }}>
                Date purchased
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                    backgroundColor: "white",
                    borderRadius: 40,
                  }}
                >
                  <TableCell
                    sx={{ fontSize: "18px", fontWeight: 500 }}
                    component="th"
                    scope="row"
                  >
                    {item.id}
                  </TableCell>
                  <TableCell align="left">
                    <Box
                      sx={{
                        display: "inline-block",
                        boxSizing: "border-box",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        fontSize: "16px",
                      }}
                      className={`cellWithStatus ${item.status}`}
                    >
                      <span>{item.status}</span>
                    </Box>
                  </TableCell>
                  <TableCell align="left">{item.date_purchased}</TableCell>
                  <TableCell align="left">${item.total}</TableCell>
                  <TableCell align="right">
                    <AiOutlineEye
                      style={{
                        fontSize: "25px",
                        color: "gray",
                        cursor: "pointer",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          sx={{
            height: "60px",
            fontSize: "15px",
            ".MuiTablePagination-selectLabel": {
              marginTop: "10px",
            },
            ".MuiTablePagination-displayedRows": {
              marginTop: "12px",
            },
          }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}

const orders = [
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
    color: "gray",
  },
  {
    id: "1050017AS",
    status: "cancelled",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
    color: "red",
  },
  {
    id: "1050017AS",
    status: "delivered",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
    color: "green",
  },
  {
    id: "1050017AS",
    status: "processing",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
    color: "gray",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
  {
    id: "1050017AS",
    status: "pending",
    date_purchased: "Aug 13, 2022",
    total: "350.00",
  },
];

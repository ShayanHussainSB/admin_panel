import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

// Styling
import "./style.scss";

export default function MerchDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight">
              <h1>Merch Details</h1>
            </div>
            <div className="p-2 flex-shrink-1 bd-highlight">
              <button
                className="theme_btn"
                onClick={() => navigate("/create_merch")}
              >
                <FaCartPlus className="mx-2" /> Create Merch
              </button>
            </div>
          </div>

          <Table className="table my-4">
            <Thead className="head" style={{ borderRadius: "1rem" }}>
              <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Size</Th>
                <Th>Color</Th>
                <Th>Stock</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody style={{ borderRadius: "1rem" }}>
              <Tr>
                <Td>1</Td>
                <Td>Product 1</Td>
                <Td>$1.99</Td>
                <Td>Small</Td>
                <Td>Red</Td>
                <Td>10</Td>
                <Td>A nice product</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

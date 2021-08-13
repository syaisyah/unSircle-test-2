import React, { useEffect } from "react";
import { Table, Container, Image, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      history.push("/login");
    } else {
      history.push('/')
    }
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <h1 style={{ marginBottom: "30px" }}>List Products</h1>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price (Rp)</th>
              <th>Marketplace Price (Rp)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>

              {/* https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443960/item/goods_36_443960.jpg?width=1600&impolicy=quality_75 */}
              <td>
                <Image style={{ width: "300px", height: "300px" }} src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443960/item/goods_36_443960.jpg?width=1600&impolicy=quality_75" rounded />
              </td>
              <td>A</td>
              <td>12345678</td>
              <td>50</td>
              <td>200000</td>
              <td>300000</td>
              <td className="d-flex justify-content-space-between">
                <Button variant="outline-success">Edit</Button>
                <Button variant="outline-success">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>

              {/* https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443960/item/goods_36_443960.jpg?width=1600&impolicy=quality_75 */}
              <td>
                <Image style={{ width: "300px", height: "300px" }} src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442899/item/goods_19_442899.jpg?width=1600&impolicy=quality_75" rounded />
              </td>
              <td>B</td>
              <td>344555555</td>
              <td>30</td>
              <td>300000</td>
              <td>400000</td>
              <td className="d-flex justify-content-space-between">
                <Button variant="outline-success">Edit</Button>
                <Button variant="outline-success">Delete</Button>
              </td>
            </tr>
            {/* https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/442899/item/goods_19_442899.jpg?width=1600&impolicy=quality_75 */}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

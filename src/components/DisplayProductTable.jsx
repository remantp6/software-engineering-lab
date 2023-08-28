// DisplayProductTable.js
import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../reducers/brandProductsSlice';

const DisplayProductTable = ({ brandProducts }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (brandOptionIndex, productIndex) => {
    dispatch(deleteProduct({ brand: productBrands.brands[brandOptionIndex], productIndex }));
  };

  return (
    <>
      <div className="py-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              {productBrands.brands.map((brandOption, index) => (
                <th key={index}>{brandOption}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {productBrands.brands.map((brandOption, brandOptionIndex) => (
                <td key={brandOptionIndex}>
                  <ol>
                    {brandProducts[brandOption] &&
                      brandProducts[brandOption].map((product, productIndex) => (
                        <div key={productIndex} className="d-flex align-items-center">
                          <li>{product}</li>
                          <div className="icons ms-auto">
                            <i
                              className="bi bi-trash3"
                              onClick={() => handleDeleteItem(brandOptionIndex, productIndex)}
                            ></i>
                            <i className="bi bi-pencil-square px-3"></i>
                          </div>
                        </div>
                      ))}
                  </ol>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DisplayProductTable;

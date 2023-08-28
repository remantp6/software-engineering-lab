// BrandProductForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import productBrands from '../data/productsBrand.json'
import { addProduct, deleteProduct } from '../reducers/brandProductsSlice';
import DisplayProductTable from './DisplayProductTable';

const BrandProductForm = () => {
  const [brand, setBrand] = useState('');
  const [productName, setProductName] = useState('');
  const dispatch = useDispatch();
  const brandProducts = useSelector((state) => state.brandProducts); // Access brand products from the Redux store

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!brand || !productName) return;

    dispatch(addProduct({ brand, productName }));
    setProductName('');
  };

  return (
    <>
      <div className="brand-product-form py-5">
        <Container className="px-5">
          <div className="brand-product-form">
            <h2 className="py-4 mb-0">Manage Products of different brands</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-content d-flex mx-5 px-5">
                <div className="select-brand d-block pe-5 me-5">
                  <div className="label">
                    <label htmlFor="brand">Brand</label>
                  </div>
                  <select id="brand" value={brand} onChange={handleBrandChange}>
                    <option value="">select brand</option>
                    {Object.keys(brandProducts).map((brandOption, index) => (
                      <option key={index} value={brandOption}>
                        {brandOption}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="product-input d-block mx-5 px-5">
                  <div className="label">
                    <label htmlFor="productName">Product</label>
                  </div>
                  <input
                    type="text"
                    id="productName"
                    autoComplete="off"
                    value={productName}
                    onChange={handleProductNameChange}
                  />
                  <button type="submit" className="mx-4">
                    Add
                  </button>
                </div>
              </div>
            </form>
            <DisplayProductTable brandProducts={brandProducts} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default BrandProductForm;

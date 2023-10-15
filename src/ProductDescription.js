import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  return (
    <Container>
      <ProductImage src="/car-image.jpg" alt="Car" />
      <Description>
        <h2>Car Description</h2>
        <p>
          This is a modern and sleek car that provides comfort and style. It consists of various parts, each contributing to its overall functionality.
        </p>
      </Description>
      <StartButton to="/part-details">START</StartButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const Description = styled.div`
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

const StartButton = styled(Link)`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default ProductDescription;

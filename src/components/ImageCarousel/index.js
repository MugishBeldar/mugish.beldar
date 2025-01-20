import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, ButtonGroup, Paper } from '@mui/material';
import styled from 'styled-components';

const PcImage = styled.img`
    width: 100%;
    height: auto /* Auto height to maintain aspect ratio */
    background-color: ${({ theme }) => theme.white || '#fff'};
    border-radius: 10px;

    /* Media query for smaller screens */
    @media (max-width: 768px) {
        height: 180; /* Adjust height for tablets and smaller devices */
    }
`;

const MobileImage = styled.img`
    width: 30%;
    height: auto; /* Auto height to maintain aspect ratio */
    background-color: ${({ theme }) => theme.white || '#fff'};
    border-radius: 10px;

    /* Media query for smaller screens */
    @media (max-width: 768px) {
        width: 50%; /* Adjust width for tablets and smaller devices */
        height: 400px; /* Adjust height for better scaling */
    }

    @media (max-width: 480px) {
        width: 80%; /* Adjust width further for mobile devices */
        height: 450px; /* Further adjust height for small mobile devices */
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Fixed typo: should be 'flex-direction' */
  gap: 10px; /* Increased the gap for better spacing */
  margin-top: 20px
`;


function Item({ item }) {
  return (
    <Paper style={{ padding: '16px', textAlign: 'center', margin: '10 0 10 0' }}>
      <Carousel
        autoPlay={true}
        // navButtonsAlwaysVisible={true}
        animation='fade'
      >
        {item.imagesFor.toLowerCase() === 'pc' ? (
          item.images.map((image, index) => (
            <PcImage src={image} key={index} alt="PC Image" />
          ))
        ) : (
          item.images.map((image, index) => (
            <MobileImage src={image} key={index} alt="Mobile Image" />
          ))
        )
        }
      </Carousel>

    </Paper>
  );
}

const ImageCarousel = ({ images }) => {
  return (
    <Container>
      {
        images.map((item, i) => (
          <Item key={i} item={item} />
        ))
      }
    </Container>
  );
};

export default ImageCarousel;

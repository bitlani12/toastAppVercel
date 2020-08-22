import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
const ImageSet = styled.div`
  background-image: url(${(props) => props.img});
  height: 150px;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;
  width: 100%;
  background-size: cover;
`;
class SliderCommon extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
          <ImageSet img="https://i.ibb.co/mB76jkh/p0p135ot-2x.png"></ImageSet>
        </div>
        <div>
          <ImageSet img={'https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png'}></ImageSet>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
export default SliderCommon;

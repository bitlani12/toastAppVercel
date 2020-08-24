import React, { useState } from 'react';
import styled from 'styled-components';

const BackgroundImageFood = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  height: 101%;
  width: 100%;
  /* background-position: center; */
  display: block;
  width:${(props) => props.width};
  background-position: center center;
  margin: 0 auto;
  background-size: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  &:before {
    content: '';
    display: block;
  }
`;

// const BackgroundImageFood = styled.div`
//   background-image: ${(props) => `url(${props.img})`};
//   height: 100%;
//   width: 100%;
//   /* background-position: center; */
//   display: block;
//   background-position: center center;
//   margin: 0 auto;
//   background-size: cover;
//   border-top-left-radius: 8px;
//   border-bottom-left-radius: 8px;
//   &:before {
//     content: '';
//     display: block;
//   }
// `;
const BackgroundImage = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  height: ${(props) => (props.height ? props.height : '150px')};
  /* background-position: center; */
  display: block;
  background-position: center center;
  margin: 0 auto;
  background-size: cover;
  border-top-left-radius: ${(props) => (props.radiusNone ? '0px' : '8px')};
  border-top-right-radius: ${(props) => (props.radiusNone ? '0px' : '8px')};
`;
const SetItemImage = (props) => {
  const [imageLoad, set_imageLoad] = useState(false);
  const [imageAvaileable, setimageAvailable] = useState(false);
  const { item } = props;
  const testImage = (url) => {
    const imgPromise = new Promise(function imgPromise(resolve, reject) {
      const imgElement = new Image();
      imgElement.addEventListener('load', function imgOnLoad() {
        resolve(this);
        set_imageLoad(true);
      });
      imgElement.addEventListener('error', function imgOnError() {
        reject();
        set_imageLoad(true);
      });
      imgElement.src = url;
    });
    return imgPromise;
  };
  {
    testImage(props.img).then(
      function fulfilled(img) {
        console.log('That image is found and loaded', img);
        setimageAvailable(true);
      },

      function rejected() {
        console.log('That image was not found');
        setimageAvailable(false);
      }
    );
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {
        props.exceptSpecial ? (
          imageAvaileable ? (
            <BackgroundImageFood img={props.img} width={"38vw"} />
          ) : (
              <BackgroundImageFood img={'/static/fooditem_placeholder.png'} width={"0vw"} />
            )
        ) : imageAvaileable ? (
          <BackgroundImage
            img={props.img}
            height={props.height}
            radiusNone={props.radiusNone}
          />
        ) : (
              <BackgroundImage
                img={'/static/fooditem_placeholder.png'}
                height={props.height}
                radiusNone={props.radiusNone}
              />
            )

        // <BackgroundImage img={'/static/001-happy-1.svg'} />
      }
    </div>
  );
};
export default SetItemImage;

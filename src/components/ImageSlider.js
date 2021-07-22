import React from 'react'
import styled, {css} from "styled-components"

const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavButtons = styled.button`
  background-color: rgba(245, 245, 245, 0.622);
  border: 1px solid rgba(20, 20, 20, 0.801);
  height: 80px;
  cursor: pointer;
  font-size: 18px;
`

const LeftNav = styled(NavButtons)`

`

const RightNav = styled(NavButtons)`

`

const SlideBox = styled.div`
  height: 400px;
  width: 600px;
  background-color: rgba(56, 56, 56, 0.63);
  border: 3px solid rgb(27, 27, 27);
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 20px 5px black;
  overflow: hidden;
  position: relative;

  @media (max-width: 700px) {
    height: 50vh;
    width: 70vw;
  }
`
const defaultImage =
  'https://images.unsplash.com/photo-1589045662554-85bd4ab083a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'

const SlidingImage = styled.div`
  background-image: url(${(props) => props.sliderImg || defaultImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 600px;
  display: flex;
  position: absolute;
  /* left: 0px; */
  z-index: 0;

  @media (max-width: 700px) {
    height: 50vh;
    width: 70vw;
  }
`

const NavPipsContainer = styled.div`
  /* background-color: red; */
  height: 200px;
  width: 100%;
  position: relative;
  justify-content: center;

  top: -50%;

  @media (max-width: 700px) {
top: 2%
  }
`

const NavPipsList = styled.ul`
  color: rgba(255, 192, 203, 0);
  /* height: 200px;
  width: 2000px; */
  /* position: relative;
  justify-content: center; */
  transform: rotate(270deg);
  /* left: -17.5%; */
  /* top: -25%; */

  /* @media (max-width: 700px) {
    height: 50px;
    width: 70px;
  } */
`

const NavPip = styled.li`
  height: 70px;
  width: 15px;
  background-color: none;
  border: 1.5px solid rgba(245, 245, 245, 0.61);
  z-index: 2;
  margin-bottom: 10px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  @media (max-width: 700px) {
    height: 20px;
    width: 10px;
  }
`
const NavPip0= styled(NavPip)`
  background-color: ${(props) =>
    props.active === 0 ? 'rgb(190, 190, 190)' : 'none' };
`

const NavPip1 = styled(NavPip)`
  background-color: ${(props) =>
    props.active === 1 ? 'rgb(190, 190, 190)' : 'none'};
`

const NavPip2 = styled(NavPip)`
  background-color: ${(props) =>
    props.active === 2 ? 'rgb(190, 190, 190)' : 'none'};
`

const NavPip3 = styled(NavPip)`
  background-color: ${(props) =>
    props.active === 3 ? 'rgb(190, 190, 190)' : 'none'};
`

const NavPip4 = styled(NavPip)`
  background-color: ${(props) =>
    props.active === 4 ? 'rgb(190, 190, 190)' : 'none'};
`
const left = "<"
const right = ">"

const changeImagePip =(number, setUrlIndex) => {
  if (number < 3) {
    setUrlIndex(number)
  }
  else{
    setUrlIndex(0)
  }

}

export const ImageSlider = ({ SliderImg, increase, decrease, urlIndex, setUrlIndex }) => {
  return (
    <>
      {console.log('Url Index', typeof urlIndex)}
      <FrameWrapper>
        <LeftNav onClick={decrease}>{left}</LeftNav>
        <SlideBox>
          <SlidingImage sliderImg={SliderImg}></SlidingImage>
          <NavPipsContainer>
          <NavPipsList>
            {console.log(SliderImg)}
            <NavPip0
              active={urlIndex}
              onClick={() => changeImagePip(0, setUrlIndex)}
            ></NavPip0>
            <NavPip1
              active={urlIndex}
              onClick={() => changeImagePip(1, setUrlIndex)}
            ></NavPip1>
            <NavPip2
              active={urlIndex}
              onClick={() => changeImagePip(2, setUrlIndex)}
            ></NavPip2>
            <NavPip3
              active={urlIndex}
              onClick={() => changeImagePip(3, setUrlIndex)}
            ></NavPip3>
            <NavPip4
              active={urlIndex}
              onClick={() => changeImagePip(4, setUrlIndex)}
            ></NavPip4>
          </NavPipsList>
          </NavPipsContainer>
        </SlideBox>
        <RightNav onClick={increase}>{right}</RightNav>
      </FrameWrapper>
    </>
  )
}
 
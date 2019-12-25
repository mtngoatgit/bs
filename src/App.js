import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
// import '~video-react/dist/video-react.css';
import { Player } from 'video-react';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import "typeface-nunito";
import "typeface-sacramento";
import "typeface-rancho";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`;

const Box = styled.div`
  background: rgba(0, 0, 0, .65);
  padding: 100px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const Text = styled.div`
  color: white;
  font-family: "Rancho", monospace;
  font-size: 100px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  box-sizing: border-box;
  background: rgba(152,71,62, .9);
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .4;
  z-index: -1;
`;

const Home = () => {

  return (
    <Wrapper>
      <Flex>
                <Container>
          <Image src={three} />
        </Container>
        <Container>
          <Image src={one} />
        </Container>
      </Flex>
      <Flex>
        <Container>
          <Image src={two} />
        </Container>
                <Container>
          <Video autoPlay loop muted>
            <source src={require("./ogden_ski.mp4")} type="video/mp4"></source>
            Your browser does not support HTML5 video.
          </Video>
        </Container>
      </Flex>
      <Overlay>
        <Box>
          <Text>
            Bigler Family Site
          </Text>
        </Box>
      </Overlay>
    </Wrapper>
  )
};



export default Home;

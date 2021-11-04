import React from "react";
import alvo from '../../Assents/alvo.svg';
import bitcoin from '../../Assents/Bitcoin-bro.svg';
import mulher from '../../Assents/mulher-fogute.svg';
import video from '../../Assents/video.mp4';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Box, Container, Subtitle, Title, Video } from '../../css/global';



const Home = () =>{
    return(
        <>
       <Header/>
        <Container  left rigth marginTop={5} >
                 <Title  text='center'  >ASSISTA AGORA O VIDEO ABAIXO !!</Title>
                 <Video height={500} width={800}  src={video} left={15} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                 <Container  >

                 <Button color="green" title="Garantir Agora"  left={35} />

                 </Container>
               
                 
        </Container>

        <Container  left rigth   heigth={300 } row  >
              <Box left={8} top={15} >
                    <Title>Focado em resultados rapidos</Title>
                    <Subtitle>O Robô é totalmente focado em resultados rápidos e objetivos , basta somente deixar rondando e pronto!!ele trablhará por você. </Subtitle>

              </Box>

              <Box left={15} >
                 <img src={mulher} />
              </Box>
                 

        </Container>
         
         
        <Container  left rigth   heigth={300 } row reverse marginTop={5} >
              <Box left={20} top={15} >
                    <Title>Liberdade financeira</Title>
                    <Subtitle>Já imaginou trabalhar de onde e quando quiser ? o Robô te dar essa liberdade , basta somente seguir o passo a passo e você verá a mudança acontecer.</Subtitle>

              </Box>

              <Box left={8} >
                 <img src={bitcoin} />
              </Box>
                 
        </Container>


        <Container  left rigth   heigth={300 } row  marginTop={5} >
              <Box left={8} top={8} >
                    <Title>Muito facil de usar</Title>
                    <Subtitle>Com poucos cliques você já consegue fazer altos lucros , pense em como pode fatura alto com pouco tempo </Subtitle>

              </Box>

              <Box left={15} >
                 <img src={alvo} />
              </Box>
                 

        </Container>


        <Container>
            <Button color="dark"  top={20} title="Acesa meu Robô" left={35} />
        </Container>
          <Footer/>

           </>
    )
}



export default Home;
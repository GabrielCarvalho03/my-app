import {Title , Container, Box} from '../../css/global'
import video from '../../Assents/video.mp4'


const Footer = ()=>{
    return(

        <Container large   >
              <Container   left rigth  row >
                  <Box left={15} cursor >
                   <img height="120" width="120"  src="http://sguru.org/wp-content/uploads/2018/02/icon-facebook-black.png" />
                 </Box>

                  <Box cursor top={1}  >
                  <img height="100" width="100"  src="https://clipartcraft.com/images/instagram-logo-round-4.png" />
                      </Box>

                      <Box cursor top={1}  >
                      <img height="100" width="100"  src="https://www.pikpng.com/pngl/b/31-313040_1200-x-1200-8-twitter-logo-png-transparent.png" />
                      </Box>
                         
              </Container>
        </Container>
      
    )
}


export default Footer;
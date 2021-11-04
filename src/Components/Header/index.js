import logoHeader from '../../Assents/LogoHeader.svg'
import {Title, Container} from '../../css/global'




const Header = () =>{
     
    return(
        <Container background = "primary"
        large
            heigth={400}
            borderLeft
            borderRigth
            row
            >
            <Container 
            left
            rigth
            heigth={390}
            row
            justify= "space-between"
            >
                
              <Title color="white" bold  align ="center" top={15} > Ganhar dinheiro nunca foi <br/> tão automatico </Title>
              <img src={logoHeader} />
            </Container>
            
        </Container>
    )

}


export default Header;
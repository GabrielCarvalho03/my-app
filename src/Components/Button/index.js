import { Buttons, Container, Title, Link, } from '../../css/global'

const Button = ({color, top , title , left}) =>{

    return(
             
                 <Buttons background={color}left={left} heigth={60} whidth={500} bottom={2} top={top} >
                <Title paddingTop={2} text="center" ><Link color="white" href="https://api.whatsapp.com/send?phone=5511994892766&text=ol%C3%A1%2Cgostaria%20de%20pedir%20meu%20rob%C3%B4" >{title} </Link> </Title>
               </Buttons>

           


    )
}


export default Button ;
import styled from "styled-components";
import {colors} from '../Assents/theme.json'



export const Video = styled.iframe`
margin-left: ${({left}) => left ? left :  0 }% ;
width: ${({width}) => width ? width : 400  }px;
height: ${({heigth}) => heigth ? heigth : ""}px;

`;

export const Container = styled.div`
width: ${({large}) => large? 100 : 80  }%;
height: ${({heigth}) => heigth ? heigth : ""}px;
margin-left: ${({left}) => left ? 8 :  0 }% ;
margin-right:  ${({rigth}) => rigth ? 8 : 0  }%;
background-color: ${({background}) => colors[background || ''] };
margin-top:  ${({marginTop}) => marginTop ? marginTop : 0  }%;
padding-top:  ${({top}) => top ? top : 0  }%;
border-bottom-left-radius: ${({borderLeft}) => borderLeft ? 60 : 0  }px;
border-bottom-right-radius: ${({borderRigth}) => borderRigth ? 60 : 0  }px;
display: ${({row}) => row ? 'flex' : 'block' };
flex-direction: ${({reverse}) => reverse ? 'row-reverse' : ''};
justify-content: ${({justify}) => justify ? justify : '' };
align-items: ${({align}) => align ? align : '' };
margin-bottom:  ${({marginBottom}) => marginBottom ? marginBottom : 0  }%;
`;


export const Box = styled.div`
width: ${({width}) => width ? width : 400  }px;
height: ${({heigth}) => heigth ? heigth : 300}px;
margin-top:  ${({top}) => top ? top : 0  }%;
margin-left: ${({left}) => left ? left :  0 }% ;
margin-right:  ${({rigth}) => rigth ? rigth : 0  }%;
padding-right:  ${({paddingRigth}) => paddingRigth ? paddingRigth : 0  }px;
background-color: ${({background}) => colors[background || ''] };
cursor: ${({cursor})=> cursor ? 'pointer' : ''  };


`;



export const Title = styled.h1`
   color: ${({color}) => colors[color || 'dark']};
   font-weight: ${({bold}) => bold ? "bold" :'' };
   margin-top:  ${({top}) => top ? top : 0  }%;
   padding-top:  ${({paddingTop}) => paddingTop ? paddingTop : 0  }%;
    text-align:${({text}) => text ? text : 'start'};
   
`;


export const Subtitle = styled.p`
 color: ${({color}) => colors[color || 'gray']};

`;


export const Buttons = styled.div`

width: ${({whidth}) => whidth? whidth : 100  }px;
height: ${({heigth}) => heigth ? heigth : ""}px;
background-color: ${({background}) => colors[background || ''] };
border-radius: 5px;
margin-top:  ${({top}) => top ? top : 0  }%;
margin-left: ${({left}) => left ? left :  0 }% ;
margin-bottom:  ${({bottom}) => bottom ? bottom : 0  }%;
`;


export const Link = styled.a`
text-decoration: none;
color: ${({color}) => colors[color || 'dark']};

`;


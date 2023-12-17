import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { NavLink as Link } from 'react-router-dom';
import { FONTSIZES, FONTWEIGHTS } from "../../../constants/fonts";
 export const LoginContainer = styled.div`
    background-color: white;
    color: black;
    height: 100vh;
    overflow: hidden;

    .loginRight{
        width: 100%;
        height: 100vh;
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        
        form{
            display: flex;
            flex-direction: column;

            h1{
                color: ${COLORS.green};
                margin-bottom: 20px;
                text-align: center;
            }
            input{
                width: 400px;
                height: 60px;
                margin-bottom: 40px;
                padding: 0 15px;
                border-radius: 10px;
                border: 1px solid ${COLORS.Nude}
            }
        }
        .bottom{
            margin-top: 20px;
            width: 100%;
        }
    }
 `

 export const NavLink = styled(Link)`
    position: absolute;
    top: 20px;
    left: 50px;
    text-decoration: none;
    font-size: ${FONTSIZES["logo-large"]};
    color: ${COLORS.green};
    font-weight: ${FONTWEIGHTS.xbold};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
 `
  export const LoginLink = styled(Link)`
    text-decoration: none;
    color: ${COLORS.darkBlue};
    cursor: pointer;
  `
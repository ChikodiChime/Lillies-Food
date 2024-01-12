import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
    width: 100%;
    height: 100px;
    // background-color: ${COLORS.green};
   padding: 0 40px;

    .nav-wrapper{
        height: 100%;
        font-size: 14px;

        .logo-wrapper{
         
           span{
            color: ${COLORS.white};
            font-size: ${FONTSIZES['logo-large']};
            font-weight: ${FONTWEIGHTS.bold};
            padding-left: 10px;
           }
        }
        .link-wrapper{
            width: 40%;

            NavLink{
                
            }
        }
    }
    `

    export const NavLink = styled(Link)`
        color: ${COLORS.white};
        text-decoration: none;
        font-weight: ${FONTWEIGHTS.medium};
        position:relative;
       
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            border-radius: 5px;
            height: 0.2em;
            bottom: -2px;
            left: 0;
            background: ${COLORS.Nude};
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

        &:last-child{
            color: ${COLORS.green};
            background: ${COLORS.Nude};
            padding: 7px 20px;
            border-radius: 10px;
            font-weight: ${FONTWEIGHTS.bold}
            
        }
    `
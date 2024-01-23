import styled from 'styled-components';
import { FONTWEIGHTS } from 'src/constants/fonts';
import { NavLink as Link } from 'react-router-dom';



    export const NavLink = styled(Link)`
      
       
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            border-radius: 5px;
            height: 0.2em;
            bottom: -2px;
            left: 0;
            background: rgb(220 38 38);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

        &:last-child{
            color: white;
            background: rgb(220 38 38);;
            padding: 10px 30px;
            font-weight: ${FONTWEIGHTS.bold};
            margin-left: 100px;


            &::after{
                width: 0
            }
           
        }
    `
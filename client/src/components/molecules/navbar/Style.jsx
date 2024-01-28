import styled from 'styled-components';
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
            
          }

        &:last-child{
            


            &::after{
                width: 0
            }
           
        }
    `
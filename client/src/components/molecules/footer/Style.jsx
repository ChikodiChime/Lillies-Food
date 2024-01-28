import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {COLORS} from '../../../constants/colors';

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: ${COLORS.darkBlue};
    
    .footer-top{
        padding: 40px;
        color: ${COLORS.white};
        align-items: flex-start;

        p{
            font-weight: 700;
        }

        li{
            line-height: 30px
        }
    }
    .footer-bottom{
        border-top: 2px solid grey;
        color: white;
        

        .socials{
            width: 15%
        }
    }

    
`

export const FooterLink = styled(NavLink)`
    color: ${COLORS.white};
    text-decoration: none;
    font-weight: 200;
  
`
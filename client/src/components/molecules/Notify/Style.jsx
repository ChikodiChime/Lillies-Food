import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import { COLORS } from '../../../constants/colors';


export const NotifyWrapper = styled.div`
    margin: 150px 0;
    padding: 0 100px;

    .NotifyLeft{
        width: 50%;
        h1{
            font-size: ${FONTSIZES.xxxlarge}
        }
        P{
            font-size: ${FONTSIZES.small};
            font-weight: ${FONTWEIGHTS.light}
        }
    }

    .NotifyRight{
        width: 40%;

        input[type=text]{
            height: 40px;
            width: 70%;
            padding: 10px;
            margin-right: 5px;
            border-radius: 5px;
            outline: none;
            border: none;

        }
        input[type=button]{
            height: 40px;
            background-color: ${COLORS.Nude};
            outline: none;
            border: none;
            padding: 10px;
            border-radius: 5px;
        }
    }
`
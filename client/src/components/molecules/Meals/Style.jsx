import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const MoDContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${COLORS.white};


    h1{
        font-size: ${FONTSIZES.xxxlarge};
        line-height: 4;

    }
    .about{
        font-size: ${FONTSIZES.small    };
        width: 50%;
        text-align: center;
        line-height: 2;
        font-weight: ${FONTWEIGHTS.light};
        padding-bottom: 30px;
    }
    .MealsWrapper{
        text-align: center;
        width: 100%;
       
        .mealWrapper{
            width: 20%
        }
        img{
            width: 250px;
        }
        h3{
            font-size: ${FONTSIZES.base};
            color: ${COLORS.Nude}
        }
        p{
            font-size: ${FONTSIZES.small};
            font-weight: ${FONTWEIGHTS.light};
            
        }
        
    }
`
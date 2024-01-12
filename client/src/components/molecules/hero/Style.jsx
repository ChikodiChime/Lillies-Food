import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const HeroWrapper = styled.div`
    width: 100%;
    // height: calc(100vh + 100px);
    padding: 150px 100px;

    .hero{
        .hero-left{
            width: 40%;
            color: ${COLORS.white};

            h1{
                font-size: 4rem;
                span{
                    color: ${COLORS.Nude}
                }
            }
            P{
                font-size: ${FONTSIZES.base};
                font-weight: ${FONTWEIGHTS.light};
                line-height: 2;

            }
            img{
                padding: 30px 15px 0 0;
            }
        }
        .hero-right{
            img{
                width: 400px;
                object-fit: contain;
            }
        }
    }
`
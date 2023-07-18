import { styled } from "styled-components"

export const defaultTheme = {
    'base-title': '#E7EDF4',
    'base-text': '#AFC2D4',
    'base-subtitle': '#C4D4E3',
    'brand-blue': '#3294F8',
    'base-profile': '#0B1B2B',
    'base-label': '#3A536B',
    'base-span': '#7B96B2',
    'base-background': '#071422'
  } as const

export const Title = styled.h1`
  font-family: Nunito;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${props=> props.theme['base-title']};
`;

export const TextBase = styled.p`
  font-family: Nunito;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${props=> props.theme['base-text']};
`;
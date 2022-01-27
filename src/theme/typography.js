/* eslint-disable no-useless-computed-key */
/* eslint-disable import/no-anonymous-default-export */

import AvertaBoldTTF from '../fonts/Averta-Bold.ttf';
import AvertaBoldWOFF from '../fonts/Averta-Bold.woff';
import AvertaBoldWOFF2 from '../fonts/Averta-Bold.woff2';

import AvertaSemiBoldTTF from '../fonts/Averta-SemiBold.ttf';
import AvertaSemiBoldWOFF from '../fonts/Averta-SemiBold.woff';
import AvertaSemiBoldWOFF2 from '../fonts/Averta-SemiBold.woff2';

import AvertaRegularTTF from '../fonts/Averta-Regular.ttf';
import AvertaRegularWOFF from '../fonts/Averta-Regular.woff';
import AvertaRegularWOFF2 from '../fonts/Averta-Regular.woff2';

const AvertaBoldWebFont = {
  fontFamily: 'Averta',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '700',
  src: `
    local('Averta'),
    url(${AvertaBoldTTF}, format('truetype')),
    url(${AvertaBoldWOFF2}, format('woff2')),
    url(${AvertaBoldWOFF}, format('woff'))
  `,
};

const AvertaSemiBoldWebFont = {
  fontFamily: 'Averta',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `
    local('Averta'),
    url(${AvertaSemiBoldTTF}, format('truetype')),
    url(${AvertaSemiBoldWOFF2}, format('woff2')),
    url(${AvertaSemiBoldWOFF}, format('woff'))
  `,
};

const AvertaRegularWebFont = {
  fontFamily: 'Averta',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
    local('Averta'),
    url(${AvertaRegularTTF}, format('truetype')),
    url(${AvertaRegularWOFF2}, format('woff2')),
    url(${AvertaRegularWOFF}, format('woff'))
  `,
};

export default {
  typography: {
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    ['10xl']: {
      fontFamily: 'Averta, sans-serif',
      fontSize: '5rem',
      lineHeight: '120px',
    },
    ['8xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '3.5rem',
      lineHeight: '84px',
    },
    ['7xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '3rem',
      lineHeight: '72px',
    },
    ['6xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '2.75rem',
      lineHeight: '66px',
    },
    ['5xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '2.25rem',
      lineHeight: '54px',
    },
    ['4xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '2rem',
      lineHeight: '48px',
    },
    ['3xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '28px',
      lineHeight: '40px',
    },
    ['2xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '1.75rem',
      lineHeight: '36px',
    },
    ['xl']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '1.25rem',
      lineHeight: '30px',
    },
    ['lg']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '1.125rem',
      lineHeight: '28px',
    },
    body1: {
      fontFamily: 'Averta,sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    ['sm']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '0.875rem',
      lineHeight: '20px',
    },
    ['xs']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '0.75rem',
      lineHeight: '20px',
    },
    ['c1']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '0.75rem',
      lineHeight: '20px',
    },
    ['c2']: {
      fontFamily: 'Averta,sans-serif',
      fontSize: '0.625rem',
      lineHeight: '20px',
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          AvertaBoldWebFont,
          AvertaSemiBoldWebFont,
          AvertaRegularWebFont,
        ],
      },
    },
  },
};

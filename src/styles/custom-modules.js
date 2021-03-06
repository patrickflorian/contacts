import { Platform } from 'react-native';

export const textTransforms = {
  ut: { textDecorationLine: 'underline' },
  oh: { overflow: 'hidden' },
};

export const zIndexes = {
  z1: { zIndex: 1 },
  z2: { zIndex: 2 },
  z3: { zIndex: 3 },
  z4: { zIndex: 4 },
  z5: { zIndex: 5 },
};

export const perecentWidths = {
  w_10: { width: '10%' },
  w_20: { width: '20%' },
  w_25: { width: '25%' },
  w_30: { width: '30%' },
  w_33: { width: '33%' },
  w_40: { width: '40%' },
  w_50: { width: '50%' },
  w_60: { width: '60%' },
  w_70: { width: '70%' },
  w_75: { width: '75%' },
  w_80: { width: '80%' },
  w_90: { width: '90%' },
  w_100: { width: '100%' },
};

export const perecentHeights = {
  h_10: { height: '10%' },
  h_20: { height: '20%' },
  h_25: { height: '25%' },
  h_30: { height: '30%' },
  h_33: { height: '33%' },
  h_40: { height: '40%' },
  h_50: { height: '50%' },
  h_60: { height: '60%' },
  h_70: { height: '70%' },
  h_75: { height: '75%' },
  h_80: { height: '80%' },
  h_90: { height: '90%' },
  h_100: { height: '100%' },
};

export const customHeights = {
  h_ios_bar: {
    ...Platform.select({
      ios: { height: 20 },
      android: { height: 0 },
    }),
  },
};

export const borders = {
  bw1: { borderWidth: 1 },
  bw2: { borderWidth: 2 },
  bw3: { borderWidth: 3 },
  bw4: { borderWidth: 4 },
  bw5: { borderWidth: 5 },
  br_circle: { borderRadius: 1000 },
};

export const shapes = {
  ar_1: { aspectRatio: 1 },
};
import { GET_ALL_SECTORES, SET_SECTOR, SET_VIA } from "../Actions/api.action";

const initialState = {
  sectores: [],
  sector: {},
  via: {},
};
export const sectoresReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SECTORES:
      return { ...state, sectores: payload };
    case SET_SECTOR:
      return { ...state, sector: payload };
    case SET_VIA:
      return { ...state, via: payload };

    default:
      return state;
  }
};

/* export const viasReducer = (state = initialState, {type, payload}) => {
    case 
} */

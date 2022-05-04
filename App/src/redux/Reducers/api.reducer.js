import { GET_ALL_SECTORES, SET_SECTOR, SET_USER, SET_VIA } from "../Actions/api.action";

const initialStateSector = {
  sectores: [],
  sector: {},
  via: {},
};
export const sectoresReducer = (state = initialStateSector, { type, payload }) => {
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
const initialStateUser= {
  user: null
}

export const userReducer = (state = initialStateUser, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

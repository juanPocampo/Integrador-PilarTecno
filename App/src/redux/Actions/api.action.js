import { getAllSectores } from "../../services/api.services";

export const GET_ALL_SECTORES = "GET_ALL_SECTORES";
export const SET_SECTOR = "SET_SECTOR";
export const SET_VIA = "SET_VIA";
export const SET_USER = "SET_USER";

const getAllSectoresAction = (sectores) => ({
  type: GET_ALL_SECTORES,
  payload: sectores,
});
/**
 * * Redux Action GET ALL SECTORES
 *
 */
export const allSectores = () => {
  return async (dispatch) => {
    try {
      const sectores = await getAllSectores();
      dispatch(getAllSectoresAction(sectores));
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
};

export const setSector = (sector) => ({
  type: SET_SECTOR,
  payload: sector,
});

export const setVia = (via) => ({
  type: SET_VIA,
  payload: via,
});


export const setUserAction = (user) => ({
  type: SET_USER,
  payload: user,
});

import api from "../client/api";
import routes from "../routes/backEnd.routes";

export const getAllSectores = async () => api.get(routes.allSectores());
export const getSectorById = async (id) => api.get(routes.sector(id));
export const addNewSector = async (sec) => api.post(routes.allSectores(), sec);
export const editSector = async (id, sec) => api.patch(routes.sector(id), sec);
export const deleteSector = async (id) => api.delete(routes.sector(id));
export const getAllVias = async () => api.get(routes.allVias());
export const getViaById = async (id) => api.get(routes.via(id));
export const addNewVia = async (via) => api.post(routes.allVias(), via);
export const editVia = async (id, via) => api.patch(routes.via(id), via);
export const deleteVia = async (id,secId) => api.delete(routes.via(id), secId);
export const getSectoresImage = async () => api.get(routes.sectoresImages());
export const getViasImage = async () => api.get(routes.viasImages());

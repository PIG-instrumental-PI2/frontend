import api from "./api";

export function createInspection(inspection) {
  return api.post("/inspection", inspection);
}

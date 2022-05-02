import api from "./api";

export function createInspection(inspection) {
  return api.post("/inspections", inspection);
}

export function getInspections() {
  return api.get("/inspections");
}

export function getMeasurements(inspection_id) {
  return api.get(`/inspections/${inspection_id}/measurements/`);
}

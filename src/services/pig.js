import api from "./api";

export function getPigList() {
  return api.get(`/pigs?company_id=54321`);
}

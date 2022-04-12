import api from "./api";

export function getPigList() {
  return api.get("/pigs");
}

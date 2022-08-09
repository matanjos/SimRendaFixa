import http from "./http-common";
import qs from 'qs';
class DataService {
  createFuturo(dados) {
    return http.post("/simuladofuturo", qs.stringify(dados));
  }

  createPassado(dados) {
    return http.post("/simuladopassado", qs.stringify(dados));
  }

  retrieve(){
    return http.get("/");
  }

}
export default new DataService();
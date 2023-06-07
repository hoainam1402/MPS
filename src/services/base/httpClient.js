import axios from "axios";
import { useRouter } from "vue-router";

class httpClient {
  //#region Propertiesa
  _repository;
  _router;
  //#endregion

  //#region Constructor
  constructor(url) {
    this._router = useRouter();
    this._repository = axios.create({ 
      baseURL: url ,

    });
  }
  //#endregion

  setAuthorizationToken(token) {
    this._repository.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  //#region Methods

  //getter

  async get(url, onSuccess, onFailure) {
    try {
      const response = await this._repository.get(url);
      if (onSuccess && response.status === 200) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      this.handleOnError(error, onFailure);
    }
  }

  async post(url, data, onSuccess, onFailure) {
    try {
      const response = await this._repository.post(url, data);
      if (onSuccess && response.status === 200) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      this.handleOnError(error, onFailure);
    }
  }

  async put(url, data, onSuccess, onFailure) {
    try {
      const response = await this._repository.put(url, data);
      if (onSuccess && response.status === 200) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      this.handleOnError(error, onFailure);
    }
  }

  async delete(url, onSuccess, onFailure) {
    try {
      const response = await this._repository.delete(url);
      if (onSuccess && response.status === 200) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      this.handleOnError(error, onFailure);
    }
  }

  handleOnError(error, onFailure) {
    if (onFailure && typeof onFailure == "function") {
      onFailure(error.response);
    }

    if (error.response && error.response.status === 401) {
      this._router.push("/login");
      console.log("Unauthorized access!"); // Log the 401 error
    }
    throw error;
  }

  //#endregion
}

export { httpClient };

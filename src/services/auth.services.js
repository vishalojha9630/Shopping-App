import CommonService from './common.service';

class AuthService extends CommonService {
  async loginUser(params) {
    return this.post(`/login`, params)
  }
  async frogotPassword(params) {
    return this.post(`/reset-password-email`, params)
  }
  async me() {
    return this.get(`/me`)
  }
}

export const authService = new AuthService();

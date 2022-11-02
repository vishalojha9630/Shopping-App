import CommonService from "./common.services"

class ProductsService extends CommonService {

  async productList() {
    return await this.get(`/products`)
  }
  async getProductSingle(id) {
    return await this.get(`/products/${id}`)
  }

}
export const productsService = new ProductsService();
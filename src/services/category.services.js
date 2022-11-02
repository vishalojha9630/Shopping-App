import CommonService from "./common.services"

class CategoryService extends CommonService {

  async categoryList() {
    return await this.get(`/products/categories`)
  }
  async getCategorySingle(category) {
    return await this.get(`/products/category/${category}`)
  }

}
export const categoryService = new CategoryService();
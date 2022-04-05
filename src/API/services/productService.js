import { HttpClient } from "../httpClient";

class ProductService extends HttpClient {
 
    constructor(){
        super("https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1");
    }

  async getProducts(){
      return await this.get("products");
  };

  async postProducts(product){
    return await this.post("products", product);
};

async deleteProducts(id){
    return await this.delete(`products/${id}`);
};

}

export const productService = new ProductService()
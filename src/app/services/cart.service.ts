import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Product } from "./api/model/product"
@Injectable()
export class CartService{
    private baseUrl:string= "http://localhost:3000/cart"

    cartSelectedItems:Product[]=[]
constructor(private http:HttpClient){
}


getCart(){
return this.http.get<any>(this.baseUrl)
}

deleteCart(){
    let url=`${this.baseUrl}/all`
    return this.http.delete<any>(url)
}

addToCart(product:Product){
    const payload={productId:product.id,quantity:1}
    // this.cartSelectedItems.push(product)
    // console.log(this.cartSelectedItems)
    // return this.cartSelectedItems
    return this.http.post<any>(this.baseUrl,payload)
}
removeSingleItem(product:Product){
    const payload={productId:product.id}
    let url=`${this.baseUrl}/single`
    return this.http.delete<any>(url,{body:payload})
}

removeFromCart(item:any){
const payload={productId:item.product.id}
return this.http.delete<any>(this.baseUrl,{body:payload})

}
}


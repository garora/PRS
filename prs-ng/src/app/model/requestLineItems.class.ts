import { Requests } from './requests.class';
import { Products } from './products.class';



export class RequestLineItems
{
    id: number;
    requestId: number;
    productId: number;
    quantity: number;
    product: Products;
    request: Requests;

    constructor ( id: number = 0, rId: number = 0,
        pId: number = 0, qty: number = 1, product: Products = new Products,
        req: Requests = new Requests() )
    {
        this.id = id;
        this.requestId = rId;
        this.productId = pId;
        this.quantity = qty;
        this.request = req;
    }

    about (): string
    {
        return 'Request: id' + this.id + ', requestId=' + this.requestId + ', productId=' + this.productId + ', quantity=' + this.quantity;

    }
}

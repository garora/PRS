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

    constructor ()
    {

        this.id = 0;
        this.requestId = 0;
        this.productId = 0;
        this.quantity = 1;

    }

    about (): string
    {
        return 'Request: id' + this.id + ', requestId=' + this.requestId + ', productId=' + this.productId + ', quantity=' + this.quantity;

    }
}

import { Vendors } from './vendors.class';

// import { Products } from './products.class';
// import { ProductCreateComponent } from 'app/feature/product/product-create/product-create.component';

export class Products {
    id: number;
    partNbr: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    vendorId: number;
    vendor: Vendors;
    

    constructor (id:number = 0, partNbr: string = '', name: string = '', price: number = 0, 
    unit: string = ''  , photoPath: string = '' ,  
    vendorId: number = 0, vendor: Vendors = new Vendors() ){

        this.id=id;
        this.partNbr=partNbr;
        this.name=name;
        this.price=price;
        this.unit=unit;
        this.photoPath=photoPath;
        this.vendorId=vendorId;
        this.vendor=vendor;
    }

    about():string  {
        return 'Product: id'+this.id+', partNbr='+this.partNbr+', name='+this.name
        +', price='+this.price+', unit='+this.unit+', photoPath='+this.photoPath
        +', vendorId='+this.vendorId+', vendor='+this.vendor;
    }
}

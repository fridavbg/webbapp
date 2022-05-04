export default interface Invoice { 
    id: number;
    creation_date: Date;
    due_date: Date;
    order_id: number;
    name:  string;
    address: string;
    zip: string;
    city: string;
    country: string;
    total_price: number;
}
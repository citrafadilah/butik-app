import { Kategori } from "./kategori.model";

export interface Butiks{
    _id : string | null,
    nama : string,
    harga : string,
    kategori_id: string[];  
}

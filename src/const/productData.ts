// app/shop/const/productData.ts
import productsJson from "@/data/products.json";

export interface Product {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    badge?: string;
    imgOne: string;
    imgTwo: string;
    categories: string[];
    size: string[];
    availability: "In Stock" | "Out of Stock";
    colors: string[]; // tailwind bg-color classes
    review?: number; // e.g., 4.5
    shortDesc?: string;
}


export const products = productsJson as Product[];
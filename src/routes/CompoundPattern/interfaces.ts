import { ReactNode } from "react";

export interface Product {
    image: string;
    rating: number;
    category: string;
    title: string;
    price: number;
}

export interface TravelerCardProps {
    product: Product;
    children: ReactNode;
}
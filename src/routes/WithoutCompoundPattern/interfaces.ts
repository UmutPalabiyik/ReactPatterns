export interface TravelerCardProps {
    image: string;
    rating: number;
    category: string;
    title: string;
    price: number;
    favorite: boolean;
    showPrice: boolean;
    showTitle: boolean;
    showCategory: boolean;
    showRating: boolean;
    report: boolean; // Örnek olarak bir fonksiyon türü belirtildi, gerektiğine göre değiştirilebilir.
  }
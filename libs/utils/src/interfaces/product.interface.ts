export interface Product {
    productName: string;  // Nombre del producto
    price: number;        // Precio del producto
    discountPrice?: number;  // Precio con descuento (opcional)
    inStock: boolean;     // Si está disponible o no
    stockCount: number;   // Cantidad en stock
    rating: number;       // Valoración promedio (1 a 5)
    reviews: Review[];    // Array de reseñas de clientes
    imageUrls: string[];  // URLs de las imágenes del producto
    description: string;  // Descripción del producto
    variants: Variant[];  // Variantes (tamaños, colores, etc.)
    sku: string;          // SKU (código identificador del producto)
    categories:string[]
    relatedProducts?: string[];  // IDs o nombres de productos relacionados (opcional)
    shippingDetails: Shipping;   // Información de envío
    returnPolicy: string;        // Política de devoluciones
    tags?: string[];             // Tags o categorías del producto (opcional)
    brand:string
  }
export  interface Review {
    userName: string;     // Nombre del usuario que dejó la reseña
    rating: number;       // Puntuación de la reseña (1 a 5)
    comment: string;      // Texto de la reseña
    date: Date;           // Fecha de la reseña
  }
  
export  interface Variant {
    variantType: string;  // Tipo de variante (ej: "Color" o "Tamaño")
    options: string[];    // Opciones disponibles para la variante (ej: ["Rojo", "Azul"] o ["S", "M", "L"])
  }
  
export  interface Shipping {
    available: boolean;   // Si el envío está disponible o no
    estimatedDelivery: string;  // Tiempo estimado de entrega (ej: "3-5 días")
    shippingCost: number; // Costo de envío
  }
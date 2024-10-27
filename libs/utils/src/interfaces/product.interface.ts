
export interface Product {
  brand: string;                // Marca del producto
  description: string;           // Descripción del producto
  discountPrice?: number;        // Precio con descuento (opcional)
  imageUrls: string[];           // URLs de las imágenes del producto
  inStock: boolean;              // Si está disponible o no
  price: number;                 // Precio del producto
  principalCategory: string;     // Categoría principal del producto
  productName: string;           // Nombre del producto
  rating: number;                // Valoración promedio (1 a 5)
  relatedProducts?: string[];    // IDs o nombres de productos relacionados (opcional)
  returnPolicy: string;          // Política de devoluciones
  reviews: Review[];             // Array de reseñas de clientes
  shippingDetails: Shipping;     // Información de envío
  sku: string;                   // SKU (código identificador del producto)
  stockCount: number;            // Cantidad en stock
  tags: string[];                // Etiquetas del producto
  variants: Variant[];           // Variantes (tamaños, colores, etc.)
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
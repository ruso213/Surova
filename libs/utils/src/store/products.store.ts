import { computed, inject } from '@angular/core';
import { FiltType, Product } from '../interfaces';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { StoreService } from '../services';

type ProductState = {
  products: Product[];
  loading: boolean;
  filters: FiltType;
};

const initialState: ProductState = {
  products: [],
  loading: true,
  filters: {
    price: [0, 20000],
    principalCategory: '',
    productName: '',
    rating: [0, 5],
  },
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, productService = inject(StoreService)) => ({
    async loadData() {
      patchState(store, { loading: true });
      const products = await productService.getProducts();
      patchState(store, { products, loading: false });
      return store.products();
    },

    changeFilters(newFilters: Partial<FiltType>) {
      patchState(store, {
        filters: {
          ...store.filters(),
          ...newFilters,
        },
      });
    },   
  })), 

  withComputed((state) => ({
    filterProducts: computed(() => {
      const products = state.products();
      const filterProducts = products.filter((i) => {
        const prices = state.filters().price;
        const rating = state.filters().rating;
        const category = state.filters().principalCategory;
        if (prices && rating) {
          const priceFilter = i.price > prices[0] && i.price < prices[1];
          const ratingFilter = i.rating > rating[0] && i.rating < rating[1];
          const nameFilter = i.productName
            .toLowerCase()
            .includes(state.filters().productName.toLowerCase());
          if (category.length > 0) {
            const categoryFilter =
              i.principalCategory.toLowerCase() ===
              state.filters().principalCategory.toLowerCase();
            return categoryFilter && priceFilter && nameFilter && ratingFilter;
          } else {
            return priceFilter && nameFilter && ratingFilter;
          }
        } else {
          return true;
        }
      });
      return filterProducts;
    }),
  }))
);

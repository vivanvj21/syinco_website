import { create } from "zustand";
import { Product } from "@/types/product";

export interface CompareStoreState {
  items: Product[];
  isCompareModalOpen: boolean;
  highlightDifferences: boolean;
  addToCompare: (product: Product) => { success: boolean; reason?: string };
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
  openCompareModal: () => void;
  closeCompareModal: () => void;
  toggleHighlightDifferences: () => void;
}

export const useCompareStore = create<CompareStoreState>((set, get) => ({
  items: [],
  isCompareModalOpen: false,
  highlightDifferences: false,

  addToCompare: (product) => {
    const { items } = get();

    // Prevent duplicate
    if (items.some((item) => item.id === product.id)) {
      return { success: false, reason: "Product is already in comparison" };
    }

    // Strictly enforce maximum 3 products
    if (items.length >= 3) {
      return { success: false, reason: "Maximum 3 products can be compared simultaneously" };
    }

    set({ items: [...items, product] });
    return { success: true };
  },

  removeFromCompare: (productId) => {
    set((state) => {
      const nextItems = state.items.filter((item) => item.id !== productId);
      return {
        items: nextItems,
        isCompareModalOpen: nextItems.length === 0 ? false : state.isCompareModalOpen,
      };
    });
  },

  clearCompare: () => set({ items: [], isCompareModalOpen: false }),

  isInCompare: (productId) => {
    return get().items.some((item) => item.id === productId);
  },

  openCompareModal: () => set({ isCompareModalOpen: true }),
  closeCompareModal: () => set({ isCompareModalOpen: false }),
  toggleHighlightDifferences: () =>
    set((state) => ({ highlightDifferences: !state.highlightDifferences })),
}));

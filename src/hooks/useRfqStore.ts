import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SparesRequisitionItem } from "@/types/rfq";

export interface RfqStoreState {
  items: SparesRequisitionItem[];
  isDrawerOpen: boolean;
  hasHydrated: boolean;
  setHasHydrated: (val: boolean) => void;
  addItem: (item: Omit<SparesRequisitionItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  getTotalCount: () => number;
}

const safeLocalStorage = {
  getItem: (name: string): string | null => {
    if (typeof window === "undefined") return null;
    try {
      const item = localStorage.getItem(name);
      if (!item) return null;
      // Verify valid JSON
      JSON.parse(item);
      return item;
    } catch {
      // Corrupted data falls back safely to null
      try {
        localStorage.removeItem(name);
      } catch {
        // storage access exception
      }
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(name, value);
    } catch {
      // storage quota exception
    }
  },
  removeItem: (name: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(name);
    } catch {
      // storage access exception
    }
  },
};

export const useRfqStore = create<RfqStoreState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      hasHydrated: false,

      setHasHydrated: (val: boolean) => set({ hasHydrated: val }),

      addItem: (newItem, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex((i) => i.id === newItem.id);

          if (existingIndex > -1) {
            // Increment quantity for existing item
            const updatedItems = [...state.items];
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: updatedItems[existingIndex].quantity + quantity,
            };
            return { items: updatedItems, isDrawerOpen: true };
          }

          // Add new item with specified quantity
          return {
            items: [...state.items, { ...newItem, quantity }],
            isDrawerOpen: true,
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      clearBasket: () => {
        set({ items: [] });
      },

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

      getTotalCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "syinco_rfq_basket",
      storage: createJSONStorage(() => safeLocalStorage),
      partialize: (state) => ({ items: state.items } as RfqStoreState),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

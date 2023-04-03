import { create } from "zustand";

const useStore = create((set) => ({
	bears: 0,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 })
}));

export default useStore;

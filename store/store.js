import { create } from 'zustand';

const useStore = create((set) => ({
  jobData: [],
  setData: () => set((state) => ({ bears: state.bears + 1 })),
}));

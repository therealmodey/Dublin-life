import { create } from 'zustand';

export const useMapStore = create((set) => ({
  city: 'lagos',
  names: true,
  homes: true,
  boards: true,
  walking: false,
  selectedId: null,
  selectedPlace: null,
  ready: false,
  progress: 'Preparing the city',
  loadPercent: 0,
  district: 'all',
  cameraViews: {},
  setCity: (city) => set({ city, walking: false, selectedId: null, selectedPlace: null, district: 'all' }),
  setOption: (name, value) => set({ [name]: value }),
  select: (selectedId) => set(selectedId ? { selectedId } : { selectedId: null, selectedPlace: null }),
  setDistrict: (district) => set({ district, selectedId: null, selectedPlace: null }),
  setCameraView: (city, view) => set((state) => ({ cameraViews: { ...state.cameraViews, [city]: view } })),
  applyRuntimeState: (partial) => set((state) => {
    const scalarKeys = ['city', 'names', 'homes', 'boards', 'walking', 'selectedId', 'ready', 'progress', 'loadPercent', 'district'];
    const scalarChanged = scalarKeys.some((key) => partial[key] !== undefined && partial[key] !== state[key]);
    const placeChanged = partial.selectedPlace !== undefined && partial.selectedPlace?.id !== state.selectedPlace?.id;
    const cameraChanged = partial.cameraViews !== undefined && JSON.stringify(partial.cameraViews) !== JSON.stringify(state.cameraViews);
    if (!scalarChanged && !placeChanged && !cameraChanged) return state;
    return { ...state, ...partial };
  }),
}));

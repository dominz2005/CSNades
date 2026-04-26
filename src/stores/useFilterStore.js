import { GrenadeTypes, ViewMode } from '@/assets/constants';

import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filters', {
  state: () => ({
    selectedNades: [GrenadeTypes.SMOKE],
    selectedCombination: null,
    modifiers: {
      onlyOneWay: false,
      hideOneWay: false,
      onlySelfFlash: false,
      hideSelfFlash: false,
    },
    viewMode: ViewMode.LAND,
    hoveredInstaSmoke: null
  }),
  actions: {
    toggleNade(id) {
      this.modifiers.onlyOneWay = false;
      this.modifiers.hideOneWay = false;
      this.modifiers.onlySelfFlash = false;
      this.modifiers.hideSelfFlash = false;

      const isSelected = this.selectedNades.includes(id);
      const isCombination = id === 'combination';
      const hasCombination = this.selectedNades.includes('combination');

      if (isSelected) {
        this.selectedNades = this.selectedNades.filter(n => n !== id);
        return;
      }

      if (isCombination) {
        this.selectedNades = ['combination'];
        return;
      }

      if (hasCombination) this.selectedNades = [];

      this.selectedNades.push(id);
    },
    toggleOneWay() {
      const mod = this.modifiers;

      mod.onlyOneWay = !mod.onlyOneWay;
      if (mod.onlyOneWay) mod.hideOneWay = false;
    },
    toggleHideOneWay() {
      const mod = this.modifiers;

      mod.hideOneWay = !mod.hideOneWay;
      if (mod.hideOneWay) mod.onlyOneWay = false;
    },
    toggleSelfFlash() {
      const mod = this.modifiers;

      mod.onlySelfFlash = !mod.onlySelfFlash;
      if (mod.onlySelfFlash) mod.hideSelfFlash = false;
    },
    toggleHideSelfFlash() {
      const mod = this.modifiers;

      mod.hideSelfFlash = !mod.hideSelfFlash;
      if (mod.hideSelfFlash) mod.onlySelfFlash = false;
    },
    toggleViewMode() {
      this.viewMode = this.viewMode == ViewMode.LAND ? ViewMode.THROW : ViewMode.LAND;
    },
    setHoveredInstaSmoke(item) {
      this.hoveredInstaSmoke = item;
    },
    clearHoveredInstaSmoke() {
      this.hoveredInstaSmoke = null;
    }
  }
});
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => ({
    isSidebarExpanded: true
  }),

  // getters: {
  //   isSidebarExpanded: state => state.sidebarExpandedFlag
  // },

  actions: {
    changeSidebarState() {
      this.isSidebarExpanded = !this.isSidebarExpanded
    }
  }
})

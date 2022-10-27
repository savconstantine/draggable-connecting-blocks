import { createStore } from 'vuex'

const store = createStore({
  state: {
    blocks: {
      1: {
        id: 1,
        topProp: 122,
        leftProp: 251,
        topHost: { x: 301, y: 122 },
        rightHost: { x: 351, y: 172 },
        bottomHost: { x: 301, y: 222 },
        leftHost: { x: 251, y: 172 },
      },
      2: {
        id: 2,
        topProp: 315,
        leftProp: 146,
        topHost: { x: 196, y: 315 },
        rightHost: { x: 246, y: 365 },
        bottomHost: { x: 196, y: 415 },
        leftHost: { x: 146, y: 365 },
      },
      3: {
        id: 3,
        topProp: 124,
        leftProp: 44,
        topHost: { x: 94, y: 124 },
        rightHost: { x: 144, y: 174 },
        bottomHost: { x: 94, y: 224 },
        leftHost: { x: 44, y: 174 },
      },
    },
    lines: {
      1: {
        id: 1,
        start: { blockID: 3, host: "bottomHost" },
        end: { blockID: 2, host: "leftHost" },
      },
      2: {
        id: 2,
        start: { blockID: 1, host: "bottomHost" },
        end: { blockID: 2, host: "topHost" },
      },
    },
  },
  mutations: {
    updateBlocksAndLines(state, { blocks, lines }) {
      state.blocks = blocks;
      state.lines = lines;
    },
  },
  actions: {},
  modules: {},
});

export default store
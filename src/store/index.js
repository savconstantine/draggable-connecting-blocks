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
  getters: {
    getBlocks(state, getters) {
      return getters.getDataByName("blocks");
    },
    getLines(state, getters) {
      return getters.getDataByName("lines");
    },
    getDataByName: (state) => (name) => {
      return state[name];
    },
  },
  actions: {},
  mutations: {
    addBlock(state, block) {
      state.blocks = { ...state.blocks, [block.id]: block };
    },
    updateBlock(state, block) {
      state.blocks[block.id] = block;
    },
    deleteBlock(state, blockID) {
      let lines = state.lines;

      Object.keys(lines)
        .map((key) => lines[key])
        .filter((elem) => {
          if (elem.start.blockID == blockID || elem.end.blockID == blockID) {
            delete state.lines[elem.id];
          }
        });
      delete state.blocks[blockID];
    },
    addLine(state, line) {
      state.lines = { ...state.lines, [line.id]: line };
    },
    deleteLine(state, lineID) {
      delete state.lines[lineID];
    }
  },
  modules: {},
});

export default store;
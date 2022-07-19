import { createStore } from 'vuex'

const store = createStore({
    state: {
        lineCreating: {
            status: false,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            prepLine: {
                start: {
                    blockID: '',
                    host: '',
                },
                end: {
                    blockID: '',
                    host: '',
                }
            }
        },
        blocks: {
            1: {
                id: 1,
                topProp: 123,
                leftProp: 245,
                topHost: {
                    x: 280,
                    y: 108,
                },
                rightHost: {
                    x: 330,
                    y: 158,
                },
                bottomHost: {
                    x: 280,
                    y: 208,
                },
                leftHost: {
                    x: 230,
                    y: 158,
                },
            },

            2: {
                id: 2,
                topProp: 323,
                leftProp: 234,
                topHost: {
                    x: 269,
                    y: 308,
                },
                rightHost: {
                    x: 319,
                    y: 358,
                },
                bottomHost: {
                    x: 269,
                    y: 408,
                },
                leftHost: {
                    x: 219,
                    y: 358,
                },
            },
            3: {
                id: 3,
                topProp: 0,
                leftProp: 0,
                topHost: {
                    x: 35,
                    y: -15,
                },
                rightHost: {
                    x: 85,
                    y: 35,
                },
                bottomHost: {
                    x: 35,
                    y: 85,
                },
                leftHost: {
                    x: -15,
                    y: 35,
                },
            },
        },
        lines: {
            1: {
                id: 1,
                start: {
                    blockID: 3,
                    host: 'bottomHost',
                },
                end: {
                    blockID: 2,
                    host: 'leftHost',
                }
            },
            2: {
                id: 2,
                start: {
                    blockID: 1,
                    host: 'bottomHost',
                },
                end: {
                    blockID: 2,
                    host: 'topHost',
                }
            }
        }
    },
    mutations: {
        removeLine(state, lineID) {
            delete state.lines[lineID];
        },
        removeBlock(state, blockID) {
            let lines = state.lines;
            let self = state;

            Object.keys(lines).map(key => lines[key]).filter(function (elem) {
                if (elem.start.blockID == blockID || elem.end.blockID == blockID) {
                    delete self.lines[elem.id];
                }
            });
            delete state.blocks[blockID];
        },
        addBlock(state) {
            let min = 0;
            let max = 700;
            let blockId = String(Math.random());
            const newBlockObj = {
                id: blockId,
                topProp: Math.random() * (max - min) + min,
                leftProp: Math.random() * (max - min) + min,
                topHost: {
                    x: 35,
                    y: -15,
                },
                rightHost: {
                    x: 85,
                    y: 35,
                },
                bottomHost: {
                    x: 35,
                    y: 85,
                },
                leftHost: {
                    x: -15,
                    y: 35,
                },
            }


            state.blocks[newBlockObj.id] = newBlockObj
        },
        cancelLineCreating(state) {
            state.lineCreating = {
                status: false,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                prepLine: {
                    start: {
                        blockID: '',
                        host: '',
                    },
                    end: {
                        blockID: '',
                        host: '',
                    }
                }
            }
        },
        setLine(state, blockIndex, hostType) {
            this.updateHostCoordinatesByBlockID(blockIndex);
            if (this.lineCreating.status === false) {
              this.lineCreating.status = true;
    
              this.lineCreating.x1 = this.blocks[blockIndex][hostType]['x'];
              this.lineCreating.y1 = this.blocks[blockIndex][hostType]['y'];
              this.lineCreating.x2 = this.blocks[blockIndex][hostType]['x'];
              this.lineCreating.y2 = this.blocks[blockIndex][hostType]['y'];
              this.lineCreating.prepLine.start = {
                blockID : blockIndex,
                host: hostType
              }
              window.addEventListener('mousemove',this.mouseIsMoving);
    
            } else {
              window.removeEventListener('mousemove', this.mouseIsMoving);
              this.lineCreating.prepLine.end = {
                blockID : blockIndex,
                host: hostType
              }
              const newLineObj = {
                id: String(Math.random()),
                ...this.lineCreating.prepLine,
              }
    
              this.lines[newLineObj.id] = newLineObj
              this.lineCreating.x1 = 0;
              this.lineCreating.y1 = 0;
              this.lineCreating.x2 = 0;
              this.lineCreating.y2 = 0;
              this.lineCreating.status = false;
            }
          },
    },
    actions: {},
    modules: {}
})

export default store
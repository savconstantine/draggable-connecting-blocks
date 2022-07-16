<template>
  <div id="app">
    <DragBlock
            v-for="(block, blockIndex) in blocks"
            :top-prop="block.topProp"
            :left-prop="block.leftProp"
            @dragging="handleDragging(blockIndex)"
            v-bind:key="'dragBlock' + blockIndex"
    >
      <div class="innerElement">
        <div 
            v-for="(lineHost, lineHostIndex) in lineHosts" 
            :key="'lineHost' + blockIndex + '_' + lineHostIndex" 
            class="host " 
            :class="lineHost + 'Host'"
            :ref="lineHost + 'Host' + blockIndex"
            @click="setLine( blockIndex, 'topHost')">
            </div>
            
        <div class="remove-area" v-if="lineCreating.status === false"><img @click="removeBlock(blockIndex)" src="./assets/delete.svg"></div>
      </div>
    </DragBlock>

    <svg style="width: 100%; height: 100%" width="500" height="500">
      <line
              class="line"
              v-for="(line,indexLine) in lines"
              @click="removeLine(indexLine)"
              :x1="blocks[line.start.blockID][line.start.host]['x']"
              :y1="blocks[line.start.blockID][line.start.host]['y']"
              :x2="blocks[line.end.blockID][line.end.host]['x']"
              :y2="blocks[line.end.blockID][line.end.host]['y']" stroke="black"
              v-bind:key="'line' + indexLine"/>
      <line v-if="lineCreating.status === true" :x1="lineCreating.x1" :y1="lineCreating.y1" :x2="lineCreating.x2" :y2="lineCreating.y2" stroke="black"/>
    </svg>

    <button v-if="lineCreating.status === true" class="button red" @click="cancelLineCreating()">Cancel connection creation</button>
    <button v-else class="button" @click="addBlock()">Add New Block</button>
  </div>
</template>

<script>
  import DragBlock from './components/DragBlock.vue'


  export default {
    name: 'App',
    components: {
    DragBlock,
    },
    data() {
      return {
        lineHosts: [
            'top',
            'right',
            'bottom',
            'left'
        ],
        lineCreating: {
          status: false,
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
          prepLine: {
            start: {
              blockID : '',
              host: '',
            },
            end : {
              blockID : '',
              host: '',
            }
          }
        },
        blocks: {
          1 : {
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

          2 : {
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
          3 : {
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
          1 : {
            id: 1,
            start: {
              blockID : 3,
              host: 'bottomHost',
            },
            end : {
              blockID : 2,
              host: 'leftHost',
            }
          },
          2 : {
            id: 2,
            start: {
              blockID : 1,
              host: 'bottomHost',
            },
            end : {
              blockID : 2,
              host: 'topHost',
            }
          }
        }
      }
    },
    computed: {
    },
    mounted() {
    },
    destroyed: function() {
      window.removeEventListener('mousemove', this.mouseIsMoving);
    },
    methods: {
      removeLine(lineID) {
        delete this.lines[lineID];
      },
      removeBlock(blockID) {
        let lines = this.lines;
        let self = this;

        Object.keys(lines).map(key => lines[key]).filter(function(elem){
          if(elem.start.blockID == blockID || elem.end.blockID == blockID) {
            delete self.lines[elem.id];
          }
        });
        delete this.blocks[blockID];
      },
      addBlock() {
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

        
        this.blocks[newBlockObj.id] = newBlockObj

      },
      cancelLineCreating() {
        this.lineCreating = {
          status: false,
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
          prepLine: {
            start: {
              blockID : '',
              host: '',
            },
            end : {
              blockID : '',
              host: '',
            }
          }
        }
      },
      mouseIsMoving(e) {
        this.lineCreating.x2 = e.pageX;
        this.lineCreating.y2 = e.pageY;
      },
      setLine(blockIndex, hostType) {
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
      getPos(el) {

        for (var lx=0, ly=0;
             el != null;
             lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        return {x: lx,y: ly};
      },
      updateHostCoordinatesByBlockID(blockID) {
        this.blocks[blockID]['topHost'] = this.getPos(this.$refs['topHost' + blockID][0]);
        this.blocks[blockID]['rightHost'] = this.getPos(this.$refs['rightHost' + blockID][0]);
        this.blocks[blockID]['bottomHost'] = this.getPos(this.$refs['bottomHost' + blockID][0]);
        this.blocks[blockID]['leftHost'] = this.getPos(this.$refs['leftHost' + blockID][0]);
      },

      handleDragging(blockIndex) {
        this.updateHostCoordinatesByBlockID(blockIndex);
      },

    }
  }
</script>



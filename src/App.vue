<template>
  <div id="main">
    <DragBlock v-for="(block, blockIndex) in blocks" :block-prop="block" @emitDragging="updateHostCoordinatesByBlockID"
      v-bind:key="'dragBlock' + blockIndex">
      <div class="innerElement">
        <div v-for="(lineHost, lineHostIndex) in lineHosts" :key="'lineHost' + blockIndex + '_' + lineHostIndex"
          class="host " :class="lineHost + 'Host'" :ref="lineHost + 'Host' + blockIndex"
          @click="setLine(blockIndex, lineHost + 'Host')">
        </div>
        <div class="remove-area" v-if="lineCreating.status === false"><img @click="removeBlock(blockIndex)"
            src="./assets/delete.svg"></div>
      </div>
    </DragBlock>

    <svg style="width: 100%; height: 100%" width="5000" height="5000">
      <line class="line" v-for="(line, indexLine) in lines" @click="removeLine(indexLine)"
        :x1="blocks[line.start.blockID][line.start.host]['x']" :y1="blocks[line.start.blockID][line.start.host]['y']"
        :x2="blocks[line.end.blockID][line.end.host]['x']" :y2="blocks[line.end.blockID][line.end.host]['y']"
        stroke="black" v-bind:key="'line' + indexLine" />
      <line v-if="lineCreating.status === true" :x1="lineCreating.x1" :y1="lineCreating.y1" :x2="lineCreating.x2"
        :y2="lineCreating.y2" stroke="black" />
    </svg>

    <div data-dial-init class="fixed left-6 bottom-6 group">
      <button v-if="lineCreating.status === true" @click="cancelLineCreating()" type="button"
        class="flex justify-center items-center w-14 h-14 text-white bg-pink-700 rounded-full hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:focus:ring-pink-800 transition duration-500 hover:scale-125">
        <svg class="w-8 h-8 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </button>
      <button v-else @click="addBlock()" type="button"
        class="flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 transition duration-500 hover:scale-125">
        <svg class="w-8 h-8 transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </button>
    </div>
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
            blockID: '',
            host: '',
          },
          end: {
            blockID: '',
            host: '',
          }
        }
      },
    }
  },
  computed: {
    blocks() {
      return this.$store.getters.getBlocks;
    },
    lines() {
      return this.$store.getters.getLines;
    }
  },
  beforeMount() { },
  mounted() {
    let blocksArray = Object.keys(this.blocks);
    if (blocksArray.length !== 0) {
      blocksArray.forEach(element => this.updateHostCoordinatesByBlockID(element));
    }
  },
  destroyed: function () {
    window.removeEventListener('mousemove', this.mouseIsMoving);
  },
  methods: {
    removeLine(lineID) {
      this.$store.commit('deleteLine', lineID);
    },
    removeBlock(blockID) {
      this.$store.commit('deleteBlock', blockID);
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

      this.$store.commit('addBlock', newBlockObj);
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
          blockID: blockIndex,
          host: hostType
        }
        window.addEventListener('mousemove', this.mouseIsMoving);

      } else {
        window.removeEventListener('mousemove', this.mouseIsMoving);
        this.lineCreating.prepLine.end = {
          blockID: blockIndex,
          host: hostType
        }
        const newLineObj = {
          id: String(Math.random()),
          ...this.lineCreating.prepLine,
        }

        this.$store.commit('addLine', newLineObj);
        this.lineCreating.x1 = 0;
        this.lineCreating.y1 = 0;
        this.lineCreating.x2 = 0;
        this.lineCreating.y2 = 0;
        this.lineCreating.status = false;
      }
    },
    getPos(el) {
      let lx = 0, ly = 0
      for (lx = 0, ly = 0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
      return { x: lx + 15, y: ly + 15 };
    },
    updateHostCoordinatesByBlockID(blockID, left = false, top = false) {
      const block = structuredClone(this.blocks[blockID]);

      block.leftProp = left ? left : block.leftProp;
      block.topProp = top ? top : block.topProp;

      block['topHost'] = this.getPos(this.$refs['topHost' + blockID][0]);
      block['rightHost'] = this.getPos(this.$refs['rightHost' + blockID][0]);
      block['bottomHost'] = this.getPos(this.$refs['bottomHost' + blockID][0]);
      block['leftHost'] = this.getPos(this.$refs['leftHost' + blockID][0]);

      this.$store.commit('updateBlock', block);
    },
    handleDragging(block, left, top) {
      block.leftProp = left
      block.topProp = top

      this.updateHostCoordinatesByBlockID(block.id);
    },

  }
}
</script>



<template>
  <div
    class="drag-block"
    @mousedown.stop="drag"
    @mouseup.stop="drop"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'DragBlock',
    props: {
      topProp: {
        type: Number,
        default: 0
      },
      leftProp: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        shiftY: null,
        shiftX: null,
        left: 0,
        top: 0,
        element: null,
        parent: {
          width: 0,
          height: 0,
        },
      }
    },
    methods: {
      elementMove(e) {
        this.$emit('dragging');
        e.preventDefault();

        const x = e.pageX;
        const y = e.pageY;
        let newLeft = x - this.shiftX;
        let newTop = y - this.shiftY;
        const newRight = x - this.shiftX + this.element.offsetWidth;
        const newBottom = y - this.shiftY + this.element.offsetHeight;
        if (newLeft < 0) {
          newLeft = 0;
        } else if (newRight > this.parent.width) {
          newLeft =  this.parent.width - this.element.offsetWidth;
        } else {
          newLeft = x - this.shiftX;
        }
        if (newTop < 0) {
          newTop = 0;
        } else if (newBottom > this.parent.height) {
          newTop = this.parent.height - this.element.offsetHeight;
        } else {
          newTop = y - this.shiftY;
        }
        this.element.style.left = `${newLeft}px`;
        this.left = newLeft;
        this.element.style.top = `${newTop}px`;
        this.top = newTop;
      },
      drag(e) {
        this.parent.width = this.parentWidth || this.element.parentNode.offsetWidth;
        this.parent.height = this.parentHeight || this.element.parentNode.offsetHeight;
        this.shiftX = e.pageX - this.element.offsetLeft;
        this.shiftY = e.pageY - this.element.offsetTop;

        if (e.pageX) {
          this.element.addEventListener('mousemove', this.elementMove);
          this.element.addEventListener('mouseleave', this.drop);
        }
      },
      drop() {
        this.element.removeEventListener('mousemove', this.elementMove, false);
        this.element.onmouseup = null;
      },
    },
    mounted() {
      this.element = this.$el;
      this.element.style.left = `${this.leftProp}px`;
      this.left = this.leftProp;
      this.element.style.top = `${this.topProp}px`;
      this.top = this.topProp;

    },
  };
</script>

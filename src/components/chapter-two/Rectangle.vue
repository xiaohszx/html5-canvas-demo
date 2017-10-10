<template>
  <div>
    <div class="form">
      <label for="range">边线宽：</label>
      <input id="range" type="range"
        min="1"
        max="200"
        step="1"
        v-model="lineWidth"
        @change="drawScreen(ctx)">
        <span v-text="lineWidth"></span>
    </div>
    <div class="form">
      <label for="alpha">背景色：</label>
      <input type="range" id="alpha"
        min="0.0"
        max="1.0"
        step="0.1"
        v-model="alpha" @change="drawScreen(ctx)">
        <span v-text="alpha"></span>
    </div>
    <canvas id="rectangle" width="600" height="400">
      Brower is not suppot HTML5 canvas.
    </canvas>
  </div>
</template>

<script>
  export default {
    name: 'Rectangle',
    data () {
      return {
        canvas: null,
        ctx: null,
        lineWidth: 15,
        alpha: 1
      }
    },
    computed: {
      fillStyle () {
        return `rgba(100, 200, 300, ${this.alpha})`
      },
      strokeStyle () {
        return `rgba(232, 63, 111, ${this.alpha})`
      }
    },
    methods: {
      canvasApp () {
        const theCanvas = document.getElementById("rectangle")
        this.canvas = theCanvas
        if (!theCanvas || !theCanvas.getContext) return
        const ctx = theCanvas.getContext("2d")
        this.ctx = ctx
        this.drawScreen(ctx)
      },
      drawScreen (ctx) {
        const offset = this.lineWidth / 2
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.fillStyle = this.fillStyle
        ctx.clearRect(offset, offset, this.canvas.width - offset, this.canvas.height - offset)
        ctx.fillRect(offset, offset, this.canvas.width - offset, this.canvas.height - offset)
        ctx.lineWidth = this.lineWidth
        // ctx.strokeStyle = this.strokeStyle
        ctx.strokeStyle = 'rgb(232, 63, 111)'
        ctx.strokeRect(offset, offset, this.canvas.width - this.lineWidth, this.canvas.height - this.lineWidth)
        ctx.save()
        this.ctx = ctx
      }
    },
    watch: {
      alpha () {
        this.drawScreen(this.ctx)
      }
    },
    mounted () {
      this.canvasApp()
    }
  }
</script>

<style>

</style>

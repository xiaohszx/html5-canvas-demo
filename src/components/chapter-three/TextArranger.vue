<template>
  <section class="chapter-three">
    <aside class="text-setting">
      <figure class="setting message">
        <label for="text">Text: </label>
        <input id="text" type="text" v-model="message">
      </figure>
      <figure class="setting fill-or-stroke">
        <label for="fillOrStroke">Fill Or Stroke: </label>
        <select id="fillOrStroke" v-model="fillOrStroke" @change="drawScreen(ctx)">
          <option value="fill">fill</option>
          <option value="stroke">stroke</option>
          <option value="both">both</option>
        </select>
      </figure>
      <figure class="setting font-weight">
        <label for="fontWeight">Font Weight: </label>
        <select id="fontWeight" v-model="fontWeight" @change="drawScreen(ctx)">
          <option value="normal">normal</option>
          <option value="bold">bold</option>
          <option value="bolder">bolder</option>
          <option value="lighter">lighter</option>
        </select>
      </figure>
      <figure class="setting font-style">
        <label for="fontStyle">Font Style: </label>
        <select id="fontStyle" v-model="fontStyle" @change="drawScreen(ctx)">
          <option value="normal">normal</option>
          <option value="italic">italic</option>
          <option value="oblique">oblique</option>
        </select>
      </figure>
      <figure class="setting font-face">
        <label for="fontFace">Font Face: </label>
        <select id="fontFace" v-model="fontFace" @change="drawScreen(ctx)">
          <option value="serif">serif</option>
          <option value="sans-serif">sans-serif</option>
          <option value="cursive">cursive</option>
          <option value="fantasy">fantasy</option>
          <option value="monospace">monospace</option>
        </select>
      </figure>
      <figure class="setting font-size">
        <label for="fontSize">Font Style: </label>
        <input type="range" id="fontSize"
          min="0"
          max="100"
          step="1"
          v-model="fontSize" @change="drawScreen(ctx)">
      </figure>
      <figure class="setting font-color">
        <label for="fontSize">Font Color: </label>
        <color-picker class="color-picker" :value="fontColor" @input="updateFontColor" />
      </figure>
      <figure class="setting text-baseline">
        <label for="textBaseline">Text Baseline: </label>
        <select id="textBaseline" v-model="textBaseline" @change="drawScreen(ctx)">
          <option value="middle">middle</option>
          <option value="top">top</option>
          <option value="hanging">hanging</option>
          <option value="alphabetic">alphabetic</option>
          <option value="ideographic">ideographic</option>
          <option value="bottom">bottom</option>
        </select>
      </figure>
      <figure class="setting text-align">
        <label for="textAlign">Text Align: </label>
        <select id="textAlign" v-model="textAlign" @change="drawScreen(ctx)">
          <option value="center">center</option>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
      </figure>
      <figure class="setting text-alpha">
        <label for="textAlpha">Text Alpha: </label>
        <input type="range" id="textAlpha"
          min="0.0"
          max="1.0"
          step="0.01"
          v-model="textAlpha" @change="drawScreen(ctx)">
      </figure>
      <figure class="setting shadow-x">
        <label for="shadowX">ShadowX: </label>
        <input type="range" id="shadowX"
          min="-100"
          max="100"
          step="1"
          v-model="shadowX" @change="drawScreen(ctx)">
      </figure>
      <figure class="setting shadow-y">
        <label for="shadowY">ShadowY: </label>
        <input type="range" id="shadowY"
          min="-100"
          max="100"
          step="1"
          v-model="shadowY" @change="drawScreen(ctx)">
      </figure>
      <figure class="setting shaodw-blur">
        <label for="shadowBlur">Shadow Blur: </label>
        <input type="range" id="shadowBlur"
          min="1"
          max="100"
          step="1"
          v-model="shadowBlur" @change="drawScreen(ctx)">
      </figure>
      <figure class="setting shadow-color">
        <label for="shadowColor">Shadow Color: </label>
        <color-picker class="color-picker" :value="shadowColor" @input="updateShadowColor" />
      </figure>
      <figure class="setting canvas-width">
        <label for="canvasWidth">Canvas Width: </label>
        <input type="range" id="canvasWidth"
          min="0"
          max="1000"
          step="1"
          v-model="canvasWidth" @change="drawScreen(ctx)">
      </figure>
      <figure class="setting canvas-height">
        <label for="canvasHeight">Canvas Height: </label>
        <input type="range" id="canvasHeight"
          min="0"
          max="1000"
          step="1"
          v-model="canvasHeight" @change="drawScreen(ctx)">
      </figure>
      <figure>
        <input type="button" id="createImageData" value="Create Image Data" @click="createImage">
        <textarea id="imageDataDisplay" rows="5" cols="30" v-model="dataUrl"></textarea>
      </figure>
    </aside>
    <main class="text-arranger">
      <canvas ref="textArranger" :width="canvasWidth" :height="canvasHeight">
        Brower is not suppot HTML5 canvas.
      </canvas>
    </main>
  </section>
</template>

<script>
import { Slider } from 'vue-color'

export default {
  name: 'TextArranger',
  data () {
    return {
      canvas: null,
      // context 实例
      ctx: null,
      // 文本内容
      message: '',
      // TextMetrics 对象，只包含 width 属性，用于计算文本像素宽度和高度
      metrics: null,
      // 文本设置
      fillOrStroke: 'fill',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '50',
      fontFace: 'serif',
      fontColor: {
        hex: '#000'
      },
      textBaseline: 'middle',
      textAlign: 'center',
      textAlpha: 1,
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 1,
      shadowColor: {
        hex: '#707070'
      },
      // 画布设置
      canvasWidth: 1000,
      canvasHeight: 800,
      dataUrl: ''
    }
  },
  computed: {
    xPosition () {
      const textWidth  = this.metrics.width
      return (this.canvas.width / 2)
    },
    yPosition () {
      const textWidth  = this.metrics.width
      return (this.canvas.height / 2)
    }
  },
  methods: {
    drawScreen (ctx) {
      console.log('into drawScreen')
      this.metrics = ctx.measureText(this.message)
      // 重置画布
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      // 背景
      ctx.globalAlpha = 1
      ctx.shadowColor= '#707070'
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.shadowBlur = 0
      ctx.fillStyle = '#ffa'
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      // 边框
      ctx.strokeStyle = '#000'
      ctx.strokeRect(5, 5, this.canvasWidth - 10, this.canvasHeight - 10)
      // 文本
      ctx.textBaseline = this.textBaseline
      ctx.textAlign = this.textAlign
      ctx.font = `${this.fontStyle} ${this.fontWeight} ${this.fontSize}px ${this.fontFace}`
      ctx.shadowColor = this.shadowColor.hex
      ctx.shadowOffsetX = this.shadowX
      ctx.shadowOffsetY = this.shadowY
      ctx.shadowBlur = this.shadowBlur
      ctx.globalAlpha = this.textAlpha


      switch (this.fillOrStroke) {
        case 'fill':
          ctx.fillStyle = this.fontColor.hex
          ctx.fillText(this.message, this.xPosition, this.yPosition)
          break;
        case 'stroke':
          ctx.strokeStyle = this.fontColor.hex
          ctx.strokeText(this.message, this.xPosition, this.yPosition)
          break;
        case 'both':
          ctx.fillStyle = this.fontColor.hex
          ctx.fillText(this.message, this.xPosition, this.yPosition)
          ctx.strokeStyle = '#fff'
          ctx.strokeText(this.message, this.xPosition, this.yPosition)
          break;
        default:
      }

      ctx.save()
    },
    canvasApp () {
      const theCanvas = this.$refs.textArranger
      if (!theCanvas || !theCanvas.getContext) return
      this.canvas = theCanvas
      const ctx = theCanvas.getContext("2d")
      this.ctx = ctx
      this.drawScreen(ctx)
    },
    updateFontColor (value) {
      this.fontColor = value
      this.drawScreen(this.ctx)
    },
    updateShadowColor (value) {
      this.shadowColor = value
      this.drawScreen(this.ctx)
    },
    createImage () {
      const dataUrl = this.canvas.toDataURL()
      this.dataUrl = dataUrl
      window.open(dataUrl, 'canvasImage', `
        left=0,top=0,
        width=${this.canvas.width},
        height=${this.canvas.height},
        toolbar=0,resizable=0
      `)
    }
  },
  watch: {
    message () {
      this.drawScreen(this.ctx)
    }
  },
  mounted () {
    this.canvasApp()
  },
  components: {
    'color-picker': Slider
  }
}
</script>

<style style="css" scoped>
 .chapter-three {
   display: inline-block;
 }

 .text-setting {
   float: right;
   margin-left: 20px;
   padding: 15px;
   height: 770px;
   border: 1px solid #dddee1;
 }

 .setting {
   display: flex;
   margin-bottom: 10px;
 }

 .setting > label {
   width: 45%;
   margin-right: 10px;
   text-align: right;
 }

 .setting > .color-picker {
   width: 55%;
 }

 .text-arranger {
   float: left;
 }
</style>

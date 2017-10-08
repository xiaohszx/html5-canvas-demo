<template>
  <div>
    <canvas id="canvasTwo" width="800" height="600">
      Brower is not suppot HTML5 canvas.
    </canvas>
  </div>
</template>

<script>
  export default {
    name: 'Demo2',
    data () {
      return {

      }
    },
    methods: {
      canvasApp () {
        var theCanvas = document.getElementById("canvasTwo")
        if (!theCanvas || !theCanvas.getContext) return
        var ctx = theCanvas.getContext("2d")
        this.drawBg(ctx)
        this.draw22(ctx)
        this.draw24(ctx)
        this.draw25(ctx)
        this.draw27(ctx)
        this.draw28(ctx)
        this.draw210(ctx)
        this.draw26(ctx)
      },
      drawBg (ctx) {
        ctx.beginPath()
        for (let i = 1; i < 3; i++) {
          ctx.moveTo(0, i* 200)
          ctx.lineTo(800, i * 200)
        }
        for (let i = 1; i < 4; i++) {
          ctx.moveTo(i * 200, 0)
          ctx.lineTo(i * 200, 600)
        }
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
      },
      draw22 (ctx) {
        // 基本矩形
        const x = 50
        const y = 50
        const w = 100
        const h = 100
        ctx.fillStyle = '#fee140'
        ctx.strokeStyle = '#FF6976'
        ctx.lineWidth = 2
        ctx.fillRect(x, y, w, h)
        ctx.strokeRect(x - 10, y - 10, w + 20, h + 20)
        ctx.clearRect(x + 10, y + 10, w - 20, h - 20)
        ctx.save()
      },
      draw24 (ctx) {
        // 简单直线
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.strokeStyle = '#43e97b'
        ctx.lineWidth = 10
        ctx.lineCap = 'square'
        ctx.beginPath()
        ctx.moveTo(225, 50)
        ctx.lineTo(275, 50)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 圆形端点，斜角连接，在画布左上角
        ctx.lineJoin = 'bevel'
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(325, 0)
        ctx.lineTo(350, 0)
        ctx.lineTo(350, 25)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 圆形端点，斜角连接，不在画布左上角
        ctx.beginPath()
        ctx.moveTo(225, 150)
        ctx.lineTo(250, 150)
        ctx.lineTo(250, 175)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 平直端点，圆形连接，不在画布左上角
        ctx.lineJoin = 'round'
        ctx.lineCap = 'butt'
        ctx.beginPath()
        ctx.moveTo(325, 150)
        ctx.lineTo(350, 150)
        ctx.lineTo(350, 175)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
      },
      draw25 (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.beginPath()
        ctx.strokeStyle = '#4facfe'
        ctx.lineWidth = 5
        // 整圆
        ctx.arc(450, 50, 25, (Math.PI/180)*0, (Math.PI/180)*360, false)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 1/4 圆
        ctx.beginPath()
        ctx.arc(550, 50, 25, (Math.PI/180)*0, (Math.PI/180)*90, false)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 3/4 圆
        ctx.beginPath()
        ctx.arc(450, 150, 25, (Math.PI/180)*0, (Math.PI/180)*90, true)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 小弧线
        ctx.beginPath()
        ctx.moveTo(550, 150)
        ctx.lineTo(525, 125)
        ctx.arcTo(600, 200, 100, 100, 20)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 贝塞尔曲线
        ctx.beginPath()
        ctx.moveTo(625, 25)
        ctx.quadraticCurveTo(700, 50, 625, 75)
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        // 两个控制点的贝塞尔曲线
        ctx.beginPath()
        ctx.moveTo(750, 25)
        ctx.bezierCurveTo(700, 100, 800, 100, 750, 175)
        ctx.stroke()
        ctx.closePath()
        ctx.save()

      },
      draw26 (ctx) {
        ctx.width = 800
        ctx.height = 600
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.fillStyle = '#43e97b'
        ctx.fillRect(25, 225, 175, 175)
        ctx.fillStyle = '#fa709a'
        ctx.fillRect(0, 200, 50, 50)
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillRect(75, 200, 50, 50)
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillRect(0, 275, 50, 50)

        ctx.globalAlpha = .5

        ctx.globalCompositeOperation = 'source-atop'
        ctx.fillRect(75, 275, 50, 50)

        ctx.save()
      },
      draw27 (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        const x = 250
        const y = 250
        const w = 100
        const h = 100

        // 正方形
        ctx.fillStyle = '#fa709a'
        ctx.fillRect(x, y, w, h)

        // 旋转的正方形
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        const angleInRadians = 45 * Math.PI / 180
        ctx.translate(x+.5*w, y+.5*h)
        ctx.rotate(angleInRadians)
        ctx.fillStyle = '#2af598'
        ctx.fillRect(-.5*w, -.5*h, w, h)

        // 缩放的正方形
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.translate(x+.5*w, y+.5*h)
        ctx.scale(2, 2)
        ctx.fillStyle = '#f9d423'
        ctx.globalAlpha = .5
        ctx.fillRect(-.5*w, -.5*h, w, h)
        ctx.save()
      },
      draw28 (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0)

        let gr = ''

        // 线性水平渐变
        gr = ctx.createLinearGradient(400, 200, 500, 200)

        gr.addColorStop(0, '#f83600')
        gr.addColorStop(1, '#f9d423')

        ctx.fillStyle = gr
        ctx.fillRect(400, 200, 100, 100)
        ctx.save()

        // 复杂形状水平渐变
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.lineWidth = 1
        gr = ctx.createLinearGradient(500, 200, 600, 200)

        gr.addColorStop(0, '#2af598')
        gr.addColorStop(1, '#fa709a')

        ctx.fillStyle = gr
        ctx.beginPath()
        ctx.moveTo(500, 200)
        ctx.lineTo(550, 200)
        ctx.lineTo(600, 250)
        ctx.lineTo(550, 300)
        ctx.lineTo(500, 300)
        ctx.lineTo(500, 200)
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.save()

        // 复杂形状垂直线性渐变
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        gr = ctx.createLinearGradient(500, 300, 500, 400)

        gr.addColorStop(0, '#2af598')
        gr.addColorStop(1, '#fa709a')

        ctx.fillStyle = gr
        ctx.beginPath()
        ctx.moveTo(500, 300)
        ctx.lineTo(550, 300)
        ctx.lineTo(600, 350)
        ctx.lineTo(550, 400)
        ctx.lineTo(500, 400)
        ctx.lineTo(500, 300)
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.save()

        // 对角线渐变
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        gr = ctx.createLinearGradient(400, 300, 500, 400)

        gr.addColorStop(0, '#2af598')
        gr.addColorStop(.5, '#fa709a')
        gr.addColorStop(1, '#2af598')

        ctx.fillStyle = gr
        ctx.beginPath()
        ctx.moveTo(400, 300)
        ctx.fillRect(400, 300, 100, 100)
        ctx.closePath()
        ctx.save()

        // 径向渐变
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        gr = ctx.createRadialGradient(650, 250, 50, 650, 250, 100)
        gr.addColorStop(0, '#2af598')
        gr.addColorStop(.5, '#fa709a')
        gr.addColorStop(1, '#2af598')
        ctx.fillStyle = gr
        ctx.fillRect(600, 200, 200, 200)
        ctx.save()

        // 复杂径向渐变
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        gr = ctx.createRadialGradient(50, 450, 25, 100, 500, 100)
        gr.addColorStop(0, '#2af598')
        gr.addColorStop(.5, '#fa709a')
        gr.addColorStop(1, '#2af598')
        ctx.fillStyle = gr
        ctx.fillRect(0, 400, 200, 200)
        ctx.save()

        // 圆形径向渐变
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        gr = ctx.createRadialGradient(250, 450, 25, 300, 500, 100)
        gr.addColorStop(0, '#2af598')
        gr.addColorStop(.5, '#fa709a')
        gr.addColorStop(1, '#2af598')
        ctx.fillStyle = gr
        ctx.arc(300, 500, 100, (Math.PI/180)*0, (Math.PI/180)*360, false)
        ctx.fill()
        ctx.save()
      },
      draw210 (ctx) {
        // 矩形阴影
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.globalAlpha = 1

        ctx.fillStyle = '#2af598'
        ctx.shadowOffsetX = -4
        ctx.shadowOffsetY = -4
        ctx.shadowColor = 'black'
        ctx.shadowBlur = 4
        ctx.fillRect(450, 450, 100, 100)

        ctx.shadowOffsetX = 10
        ctx.shadowOffsetY = 10
        ctx.shadowColor = '#fa709a'
        ctx.shadowBlur = 8
        ctx.fillRect(650, 450, 100, 100)

        // 重置画布
        ctx.shadowColor= '#707070'
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = 0

        ctx.save()
      }
    },
    mounted () {
      this.canvasApp()
    }
  }
</script>

<style>
  #canvasTwo {
    border: 1px solid #dddee1;
  }
</style>

<template>
  <div>
    <canvas id="canvasOne" width="500" height="500">
      Brower is not suppot HTML5 canvas.
    </canvas>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    },
    methods: {
      canvasApp () {
        const theCanvas = document.getElementById("canvasOne");
        console.log(theCanvas)
        if (!theCanvas || !theCanvas.getContext) return;
        const context = theCanvas.getContext("2d");
        console.log("Drawing Canvas")

        function drawScreen () {
          context.fillStyle = '#ffa';
          context.fillRect(0, 0, 500, 300);

          context.fillStyle = '#000';
          context.font = '20px Sans-Serif';
          context.textBaseline = 'top';
          context.fillText('Hello World!', 195, 80);
        }

        drawScreen();
      }
    },
    mounted () {
      this.canvasApp();
    }
  }
</script>

<style>

</style>

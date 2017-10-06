<template>
  <div>
    <canvas id="textArranger" width="500" height="500">
      Brower is not suppot HTML5 canvas.
    </canvas>
  </div>
</template>

<script>
  export default {
    name: 'TextArranger',
    data () {
      return {

      }
    },
    methods: {
      canvasApp () {
        var theCanvas = document.getElementById("textArranger");
        console.log(theCanvas)
        if (!theCanvas || !theCanvas.getContext) return;
        var context = theCanvas.getContext("2d");
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

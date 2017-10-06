<template>
  <div>
    <canvas id="spaceShip" width="500" height="500">
      Brower is not suppot HTML5 canvas.
    </canvas>
  </div>
</template>

<script>
  import SpaceShip from '../../assets/ship1.png'

  export default {
    name: 'SpaceShip',
    data () {
      return {

      }
    },
    methods: {
      canvasApp () {
        const theCanvas = document.getElementById("spaceShip");
        if (!theCanvas || !theCanvas.getContext) return;
        const ctx = theCanvas.getContext("2d");

        this.drawSpaceShip(ctx)
      },
      drawSpaceShip (ctx) {
        const spaceShip = new Image()
        spaceShip.addEventListener('load', eventSheetLoaded, false)
        spaceShip.src = '../../assets/ship1.png'

        const eventSheetLoaded = () => {
          drawScreen()
        }

        const drawScreen = () => {
          ctx.drawImage(spaceShip, 0, 0)
        }
      }
    },
    mounted () {
      this.canvasApp();
    }
  }
</script>

<style>

</style>

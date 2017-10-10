<template>
  <div>
    <canvas id="letters" width="500" height="300">
      Brower is not suppot HTML5 canvas.
    </canvas>
    <form>
      <input type="button" id="createImageData" value="Export Canvas Image" @click="createImage">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'GuessLetter',
    data () {
      return {
        guesses: 0,
        message: 'Guess The Letter From a (lower) to (higher)',
        letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g' ,'h', 'i',
                  'j', 'k', 'l', 'm', 'n', 'o' ,'p', 'q', 'r',
                  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        today: new Date(),
        letterToGuess: '',
        higherOrLower: '',
        lettersGuessed: '',
        gameOver: false
      }
    },
    methods: {
      drawScreen (ctx) {
        // 背景
        ctx.fillStyle = '#faf'
        ctx.fillRect(0, 0, 500, 300)
        // 边框
        ctx.strokeStyle = '#000'
        ctx.strokeRect(5, 5, 490, 290);

        ctx.textBaseline = 'top'
        // 日期
        ctx.fillStyle = "#000";
        ctx.font = '10px Sans-Serif'
        ctx.fillText(this.today, 150, 10)
        // 消息
        ctx.fillStyle = '#F00'
        ctx.font = '14px Sans-Serif'
        ctx.fillText(this.message, 125, 30)
        // 猜测的次数
        ctx.fillStyle = '#109910'
        ctx.font = '16px Sans-Serif'
        ctx.fillText(`Guesses: ${this.guesses}`, 215, 50)
        // 显示Lower Or Higher
        ctx.fillStyle = '#000'
        ctx.font = '16px Sans-Serif'
        ctx.fillText(`Higher Or Lower: ${this.higherOrLower}`, 150, 125)
        // 猜过的字母
        ctx.fillStyle = '#F00'
        ctx.font = '16px Sans-Serif'
        ctx.fillText(`Letters Guessed: ${this.lettersGuessed.toString()}`, 10, 260)

        if (this.gameOver) {
          ctx.fillStyle = '#F00'
          ctx.font = '40px _sans_serif'
          ctx.fillText(`You Got It!`, 150, 180)
        }
      },
      canvasApp () {
        const theCanvas = document.getElementById("letters")
        if (!theCanvas || !theCanvas.getContext) return

        const ctx = theCanvas.getContext("2d")
        console.log("Drawing Canvas")

        const initGame = (ctx) => {
          const letterIndex = Math.floor(Math.random() * this.letters.length)
          this.letterToGuess = this.letters[letterIndex]
          this.guesses = 0
          this.lettersGuessed = []
          this.gameOver = false

          window.addEventListener('keydown', eventKeyPressed, true);

          this.drawScreen(ctx)
        }

        const eventKeyPressed = (e) => {
          if (!this.gameOver) {
            let letterPressed = String.fromCharCode(e.keyCode)
            letterPressed = letterPressed.toLowerCase()
            this.guesses++
            this.lettersGuessed.push(letterPressed)

            console.log(letterPressed)
            console.log(this.letterToGuess)
            if (letterPressed == this.letterToGuess) {
              this.gameOver = true
            } else {
              const letterIndex = this.letters.indexOf(this.letterToGuess)
              const guessIndex = this.letters.indexOf(letterPressed)
              console.log(guessIndex)
              if (guessIndex < 0) {
                this.higherOrLower = 'That is not a letter'
              } else if (guessIndex > letterIndex) {
                this.higherOrLower = 'Lower'
              } else {
                this.higherOrLower = 'Higher'
              }
            }
            this.drawScreen(ctx)
          }
        }

        initGame(ctx)
      },
      createImage () {
        var theCanvas = document.getElementById("letters")
        if (!theCanvas || !theCanvas.getContext) return
        window.open(theCanvas.toDataURL(), 'canvasImage', `
          left=0,top=0,width=${theCanvas.width},height=${theCanvas.height},toolbar=0,resizable=0
        `)
      }
    },
    mounted () {
      this.canvasApp()
    }
  }
</script>

<style>
#createImageData {
  padding: 5px;
}
</style>

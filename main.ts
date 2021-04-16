function showBall (x: number, y: number) {
    led.plot(x, y)
}
let ballX = 0
let ballY = 0
let popoX = 1
let popoY = 1
basic.forever(function () {
    basic.clearScreen()
    showBall(ballX, ballY)
    ballX = ballX + popoX
    ballX = Math.round(ballX)
    ballY = ballY + popoY
    if (ballX == 4) {
        popoX = -1
    } else if (ballX == 0) {
        popoX = 1
    }
    if (ballY == 4) {
        popoY = -0.25
    } else if (ballY == 0) {
        popoY = 0.25
    }
    basic.pause(100)
})

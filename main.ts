let Rock_paper_scissors = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    Rock_paper_scissors = randint(1, 3)
    if (Rock_paper_scissors == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (Rock_paper_scissors == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # # .
            . # . # #
            # . . # #
            `)
    }
})
basic.forever(function () {
	
})

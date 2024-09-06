namespace SpriteKind {
    export const africa = SpriteKind.create()
    export const europe = SpriteKind.create()
    export const asia = SpriteKind.create()
    export const australia = SpriteKind.create()
    export const antarctica = SpriteKind.create()
    export const northamerica = SpriteKind.create()
    export const southamerica = SpriteKind.create()
    export const pacific = SpriteKind.create()
    export const atlantic = SpriteKind.create()
    export const southern = SpriteKind.create()
    export const indian = SpriteKind.create()
    export const arctic = SpriteKind.create()
    export const count = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.indian, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundIndian == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Indian Ocean") {
                    foundIndian = 1
                    indianocean.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    foundIndian = 1
                    numOfWrongGuess += 1
                    indianocean.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.northamerica, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundNorthAmerica == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "North America") {
                    foundNorthAmerica = 1
                    northamerica2.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    numOfWrongGuess += 1
                    foundNorthAmerica = 1
                    northamerica2.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
function updateStopwatch (currTime: number) {
    stopwatch.setText(convertToText(currTime))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.australia, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundAustralia == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Australia") {
                    foundAustralia = 1
                    australia2.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    numOfWrongGuess += 1
                    foundAustralia = 1
                    australia2.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
function getStarted () {
    cursor = sprites.create(img`
        f f f f f f 
        f 1 1 1 f . 
        f 1 1 f . . 
        f 1 f 1 f . 
        f f . f 1 f 
        f . . . f . 
        `, SpriteKind.Player)
    controller.moveSprite(cursor)
    stopwatch = textsprite.create("0")
    stopwatch.setMaxFontHeight(12)
    stopwatch.setOutline(1, 8)
    stopwatch.setIcon(img`
        . . 8 8 8 8 8 . . . . . 
        . . . . 8 . . . . . . . 
        . . . . 8 . . . . . . . 
        . 8 8 8 8 8 8 8 . . . . 
        8 . . . . . . . 8 . . . 
        8 . . . 8 . . . 8 . . . 
        8 . . . 8 . . . 8 . . . 
        8 . . . 8 . . . 8 . . . 
        8 . . . . 8 . . 8 . . . 
        8 . . . . . 8 . 8 . . . 
        8 . . . . . . . 8 . . . 
        . 8 8 8 8 8 8 8 . . . . 
        `)
    stopwatch.setPosition(75, 10)
    timerIsRunning = true
    updateStopwatch(0)
    startTime = game.runtime()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.antarctica, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundAntarctica == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Antarctica") {
                    foundAntarctica = 1
                    antarctica2.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    numOfWrongGuess += 1
                    foundAntarctica = 1
                    antarctica2.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mainMenuOpen == 0) {
        mainMenuOpen = 1
        cursor.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        controller.moveSprite(cursor, 0, 0)
        if (gameType == 0) {
            piece = miniMenu.createMenu(
            miniMenu.createMenuItem("North America"),
            miniMenu.createMenuItem("South America"),
            miniMenu.createMenuItem("Africa"),
            miniMenu.createMenuItem("Europe"),
            miniMenu.createMenuItem("Asia"),
            miniMenu.createMenuItem("Australia"),
            miniMenu.createMenuItem("Antarctica")
            )
            piece.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
            piece.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 3)
            piece.onButtonPressed(controller.A, function (selection, selectedIndex) {
                cursor.setImage(img`
                    f f f f f f 
                    f 1 1 1 f . 
                    f 1 1 f . . 
                    f 1 f 1 f . 
                    f f . f 1 f 
                    f . . . f . 
                    `)
                controller.moveSprite(cursor, 100, 100)
                piece.close()
                currSelection = selection
                mainMenuOpen = 0
            })
        } else if (gameType == 1) {
            piece = miniMenu.createMenu(
            miniMenu.createMenuItem("Pacific Ocean"),
            miniMenu.createMenuItem("Atlantic Ocean"),
            miniMenu.createMenuItem("Southern Ocean"),
            miniMenu.createMenuItem("Indian Ocean"),
            miniMenu.createMenuItem("Arctic Ocean")
            )
            piece.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
            piece.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 3)
            piece.onButtonPressed(controller.A, function (selection, selectedIndex) {
                cursor.setImage(img`
                    f f f f f f 
                    f 1 1 1 f . 
                    f 1 1 f . . 
                    f 1 f 1 f . 
                    f f . f 1 f 
                    f . . . f . 
                    `)
                controller.moveSprite(cursor, 100, 100)
                piece.close()
                currSelection = selection
                mainMenuOpen = 0
            })
        } else if (gameType == 2) {
            piece = miniMenu.createMenu(
            miniMenu.createMenuItem("North America"),
            miniMenu.createMenuItem("South America"),
            miniMenu.createMenuItem("Africa"),
            miniMenu.createMenuItem("Europe"),
            miniMenu.createMenuItem("Asia"),
            miniMenu.createMenuItem("Australia"),
            miniMenu.createMenuItem("Antarctica"),
            miniMenu.createMenuItem("Pacific Ocean"),
            miniMenu.createMenuItem("Atlantic Ocean"),
            miniMenu.createMenuItem("Southern Ocean"),
            miniMenu.createMenuItem("Indian Ocean"),
            miniMenu.createMenuItem("Arctic Ocean")
            )
            piece.setDimensions(100, 80)
            piece.setPosition(75, 60)
            piece.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
            piece.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 3)
            piece.onButtonPressed(controller.A, function (selection, selectedIndex) {
                cursor.setImage(img`
                    f f f f f f 
                    f 1 1 1 f . 
                    f 1 1 f . . 
                    f 1 f 1 f . 
                    f f . f 1 f 
                    f . . . f . 
                    `)
                controller.moveSprite(cursor, 100, 100)
                piece.close()
                currSelection = selection
                mainMenuOpen = 0
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.southamerica, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundSouthAmerica == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "South America") {
                    foundSouthAmerica = 1
                    southamerica2.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    numOfWrongGuess += 1
                    foundSouthAmerica = 1
                    southamerica2.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Title == 1) {
        Title = 0
        sprites.destroy(tempSprite)
        sprites.destroy(titleImage)
        mainMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Land"),
        miniMenu.createMenuItem("Oceans"),
        miniMenu.createMenuItem("Both")
        )
        mainMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
        mainMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 3)
        mainMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selection == "Land") {
                gameType = 0
                mainMenu.close()
            } else if (selection == "Oceans") {
                gameType = 1
                mainMenu.close()
            } else if (selection == "Both") {
                gameType = 2
                mainMenu.close()
            }
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f f . . . . 
                . . . f f 3 3 3 7 3 3 3 f f . . 
                . . f 3 3 7 7 3 3 7 7 3 3 3 f . 
                . . f 7 7 7 7 3 3 3 3 3 3 3 f . 
                . f 7 7 7 7 3 3 3 3 7 7 7 7 3 f 
                . f 7 7 7 3 3 3 3 3 7 7 7 7 7 f 
                . f 3 7 7 3 3 3 3 3 7 7 7 7 7 f 
                . f 3 7 3 3 3 3 3 3 3 7 7 7 7 f 
                . f 3 7 7 3 3 3 3 3 3 7 7 7 7 f 
                . f 3 3 7 3 3 7 7 3 3 3 7 7 3 f 
                . f 3 7 7 7 3 7 7 7 7 3 7 3 3 f 
                . . f 7 7 7 3 3 7 7 3 3 3 3 f . 
                . . f 7 7 3 3 3 7 3 3 3 3 3 f . 
                . . . f f 3 3 3 7 3 3 3 f f . . 
                . . . . . f f f f f f f . . . . 
                `)
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .b11bb11bb11bb11bb11bbb.
                bbb11bb11bb11bb11bb11b1b
                bb1bbbbbbbbbbbbbbbbbb11b
                b11bb11111111111111bb1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1b1111111111111111b11b
                b11b1111111111111111b1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1b1111111111111111b11b
                b11b1111111111111111b1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1b1111111111111111b11b
                b11b1111111111111111b1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1bb11111111111111bb11b
                b11bbbbbbbbbbbbbbbbbb1bb
                b1b11bb11bb11bb11bb11bbb
                .bbb11bb11bb11bb11bb11b.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.showLongText("Use arrow keys or (WASD) to move                                  Use (B) to open menu                           Click (A) over a blue dot to select                                        Race to get as many right as you can!", DialogLayout.Full)
            _54321 = sprites.create(img`
                ..............................
                ........ffffffffffffffffff....
                .......f222222222222222222f...
                ......f2222222222222222222f...
                ......f2222222222222222222f...
                ......f2222222222222222222f...
                .......f222222222222222222f...
                .......f222222222222222222f...
                .......f22222222222222222f....
                ........f2222222222222222f....
                ........f2222222fffffffff.....
                ........f2222222f.............
                ........f222222fffff..........
                .......f222222222222ff........
                .......f22222222222222f.......
                .......f222222222222222f......
                ........ff22222222222222f.....
                ..........fffff222222222f.....
                ...............ff22222222f....
                ...ffffff........f2222222f....
                ..f222222f.......f2222222f....
                ..f222222f.......f222222f.....
                ..f2222222fffffff2222222f.....
                ..f22222222222222222222f......
                ..f2222222222222222222f.......
                ...f22222222222222222f........
                ....f222222222222222f.........
                .....fff2222222222ff..........
                ........ffffffffff............
                ..............................
                `, SpriteKind.count)
            pause(1000)
            _54321.setImage(img`
                ..............................
                ......ffff....................
                ......f44f.....fffffff........
                .....ff44f.....f44444f........
                .....f444f.....f44444f........
                .....f444f.....f44444f........
                .....f444f.....f44444f........
                .....f444f....ff44444f........
                .....f444f....f444444f........
                .....f444f....f444444f........
                .....f444f....f444444f........
                .....f444f....f444444f........
                ....ff444f...ff444444f........
                ....f4444fffff444444f.........
                ....f4444444444444444f........
                ....f4444444444444444f........
                ....f4444444444444444f........
                ....fffffffffff444444f........
                ..............f444444f........
                ..............f44444f.........
                ..............f44444f.........
                ..............f44444f.........
                .............f444444f.........
                .............f444444f.........
                .............f444444f.........
                .............f444444f.........
                .............ff44444f.........
                ..............fff44f..........
                ................ffff..........
                ..............................
                `)
            pause(1000)
            _54321.setImage(img`
                ..............................
                ..............................
                ..............................
                ..............................
                ............fffffff...........
                ..........ff5555555ff.........
                .........fff555555555f........
                .........ff55555555555f.......
                ........ff555555555555f.......
                .......ff555ffffff55555f......
                .......ffffff.....ff555f......
                ...................f555f......
                ..................ff555f......
                ..............fffff55555f.....
                ........fffffff555555555f.....
                .......ff555555555555555f.....
                .......f55555555555555ff......
                ........ff555555fffffff.......
                .........ffff5555555ff........
                ............ffff555555ff......
                ...............ff555555ff.....
                ......ffffffff..ff555555ff....
                ......f555555ffff55555555f....
                ......f55555555555555555f.....
                ......ff555555555555555ff.....
                .......ff5555555555555ff......
                ........ffff55555555fff.......
                ............fffffffff.........
                ..............................
                ..............................
                `)
            pause(1000)
            _54321.setImage(img`
                ..............................
                ..............................
                ..............................
                ...............ffffff.........
                ...........ffff77777ff........
                ..........ff7777777777f.......
                ........ff777777777777ff......
                ........f77777777777777f......
                .......ff777777fff77777f......
                ......ff77777ff..ff7777f......
                ......f77777ff...ff7777f......
                ......f7777ff....f77777f......
                ......f777ff.....f77777f......
                ......f77ff.....f77777f.......
                ......ffff.....f777777f.......
                ..............f777777f........
                ............ff7777777f........
                ..........fff7777777f.........
                .........ff77777777ff.........
                ........ff777777777f..........
                ......ff777777777ff...........
                .....ff777777777ff............
                ....f7777777777ff.............
                ....f777777777fffffffff.......
                ....f777777777777777777ff.....
                ....ff7777777777777777777f....
                ......fff7777777777777777f....
                ........fffffff7777ffffff.....
                ..............ffffff..........
                ..............................
                `)
            pause(1000)
            _54321.setImage(img`
                ..............................
                ..............................
                ..................ff..........
                ................fffff.........
                ..............fff666f.........
                .............fff6666ff........
                ............ff6666666f........
                ...........ff66666666f........
                ...........f666666666f........
                ..........ff666666666f........
                ..........f6666ff6666f........
                ..........f6666ff6666f........
                ..........f666fff6666f........
                ..........ffff..f666f.........
                ................f666f.........
                ................f666f.........
                ................f666f.........
                ................f666f.........
                ................f666f.........
                ................f666f.........
                ................f666f.........
                ...............ff6666ff.......
                ..........ffffff6666666fffff..
                ........ff66666666666666666ff.
                .......f6666666666666666666ff.
                .......f666666666666666666ff..
                .......ff666666666666666fff...
                .........fffffffffffffff......
                ..............................
                ..............................
                `)
            pause(1000)
            sprites.destroy(_54321)
            mainMenuOpen = 0
            if (gameType == 0 || gameType == 2) {
                africa2 = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.africa)
                europe2 = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.europe)
                aisa = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.asia)
                australia2 = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.australia)
                antarctica2 = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.antarctica)
                northamerica2 = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.northamerica)
                southamerica2 = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.southamerica)
                africa2.setPosition(70, 60)
                europe2.setPosition(75, 40)
                aisa.setPosition(105, 35)
                australia2.setPosition(132, 81)
                antarctica2.setPosition(128, 114)
                southamerica2.setPosition(45, 77)
                northamerica2.setPosition(28, 38)
            }
            if (gameType == 1 || gameType == 2) {
                pacificocean = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.pacific)
                atlanticocean = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.atlantic)
                southernocean = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.southern)
                indianocean = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.indian)
                arcticocean = sprites.create(img`
                    f f f f f f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f 3 3 3 3 f 
                    f f f f f f 
                    `, SpriteKind.arctic)
                pacificocean.setPosition(15, 75)
                atlanticocean.setPosition(50, 55)
                southernocean.setPosition(78, 105)
                indianocean.setPosition(106, 76)
                arcticocean.setPosition(50, 5)
            }
            getStarted()
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.africa, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundAfrica == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Africa") {
                    foundAfrica = 1
                    africa2.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    numOfWrongGuess += 1
                    foundAfrica = 1
                    africa2.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pacific, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundPacific == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Pacific Ocean") {
                    foundPacific = 1
                    pacificocean.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    foundPacific = 1
                    numOfWrongGuess += 1
                    pacificocean.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.southern, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundSouthern == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Southern Ocean") {
                    foundSouthern = 1
                    southernocean.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    foundSouthern = 1
                    numOfWrongGuess += 1
                    southernocean.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.europe, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundEurope == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Europe") {
                    foundEurope = 1
                    europe2.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    foundEurope = 1
                    numOfWrongGuess += 1
                    europe2.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.atlantic, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundAtlantic == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Atlantic Ocean") {
                    foundAtlantic = 1
                    atlanticocean.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    foundAtlantic = 1
                    numOfWrongGuess += 1
                    atlanticocean.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.asia, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundAsia == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Asia") {
                    foundAsia = 1
                    aisa.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    numOfWrongGuess += 1
                    foundAsia = 1
                    aisa.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.arctic, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (foundArctic == 0) {
            if (MenuOpen == 0) {
                if (currSelection == "Arctic Ocean") {
                    foundArctic = 1
                    arcticocean.setImage(img`
                        f f f f f f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f 7 7 7 7 f 
                        f f f f f f 
                        `)
                    found += 1
                } else {
                    foundArctic = 1
                    numOfWrongGuess += 1
                    arcticocean.setImage(img`
                        f f f f f f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f 2 2 2 2 f 
                        f f f f f f 
                        `)
                    found += 1
                }
            }
        }
    }
})
let foundArctic = 0
let foundAtlantic = 0
let foundSouthern = 0
let foundPacific = 0
let arcticocean: Sprite = null
let southernocean: Sprite = null
let atlanticocean: Sprite = null
let pacificocean: Sprite = null
let aisa: Sprite = null
let europe2: Sprite = null
let africa2: Sprite = null
let _54321: Sprite = null
let mainMenu: miniMenu.MenuSprite = null
let southamerica2: Sprite = null
let piece: miniMenu.MenuSprite = null
let gameType = 0
let antarctica2: Sprite = null
let startTime = 0
let cursor: Sprite = null
let australia2: Sprite = null
let stopwatch: TextSprite = null
let northamerica2: Sprite = null
let numOfWrongGuess = 0
let found = 0
let indianocean: Sprite = null
let currSelection = ""
let foundIndian = 0
let titleImage: Sprite = null
let tempSprite: Sprite = null
let mainMenuOpen = 0
let Title = 0
let timerIsRunning = false
let MenuOpen = 0
let foundNorthAmerica = 0
let foundSouthAmerica = 0
let foundAntarctica = 0
let foundAustralia = 0
let foundAsia = 0
let foundEurope = 0
let foundAfrica = 0
foundAfrica = 0
foundEurope = 0
foundAsia = 0
foundAustralia = 0
foundAntarctica = 0
foundSouthAmerica = 0
foundNorthAmerica = 0
MenuOpen = 0
timerIsRunning = false
Title = 1
mainMenuOpen = 1
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999991111111199999991911111999999999999999999999999999999999999999911999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999991199919111991111111111119999999999999999999999999999911999999999991991999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999919999119111199111111111111111111999999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999919999999999999111911111111111111111119999999991119119999999999999999999999999991111199999999911119999999999999999999999999999999999
    9999999999999999999999999999911999991919911119991111111111111111199999999999119999999999999999999999999911111111199999999999999999999999999999999999999999999999
    9999999999999999999999999999911999991919911119991111111111111111199999999999119999999999999999999999999911111111199999999999999999999999999999999999999999999999
    9999999999999999999999999999911111991991999999991111111111111111199999999999999999999999999991199999999111111111999999999999999999999999999999999999999999999999
    9999999999999999999999999911199999999999911999999999111111111111199999999999999999999999999119999999911111111111111111119999119999999999999999999999999999999999
    9999999999999999999999999111119999919119999999999999111111111111199999999999999999999999999199999999111111111111111111111999111119999999999999999999999999999999
    9999999999999999999999999111111119919999111199999999111111111119999999999999999999999999999999991111111111111111111111111111111111111199999999999999999999999999
    9999999911119999999999999999111111991199111119999999111111111119999999999999999999999999991999991111111111111111111111111111111111111111111111199999999999999999
    9999991111111111119111111119111111991199911111199999111111111111999999999999999911199999999991191111111111111111111111111111111111111111111111119999999999999999
    9999991111111111119111111119111111991199911111199999111111111111999999999999999911199999999991191111111111111111111111111111111111111111111111119999999999999999
    9999111111111111111111111111199119919119119991199999911111111119999999999999111111111191911111111191111111111111111111111111111111111111111111111199999999999999
    9999111111111111111111111111111111111111119991119999111111111199999999999999111111111111111111111111111111111111111111111111111111111111111111111111999999999999
    9991111111111111111111111111111111111111999991111999111111199999999999999999111111119911111111111111111111111111111111111111111111111111111111119111999999999999
    9911111111111111111111111111111111111119999911199999111111999999119999999991111191111111111111111111111111111111111111111111111111111111111111199999999999999999
    9999991111111111111111111111111111111191999991119999111119999991119999999911111111111111111111111111111111111111111111111111111111111111111111119999999999999999
    9991111111111111111111111111111111111999999999199999911199999999999999999111119911111111111111111111111111111111111111111111111111111999111119999999999999999999
    9991111111111111111111111111111111119999991119999999911199999999999999999111111911111111111111111111111111111111111111111111111111111991119199999999999999999999
    9991111111111111111111111111111111119999991119999999911199999999999999999111111911111111111111111111111111111111111111111111111111111991119199999999999999999999
    9991111111199111111111111111111111119999991119919999999999999999999999999111111911111111111111111111111111111111111111111111111999999911999999999999999999999999
    9999111119999999111111111111111111119999991111119999999999999999999991999191119991111111111111111111111111111111111111111111119999999911199999999999999999999999
    9999991199999999991111111111111111111999991111119999999999999999999911999911119911111111111111111111111111111111111111111111199999999111199999999999999999999999
    9999911999999999991111111111111111111119911111111999999999999999999991999911999111111111111111111111111111111111111111111111111919999911999999999999999999999999
    9999199999999999999111111111111111111111911111111199999999999999999119199111111111111111111111111111111111111111111111111111111119999991999999999999999999999999
    9999999999999999999911111111111111111111911111111199999999999999999991191111111111111111111111111111111111111111111111111111111199999999999999999999999999999999
    9999999999999999999911111111111111111111911111111199999999999999999991191111111111111111111111111111111111111111111111111111111199999999999999999999999999999999
    9999999999999999999911111111111111111111111111111999999999999999999991911111111111111111111111111111111111111111111111111111111191999999999999999999999999999999
    9999999999999999999991111111111111111111111111999199999999999999999991111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999
    9999999999999999999999111111111111111111111111999119999999999999999999111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999999999999991111111111111111111111111199999999999999999999999111111111111199991111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999999999999991111111111111111111111111999999999999999999999999111191991111199999111111111111111111111111111111111111199991999999999999999999999999999999
    9999999999999999999911111111111111111111111999999999999999999999999111119999119911111111111111111111111111111111111111111111999999999999999999999999999999999999
    9999999999999999999911111111111111111111111999999999999999999999999111119999119911111111111111111111111111111111111111111111999999999999999999999999999999999999
    9999999999999999999911111111111111111111119999999999999999999999999111199919991919911111111111111111111111111111111111111191199991999999999999999999999999999999
    9999999999999999999911111111111111111111199999999999999999999999999111199999999999911111111111111111111111111111111111111199119911999999999999999999999999999999
    9999999999999999999911111111111111111111199999999999999999999999999911911119999999999911111111111111111111111111111111111199991119999999999999999999999999999999
    9999999999999999999991111111111111111111199999999999999999999999999911111111999999999911111111111111111111111111111111111119991199999999999999999999999999999999
    9999999999999999999991111111111111111111999999999999999999999999999111111111119911999911111111111111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999111111111111111119999999999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999111111111111111119999999999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999911111111111111199999999999999999999999999999111111111111111111111111119111111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999911111111199999199999999999999999999999999911111111111111111111111111119919999111111111111111111111191999999999999999999999999999999999999
    9999999999999999999999999111111999999199999999999999999999999999911111111111111111111119111111111999911111111111111111119999999999999999999999999999999999999999
    9999999999999999999999991111111999999999999999999999999999999999111111111111111111111111911111111999999111111999111119999999999999999999999999999999999999999999
    9999999999999999999999991111111999999999999999999999999999999999111111111111111111111111911111111999999111119999111111999999199999999999999999999999999999999999
    9999999999999999999999999991111999999919999999999999999999999999111111111111111111111111191111119999999911199999991111199999199999999999999999999999999999999999
    9999999999999999999999999991111999199999919999999999999999999999111111111111111111111111191111999999999911199999991111199999999999999999999999999999999999999999
    9999999999999999999999999991111999199999919999999999999999999999111111111111111111111111191111999999999911199999991111199999999999999999999999999999999999999999
    9999999999999999999999999991111991999999999999999999999999999999111111111111111111111111111199999999999991199999999991199999991999999999999999999999999999999999
    9999999999999999999999999999911111999999999999999999999999999999111111111111111111111111111911999999999991199999999199999999991999999999999999999999999999999999
    9999999999999999999999999999999911119999999999999999999999999999911111111111111111111111111111999999999999919999999919999991999999999999999999999999999999999999
    9999999999999999999999999999999999119999119999999999999999999999991111111111111111111111111111999999999999999999991919999911999999999999999999999999999999999999
    9999999999999999999999999999999999919991111111999999999999999999999111111111111111111111111119999999999999999999991191999111999999999999999999999999999999999999
    9999999999999999999999999999999999991111111111199999999999999999999999999991111111111111111199999999999999999999999119999111919999999999999999999999999999999999
    9999999999999999999999999999999999991111111111199999999999999999999999999991111111111111111199999999999999999999999119999111919999999999999999999999999999999999
    9999999999999999999999999999999999999911111111111999999999999999999999999991111111111111111999999999999999999999999911999911919999991111999999999999999999999999
    9999999999999999999999999999999999999911111111111199999999999999999999999991111111111111111999999999999999999999999991199999999999999911119999999999999999999999
    9999999999999999999999999999999999999911111111111199999999999999999999999999111111111111119999999999999999999999999999991199999999999911991999999999999999999999
    9999999999999999999999999999999999999111111111111111999999999999999999999999991111111111119999999999999999999999999999999999999999999999999199999999999999999999
    9999999999999999999999999999999999999111111111111111111199999999999999999999991111111111119999999999999999999999999999999999999999911999999999999999999999999999
    9999999999999999999999999999999999991111111111111111111199999999999999999999991111111111111999999999999999999999999999999999999999111991199999999999999999999999
    9999999999999999999999999999999999991111111111111111111199999999999999999999991111111111111999999999999999999999999999999999999999111991199999999999999999999999
    9999999999999999999999999999999999999111111111111111111199999999999999999999991111111111111999199999999999999999999999999999999911111191119999999999999999999999
    9999999999999999999999999999999999999911111111111111111999999999999999999999991111111111119991199999999999999999999999999999999111111111119999999999999999999999
    9999999999999999999999999999999999999911111111111111111999999999999999999999991111111111199911199999999999999999999999999999911111111111111999999999999999999999
    9999999999999999999999999999999999999911111111111111119999999999999999999999991111111111999911999999999999999999999999999991111111111111111199999999999999999999
    9999999999999999999999999999999999999991111111111111119999999999999999999999991111111111999911999999999999999999999999999991111111111111111199999999999999999999
    9999999999999999999999999999999999999999911111111111119999999999999999999999999111111111999911999999999999999999999999999991111111111111111119999999999999999999
    9999999999999999999999999999999999999999911111111111119999999999999999999999999111111111999911999999999999999999999999999991111111111111111119999999999999999999
    9999999999999999999999999999999999999999911111111111199999999999999999999999999111111119999999999999999999999999999999999991111111111111111119999999999999999999
    9999999999999999999999999999999999999999911111111119999999999999999999999999999111111119999999999999999999999999999999999991111111111111111199999999999999999999
    9999999999999999999999999999999999999999911111111199999999999999999999999999999911111199999999999999999999999999999999999999111199991111111199999999999999999999
    9999999999999999999999999999999999999999911111111199999999999999999999999999999911111999999999999999999999999999999999999991199999991111111999999999999999999999
    9999999999999999999999999999999999999999911111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111999999999999999999999
    9999999999999999999999999999999999999999911111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999991199999999
    9999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999999999
    9999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991999999999
    9999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999199999999999999999999999
    9999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999199999999999199999999999
    9999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911999999999999
    9999999999999999999999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911999999999999
    9999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999991999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111199999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111119999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111999999999999999999
    9999999999999999999999999991111111199999991111111111111111111111199999999999999999999999999911111111111111111111111111111111111111111111111111199999999999999999
    9999999999999999999999911111111111111111111111111111111111111111111111111111199999999911111111111111111111111111111111111111111111111111111111119999999999999999
    9999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999999999
    9999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999999
    9999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999999
    9999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999
    9999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999
    9999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999
    `)
tempSprite = sprites.create(img`
    f f f f f f 
    f 1 1 1 f . 
    f 1 1 f . . 
    f 1 f 1 f . 
    f f . f 1 f 
    f . . . f . 
    `, SpriteKind.Projectile)
tempSprite.setPosition(-10, 60)
tempSprite.setVelocity(50, 0)
titleImage = sprites.create(img`
    ....e777e..................................e7e..............
    ..e7777777e..............................e77777e............
    .e777777777ee...........................e7777777e...........
    .7777444777777777777777777777777777777777777477777777777....
    e77755554777777777777777777777777777777777745477777777777e..
    7774547454777777777777777777777777777777777454777777777777..
    7774577747745547745547745544545474547744547455547447744777cc
    7774577777454454454457454454554745454455454454454547457777cc
    777457455445775445745445775454774474545474545474545754777e8c
    77745774544555544574544574545477455554547454547457545477788c
    77745774544577774574544555575477547454547454547457455777788c
    77745474544577544574544477575477547454547454547457454777888c
    e7774555547555574555477555575477455554555544547457454777888c
    .777774777774477774777457754777777477454477777777745777e88cc
    .e77777777777777777777454454777777777454777777777754777888cc
    ..e7777777777777777777745547777777777747777777777744777888c.
    ...ce77777e77778e7777777777777e8e777777777777777777777e88cc.
    ....cc88888888888888e777777778888887777777888887777777888cc.
    ...e7777ec88888888888e7777778888888c77777888888877777888cc..
    .e777777777ccccccccc777777888888cccccc888888cccccc888888cc..
    e77777777777eec...e77777777888cccc..cccc888cccc.cccc888cc...
    e777444777777777777777777777cccc......cccccc......cccccc....
    77745555477777777777774577777ec.............................
    777454745477777777777745777777c.............................
    777454775474554774554745554777ec............................
    7774547754454454454454454454777cc...........................
    7774547754447754457744457754777cc...........................
    77745477547455547555474577547778cc..........................
    77745477544577547774544577547778cc..........................
    77745474544577544577544577547778cc..........................
    777455554775555475555445775477788c..........................
    e77777777777477777447777777777788c..........................
    e77777777777777777777777777777e88c..........................
    .e777777777777777777777777777788cc..........................
    ..ee777788877777e7777e77ee778888cc..........................
    ...ccc88888888888888888888888888cc..........................
    ....cccccccccc8888888888888cccccc...........................
    .....ccccccccccccccccccccccccccc............................
    `, SpriteKind.Player)
titleImage.setPosition(-50, 60)
titleImage.setVelocity(50, 0)
game.onUpdate(function () {
    if (gameType == 0) {
        if (found == 7) {
            sprites.destroy(stopwatch)
            game.splash("You finished!" + " Score: " + (game.runtime() - startTime) / 1000 + " With " + numOfWrongGuess + " Wrong Answers!")
            game.reset()
        }
    }
    if (gameType == 1) {
        if (found == 5) {
            sprites.destroy(stopwatch)
            game.splash("You finished!" + " Score: " + (game.runtime() - startTime) / 1000 + " With " + numOfWrongGuess + " Wrong Answers!")
            game.reset()
        }
    }
    if (gameType == 2) {
        if (found == 12) {
            sprites.destroy(stopwatch)
            game.splash("You finished!" + " Score: " + (game.runtime() - startTime) / 1000 + " With " + numOfWrongGuess + " Wrong Answers!")
            game.reset()
        }
    }
})
game.onUpdate(function () {
    if (timerIsRunning) {
        updateStopwatch((game.runtime() - startTime) / 1000)
    }
})

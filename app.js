window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual')
    const colors = [
        "#F1876A",
        "#EE8AD0",
        "#E79BEE",
        "#CC99FF",
        "#5FA4F1",
        "#76F0F0",
        "#61F0B4",
        "#A3F37D",
        "#EBEC97"
    ]


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0
            sounds[index].play()

            createBubbles(index)
        })
    })

    const createBubbles = index => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }
})
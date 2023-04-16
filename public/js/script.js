const button = document.querySelector('button')
const main = document.querySelector('main')

const toggleFullscreen = () => {
    if(document.fullscreenElement)
    document.exitFullscreen()
    else 
    main.requestFullscreen()
}


button.addEventListener('click', toggleFullscreen)

const onChange = () => {
    main.className = document.fullscreenElement ? 'fullscreen' : ''
} 

document.addEventListener('fullscreenchange', onChange)
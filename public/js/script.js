const button = document.querySelector('button')
const div = document.querySelector('div')

const toggleFullscreen = () => {
    if(document.fullscreenElement)
    document.exitFullscreen()
    else 
    div.requestFullscreen()
}




button.addEventListener('click', toggleFullscreen)

const onChange = () => {
    div.className = document.fullscreenElement ? 'fullscreen' : ''
} 

document.addEventListener('fullscreenchange', onChange)
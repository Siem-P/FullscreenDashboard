const button = document.querySelector('button')
let toggleFullscreen
if (document.fullscreenEnabled) {
    toggleFullscreen = () => {
        if(document.fullscreenElement)
        document.exitFullscreen()
        else 
        document.documentElement.requestFullscreen();
    }    
} else if (document.webkitFullscreenEnabled) {
    toggleFullscreen = () => {
        if(document.webkitFullscreenElement)
        document.webkitExitFullscreen()
        else 
        document.documentElement.webkitRequestFullscreen();
    } 
}


button.addEventListener('click', toggleFullscreen)

const onChange = () => {
    main.className = document.fullscreenElement ? 'fullscreen' : ''
} 

document.addEventListener('fullscreenchange', onChange)
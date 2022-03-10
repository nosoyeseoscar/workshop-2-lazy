/* imports */
import { registerImage } from "./lazy.js"

/* HTML elements */
const mountNode = document.getElementById("images")
const addButton = document.getElementById('addImage')
const clearButton = document.getElementById('clear')

/* Functions */
const random = (max, min) => Math.floor(Math.random() * (max - min)) + min

const createImageNode = () => {
    const container = document.createElement('div')

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random(123, 1)}.jpg`

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen)

    container.appendChild(imageWrapper)

    return container
}

const addImages = () => {
    const newImage = createImageNode();
    mountNode.append(newImage)
    registerImage(newImage)
    totalImages++
    imagesStats()
}

const clearImage = () => {
    const allImagesNodes = [...mountNode.childNodes]
    allImagesNodes.forEach(
        node => node.remove()
    )
    totalImages = 0
    loadedImages = 0
    imagesStats()
}

/* Events */
addButton.addEventListener('click', addImages)

clearButton.addEventListener('click', clearImage)



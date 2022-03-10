const isIntersecting = entry => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const container = entry.target
    const imageWrapper = container.firstChild;
    /*const imagen = container.querySelector('img')*/
    const imagen = imageWrapper.firstChild;
    const url = imagen.dataset.src
    imagen.src = url

    observer.unobserve(container)
    loadedImages++
    imagesStats()
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (imagen) => {
    observer.observe(imagen)
}
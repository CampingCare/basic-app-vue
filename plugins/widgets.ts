// update the height of the Camping.care widget based on the size of the document
const updateSize = () => {

    window.top.postMessage({
        height: document.body.scrollHeight // height in pixels
    }, '*') ;

}

const init = () => {

    // create an Observer instance to check if the screen changes
    const resizeObserver = new ResizeObserver((entries) => {
        updateSize() ;
    })

    // start observing a DOM node
    resizeObserver.observe(document.body)

}

export {
    updateSize,
    init
} ;
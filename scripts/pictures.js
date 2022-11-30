document.addEventListener('DOMContentLoaded', function(){
    /* add click handler for Gallery */
    document.getElementById('gallerylinks').onclick = function (event) {
        event = event || window.event;
        let target = event.target; 
        let link = target.src ? target.parentNode : target;
        console.log(link);
        let options = { index: link, event: event };
        let links = this.querySelectorAll("a");
        blueimp.Gallery(links, options);
    }
});
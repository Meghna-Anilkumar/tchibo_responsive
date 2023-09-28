document.addEventListener("DOMContentLoaded", function() {
    const headings = document.getElementsByClassName('headings');

    for (var i = 0; i < headings.length; i++) {
        headings[i].addEventListener('mouseover', createMouseOverHandler(headings[i]));
        headings[i].addEventListener('mouseout', createMouseOutHandler(headings[i]));
    }

    function createMouseOverHandler(heading) {
        return function() {
            heading.style.color = 'white';
        };
    }

    function createMouseOutHandler(heading) {
        return function() {
            heading.style.color = 'black';
        };
    }
});
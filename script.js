function Visible(elementId) {
    var elem = document.getElementById(elementId);
    if (!elem) return;

    elem.addEventListener('mouseover', function() {
        elem.style.opacity = "1";
    });

    elem.addEventListener('mouseout', function() {
        elem.style.opacity = "0.30";
    });

    // Optionally, set initial opacity
    elem.style.opacity = "0.3";
    console.log("Visible function initialized for", elementId);
}

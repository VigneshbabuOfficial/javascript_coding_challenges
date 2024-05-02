// difference between event.stopPropagation and event.preventDefault?
function executeChild(event) {
    // event.preventDefault();
    event.stopPropagation();
    event.currentTarget.innerHTML = 'Click event prevented'
    alert('Link Clicked');
}

function executeParent() {
    alert('div Clicked');
}
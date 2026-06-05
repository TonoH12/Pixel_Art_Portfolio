function resizeTextboxes() {
    let width = window.innerWidth;
    let withoutMargins = width ;

    let leftLength = (withoutMargins * 0.6);
    let rightLength = (withoutMargins * 0.4);

    document.documentElement.style.setProperty('--left_div_width', leftLength + 'px');
    document.documentElement.style.setProperty('--right_div_width', rightLength + 'px');
}

resizeTextboxes();
window.addEventListener('resize', function() {
    resizeTextboxes();
});
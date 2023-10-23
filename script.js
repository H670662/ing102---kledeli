function showhide(event) {
    console.log("showhide", event);

    //debugger;
    var el = event.target.nextElementSibling;

    if (!el.classList.contains("hidden")) {
        el.classList.add("hidden");
    } else {
        el.classList.remove("hidden");
    }
        
}
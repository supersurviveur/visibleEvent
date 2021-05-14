//When the all the element is visible
document.addEventListener("scroll", scrollEvent);

function scrollEvent(){
    let visibleElement = document.querySelectorAll("[data-onvisible]");
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    visibleElement.forEach(elem => {
        let elemTop = elem.offsetTop;
        let elemBottom = elem.offsetTop + elem.offsetHeight;
        let recursive = elem.dataset.recursive!=undefined ? (elem.dataset.recursive=="true" ? true: false) : false;

        if (elemTop>scrollTop && elemBottom<scrollBottom){
            if (elem.dataset.visibleEvent__check==undefined || elem.dataset.visibleEvent__check=="false"){
                elem.dataset.visibleEvent__check=true;

                let functionName = elem.dataset.onvisible;
                var fn = window[functionName];
                if (typeof fn === "function") fn(elem);
            }
        } else if (recursive==true) {
            elem.dataset.visibleEvent__check=false;
        }
    });
}

//When the top of the element is visible
document.addEventListener("scroll", scrollTopEvent);

function scrollTopEvent(){
    let visibleElement = document.querySelectorAll("[data-ontopvisible]");
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    visibleElement.forEach(elem => {
        let elemTop = elem.offsetTop;
        let recursive = elem.dataset.recursive!=undefined ? (elem.dataset.recursive=="true" ? true: false) : false;

        if (elemTop>scrollTop && elemTop<scrollBottom){
            if (elem.dataset.visibleEvent__check==undefined || elem.dataset.visibleEvent__check=="false"){
                elem.dataset.visibleEvent__check=true;

                let functionName = elem.dataset.ontopvisible;
                var fn = window[functionName];
                if (typeof fn === "function") fn(elem);
            }
        } else if (recursive==true) {
            elem.dataset.visibleEvent__check=false;
        }
    });
}

//When the bottom of the element is visible
document.addEventListener("scroll", scrollBottomEvent);

function scrollBottomEvent(){
    let visibleElement = document.querySelectorAll("[data-onbottomvisible]");
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    visibleElement.forEach(elem => {
        let elemBottom = elem.offsetTop + elem.offsetHeight;
        let recursive = elem.dataset.recursive!=undefined ? (elem.dataset.recursive=="true" ? true: false) : false;

        if (elemBottom>scrollTop && elemBottom<scrollBottom){
            if (elem.dataset.visibleEvent__check==undefined || elem.dataset.visibleEvent__check=="false"){
                elem.dataset.visibleEvent__check=true;

                let functionName = elem.dataset.onbottomvisible;
                var fn = window[functionName];
                if (typeof fn === "function") fn(elem);
            }
        } else if (recursive==true) {
            elem.dataset.visibleEvent__check=false;
        }
    });
}

////////////////////
// INVISIBLE PART //
////////////////////

//When the all the element is invisible
document.addEventListener("scroll", scrollEventInvisible);

function scrollEventInvisible(){
    let visibleElement = document.querySelectorAll("[data-oninvisible]");
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    visibleElement.forEach(elem => {
        let elemTop = elem.offsetTop;
        let elemBottom = elem.offsetTop + elem.offsetHeight;
        let recursive = elem.dataset.recursive!=undefined ? (elem.dataset.recursive=="true" ? true: false) : false;

        if (elemTop>scrollBottom || elemBottom<scrollTop){
            if (elem.dataset.invisibleEvent__check=="false"){
                elem.dataset.invisibleEvent__check=true;

                let functionName = elem.dataset.oninvisible;
                var fn = window[functionName];
                if (typeof fn === "function") fn(elem);
            }
        } else if (recursive==true || elem.dataset.invisibleEvent__check==undefined) {
            elem.dataset.invisibleEvent__check=false;
        }
    });
}

//When the top of the element is invisible
document.addEventListener("scroll", scrollTopEventInvisible);

function scrollTopEventInvisible(){
    let visibleElement = document.querySelectorAll("[data-ontopinvisible]");
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    visibleElement.forEach(elem => {
        let elemTop = elem.offsetTop;
        let recursive = elem.dataset.recursive!=undefined ? (elem.dataset.recursive=="true" ? true: false) : false;

        if (elemTop<scrollTop || elemTop>scrollBottom){
            if (elem.dataset.invisibleEvent__check=="false"){
                elem.dataset.invisibleEvent__check=true;

                let functionName = elem.dataset.ontopinvisible;
                var fn = window[functionName];
                if (typeof fn === "function") fn(elem);
            }
        } else if (recursive==true || elem.dataset.invisibleEvent__check==undefined) {
            elem.dataset.invisibleEvent__check=false;
        }
    });
}


//When the bottom of the element is invisible
document.addEventListener("scroll", scrollBottomEventInvisible);

function scrollBottomEventInvisible(){
    let visibleElement = document.querySelectorAll("[data-onbottominvisible]");
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    visibleElement.forEach(elem => {
        let elemBottom = elem.offsetTop + elem.offsetHeight;
        let recursive = elem.dataset.recursive!=undefined ? (elem.dataset.recursive=="true" ? true: false) : false;

        if (elemBottom<scrollTop || elemBottom>scrollBottom){
            if (elem.dataset.invisibleEvent__check=="false"){
                elem.dataset.invisibleEvent__check=true;

                let functionName = elem.dataset.onbottominvisible;
                var fn = window[functionName];
                if (typeof fn === "function") fn(elem);
            }
        } else if (recursive==true || elem.dataset.invisibleEvent__check==undefined) {
            elem.dataset.invisibleEvent__check=false;
        }
    });
}

scrollEvent()
scrollTopEvent()
scrollBottomEvent()
scrollEventInvisible()
scrollTopEventInvisible()
scrollBottomEventInvisible()
function fade () {
$("#%id%").velocity({ 
    properties: { opacity: .1 },
    options: { duration: 800 }
});

setTimeout(unfade, 1000);

}

function unfade () {
$("#%id%").velocity({ 
    properties: { opacity: 1 },
    options: { duration: 800 }
});
setTimeout(fade, 1000);
}


setTimeout(fade, 500);

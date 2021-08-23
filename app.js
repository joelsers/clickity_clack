let i = 0


function clickAndFocusRandomInt(max) {
    let randInt = Math.floor(Math.random() * max)
    $(`.clickable${randInt+1}`).trigger('click');
    $(`.clickable${randInt+1}`).trigger('focus');
    console.log(`${randInt}`)
    console.log(`${i++}`)
    console.log("clicked")
}


setInterval(function(){clickAndFocusRandomInt(13) }, 15000);


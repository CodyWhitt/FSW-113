// Create an event listenter for the 'submit' button that calls the combineLists() function (DONE_)

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

subButton = document.getElementById('submit')
subButton.addEventListener('click',combineLists)



function combineLists() {
    scavengerAry0 = [document.getElementById('scavenger-0').innerHTML]
    scavengerAry1 = [document.getElementById('scavenger-1').innerHTML]
    scavengerAry2 = [document.getElementById('scavenger-2').innerHTML]
    scavengerAry3 = [document.getElementById('scavenger-3').innerHTML]
    combinedList = [...scavengerAry0, ...scavengerAry1, ...scavengerAry2, ...scavengerAry3]
    combinedList.sort()
    output = document.getElementById('AllItems')
    output.innerHTML = combinedList
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}
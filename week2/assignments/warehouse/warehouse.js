const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'z3', qty: 1},
]

// list of each part number and qty for check-off in the "detailsList" element (DONE_)

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element (DONE_)

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element (DONE_)

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1 (DONE_)

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element (DONE_)

// sum up the total number of parts and append that number to the text already in "totalItems" element (DONE_)

let detailsList = '<ol>'
parts.forEach(function(item){
    detailsList += `<li><input type= checkbox></input>${item.qty} (${item.partNbr}) - ${item.partDescr}</li>`
})
detailsList += '</ol>'
document.querySelector('#detailsList').innerHTML = detailsList

const arySpecial = parts.filter(function(parts) {
    return parts.aisle ==='B3'
})
if (arySpecial.length > 0) {
    let specialPackaging = '<ol>'
    arySpecial.forEach(function(item){
        specialPackaging += `<li>Item: ${item.partNbr} / Qty:${item.qty}</li>`
    })
    specialPackaging += '</ol>'
    document.querySelector('#specialPackaging').innerHTML = `Special Packaging required<br><br> ${specialPackaging}` 
} else {
    document.querySelector('#specialPackaging').remove()
}

const hazardousMaterials = parts.some(function(item) {
    return item.aisle ==='J4'
})
if (hazardousMaterials) {
    document.querySelector('#hazardousMaterials').innerText = 'Hazardous Parts Included\n\nGet Gloves'
} else { 
    document.querySelector('#hazardousMaterials').remove()
}

const smallItemsOnly = parts.every(function(item) {
    return item.aisle ==='H1'
})
if (smallItemsOnly) {
    document.querySelector('#smallItemsOnly').innerText = 'Take a basket and go directly to aisle H1'
} else {
    document.querySelector('#smallItemsOnly').remove()
}

const forkiftNeeded = parts.find(function(item) {
    return item.aisle.startsWith('S') || item.aisle.startsWith('T') || item.aisle.startsWith('U')
})
if (forkiftNeeded) {
    document.querySelector('#forkiftNeeded').innerText = 'Forklift Needed'
} else { 
    document.querySelector('#forkiftNeeded').remove()
}

result = parts.reduce((accumulator, current) => accumulator += current.qty, 0);
totalItems.insertAdjacentHTML('beforeend', ": " + result);

// forEach() x1
// filter() 
// map() not sure where to use
// find() not sure where to use
// some() x2
// every() x1
// reduce() x1
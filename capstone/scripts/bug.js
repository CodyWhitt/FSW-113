// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
let bugCount;
// named = document.getElementById('reportedBy')



class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = reportedBy
        this.system = system
        this.subSystem = subSystem
        this.bugDesc = bugDesc
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let deleteBttn = document.createElement('button')
        deleteBttn.innerHTML = 'Delete'
        let resolveBttn = document.createElement('button')
        resolveBttn.innerHTML = 'Resolve'
        let bugBox = document.createElement('div')
            bugBox.innerHTML = newBug.value
            bugBox.appendChild(deleteBttn)
            bugBox.appendChild(resolveBttn)
        let body = document.getElementById('listWrapper')
            body.appendChild(bugBox)
    }

    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        this.parentElement.remove
    }

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
        this.style.backgroundColor = 'lightgrey'
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    newBug = new Bug (
        document.getElementById("reportedBy").value,
        document.getElementById("system").value,
        document.getElementById("subSystem").value,
        document.getElementById("bugDesc").value
    )
    newBug.addBug()
}

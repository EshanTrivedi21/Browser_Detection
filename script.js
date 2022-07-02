let browserDetailsRef = document.getElementById("browserType");
let osDetailsRef = document.getElementById("osType");

const browserList = 
[
    {name:"Firefox" , value:"Firefox"},
    {name:"Opera" , value:"Opera"},
    {name:"Chrome" , value:"Chrome"},
    {name:"Edge" , value:"Edge"},
    {name:"Safari" , value:"Safari"},
]

const osList = 
[
    {name:"Android" , value:"Android"},
    {name:"iOs" , value:"iOs"},
    {name:"Linux" , value:"Linux"},
    {name:"Windows" , value:"Win"},
    {name:"Macintosh" , value:"Mac"},
    {name:"ipad" , value:"ipad"},
]

let browserChecker = () => {
    let userDetails = navigator.userAgent;
    for (let i in browserList) {
        if (userDetails.includes(browserList[i].value)) {
            browserDetailsRef.innerHTML = browserList[i].name || "Unknown Browser";
            break;
        }
    }

    for (let i in osList) {
        if (userDetails.includes(osList[i].value)) {
            osDetailsRef.innerHTML = osList[i].name;
            break;
        }
    }
}

window.onload = browserChecker ();
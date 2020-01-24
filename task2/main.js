function getJson() {
    let response = " ";
    let obj = " ";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        response = xhttp.responseText;
        console.log(response);
        obj = JSON.parse(response);
        console.log(obj.value);
        var tbl = document.createElement('table');    
        var body = document.getElementsByTagName("body")[0];
        var tblBody = document.createElement("tbody");
        var t1 = document.createElement("th");
        var t2 = document.createElement("th");
        var txt1 = document.createTextNode("Id");
        var txt2 = document.createTextNode("Joke");
        var row1 = document.createElement("tr");
        t1.appendChild(txt1);
        t2.appendChild(txt2);
        row1.appendChild(t1);
        row1.appendChild(t2);
        tblBody.appendChild(row1);
        for (var i = 0; i < 10; i++) {
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cellText1 = document.createTextNode(obj.value[i].id);
            var cellText2 = document.createTextNode(obj.value[i].joke);
            cell1.appendChild(cellText1);
            cell2.appendChild(cellText2);
            row.appendChild(cell1);
            row.appendChild(cell2);
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        // tbl.setAttribute("border", "2");   
    }
};
xhttp.open("GET", "http://api.icndb.com/jokes/random/"+10, true);
xhttp.send();
document.getElementById("data").disabled = "True";

}
let count = 10
function getJsonData() {
var tb = document.querySelector("table").remove();
let response = " ";
let obj = " ";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    response = xhttp.responseText;
    console.log(response);
    obj = JSON.parse(response);
    console.log(obj.value);
    var tbl = document.createElement('table');  
    // tb1.setAttribute("id","id1");  
    var body = document.getElementsByTagName("body")[0];
    var tblBody = document.createElement("tbody");
    var t1 = document.createElement("th");
    var t2 = document.createElement("th");
    var txt1 = document.createTextNode("Id");
    var txt2 = document.createTextNode("Joke");
    var row1 = document.createElement("tr");
    t1.appendChild(txt1);
    t2.appendChild(txt2);
    row1.appendChild(t1);
    row1.appendChild(t2);
    tblBody.appendChild(row1);
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cellText1 = document.createTextNode(obj.value[i].id);
        var cellText2 = document.createTextNode(obj.value[i].joke);
        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        row.appendChild(cell1);
        row.appendChild(cell2);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    // tbl.setAttribute("border", "2");
    count = count + 10;
    if(count == 50){
        // alert("Extended 50");
        document.getElementById("remove").style.display="none";
        document.getElementById("data").style.display="none";
    }
    // var ele = document.querySelector("tbody");
    // ele.className = "ndis";
    
 }

};
xhttp.open("GET", "http://api.icndb.com/jokes/random/"+count, true);
xhttp.send();

}

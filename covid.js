function add(){
    var country = document.getElementById("country").value;
    var sDate = document.getElementById("startDate").value;
    var eDate = document.getElementById("endDate").value;
    if(country=="" || sDate=="" || eDate==""){
        alert("No field should be blank");
        return ;
    }
    if (sDate === eDate) {
        alert("Same date can't be passed");
        return;

    }
    var xhttp1 = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/" + country + "?from=" + sDate + "T00:00:00Z&to=" +eDate + "T00:00:00Z";

    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            for (var i = 0; i < list.length; i++) {
                create(list[i].Confirmed, list[i].Active, list[i].Deaths);
            }

        }
    };
    xhttp1.send();

}


function create(confirmedcase, active, death) {
    var parent = document.getElementById("final");

    var divparent = document.createElement("div");

    var cc = document.createElement("p");
    var ctext = document.createTextNode("Confirmed cases  ");
    cc.appendChild(ctext);

    var s = document.createElement("span");
    var stext = document.createTextNode(confirmedcase);

    s.appendChild(stext);
    cc.appendChild(s);

    divparent.appendChild(cc);

    var ac = document.createElement("p");
    var atext = document.createTextNode("Active cases ");
    ac.appendChild(atext);

    var a = document.createElement("span");
    var astext = document.createTextNode(active);

    a.appendChild(astext);
    ac.appendChild(a);

    divparent.appendChild(ac);

    var d = document.createElement("p");
    var dtext = document.createTextNode("Death cases  ");
    d.appendChild(dtext);

    var dc = document.createElement("span");
    var dctext = document.createTextNode(death);

    dc.appendChild(dctext);
    d.appendChild(dc);

    divparent.appendChild(d);


    divparent.setAttribute("class", "blue");

    parent.appendChild(divparent);

}











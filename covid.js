function add(){
    var error=0;
    var country = document.getElementById("country").value;
    var sDate = document.getElementById("startDate").value;
    var eDate = document.getElementById("endDate").value;
    if(country=="" || sDate=="" || eDate==""){
        alert("No field should be blank");
        error = 1;
    }









    var xhttp1 = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/" + country + "?from=" + from + "T00:00:00Z&to=" + to + "T00:00:00Z";

    document.getElementById("result_area").innerHTML = url;
    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var confirmedcase = 0;
            var death = 0;
            var active = 0;
            for (var i = 0; i < list.length; i++) {
                confirmedcase = confirmedcase + list[i].Confirmed;
                active = active + list[i].Active;
                death = death + list[i].Deaths;
            }
            create(confirmedcase, active, death);
        }
    };
    xhttp1.send();

}












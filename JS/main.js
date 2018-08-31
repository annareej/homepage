$(".navbar").find("a").click(function(e){
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },1000);
});

$(document).ready(function() {
    $.ajax({
        url: "./studies.csv",
        success: function(data) {processData(data);}
        });
    });

function processData(data) {
    var rows = data.split(/\n/);
    var text = "<table id='courses' class='table table-bordered'><thead><tr><th>Course Name</th><th>Credits</th></tr></thead>";

    for(var singleRow = 0; singleRow < rows.length; singleRow++){
        text += "<tr><td>" + rows[singleRow].replace(",","</td><td>") + "</td></tr>";
    }

    document.getElementById("studies").innerHTML = text;
}
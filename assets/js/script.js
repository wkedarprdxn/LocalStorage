/* Author: 

*/
$(document).ready(function() {
    var data = localStorage.getItem('data');
    data = JSON.parse(data);
    var selected_index = -1;
    // var names = getNames;
    if (data == null) {
        data = [];
    }
    for (var i in data) {
        var each = JSON.parse(data[i]);
        $('table tbody').append("<tr><td>" +
            each.name + "</td><td>" + each.quantity + "</td><td><button class='del-item'>Delete</button></td></tr>");
    }
    $("form").submit(function(event) {
        var fetchData = JSON.stringify({
            name: $("#name").val(),
            quantity: $("#quant").val()
        });
        data.push(fetchData);
        localStorage.setItem('data', JSON.stringify(data));
    });
    $('#clear').click(function(event) {
        console.log('working');
        localStorage.clear();
        event.preventDefault();
        location.reload();
    });
    $('.del-item').click(function() {
        data.splice(selected_index, 1);
        localStorage.setItem("data", JSON.stringify(data));
        window.location.reload();
    });
});
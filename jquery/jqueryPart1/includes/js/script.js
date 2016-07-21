$(document).ready(function(){

$('#content').on('click', function() {

        var tName = $('#box').val(),
            urlString = "http://www.omdbapi.com/?s=";
        $.ajax({
            method: "GET",
            url: urlString + tName,
            success: function(data) {
                var data1 = data.Search;
                var t = '';
                $(data1).each(function(i, item) {
                    t += '<tr><td><img src=' + data1[i].Poster + '</td>' + '<td>' + 'Title: ' + data1[i].Title + '<br>' + 'Year: ' + data1[i].Year + '<br>' + 'Type: ' + data1[i].Type + '<br>' + 'IMDBId: ' + data1[i].imdbID + '<br>' + '</td></tr>';
                });
                $('#t1').append(t);
            }
        });
    });
});
//For Searching
$("#content").on('click', function(e) {
    e.preventDefault();

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/users?name=" + $('#find').val(),
        dataType: 'json',
        success: function(data) {
            var t = '';
            $(data).each(function(i, item) {
                t += '<tr><td id="id1">' + data[i].id + '</td>' + '<td id="name1">' + data[i].name + '</td>' + '<td id="gender1">' +
                    data[i].gender + '</td>' + '<td id="company1">' + data[i].company + '</td>' + '<td id="email1">' +
                    data[i].email + '</td>' + '<td>' +
                    '<a href="#myModal1" role="button" data-toggle="modal"><button class="edit btn btn-primary"type="button" id="editId" ><span class="glyphicon glyphicon-edit"></span>  Edit</button></a>' +
                    '  ' + '<button class="delete btn btn-danger" type="button" id="deleteId"><span class="glyphicon glyphicon-trash"></span>  Delete</button>' + '</td></tr>'
            });
            $('#tb2').append(t);
            $('#tb2').toggleClass('sr-only');
        }
    });
});

//to view the data
$("#tblData").on('click', function() {
    $.ajax({
        method: "GET",
        url: 'http://localhost:8080/users',
        success: function(data) {
            var t = '';
            $(data).each(function(i, item) {
                t += '<tr><td id="id1">' + data[i].id + '</td>' + '<td id="name1">' + data[i].name + '</td>' + '<td id="gender1">' +
                    data[i].gender + '</td>' + '<td id="company1">' + data[i].company + '</td>' + '<td id="email1">' +
                    data[i].email + '</td>' + '<td>' +
                    '<a href="#myModal1" role="button" data-toggle="modal"><button class="edit btn btn-primary"type="button" id="editId" ><span class="glyphicon glyphicon-edit"></span>  Edit</button></a>' +
                    '  ' + '<button class="delete btn btn-danger" type="button" id="deleteId"><span class="glyphicon glyphicon-trash"></span>  Delete</button>' + '</td></tr>'
            });
            $('#tbl').append(t);
            $('#tbl').toggleClass('sr-only');
        }
    });
});

//For addition
$("#part2").on('click', '#add', function() {
    $("#sbmt").click(function() {
        var add = {
            //"id": $('#id').val(),
            "name": $('#name').val(),
            "gender": $('#gender').val(),
            "company": $('#company').val(),
            "email": $('#email').val()
        }
        $.ajax({
            url: 'http://localhost:8080/users',
            type: 'post',
            data: JSON.stringify(add),
            contentType: 'application/json',
            success: function(data) {
                alert("added successfully");
                location.reload();
            }
        })
    });
});

//For deletion
$("#tbl,#tb2").on('click', '.delete', function() {
    var a = $('td:first', $(this).parents('tr')).text();
    $(this).closest('tr').remove();
    $.ajax({
        url: 'http://localhost:8080/users/' + a,
        method: 'DELETE',
        success: function(data) {
            alert("Deleted Successfully");
        }
    });
});

//For updating
$("#tbl,#tb2").on('click', '#editId', function() {
    var a = $('td:first', $(this).parents('tr')).text();
    var $tr = $(this).closest("tr");
    var id = $tr.find("#id1").text();
    var name = $tr.find("#name1").text();
    var gender = $tr.find("#gender1").text();
    var company = $tr.find("#company1").text();
    var email = $tr.find("#email1").text();
    var obj = {};
    $('#id2').attr("placeholder", id);
    $('#name2').attr("placeholder", name);
    $('#gender2').attr("placeholder", gender);
    $('#company2').attr("placeholder", company);
    $('#email2').attr("placeholder", email);
    $("#sbmt2").click(function() {
        if (($('#name2').val() != '')) {
            obj["name"] = $('#name2').val();
            console.log($('#name2').val());
        } else {
            obj["name"] = name;
            console.log(name);
        }
        if (($('#gender2').val() != '')) {
            obj["gender"] = $('#gender2').val();
            console.log($('#gender2').val());
        } else {
            obj["gender"] = gender;
            console.log(gender);
        }
        if (($('#company2').val() != '')) {
            obj["company"] = $('#company2').val();
            console.log($('#company2').val());
        } else {
            obj["company"] = company;
            console.log(company);
        }
        if (($('#email2').val() != '')) {
            obj["email"] = $('#email2').val();
            console.log($('#email2').val());
        } else {
            obj["email"] = email;
            console.log(email);
        }
        $.ajax({
            url: 'http://localhost:8080/users/' + a,
            method: 'PATCH',
            "content-Type": 'application/json',
            data: obj,
            success: function(data) {
                alert("Edited Successfully");
            }
        });
    });
});

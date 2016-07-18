(function() {
    /*var pElements = document.querySelectorAll("p");
    alert(pElements.length);
    var el = document.createElement("p");
    document.body.appendChild(el);
    var pElements = document.querySelectorAll("p");
    alert(pElements.length);*/

    var doc = document,
    el = doc.createElement("p"),
    content = doc.createTextNode("<strong>This was dynamically created</strong>"),
    p2 = doc.getElementById("p1");

    el.appendChild(content);
    //el.setAttribute("id","bar");
    el.id = "bar";
    //p2.parentNode.insertBefore(el,p2);
    //doc.body.appendChild(el);

    p2.parentNode.replaceChild(el, p2);

}());

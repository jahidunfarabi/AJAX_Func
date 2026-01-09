function loadProducts() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // সার্ভার থেকে আসা JSON ডাটাকে অবজেক্টে রূপান্তর
            var products = JSON.parse(this.responseText);
            var output = "<ul>";

            for (var i in products) {
                output += "<li><strong>" + products[i].name + "</strong>: $" + products[i].price + "</li>";
            }

            output += "</ul>";
            document.getElementById("product-list").innerHTML = output;
        }
    };

    xhttp.open("GET", "products.json", true);
    xhttp.send();
}
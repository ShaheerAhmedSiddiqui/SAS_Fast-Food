// window.onload(function () {
//   var getImg = localStorage.getItem("saveImg");
//   console.log(getImg);
//   var srcAttribute = getImg.src;
//   var imageElement = document.getElementById('imgReplace').src = srcAttribute;
//     console.log(imageElement)
// });
window.onload = function () {
    var getImg = localStorage.getItem("saveImg");
    console.log(getImg);
    var srcAttribute = getImg; // Assuming the saved data is in JSON format
    var imageElement = document.getElementById('imgReplace');
    imageElement.src = srcAttribute;
    console.log(imageElement);

    var saveitemsName = localStorage.getItem("saveitemsName");
    var itemsName = document.getElementById("itemsName").innerHTML = saveitemsName;

    var getitemsPrize = localStorage.getItem("saveitemsPrize");
    var itemsPrize = document.getElementById("itemsPrize").innerHTML = getitemsPrize;

    var getquatity = localStorage.getItem("savequantity");
    var quantity = document.getElementById("quantity").innerHTML = getquatity;

    var gettotalPrize = localStorage.getItem("savetotalPrize");
    var totalPrize = document.getElementById("totalPrize").innerHTML = gettotalPrize;

    var getgrandTotal = localStorage.getItem("savegrandTotal");
    var grandTotal = document.getElementById("grandTotalPrize").innerHTML = getgrandTotal;



    // if (getImg) {
    //     try {
    //         var srcAttribute = JSON.parse(getImg).src; // Assuming the saved data is in JSON format
    //         var imageElement = document.getElementById('imgReplace');
    //         imageElement.src = srcAttribute;
    //         console.log(imageElement);
    //     } catch (e) {
    //         console.error("Error parsing JSON:", e);
    //     }
    // } else {
    //     alert("Please provide a valid JSON object in localStorage.");
    // }
}
// placeOrder Function

function placeOrder() {
    var name = document.getElementById("nameId").value;
    var number = document.getElementById("numberId").value;
    var address = document.getElementById("addressId").value;
    if (name != "" && personName != "" && address != "") {

        var name = document.getElementById("nameId").value;
        console.log(name);
        var personName = document.getElementById("personName").innerHTML = name;
        console.log(personName);

        var number = document.getElementById("numberId").value;
        console.log(number);
        var personNum = document.getElementById("personNum").innerHTML = number;
        console.log(personNum);

        var address = document.getElementById("addressId").value;
        console.log(address);
        var personNum = document.getElementById("PersonAddress").innerHTML = address;
        console.log(personNum);

        var saveitemsName = localStorage.getItem("saveitemsName");
        var itemsName = document.getElementById("itemPurchase").innerHTML = saveitemsName;
        console.log(itemsName);

        var getitemsPrize = localStorage.getItem("saveitemsPrize");
        var itemsPrize = document.getElementById("itemPurchasePrize").innerHTML = getitemsPrize;
        console.log(itemsPrize);

        var getquatity = localStorage.getItem("savequantity");
        var quantity = document.getElementById("itemQuantity").innerHTML = getquatity;
        console.log(quantity);

        var modal = document.getElementsByClassName("modal");
        modal.style.display = "none";

    } else {
        alert("please fill");
        $('#exampleModal').modal('hide');
        $('.modal').modal('hide');
    }
}

// $(document).ready(function() {
//     $("#getRecipt").click(function(){
//  //var testdiv = document.getElementById("testdiv");
//      html2canvas($("#getRecipt"), {
//          onrendered: function(canvas) {
//              // canvas is the final rendered <canvas> element
//              var myImage = canvas.toDataURL("image/png");
//              window.open(myImage);
//          }
//      });
//  });
//  });

function saveimg() {
    var c = document.getElementById('mycanvas');
    var t = c.getContext('2d');
    window.location.href = image;

    window.open('', document.getElementById('mycanvas').toDataURL());
}
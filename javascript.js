//for search//
function myFunction() {
    var input, filter, ul, h1, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    h1 = document.getElementsByTagName("h1");
    for (i = 0; i < h1.length; i++) {
        a = h1[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h1[i].style.display = "";
        } else {
            h1[i].style.display = "none";
        }
    }
}


var choose = '';

function smAdd(index, sm) {

    this.choose = 'small';
    var smPrize = document.getElementsByClassName("smPrize").innerText = sm;
    const val1 = document.getElementsByClassName("cartValue")[index].innerHTML = smPrize;
    console.log(smPrize);
    document.getElementsByClassName('plus-minus')[index].innerHTML = 1;
}

function mdAdd(index, md) {
    this.choose = 'medium';
    const mdPrize = document.getElementsByClassName("mdPrize").innerHTML = md;
    const val1 = document.getElementsByClassName("cartValue")[index].innerHTML = mdPrize;
    console.log(mdPrize);
    document.getElementsByClassName('plus-minus')[index].innerHTML = 1;

}

function lgAdd(index, lg) {
    this.choose = 'large';
    const lgPrize = document.getElementsByClassName("lgPrize").innerHTML = lg;
    const val1 = document.getElementsByClassName("cartValue")[index].innerHTML = lgPrize;
    console.log(lgPrize);
    document.getElementsByClassName('plus-minus')[index].innerHTML = 1;
}
function Plus(index, sm, md, lg) {

    var pri = document.getElementById("box1_smPrize").innerHTML;
    console.log(pri);
    document.getElementsByClassName('plus-minus')[index].innerHTML = parseInt(document.getElementsByClassName('plus-minus')[index].innerHTML) + 1;

    //add prices//
    const val1 = document.getElementsByClassName("cartValue")[index].innerHTML;

    if (this.choose == 'small') {
        var smPrize = document.getElementsByClassName("smPrize")[index].innerText = sm;
        var smPlus = (parseInt(val1) + parseInt(smPrize));
        document.getElementsByClassName("cartValue")[index].innerHTML = smPlus;
        console.log(smPlus);
    }

    if (this.choose == 'medium') {
        var mdPrize = document.getElementsByClassName("mdPrize")[index].innerText = md;
        var mdPlus = (parseInt(val1) + parseInt(mdPrize));
        document.getElementsByClassName("cartValue")[index].innerHTML = mdPlus;
    }

    if (this.choose == 'large') {
        var lgPrize = document.getElementsByClassName("lgPrize")[index].innerText = lg;
        var lgPlus = (parseInt(val1) + parseInt(lgPrize));
        document.getElementsByClassName("cartValue")[index].innerHTML = lgPlus;
    }
    // if( this.choose == 'burger'){
    //     var bgPrize = document.getElementsByClassName("bgPrize")[index].value;
    //     var bgPlus = (parseInt(val1) + parseInt(bgPrize));
    //     document.getElementsByClassName("cartValue")[index].innerHTML = bgPlus;
    // }
}

function minus(index, sm, md, lg) {

    var decreement = parseInt(document.getElementsByClassName('plus-minus')[index].innerHTML);

    if (decreement > 0) {
        var setPlus = document.getElementsByClassName('plus-minus')[index].innerHTML = (parseInt(document.getElementsByClassName('plus-minus')[index].innerHTML)) > 0 ? parseInt(document.getElementsByClassName('plus-minus')[index].innerHTML) - 1 : parseInt(document.getElementsByClassName('plus-minus')[index].innerHTML);
        //subtract//
        const val1 = document.getElementsByClassName("cartValue")[index].innerHTML;
        if (this.choose == "small") {
            var smPrize = document.getElementsByClassName("smPrize").innerText = sm;
            var smMinus = (parseInt(val1) - parseInt(smPrize));
            document.getElementsByClassName("cartValue")[index].innerHTML = smMinus;

        }

        if (this.choose == "medium") {
            var mdPrize = document.getElementsByClassName("smPrize").innerText = md;
            var mdMinus = (parseInt(val1) - parseInt(mdPrize));
            document.getElementsByClassName("cartValue")[index].innerHTML = mdMinus;

        }

        if (this.choose == "large") {
            var lgPrize = document.getElementsByClassName("smPrize").innerText = lg;
            var lgMinus = (parseInt(val1) - parseInt(lgPrize));
            document.getElementsByClassName("cartValue")[index].innerHTML = lgMinus;

        }
    }

}
function mexican(index) {
    document.getElementsByClassName("cartValue")[index].innerHTML = 0;
    document.getElementsByClassName('plus-minus')[index].innerHTML = 1;
    number = 0;
}

// function base64(index, className){
//     // Assuming you have an <img> element with the id "image" in your HTML
//         const imageElement = document.getElementsByClassName(className)[index];
//         const srcAttribute = imageElement.src;
//         console.log(srcAttribute);

//         const image = new Image();
//         image.crossOrigin = "Anonymous"; // To handle potential CORS issues

//         image.onload = function () {
//             const canvas = document.createElement("canvas");
//             const ctx = canvas.getContext("2d");

//             canvas.width = image.width;
//             canvas.height = image.height;

//             ctx.drawImage(image, 0, 0);

//             const base64Image = canvas.toDataURL(srcAttribute); // You can change the format if needed
//             document.getElementById("imgReplace").src = base64Image;
//             console.log(base64Image);
//         };

//         image.src = srcAttribute;
//         console.log(image);
// }

function modal(index, imageClass) {
    $('.modal').modal('hide');
    // const imageBase64 = this.base64(index, imageClass);
    // console.log(imageBase64);
    var cartValue = document.getElementsByClassName("cartValue")[index].innerHTML;
    var offcanvas = document.getElementsByClassName("offcanvas");
    if(cartValue.innerHTML <= 0 ){
        $('.offcanvas').offcanvas('hide');
        offcanvas.classList.toggle('hide');
    }
    
    var objName = document.getElementsByClassName("objName")[index].innerText;
    var itemsName = document.getElementById("itemsName").innerText = objName;
    var saveitemsName = localStorage.setItem("saveitemsName", itemsName);
    console.log(objName);
    console.log(itemsName);

    if (this.choose = "small") {
        var sizeSmall = document.getElementById("itemsSize").innerText = "Small";
        console.log(sizeSmall)
    }
    if (this.choose = "medium") {
        var sizeSmall = document.getElementById("itemsSize").innerText = "Medium";
        console.log(sizeSmall)
    }
    if (this.choose = "large") {
        var sizeSmall = document.getElementById("itemsSize").innerText = "large";
        console.log(sizeSmall)
    }

    var itemsPrize = document.getElementById("itemsPrize").innerHTML = cartValue;
    console.log(itemsPrize);
    var saveitemsPrize = localStorage.setItem("saveitemsPrize", itemsPrize);


    var totalPrize = document.getElementById("totalPrize").innerHTML = cartValue;
    console.log(totalPrize);
    var savetotalPrize = localStorage.setItem("savetotalPrize", totalPrize);


    var grandTotal = document.getElementById("grandTotalPrize").innerHTML = cartValue;
    console.log(grandTotalPrize);
    var savegrandTotal = localStorage.setItem("savegrandTotal", grandTotal);


    
    var decreement = document.getElementsByClassName('plus-minus')[index].innerHTML;
    var quantity = document.getElementById("quantity").innerHTML = decreement;
    var savequantity = localStorage.setItem("savequantity", quantity);


    console.log(decreement);
    console.log(quantity)
 // Change the source of the image
    var imageElement = document.getElementsByClassName('getImg')[index];
    var srcAttribute = imageElement.src;
    console.log(imageElement)
    var imgReplace = document.getElementById("imgReplace").src = srcAttribute;
    console.log(imgReplace)
    var saveImg = localStorage.setItem("saveImg", imgReplace);
    console.log(saveImg)
    
}

///CLEAR ITEMS///
function clearItems(){
    var itemsPrize = document.getElementById("itemsPrize").innerHTML = "";
    console.log(itemsPrize);

    var quantity = document.getElementById("quantity").innerHTML = "";
    // console.log(decreement);
    console.log(quantity)
    var itemsName = document.getElementById("itemsName").innerText = "xyz";
}
// function checkOut() {
//     var getImg = localStorage.getItem("saveImg");
// }
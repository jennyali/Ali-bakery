$(document).ready(function(){


//             Varibles 
//===================================

//---- Index page
var $indexContent = $('main[name="indexPageContent"]');

//---- About page inc gallery + carrossel 
var $aboutUsContent = $('main[name="aboutUsContent"]');
var $aboutGalleryContainer = $('main[name="aboutGalleryContainer"]');
var $aboutUsGallery = $('section[data-id="aboutUsGallery"]');
var $aboutUsLink =$('a[name="aboutUsLink"]');
var $aboutDropdownLink = $('.aboutDropdownLink');
var $aboutDropdown =$('.navbar--base');

var $aboutUsGalleryCarrossel = $('main[data-id="aboutUsGalleryCarrossel"]');
var $carrosselImg = $('article[data-id="carrosselImgArticle"]');
var $carrosselCancelBtn = $('span[data-id="cancelBtn"]');
var $carrosselRightArrow = $('span[data-id="carrosselRightArrow"]');
var $carrosselLeftArrow = $('span[data-id="carrosselLeftArrow"]');

//--- About page sub Book page
var $bookAdpage = $('[name="bookAdsLink"]');
var $bookAdsContent = $('main[data-id="bookAdsContent"]');
var $bookAdsSection = $('section[data-id="bookAdsSection"]');

//--- Menu page
var $breadList = $('section[name="breadMenuList"]');
var $cakeList = $('section[name="cakeMenuList"]');

//--- Contact page
var $contactForm = $('form[name="contactForm"]');
var $nameInput = $('input[name="nameInput"]');
var $emailInput = $('input[name="emailInput"]');
var $subjectInput = $('input[name="subjectInput"]');
var $msgInput =$('textarea[name="msgInput"]');
var $nameAlert = $('p[name="nameAlert"]');
var $emailAlert = $('p[name="emailAlert"]');
var $subjectAlert = $('p[name="subjectAlert"]');
var $msgAlert = $('p[name="msgAlert"]');
var $formBtn = $('button[name="formBtn"]');
var $formFailMsg = $('p[name="failFormMsg"]');
var $formSuccessMsg = $('p[name="successFormMsg"]');

// online Order page
var $leftAsideMenu = $('section[name="leftAsideMenu"]');
var $categoryInfo = $('p[name="categoryInfo"]');
var $categoryTitle = $('h3[name="categoryTitle"]');
var $cakeOrderMenu = $('a[name="cakeOrderMenu"]');
var $breadOrderMenu = $('a[name="breadOrderMenu"]');
var $itemsForSale = $('div[name="itemsForSale"]');
var $myOrderTitle = $('div[name="myOrderTitle"]');
var $myOrderAmount =$('p[name="myOrderAmount"]');
var $itemWord = $('p[name="itemWord"]');
var $subtotal = $('p[name="subtotal"]');
var $midSectionContent = $('section[name="midSectionContent]');


// online Order Modal

var $foodOrderModal = $('main[name="foodOrderModal"]');
var $foodOrderModalContainer =$('article[name="foodOrderModalContainer"]');
//var $cancelModalBtn = $('button[name="cancelModalBtn"]');

var $modalImg = $('figure[name="modalImg"]');
var $modalFigCap = $('figcaption[name="modalFigCap"]');
var $modalTitle = $('h4[name="modalTitle"]');
var $modalPrice = $('p[name="modalPrice"]');
var $modalInfo = $('p[name="modalInfo"]');
var $userRequestbtn = $('p[name="userRequestbtn"]');
var $userRequestInput = $('input[name=userRequestInput]');
var $addOrderBtn = $('button[name="addOrderBtn"]');


//-- global
var $preFooterEl = $('main:last');
var aboutCurrentIndex = 0;
var numberOfItems = 0;
var totalShoppingCost = 0;

//               Arrays
//=======================================

var bakeryFoods = [];
var booksForSale = [];
var breadCatergory = [];
var cakeCatergory = [];
var shoppingList = [];

//    Object Contructors/Array builders
//========================================

// food Order items

function shoppingItem(index, name, price, itemQty, totalPrice){
    this.index = index;
    this.name = name;
    this.price = price;
    this.itemQty = itemQty;
    this.totalPrice = totalPrice;
};


// foodItems 'data-base'

function foodItem(name, img, catergory, price, info){
    this.id = Math.ceil(Math.random() * 10000);
    this.name = name;
    this.img = img;
    this.catergory = catergory;
    this.price = price;
    this.info = info;
};

bakeryFoods.push(new foodItem('Rustic Rolls', 'images/bread-selection.jpg', 'bread', 4, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Baguette', 'images/baguette.jpeg', 'bread', 5, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Sliced Wholemeal Loaf', 'images/wholemeal-loaf.jpeg', 'bread', 3, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Croissant', 'images/croissant.jpeg', 'bread', 2, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Ciabatta', 'images/ciabatta.jpeg', 'bread', 3, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Vanilla Cheesecake', 'images/vanilla-cheesecake.jpeg', 'cake', 10, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('White-Icing Cupcakes', 'images/white-icing-cupcake.jpeg', 'cake', 8, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Cream filled Donuts', 'images/cream-filled-dougnuts.jpeg', 'cake', 2, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Blueberry Muffin', 'images/blueberry-muffin.png', 'cake', 3, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

bakeryFoods.push(new foodItem('Vanilla Lattice ', 'images/vanilla-lattice.jpeg', 'cake', 4, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

var bakeryFoodsAboutSample = _.slice(bakeryFoods, [0], [9]);    // new array 9 items


// books mini-database

function bookItem(name, img, info){
    this.name = name;
    this.img = img;
    this.info = info;
};

booksForSale.push(new bookItem('Magnolia Bakery Cookbook', "images/magnolia-cookbook.jpg", "Etiam a venenatis lectus. Donec in augue vel turpis tincidunt vehicula. Fusce laoreet nisi nibh, eu elementum sapien tristique ut."))
booksForSale.push(new bookItem('Baked', "images/baked-cookbook.jpg", "Nulla finibus sem eget enim tempor, at elementum urna mollis. Integer dignissim tellus vitae felis vehicula, vel fringilla metus rhoncus"))
booksForSale.push(new bookItem('Sallys Baking Addiction', "images/sallys-cookbook.jpg", " Nam in massa at dui feugiat venenatis. Ut placerat tortor ut eros pharetra, ut molestie nisi euismod."))


//             Functions
//===================================

function setQuantity(){
    var currentQuanity = shoppingList.length;
    $myOrderAmount.text(currentQuanity);
    console.log(currentQuanity);
}

function setSubtotal(){
    var newSubTotal = 0;

    _.each(shoppingList, function(foodItem){
        newSubTotal += parseInt(foodItem["price"])
    })

    $subtotal.text(newSubTotal);
}

function wordChecker(){
    if(numberOfItems > 1){
        $itemWord.text("items")
    } else if (numberOfItems == 1){
        $itemWord.text("item")
    } else {
        $itemWord.text("items")
    }
}

function orderModalBuilder(callback){
    $(callback).appendTo($foodOrderModalContainer);
}

function indexImgPicker(image){
    var sampleImg =  _.sample(bakeryFoods);

    $indexContent.find(image).attr({
        "data-img" : sampleImg["img"],
    });
}

function aboutBookAds(callback){
    var template = "";
    _.each(booksForSale, function(bookItem, index){
        template += callback(bookItem, index);
    })
    $(template).appendTo($bookAdsSection);
}

function foodChecker(callback){
    var template = "";
    _.each(bakeryFoodsAboutSample, function(foodItem, index){
        template += callback(foodItem, index);
    })
    $(template).appendTo($aboutUsGallery);
}

function aboutGalleryImg(callback){
    $(callback()).appendTo($carrosselImg);
}

function foodSorter(catergory, catergoryArray){
    _.each(bakeryFoods, function(foodItem){
        if(foodItem["catergory"] == catergory){
            catergoryArray.push(foodItem);
        }
    });
}

function menuBuilder(menuList, arrayCategory, callback){
    var template = "";
    _.each(arrayCategory, function(foodItem, index){
        template += callback(foodItem, index);
    });
    $(template).appendTo(menuList);
}

// form validation

function validateForm(callback) {
    var x = $nameInput.val();
    var y = $emailInput.val();
    var z = $subjectInput.val();
    var i = $msgInput.val();

    var xResult = callback(x, $nameAlert);
    var yResult = callback(y, $emailAlert);
    var zResult = callback(z, $subjectAlert);
    var iResult = callback(i, $msgAlert);

    if(xResult || yResult || zResult || iResult){
        $formFailMsg.hide();
        $formSuccessMsg.show();
    } else {
        $formSuccessMsg.hide();
        $formFailMsg.show();
    }
}

function validateInput(inputVar, alertSelector){
    if (inputVar == null || inputVar == ""){
        alertSelector.show();
        return false
    } else {
        alertSelector.hide();
        return true
    }
}

function onlineOrderFoodItemBuilder(foodObj, callback){
    var template = "";
    _.each(foodObj, function(foodItem, index){
        template += callback(foodItem, index);
    })
    $(template).appendTo($itemsForSale);
}

function myOrderItemBuilder(callback){
    $(callback).appendTo($myOrderTitle);
}

//              HTML templates
//--------------------------------------------

function myOrderItemTemplate(listItem){
    return `
    <div class="my-order-item__container" name="myOrderItem" index="${listItem["index"]}">
        <div class="my-order-item__quantity" name="quanityOfItem" data-value="1">1</div>
        <span>x</span>
        <div class="my-order-item__name" name="nameOfItem">${listItem["name"]}</div>
        
        <div class="my-order-item__price" name="priceOfItem" data-price="${listItem["price"]}"><span>$</span>${listItem["price"]}</div>
        <button name="cancelOrderItem" index="${listItem["index"]}" class="icon-delete-2 my-order-item__btn button--cancel--small"></button>
    </div>
    `
}

function aboutGalleryConstruct(foodItem, index){
    return `
        <figure data-id="galleryImg"
                name="${foodItem["name"]}"  
                data-img="${foodItem["img"]}"  
                index="${index}"
                class="col-xs-4 about__galleryImg"
                style="background-image:url('${foodItem["img"]}')">
            <div class="galleryImg__overlay"></div>            
            <figcaption class="galleryImg__textBox">
                <h4 class="galleryImg__title">${foodItem["name"]}</h4>
                <p class="galleryImg__text">${foodItem["info"]}</p>
            </figcaption>
        </figure>  `
}

function aboutGalleryCarrosselConstruct(){
    return `
        <figure class="carrossel__img__inner">
            <img src="${bakeryFoodsAboutSample[aboutCurrentIndex]["img"]}" index="${aboutCurrentIndex}">
            <figcaption>
                <p class="lead">${bakeryFoodsAboutSample[aboutCurrentIndex]["name"]}</p>
                <p>${bakeryFoodsAboutSample[aboutCurrentIndex]["info"]}</p>
            </figcaption>
        </figure>
    `
}

function aboutBooks(bookItem, index){
    return `
        <article data-id="bookAd" 
                 name="${bookItem["name"]}
                 index="${index}"
                 class="col-sm-4 book-item__container">
            <figure class="book-item">
                <img src="${bookItem["img"]}" class="book-item__img">
                <figcaption>
                    <p class="book-item__text">${bookItem["info"]}</p>
                </figcaption>
            </figure>
        </article>
    `
}

var footerCode = function footerHtml(){
    return `
        <footer class="container">
            <section class="row">
                <article class="col-3">
                    <h4>Address</h4>
                    <p>[insert address]</p>
                </article>
                <article class="col-3">
                    <h4>Hours</h4>
                    <p>Mon - Fri: 6am - 7pm</p>
                    <p>Sat - Sun: 8am - 8pm</p>
                </article>
                <article class="col-3">
                    <h4>Contact</h4>
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>
                </article>
                <article class="col-3">
                    <h4>Follow</h4>
                    <ul>
                        <li>[icon]</li>
                        <li>[icon]</li>
                        <li>[icon]</li>
                        <li>[icon]</li>
                    </ul>
                </article>
            </section>
            <p>
                Ali's Bakery 2016, created by Jen
            </p>
        </footer>
    `
};

function menuTemplate(foodItem, index){
    return `
        <article class="row col-md-12 menuItem"
                 data-id="menuItem"
                 name="${foodItem["name"]}"
                 index="${index}">
            <figure class="menu-item__img visible-xs" data-img="${foodItem["img"]}" style="background-image:url('${foodItem["img"]}')">
                <figcaption class="menu-item__textbox">
                    <h4 class="menu-item__title">${foodItem["name"]}</h4>
                    <p class="menu-item__price">$${foodItem["price"]}</p>
                </figcaption>
            </figure>
            <p class="menu-item__info--xs visible-xs">${foodItem["info"]}<p>
            
            <section class="hidden-xs col-md-12 media">
                <div class="media-left">
                    <img src="${foodItem["img"]}" class="media-object menu-item__img--sm">
                </div>
                <div class="media-body">
                    <h4 class="media-heading">${foodItem["name"]}</h4>
                    <p class="inline menu-item__info--md">Delicious home baked projects, made from the finest ingriedents</p>
                    <div class="inline menu-item__divider"></div>
                    <p class="inline menu-item__price--md">$${foodItem["price"]}</p>
                </div>
            </section>
        </article>
    `
}

function onlineOrderFoodItemTemplate(foodItem, index){
    return `
        <article class="col-sm-5 online-food__container" data-id="${foodItem["name"]}" index="${index}">   
            <figure class="online-food__img" data-img="${foodItem["img"]}">
                <img src="${foodItem["img"]}" class="img-responsive">
            </figure>
            <figcaption class="online-food__textbox">
              <p class="online-food__name">${foodItem["name"]}</p>
              <p class="online-food__price ">$${foodItem["price"]}</p>
              <p class="online-food__info collapse">${foodItem["info"]}</p>
            </figcaption>
            <button name="orderFoodItemBtn"
                    index="${index}"
                    data-id="${foodItem["name"]}"
                    data-img="${foodItem["img"]}"
                    data-info="${foodItem["info"]}"
                    data-price="${foodItem["price"]}"
                    class="icon-add-2 pull-right online-food__btn button--clear"
            ></button>
        </article>
      `
}

function orderModalTemplate(index, name, img, info, price){
    return `
        <figure name="modalImg" data-img="${img}">
            <img src="${img}" class="img-responsive">
        </figure>
        <figcaption class="modal-caption" name="modalFigCap">
            <h4 class="modal__title" name="modalTitle">${name}</h4>
            <p class="modal__price" name="modalPrice">$${price}</p>
            <p class="modal__info" name="modalInfo">${info}</p>
            <p class="modal__secondary-title lead page-header" >Special Requests?</p>
            <p class="modal__input-link icon-add-2" name='userRequestbtn'> Add them here. We'll do our best to make it happen</p>
            <input class="modal__input form-control form-control--custom"name="userRequestInput"></input>
            <button name="addOrderBtn"
                    index="${index}"
                    data-id="${name}"
                    data-img="${img}"
                    data-info="${info}"
                    data-price="${price}"
                    date-hasReq="false"
                    class="icon-add-2 modal__add-btn button--large"
            >ADD TO MY ORDER</button>
            <button name="cancelModalBtn" class="icon-delete-2 button--topCancel" ></button>
        </figcaption>
    `
}

//           Lodash Functions
//===================================

//          Functions Calls
//===================================

indexImgPicker('figure[name="primaryIndexImg"]');
indexImgPicker('figure[name="secondaryIndexImg"]');
indexImgPicker('figure[name="thirdIndexImg"]');
foodChecker(aboutGalleryConstruct);
aboutGalleryImg(aboutGalleryCarrosselConstruct);
aboutBookAds(aboutBooks);
foodSorter("bread", breadCatergory);
foodSorter("cake", cakeCatergory);
menuBuilder($breadList, breadCatergory, menuTemplate);
menuBuilder($cakeList, cakeCatergory, menuTemplate);

//$preFooterEl.before(footerCode());
$subtotal.text(totalShoppingCost);

//      After Functions Varibles/more Functions
//===================================

var $galleryImg = $('figure[data-id="galleryImg"]');

// Online Food Order data

var breadCatergorySample = _.slice(breadCatergory, [0], [4]);
var cakeCatergorySample = _.slice(cakeCatergory, [0], [4]);

function orderObj(title, info, sample){
    this.title = title;
    this.info = info;
    this.sample = sample;
};

var breadOrder = new orderObj("Bread selection", "Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers", breadCatergorySample);
var cakeOrder = new orderObj("Cakes and Desserts", "Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers", cakeCatergorySample);

onlineOrderFoodItemBuilder(breadOrder["sample"], onlineOrderFoodItemTemplate);
$categoryTitle.text(breadOrder["title"]);
$categoryInfo.text(breadOrder["info"]);

//-----------------------------------

var $orderFoodItemBtn = $('button[name="orderFoodItemBtn"]');

//         .hide(EVENTS)
//====================================

$aboutUsGalleryCarrossel.hide();
//$bookAdsContent.hide();
$nameAlert.hide();
$emailAlert.hide();
$subjectAlert.hide();
$msgAlert.hide();
$formFailMsg.hide();
$formSuccessMsg.hide();
$foodOrderModal.hide();
$aboutUsGallery.find(".galleryImg__overlay").hide();
$aboutUsGallery.find(".galleryImg__textBox").hide();
$aboutDropdown.hide();


//         on.(EVENTS)
//====================================

$aboutDropdownLink.on("mouseenter", function(){
    $aboutDropdown.slideDown();
});

$aboutDropdown.on("mouseleave", function(){
    $aboutDropdown.slideUp();
});

$aboutUsGallery.on("mouseenter", "figure[data-id='galleryImg']", function(event){
     //$aboutUsGallery.find(".galleryImg__overlay").stop();
     $(this).find('.galleryImg__overlay')
            .fadeIn(1000);
     $(this).find('figcaption')
            .fadeIn(1000);
});

$aboutUsGallery.on("mouseleave", "figure[data-id='galleryImg']", function(event){
    //$aboutUsGallery.find(".galleryImg__overlay").stop();
     $(this).find('.galleryImg__overlay')
            .fadeOut();
     $(this).find('figcaption')
            .fadeOut();
});

$myOrderTitle.on("click", "button[name='cancelOrderItem']", function(event){
    event.preventDefault();
    shoppingList.pop();
    setQuantity();
    wordChecker();
    setSubtotal();
    $(this).closest("div[name='myOrderItem']").remove();
})

$myOrderTitle.on("mouseenter", "div[name='myOrderItem']", function(){
    $(this).find("div[name='priceOfItem']").css('right', '45px');
    $(this).find("button[name='cancelOrderItem']").css('right', '15px');
})

$myOrderTitle.on("mouseleave", "div[name='myOrderItem']", function(){
    $(this).find("div[name='priceOfItem']").css('right', '15px');
    $(this).find("button[name='cancelOrderItem']").css('right', '-45px');
})

$itemsForSale.on("click", "button[name='orderFoodItemBtn']", function(event){
        event.preventDefault();
        var index = $(this).attr("index");
        var dataId = $(this).attr("data-id");
        var dataImg = $(this).attr("data-img");
        var dataInfo = $(this).attr("data-info");
        var dataPrice = $(this).attr("data-price");
        $foodOrderModalContainer.empty();
        orderModalBuilder(orderModalTemplate(index, dataId, dataImg, dataInfo, dataPrice));
        $foodOrderModal.find("input").hide();
        $foodOrderModal.fadeIn('fast');
})


$foodOrderModal.on("click", "button[name='cancelModalBtn']", function(event){
    event.preventDefault();
    $foodOrderModal.fadeOut('fast');
})

$foodOrderModal.on("click", "p[name='userRequestbtn']", function(event){
    event.preventDefault();
    $foodOrderModal.find("p[name='userRequestbtn']").toggle('fast');
    $foodOrderModal.find("input").toggle('fast');
    $foodOrderModal.find("input").focus();
})

$foodOrderModal.on("blur", "input", function(event){
    $foodOrderModal.find("input").toggle('fast');
    $foodOrderModal.find("p[name='userRequestbtn']").toggle('fast');
})

$foodOrderModal.on("click", "button[name='addOrderBtn']", function(event){
    event.preventDefault();
    //var inputVar = $foodOrderModal.find("input").val();

    var index = $(this).attr("index");
    var dataId = $(this).attr("data-id");
    var dataPrice = $(this).attr("data-price");
    var dataQty = 1;
    var dataTotalPrice = dataPrice;
    var listItem = new shoppingItem(index, dataId, dataPrice, dataQty, dataTotalPrice);
    myOrderItemBuilder(myOrderItemTemplate(listItem)); 
    shoppingList.push(listItem);
    setQuantity();
    wordChecker();
    setSubtotal();
    $foodOrderModal.fadeOut('fast');
})

$breadOrderMenu.on({
    "click" : function(){
        $categoryTitle.text(breadOrder["title"]);
        $categoryInfo.text(breadOrder["info"]);
        $itemsForSale.empty();
        onlineOrderFoodItemBuilder(breadOrder["sample"], onlineOrderFoodItemTemplate);
    }
})

$cakeOrderMenu.on({
    "click" : function(){
        $categoryTitle.text(cakeOrder["title"]);
        $categoryInfo.text(cakeOrder["info"]);
        $itemsForSale.empty();
        onlineOrderFoodItemBuilder(cakeOrder["sample"], onlineOrderFoodItemTemplate);
    }
})

$formBtn.on({
    "click" : function(event){
        event.preventDefault();
        console.log('i clicked');
        validateForm(validateInput);
    }
})

$aboutUsLink.on({
    "click" : function(){
        $bookAdsContent.fadeOut('fast');
        $aboutUsContent.fadeIn('fast');
    }
})

$bookAdpage.on({
    "click" : function(){
        $aboutUsContent.fadeOut('fast');
        $bookAdsContent.fadeIn('fast');
    }
})

$galleryImg.on({
    "click" : function(){
        aboutCurrentIndex = $(this).attr("index");
        $carrosselImg.empty();
        aboutGalleryImg(aboutGalleryCarrosselConstruct);
        $aboutUsGalleryCarrossel.fadeIn('fast');
    }
});

$carrosselRightArrow.on({
    "click" : function(){
        aboutCurrentIndex++
        if(!bakeryFoodsAboutSample[aboutCurrentIndex]) {
            aboutCurrentIndex = 0;
        }
        var newSrc = bakeryFoodsAboutSample[aboutCurrentIndex]["img"];
        $carrosselImg.find("img[index]").attr({
            "index" : aboutCurrentIndex,
            "src"   : newSrc
        });
    }
})

$carrosselLeftArrow.on({
    "click" : function(){
        aboutCurrentIndex--
        if(!bakeryFoodsAboutSample[aboutCurrentIndex]) {
            aboutCurrentIndex = 7;
        }
        var newSrc = bakeryFoodsAboutSample[aboutCurrentIndex]["img"];
        $carrosselImg.find("img[index]").attr({
            "index" : aboutCurrentIndex,
            "src"   : newSrc
        });
    }
})

$carrosselCancelBtn.on({
    "click" : function(){
        $aboutUsGalleryCarrossel.fadeOut('fast');
    }
})


});
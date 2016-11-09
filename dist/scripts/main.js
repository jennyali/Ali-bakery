$(document).ready(function(){


//             Varibles 
//===================================

//---- Index page
var $indexContent = $('main[name="indexPageContent"]');

//---- About page inc gallery + carrossel 
var $aboutUsContent = $('main[name="aboutUsContent"]');
var $aboutUsGallery = $('section[data-id="aboutUsGallery"]');
var $aboutUsLink =$('a[name="aboutUsLink"]');

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

//-- global
var $preFooterEl = $('main:last');
var aboutCurrentIndex = 0;

//               Arrays
//=======================================

var bakeryFoods = [];
var booksForSale = [];
var breadCatergory = [];
var cakeCatergory = [];

//    Object Contructors/Array builders
//========================================

// foodItems 'data-base'

function foodItem(name, img, catergory, price, info){
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

bakeryFoods.push(new foodItem('Vanilla Lattice ', 'images/vanilla-lattice', 'cake', 4, 
'Delicious home baked projects, made from the finest ingriedents and prepared fresh in-store by our series of star bakers'));

var bakeryFoodsAboutSample = _.slice(bakeryFoods, [0], [8]);    // new array 9 items


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

//              HTML templates
//--------------------------------------------

function aboutGalleryConstruct(foodItem, index){
    return `
        <figure data-id="galleryImg"
                name="${foodItem["name"]}"  
                data-img="${foodItem["img"]}"  
                index="${index}">            
            <figcaption>
                <h4>${foodItem["name"]}</h4>
                <p>${foodItem["info"]}</p>
            </figcaption>
        </figure>  `
}

function aboutGalleryCarrosselConstruct(){
    return `
        <figure>
            <img src="${bakeryFoodsAboutSample[aboutCurrentIndex]["img"]}" index="${aboutCurrentIndex}">
            <figcaption>
                <p>${bakeryFoodsAboutSample[aboutCurrentIndex]["name"]}</p>
                <p>${bakeryFoodsAboutSample[aboutCurrentIndex]["info"]}</p>
            </figcaption>
        </figure>
    `
}

function aboutBooks(bookItem, index){
    return `
        <article data-id="bookAd" 
                 name="${bookItem["name"]}
                 index="${index}">
            <figure>
                <img src="${bookItem["img"]}">
                <figcaption>
                    <p>${bookItem["info"]}</p>
                </figcaption>
            </figure>
        </article>
    `
}

var footerCode = function footerHtml(){
    return `
        <footer>
            <section>
                <article>
                    <h4>Address</h4>
                    <p>[insert address]</p>
                </article>
                <article>
                    <h4>Hours</h4>
                    <p>Mon - Fri: 6am - 7pm</p>
                    <p>Sat - Sun: 8am - 8pm</p>
                </article>
                <article>
                    <h4>Contact</h4>
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>
                </article>
                <article>
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
        <article data-id="menuItem"
                 name="${foodItem["name"]}"
                 index="${index}">
            <figure data-img="${foodItem["img"]}">
                <figcaption>
                    <h4>${foodItem["name"]}</h4>
                    <p>$${foodItem["price"]}</p>
                </figcaption>
            </figure>
            <section>
                <h4>${foodItem["name"]}</h4>
                <p>${foodItem["info"]}</p>
                <div></div>
                <p>$${foodItem["price"]}</p>
            </section>
        </article>
    `
}

function onlineOrderFoodItemTemplate(foodItem, index){
    return `
        <article data-id="${foodItem["name"]}" index="${index}">   
            <figure>[img]</figure>
            <figcaption>
              <p>${foodItem["name"]}</p>
              <p>${foodItem["price"]}</p>
              <p>${foodItem["info"]}</p>
            </figcaption>
            <button>[ + icon]</button>
        </article>
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


$preFooterEl.after(footerCode());


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



//         .hide(EVENTS)
//====================================

$aboutUsGalleryCarrossel.hide();
$bookAdsContent.hide();
$nameAlert.hide();
$emailAlert.hide();
$subjectAlert.hide();
$msgAlert.hide();
$formFailMsg.hide();
$formSuccessMsg.hide();

//         on.(EVENTS)
//====================================

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
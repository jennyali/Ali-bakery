$(document).ready(function(){


//             Varibles 
//===================================

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


//-- global
var aboutCurrentIndex = 0;

// Arrays
//-------------------

var bakeryFoods = [];
var booksForSale = [];

// Object Contructors
//-------------------

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

//console.log(bakeryFoods);
var bakeryFoodsAboutSample = _.slice(bakeryFoods, [0], [8]);    // new array 9 items
//console.log(bakeryFoodsAboutSample);

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

function aboutBookAds(callback){
    _.each(booksForSale, function(bookItem, index){
        $(callback(bookItem, index)).appendTo($bookAdsSection);
    })
}

function foodChecker(callback){
    _.each(bakeryFoodsAboutSample, function(foodItem, index){
        $(callback(foodItem, index)).appendTo($aboutUsGallery);
    })
}

function aboutGalleryImg(callback){
    $(callback()).appendTo($carrosselImg);
}

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
//          Functions Calls
//===================================

foodChecker(aboutGalleryConstruct);
aboutGalleryImg(aboutGalleryCarrosselConstruct);
aboutBookAds(aboutBooks);

//      After Functions Varibles
//===================================

var $galleryImg = $('figure[data-id="galleryImg"]');

//         .hide(EVENTS)
//====================================

$aboutUsGalleryCarrossel.hide();
$bookAdsContent.hide();

//         on.(EVENTS)
//====================================

console.log($aboutUsLink);

$aboutUsLink.on({
    "click" : function(){
        console.log('i clicked');
        $bookAdsContent.fadeOut('fast');
        $aboutUsContent.fadeIn('fast');
    }
})

$bookAdpage.on({
    "click" : function(event){
        event.preventDefault();
        console.log('i clicked');
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
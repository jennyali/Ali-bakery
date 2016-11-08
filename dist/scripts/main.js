$(document).ready(function(){


//             Varibles 
//===================================

var $aboutUsGallery = $('section[data-id="aboutUsGallery"]');
var $galleryImg = $('figure[data-id="galleryImg"]');
var $carrosselImg = $('article[data-id="carrosselImgArticle"]');
var $aboutUsContent = $('main[name="aboutUsContent"]');
var $carrosselRightArrow = $('span[data-id="carrosselRightArrow"]');

var aboutCurrentIndex = 0;

// Arrays
//-------------------

var bakeryFoods = [];

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



//             Functions
//===================================

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

//          Functions Calls
//===================================

foodChecker(aboutGalleryConstruct);

aboutGalleryImg(aboutGalleryCarrosselConstruct);

//         on.(EVENTS)
//====================================


$galleryImg.on({
    "click" : function(){
        console.log('i clicked');
        aboutCurrentIndex = $(this).attr("index");
        $carrosselImg.empty();
        aboutGalleryImg(aboutGalleryCarrosselConstruct);
    }
});

$carrosselRightArrow.on({
    "click" : function(){
        console.log('i clicked');

        aboutCurrentIndex++

        if(!bakeryFoodsAboutSample[aboutCurrentIndex]) {
            aboutCurrentIndex = 0;
        }

        var newSrc = bakeryFoodsAboutSample[aboutCurrentIndex]["img"];

        console.log(newSrc);

        $carrosselImg.find("img[index]").attr({
            "index" : aboutCurrentIndex,
            "src"   : newSrc
        });
    }
})

//console.log(bakeryFoodsAboutSample[aboutCurrentIndex]["img"]);
console.log($galleryImg);
});
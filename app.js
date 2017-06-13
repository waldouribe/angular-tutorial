(function (){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 'reviews';

    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  gems = [
    {
      name: 'Amatista',
      price: 20,
      description: 'Brillante',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: "http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-02.gif",
          thumb: "http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-02.gif"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: 'This gem is great',
          author: 'John Doe'
        },
        {
          stars: 4,
          body: 'Awesome',
          author: 'Aira'
        },
      ]
    },
    {
      name: 'Ruby',
      price: 180,
      description: 'Rojo',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: "http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-02.gif",
          thumb: "http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-02.gif"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: 'This gem is great',
          author: 'John Doe'
        },
        {
          stars: 4,
          body: 'Awesome',
          author: 'Aira'
        },
      ]
    }
  ]
})();

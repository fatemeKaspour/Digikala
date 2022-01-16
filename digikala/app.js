(function (){
    var productRoot = document.querySelector('.productsInsert');
    var currentPageNumber = 1 ;

    var availableFilters = {

        mostViewed : app.repository.getMostViwedProductByPage,
        mostsold : app.repository.getMostSoldProductByPage,
        mostFavorite : app.repository.getMostFavoriteProductByPage,
        mostExpensive : app.repository.getMostExpensiveProductByPage
    };

    var currentActiveFilter = 'mostViewed';

    fetch('https://5f8dfe3e4c15c40016a1e4f7.mockapi.io/shop/products')
    .then(response=> response.json())
    .then(response =>{
        
        app.products = response;

        app.repository.getMostViwedProductByPage(currentPageNumber).forEach((item) => {
            productRoot.appendChild(app.view.renderProduct(
                item.title ,
                item.img ,
                app.utils.toPersianNumber(item.rankAverage) ,
                app.utils.toPersianNumber(item.rankCount) ,
                app.utils.toPersianNumber(item.price)
            ));    
                
        });
        console.log(app.products);
        app.view.renderPagination(app.products.length , 36 , currentPageNumber);

        
    });

    document
    .querySelector('.list-filter')
    .addEventListener('click' , function(event){

        if(event.target.tagName.toLowerCase() === 'a'){

            var node = event.target.parentElement;
            currentActiveFilter = node.dataset.filter;
            currentPageNumber = 1;
            app.view.renderFilters(currentActiveFilter);
            app.view.renderPagination(app.products.length , 36 , currentPageNumber);

            productRoot.innerHTML = "";
            var filterFunction = availableFilters[currentActiveFilter];
            filterFunction(currentPageNumber).forEach((item) => {
        
                productRoot.appendChild(app.view.renderProduct(
                    item.title ,
                    item.img ,
                    app.utils.toPersianNumber(item.rankAverage) ,
                    app.utils.toPersianNumber(item.rankCount) ,
                    app.utils.toPersianNumber(item.price)
                ));
            });
        };
    });

    document
    .querySelector('.paginate')
    .addEventListener('click' , function (event){

        event.preventDefault();

        if(event.target.tagName.toLowerCase() === 'a'){

            currentPageNumber = +event.target.dataset.page;
            productRoot.innerHTML = '';
            
            var filterFunction = availableFilters[currentActiveFilter];
            filterFunction(currentPageNumber).forEach((item) => {
        
                productRoot.appendChild(app.view.renderProduct(
                    item.title ,
                    item.img ,
                    app.utils.toPersianNumber(item.rankAverage) ,
                    app.utils.toPersianNumber(item.rankCount) ,
                    app.utils.toPersianNumber(item.price)
                ));
            });

            app.view.renderPagination(app.products.length , 36 , currentPageNumber);
            app.view.renderFilters(currentActiveFilter);

        }  
    })
    

})();
(function (){
    window.app = window.app ||{};
    window.app.products = [];
    window.app.repository = {
        
        getMostViwedProductByPage : getMostViwedProductByPage,
        getMostSoldProductByPage : getMostSoldProductByPage,
        getMostFavoriteProductByPage : getMostFavoriteProductByPage,
        getMostExpensiveProductByPage : getMostExpensiveProductByPage,
        compaireProducts : compaireProducts

    };
    function compaireProducts(filter){

        return app.products
        .sort(((a , b) => b.filter - a.filter))
        .slice((pageNumber - 1) * 36 , pageNumber * 36);
    }
    function getMostViwedProductByPage (pageNumber){

        return app.products
        .sort(((a , b) => b.veiws - a.veiws))
        .slice((pageNumber - 1) * 36 , pageNumber * 36);   
    }

    function getMostSoldProductByPage (pageNumber){
        
        return app.products
        .sort(((a , b) => b.sold - a.sold))
        .slice((pageNumber - 1) * 36 , pageNumber * 36);
    }

    function getMostFavoriteProductByPage (pageNumber){

        return app.products
        .sort(((a , b) => b.rankAverage - a.rankAverage))
        .slice((pageNumber - 1) * 36 , pageNumber * 36); 
    }

    function getMostExpensiveProductByPage (pageNumber){
       
        return app.products
        .sort(((a , b) => b.price - a.price))
        .slice((pageNumber - 1) * 36 , pageNumber * 36); 
    }
})();
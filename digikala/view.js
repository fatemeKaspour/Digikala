(function (){
    window.app = window.app || {};
    window.app.view = {
        renderProduct : renderProduct,
        renderPagination : renderPagination,
        renderFilters : renderFilters   
    };
    function createElement(tagName , attribute , content){
        var node = document.createElement(tagName);
        for(var key in attribute){
            node.setAttribute(key , attribute[key]);
        }
        if(typeof content !== 'undefined'){

            if( content instanceof HTMLElement)
            {
                node.appendChild(content);
            }else{
                node.innerText = content;
            }
        }

        return node;
    }
    //-------------- make product section---------------------//
    function renderProduct(productTitle , imgSrc , rankAvarage , rankCount , productPrice ){
        var containerPro = createElement('section' , {class : 'product'});
        var titlePro = createElement('h3' , {class : 'title'} , productTitle);
        var imgPro = createElement('img' , {class : 'product-img' , src : imgSrc});
        var rankPro = createElement('p' , {class : 'rank'});
        var rankStarPro = createElement('i' , {class : 'fas fa-star rank-star'});
        var pricePro = createElement('p' , {class : 'price'} , productPrice);
        var hamMenu = document.querySelector('.ham-menu');
        var menu = document.querySelector('.menu');
        rankPro.innerHTML += ` ${rankAvarage} (${rankCount})`;

        containerPro.appendChild(imgPro);
        containerPro.appendChild(titlePro);
        containerPro.appendChild(rankPro);
        rankPro.appendChild(rankStarPro);
        containerPro.appendChild(pricePro);

        hamMenu.addEventListener('mouseover' , function(event){
            event.preventDefault();
            menu.style.display = 'block'
        })
        hamMenu.addEventListener('mouseleave' , function(event){
            event.preventDefault();
            menu.style.display = 'none';
        })
        // menuContainer.addEventListener('mouseover' , function(event){
        //     event.preventDefault();
        //     menuContainer.classList.remove('hide');
        //     menuContainer.classList.add('show');
        // })
        // menuContainer.addEventListener('mouseleave' , function(event){
        //     event.preventDefault();
        //     menuContainer.classList.remove('show');
        //     menuContainer.classList.add('hide');
        // })

        return containerPro;
    }
    // ------------- make render pagination----------------//
    function renderPagination (totalPages , itemPerPage , currentActivePage ){
        var pages = Math.ceil(totalPages / itemPerPage);
        var pageInsertionNode = document.querySelector('.paginate') ;
        pageInsertionNode.innerHTML = '';
        for( var i = 0 ; i < pages ; i++){
            if(i + 1 === currentActivePage ){
                pageInsertionNode.appendChild(createElement(
                    'li' , {
                        class : 'paginate-list active'} 
                        , createElement(
                            'a' , {
                                href : '#' , "data-page" : i + 1 ,
                                class :'paginate-list-number'} ,
                                app.utils.toPersianNumber(i + 1)
                        )
                )
                );

            }
            else{
                pageInsertionNode.appendChild(createElement(
                    'li',{
                        class : 'paginate-list'}
                    , createElement(
                        'a' , {
                            href : '#' ,
                            "data-page" : i + 1 ,
                            class :'paginate-list-number' },
                            app.utils.toPersianNumber(i + 1)
                    )
                )
                );
            }
        }
    }
    // -------------makeFilterProduct---------------------//
    function renderFilters(activeFilter){

        var filters = {
            mostViewed : 'پربازدید ترین',
            mostsold : 'پرفروش ترین',
            mostFavorite : 'محبوب ترین',
            mostExpensive : 'گران ترین'
        };

        var filterListElement = document.querySelector('.list-filter');
        filterListElement.innerHTML = '';

        for(var key in filters){

            filterListElement.appendChild(
                createElement('li' , {
                    class : activeFilter === key
                    ? 'active-filter'
                    : 'list-item-filter',
                    'data-filter' : key
                },
                    createElement('a' , {
                        href : '#' ,
                        class : 'list-item-filter-link'} ,
                        filters[key]
                    )
                )
            )
        }
    }
})();
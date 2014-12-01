angular.module('myFactory', [])
      .factory('$paterns', paterns)
      .factory('$ajax', ajax);


var headerConfig = {
     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}


function paterns () {
    return {
        postcode : /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i,
        phone : /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/,
        num : /^[0-9]*$/,
        email : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    };
}

function ajax ($http) {
     return {
        action: function(data) {
            return $http.get('path/to/handler.php', {params : data});
        },
        anotherAction : function(data){
           return $http.post('path/to/handler.php', $.param(data), headerConfig);  
        }
    };
}


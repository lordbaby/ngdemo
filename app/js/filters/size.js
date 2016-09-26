angular.module('case')
.filter('size',function(){
	return function(items){
		if(!items){
			return [];
		}

		return items.length || 0; 
	}
});
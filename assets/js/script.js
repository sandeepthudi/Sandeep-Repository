$(function () {

		filters = {"manufacturer":[],"storage":[],"os":[],"camera":[]};


	//	Event handlers for frontend navigation

	//	Checkbox filtering

	var checkboxes = $('.all-products input[type=checkbox]');

	checkboxes.click(function () {

		var that = $(this),
			specName = that.attr('name');
			specValue = that.attr('value');
			if(specName=='manufacturer'){
				var tempValueArray = filters.manufacturer;
			} else if(specName=='storage'){
				var tempValueArray = filters.storage;
			} else if(specName=='os'){
				var tempValueArray = filters.os;
			} else if(specName=='camera'){
				var tempValueArray = filters.camera;
			}

		// When a checkbox is checked we need to write that in the filters object;
		if(that.is(":checked")) {

			// If the filter for this specification isn't created yet - do it.
			tempValueArray.push(specValue);

		} else {
			tempValueArray.pop(specValue);
		}
		console.log(filters);
		// When a checkbox is unchecked we need to remove its value from the filters object.

		doFilteringLogic(filters);
	});

	function doFilteringLogic(filters){
		var manufacturerArray = filters.manufacturer;
		var osArray = filters.os;
		var storageArray = filters.storage;
		var cameraArray = filters.camera;

		var prodListUl = $(".products-list");

		$.each( $(prodListUl).find('li'), function( key, value ) {
		  if(typeof($(value).attr('data-index'))!='undefined'){
				if(manufacturerArray.length==0 && osArray.length==0
							&& storageArray.length==0 && cameraArray.length==0){
								$(value).removeClass( "hidden" )		
				} else {
					var classList = $(value).attr("class").split(' ');
					var manufacturer = classList[0];
					var storage=classList[1];
					var os=classList[2];
					var camera=classList[3];
					if($.inArray(manufacturer, manufacturerArray) != -1){
						$(value).removeClass( "hidden" )
					} else if($.inArray(storage, storageArray) != -1){
						$(value).removeClass( "hidden" )
					} else if($.inArray(os, osArray) != -1){
						$(value).removeClass( "hidden" )
					} else if($.inArray(camera, cameraArray) != -1){
						$(value).removeClass( "hidden" )
					} else {
						$(value).addClass( "hidden" )
					}
				}
			}

		});

	}

});

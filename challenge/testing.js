var current = 'O';

document.querySelectorAll('th').forEach(item => {
    item.addEventListener('click', select)
  });
  document.querySelectorAll('td').forEach(item => {
    item.addEventListener('click', select)
  });


function select(event) {
    console.log(event.target);
			target = this.getAttribute("data-target");

			if (current == target) {
				return false;
			}

			document.querySelectorAll('td').forEach(item => {
				var counter = 0;
			  item.querySelectorAll('td[data-target="' + target + '"] span').forEach(span => {
			  	span.style.display = 'block';
				span.style.background = 'gray';
                
			  });		  
			  counter++;
			  item.querySelectorAll('td[data-target="' + current + '"] span').forEach(span => {
			  	span.style.display = 'none';
			  	span.style.background = 'cyan';
			  });
			});

			current = target;

}
(function createBody() {
	 var data = Array.from(capTableData)

	//  var thead = document.getElementsByTagName("thead");
	//  var tblRow = document.createElement("tr");
	//  for(var i = 0; i < 1; i++) {
	// 	for(var j = -1; j < data.length;j++) {
	// 		var tblCol = document.createElement("th");
	// 		var txtCol = document.createTextNode();
	// 	}
	//  }
	 console.log(data);
	 
})()

var capTableData = {
    classI: {
      seriesE: {
        "Juan Ramírez": 300000
      },
      seriesF: {
        "Juan Ramírez": 100000,
        "Julia Pérez": 50000,
        "Oscar Gómez": 100000
      },
      seriesR: {
        "Julia Pérez": 100000
      }
	}
}
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
    },
    classII: {
      seriesE: {
        "Juan Ramírez": 100000
      },
      seriesF: {
        "Julia Pérez": 50000,
        "Oscar Gómez": 100000
      }
    },
    classIII: {
      seriesA: {
        "Juan Ramírez": 25000
      },
      seriesE: {
        "Oscar Gómez": 50000
      },
      seriesF: {},
      seriesL: {
        "Julia Pérez": 50000
      },
      seriesR: {
        "Juan Ramírez": 25000,
        "Oscar Gómez": 50000
      }
    }
  }

function getMaxNumber() {
    var classNames = Object.keys(capTableData);
    var numberBase = [];
    console.log(classNames, capTableData.classI);
    for (var i = 0; i < classNames.length; i++) {
      var serieNames = capTableData[classNames[i]];
      console.log(serieNames);
      var serieKeys = Object.keys(serieNames);
      for (var j= 0; j < serieKeys.length; j++) {
        var nameUsers = serieNames[serieKeys[j]];
        
        numberBase.push(Object.keys(nameUsers).length);
        console.log(numberBase);
      }
    }
    var maxNumber = Math.max(...numberBase);
    console.log(maxNumber);
    return maxNumber;   
}

function getSerie() {
  var classNames = Object.keys(capTableData);
  var series = [];
  console.log(classNames, capTableData.classI);
  for (var i = 0; i < classNames.length; i++) {
    var serieNames = capTableData[classNames[i]];
    console.log(serieNames);
    var serieKeys = Object.keys(serieNames);
  }
  return serieKeys
}



function genera_tabla() {
  const classes = Object.entries(capTableData);

  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblThead = document.createElement("thead")
  var tblBody = document.createElement("tbody");
  const tblHeader = ["Nombre completo", "Clase I", "Clase II", "Clase III", "% de la empresa"];
  
  for (var i= 0; i < 1; i++) {
    var tblRow = document.createElement("tr");

    for(var j = 0; j < classes.length; j++) {
      var tblCol = document.createElement("th");
      var txtCol = document.createTextNode(classes[j][0]);
      tblCol.appendChild(txtCol);
      tblRow.appendChild(tblCol);
      //Getting the number of users from function getMaxNumber
      var numberRows = getMaxNumber();

      //subTable
      for(var k = 0; k < numberRows+1; k++) {
        var subTblRow = document.createElement("tr");
        for(var l = 0; l < 6; l++) {
          var subTblCol = document.createElement("td");
          var subTxtCol = document.createTextNode("Una prueba");

        }
        tblBody.appendChild(subTblRow);
      }
      
    }
    tblThead.appendChild(tblRow);
  }
  tabla.appendChild(tblThead);
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");

}

function extra() {
  var serie = Object.values(capTableData)
  console.log(serie);
}
  // // Crea las celdas
  // for (var i = 0; i < 2; i++) {
  //   // Crea las hileras de la tabla
  //   var hilera = document.createElement("tr");
 
  //   for (var j = 0; j < 2; j++) {
  //     // Crea un elemento <td> y un nodo de texto, haz que el nodo de
  //     // texto sea el contenido de <td>, ubica el elemento <td> al final
  //     // de la hilera de la tabla
  //     var celda = document.createElement("td");
  //     var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
  //     celda.appendChild(textoCelda);
  //     hilera.appendChild(celda);
  //   }
 
  //   // agrega la hilera al final de la tabla (al final del elemento tblbody)
  //   tblBody.appendChild(hilera);
  // }
 
  // // posiciona el <tbody> debajo del elemento <table>
  // tabla.appendChild(tblBody);
  // // appends <table> into <body>
  // body.appendChild(tabla);
  // // modifica el atributo "border" de la tabla y lo fija a "2";
  // tabla.setAttribute("border", "2");

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
const $tbody = document.querySelector('tbody');
const arrayUsers = users(); 
function users() {
    let numberArrays = [];

      for(const classes in capTableData) {
        let __class = capTableData[classes]
        for(const series in __class) {
          let __series = __class[series];
          console.log(__series);

          for(const users in __series){
            let __users = __series[users];
            numberArrays.push(users);
            console.log(__users);                     
          }
       }
       const totalUsers = [...new Set(numberArrays)];
       console.log(numberArrays, totalUsers);
       return totalUsers;
   }
}

function createUsers() {
    for(let i = 0; i < arrayUsers.length; i++) {
        let rowTbl = document.createElement('tr');
        let colTbl = document.createElement('td');
        let txtRow = document.createTextNode(arrayUsers[i]);

        colTbl.appendChild(txtRow);
        rowTbl.setAttribute("id", arrayUsers[i]);
        rowTbl.appendChild(colTbl);
        $tbody.appendChild(rowTbl);
    }

    for(let i = 0; i < arrayUsers.length; i++) {
      const arrayClass = ["class1", "classII", "classIII"]
      const $idUser = document.getElementById(arrayUsers[i]);
      const currentUser = i;
      for(let i = 0; i < arrayClass.length; i++) {
       let colTbl = document.createElement('td');
       colTbl.setAttribute("target-data", arrayUsers[currentUser]);
       $idUser.appendChild(colTbl);
    }
  }
}
createUsers();
//data();

(function data() {
  const arrayClasses = ["classI", "classII", "classIII"]; 
  for(let i = 0; i < arrayClasses.length; i++) {
    const $class = document.getElementById(arrayClasses[i]);
    const currentClass = capTableData[arrayClasses[i]]
    //console.log($class, arrayClasses[i])
    for(const __series in currentClass) {
      let colTbl = document.createElement('td');
      let txtTbl = document.createTextNode(__series);
      colTbl.appendChild(txtTbl);
      $class.appendChild(colTbl);
    }
  }
})()

let rowOne  = ["Nombre completo", "% de la empresa"];
let rowTwo = ["Series"];
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

//  function arrayClasses(capTableData) {
    
//     for(const classes in capTableData) {
//         var arrayClasses  = capTableData[classes];
//         console.log(arrayClasses);
//         for(const series in arrayClasses) {
//           var arraySeries = arrayClasses[series]
//           console.log(arraySeries);
//         }
//     }
        //Object destructuring, minimum
//     const {classI, classII, classIII } = capTableData;  
//     const {} = {classI, classII, classIII}; 
//     console.log();
    
// }

           //Creation of templates with JS using templates literal's
           function tableRow() {
            const row = 'tr';
            return row
           }
           function tableCol(__content) {
            const col = 'td';
            return col
          }
          function tableHeader() {
            return(
             `<th></th>`
            )
          }


           function createHeader() {

             console.log(capTableData, rowOne)
             const $thead = document.querySelector("thead");
             
             for(var i = 0; i < 1; i++) {
               let tblRow = document.createElement('tr');
               $thead.appendChild(tblRow);
               let nameCol = document.createElement('th')
               let txtName = document.createTextNode(rowOne[0]);
               nameCol.appendChild(txtName)
               tblRow.appendChild(nameCol)

               for(const classes in capTableData) {
                 console.log(classes)
                let tblCol = document.createElement("th");
                let txtCol = document.createTextNode(classes);
                tblCol.appendChild(txtCol);
                tblCol.setAttribute("data-target", classes)
                tblRow.appendChild(tblCol);
                
               }       
               let nameColTwo = document.createElement('th')
               let txtNameTwo = document.createTextNode(rowOne[1]);
               nameColTwo.appendChild(txtNameTwo)
               tblRow.appendChild(nameColTwo)
             } 

            


             for(var i = 0; i < 1; i++) {
              let tblRow = document.createElement('tr');
              $thead.appendChild(tblRow);
              let nameCol = document.createElement('th')
              let txtName = document.createTextNode(rowTwo[0]);
              nameCol.appendChild(txtName)
              tblRow.appendChild(nameCol)

              for(const classes in capTableData) {
                let subTblRow = document.createElement("tr");
                subTblRow.setAttribute("data-target", classes)
                tblRow.appendChild(subTblRow);
                let __class = capTableData[classes];

                for(const series in __class) {
                  console.log(series);
                  let subTblHead = document.createElement("th");
                  let subTxtHead = document.createTextNode(series);
                  subTblHead.appendChild(subTxtHead);
                  subTblRow.appendChild(subTblHead);
                }
                
               
              }       
              let nameColTwo = document.createElement('th')
              let txtNameTwo = document.createTextNode(rowOne[1]);
              nameColTwo.appendChild(txtNameTwo)
              tblRow.appendChild(nameColTwo)
            }


           }
           
           function createBody() {
            const $tbody = document.querySelector("tbody");
            const arrayUsers = users();
            console.log(arrayUsers.length);
            //Row's for  the users
            for(let i = 0; i < arrayUsers.length; i++) {
              let tblRow = document.createElement('tr');
              $tbody.appendChild(tblRow);
              let nameCol = document.createElement('td')
              let txtName = document.createTextNode(arrayUsers[i]);
              nameCol.appendChild(txtName);
              tblRow.setAttribute("id", arrayUsers[i]);
              tblRow.appendChild(nameCol) ;    
              
              //Rows and cols for the table body
              for(let __class in capTableData ) {
                let subRow = document.createElement('tr');
                subRow.setAttribute('id', __class);
                subRow.setAttribute("style", "width: 100%");
                tblRow.appendChild(subRow);
                let classes = capTableData[__class];

                for(let __serie in classes) {
                  let users = classes[__serie];
                  let subCol = document.createElement('td');

                  for(let __user in users) {
                    let subTxt = document.createTextNode(users[__user]);
                    let subCol = document.createElement('td');
                    subCol.setAttribute("height", "100%");
                    subCol.appendChild(subTxt);                 

                  }
                  subRow.appendChild(subCol);

                }
              }
            }
            
             
          }
           createHeader();
           createBody();









          // Function by to identify the quantity of users
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

        // for(const series in __class) {
                //   console.log(series, __class[series]);
                //   let __series = __class[series];
                //   let subTblCol = document.createElement("td");
                //   for(const user in __series) {
                //     let currentUser = document.getElementById(user)
                //     console.log(user, currentUser)
                //     if(user === user) {
                //       let subTxt = document.createTextNode(__series[user]);
                //       subTblCol.appendChild(subTxt);
                //       currentUser.appendChild(subTblCol);
                //     } else {
                //       let subTxt = document.createTextNode("-");
                //       subTblCol.appendChild(subTxt);
                //       currentUser.appendChild(subTblCol);
                //     } 
                    
                //   }
                  
                // }
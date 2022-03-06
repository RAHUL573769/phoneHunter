  // element selection


const inputText = document.getElementById('search-text')
const searchButton = document.getElementById('search-btn');
let searchResults = document.getElementById('searchresult');
  
const getPhoneDetails = () => {
    const url=`https://openapi.programming-hero.com/api/phones?search=${inputText.value}`
   
    inputText.value = '';
  if (inputText.value =='' || inputText.value ==typeof(45) ) {
    alert("Enter a Mobile Phone");
  }
  else {
        fetch(url)
        .then(response => response.json())
    .then(data=>loadPhoneDetais(data.data))
  }
  
    // fetch(url)
    //     .then(response => response.json())
    // .then(data=>loadPhoneDetais(data.data))
    
    
    }

const loadPhoneDetais = (data) => {
  console.log(data);
  


  


  searchResults.innerHTML = "";
  // if (arraySlices.length < dataLenth) {


    for (const info of data) {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `<div  class="card h-100">
          <img w-25 src="${info.image}"  class=" w-25 h-25 card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${info.brand}</h5>
            <p class="card-text">
           ${info.brand} is a nice Device
            </p>
              <div class="all-button">
              
              <button onclick="phoneDetail('${info.slug}')" class="btn btn-success">Details Of Phone</button>
            </div>
          </div>
          </div>
        </div>`;
      searchResults.appendChild(div);
    
      //  console.log(info);
     
  
    }
   
    
  // }

  
    //  for (const info of data.length) {
    //   const div = document.createElement('div');
    //   div.classList.add('col');
    //   div.innerHTML = `<div  class="card h-100">
    //       <img w-25 src="${info.image}"  class=" w-25 h-25 card-img-top" alt="..." />
    //       <div class="card-body">
    //         <h5 class="card-title">${info.brand}</h5>
    
   


  }



 


const phoneDetail = (data) => {

  const url=`https://openapi.programming-hero.com/api/phone/${data}`
 

  fetch(url)

    .then(res => res.json())
  .then (data=>showPhoneDetail(data.data))
}


const showPhoneDetail = (infos) => {
 
  console.log(infos);
  console.log(infos.others);
  console.log(infos.brand);
  console.log(infos.mainFeatures.sensors[0]);
  console.log(infos.releaseDate);
  console.log(infos.mainFeatures.sensors[1]);
  console.log(infos.mainFeatures.sensors[2]);
  console.log(infos.mainFeatures.sensors[3]);
  console.log(infos.mainFeatures.sensors[4]);
  console.log(infos.mainFeatures.sensors[5]);
  
  console.log(infos.mainFeatures.storage);
  console.log(infos.others);

  // console.log(infos.mainFeatures.displaySize);
  // console.log(infos[sensors]);



  let eachPhoneDetail = document.getElementById('showPhoneDetails');
  eachPhoneDetail.innerHTML = "";
  

  const div = document.createElement('div')

  div.classList.add('card');
  div.innerHTML = ` <img w-25  src="${infos.image}" class=" w-25 h-25 card-img-top " alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Features</h5>
          <p class="card-text">
          <h5 >Brand:</h5>  ${infos.brand} 
          <br>
          <h5 >Chipset:</h5>  ${infos.mainFeatures.chipSet} 
          <br>
         <h5 >Display Size:</h5>  ${infos.mainFeatures.displaySize}
          <br>
         <h5 >Storage:</h5>  ${infos.mainFeatures.storage}
          <br>
        <h5 > Memory:</h5> ${infos.mainFeatures.memory}
         
          <br>
                  <h5 > Sensor Information 01:</h5> ${infos.mainFeatures.sensors[0]?infos.mainFeatures.sensors[0]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 02:</h5> ${infos.mainFeatures.sensors[1]?infos.mainFeatures.sensors[1]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 03:</h5> ${infos.mainFeatures.sensors[2]?infos.mainFeatures.sensors[2]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 04:</h5> ${infos.mainFeatures.sensors[3]?infos.mainFeatures.sensors[3]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 05:</h5> ${infos.mainFeatures.sensors[4]?infos.mainFeatures.sensors[4]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 06:</h5> ${infos.mainFeatures.sensors[5]?infos.mainFeatures.sensors[5]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 07:</h5> ${infos.mainFeatures.sensors[6]?infos.mainFeatures.sensors[6]:'No data to show'}

        <br>
          <br>
                  <h5 > Sensor Information 08:</h5> ${infos.mainFeatures.sensors[7]?infos.mainFeatures.sensors[7]:'No data to show'}

        <br>
        <h5 > Bluetooth:</h5> ${infos.others?infos.others.Bluetooth:'No data to show'}
      
          <br>
             <h5 class=" text-center">Others</h5>
        <h5 > GPS:</h5> ${infos.others?infos.others.GPS:'No data to show'}
          <br>
        <h5 > NFC:</h5>  ${infos.others?infos.others.NFC:'no data to show'}
          <br>
        <h5 > Radio:</h5> ${infos.others?infos.others.Radio:'no data to show'}
          <br>
        <h5 > USB:</h5> ${infos.others?infos.others.USB:'no data to show'}
          <br>
         <h5 > WLAN:</h5> ${infos.others?infos.others.WLAN:'no data to show'}
          <br>
          
      
     <h5 > Release Date:</h5> ${infos.releaseDate };
          </p>
        </div>`
    eachPhoneDetail.appendChild(div);
    
  

}
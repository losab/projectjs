import shipment from './helper.js';

const shipmentsArr = shipment;
const shipmentList = document.querySelector('.shipment-list');
const companyName=document.querySelector('#title');
const companyEmail=document.querySelector('.visited');
const input=document.getElementById('cargo-boxes');
const requiredCargoBay=document.querySelector('#required-cargo-bays');


function selectShipment(id){
    const shipment= shipmentsArr.find((el)=> el.id===id) ;
    console.log(shipment);
    companyName.innerHTML=shipment.name;
    companyEmail.innerHTML=shipment.email;
    companyEmail.setAttribute('href', shipment.email);
    input.value=shipment.boxes;

    let sum =0;
    const boxArr = shipment.boxes ? shipment.boxes.split(',') : ['0'];
    boxArr.forEach((el)=>{
        sum+=parseFloat(el);
    })
    requiredCargoBay.innerHTML=Math.ceil(sum / 10).toString();
}
selectShipment(shipmentsArr[0].id);
shipmentsArr.forEach((el) => {
    const shipment = document.createElement('li');
    shipment.innerHTML = el.name;
    shipment.setAttribute('data-id', el.id);
    shipmentList.appendChild(shipment);
    shipment.addEventListener('click',()=>{
        selectShipment(el.id)
    })
})

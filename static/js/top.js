//no URL iegūst vārdu un ievieto to virsrakstā
let adrese = window.location.hash;
adrese = decodeURI(adrese);
adrese = adrese.replace('#','');
adrese = adrese.split(",");
vards  = adrese[0];
klikski = adrese[1];
laiks = adrese[2];

let datums = new Date();
let datumsVirkne = datums.getDate()+'.'+datums.getMonth()+'.'+datums.getFullYear()+'.'



async function iegutDatusNoApi(url)
{
  let datiNoServera = await fetch(ulr);
  let datiJson = await datiNoServera.json();
}

async function atlasitTop();
{
  iegutDatusNoApi('url-mainīgā vērtība');
  let topsJson = await iegutDatusNoApi('topData');
  console.log(datiJson);
  for (i=0; i<topsJson.length; i++)
  {
    let tabula = document.querySelector(".tops");

    tabula.innerHTML = tabula.innerHTML+`
    <tr id="`+topsJso[i]['id']+`">
      <td> `topsJson[i]['vards']+` </td>
      <td> `topsJson[i]['klikskiss']+` </td>
      <td> `topsJson[i]['laiks']+` </td>
      <td> `topsJson[i]['datums']+` </td>
    </tr>`;
  }
}


function pievienotTop() {
  let tabula = document.querySelector('.tops');
  tabula.innerHTML = tabula.innerHTML +`
    <tr id='jauns'>
    <td>`+vards+`</td>
      <td>`+klikski+`</td>
      <td>`+laiks+`</td>
      <td>`+datumsVirkne+`</td>
    </tr>`;
}
function esercizio1() {

  let divs = document.getElementsByTagName('DIV');
  console.log(divs.length);

  let accordion = document.getElementById('accordionEsercizi');
  divs = accordion.getElementsByTagName('DIV');
  console.log(divs.length);

  let containers = document.getElementsByClassName('container')
  console.log(containers.length);

  let containers10 = 0;
  for(var item of containers)
  {
    if( item.childElementCount>10 ) containers10++;
  }
  console.log(containers10);
}

function esercizio2()
{
  let inputField = document.getElementsByName('echoInput');
  alert(inputField[0].value);
}










function esercizio3(addval)
{
  let display = document.getElementById('contatore');
  let valore = parseInt(display.innerText);

  valore += addval;

  display.innerText = valore;
}









function esercizio4Evidenzia() {
  let par = document.getElementById('paragrafoPerEvidenziazione');

  if( par.innerHTML.indexOf('<span')>=0 ) return;

  let words = par.innerHTML.split(' ');

  for(let i in words)
  {
    if( words[i].length>=8 )
    {
      words[i] = '<span class="bg-warning">'+words[i]+'</span>';
    }
  }
  par.innerHTML = words.join(' ');
}

function esercizio4Rimuovi() {
  let par = document.getElementById('paragrafoPerEvidenziazione');
  /*let words = par.innerHTML;

  words = words.replaceAll('<span class="bg-warning">','');
  words = words.replaceAll('</span>','');
  par.innerHTML = words;*/

  par.innerHTML = par.innerText;
}

function esercizio5onLoad()
{
  let btn = document.getElementById('activateDarkMode');
  btn.classList.add('d-none');
}

function esercizio5SwitchMode()
{
  let div = document.getElementById('darkLightDiv');
  div.classList.toggle('bg-dark');
  div.classList.toggle('text-light');
  div.classList.toggle('bg-light');
  div.classList.toggle('text-dark');

  let btn = document.getElementById('activateDarkMode');
  btn.classList.toggle('d-none');

  btn = document.getElementById('activateLightMode');
  btn.classList.toggle('d-none');
}

function esercizio6() {
  let inputField = document.getElementsByName('newElementInput');
  let table = document.querySelector('.table tbody');

  let newRow = document.createElement('tr');
  newRow.innerHTML='<td>'+inputField[0].value+'</td>';
  //newRow.innerHTML=`<td> ${inputField[0].value} </td>`;

  table.appendChild(newRow);
}


function esercizio7Add() {

  let colors = ['bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-light','bg-dark'];





  let row = document.getElementById('esercizio7Row');
  let col = document.createElement('div');

  col.className = "col-1 py-3 m-1 " + colors[(row.childElementCount+1)%colors.length];
  col.innerText = row.childElementCount+1;

  row.appendChild(col);
}

function esercizio7Remove() {
  let row = document.getElementById('esercizio7Row');
  let col = row.lastElementChild;
  row.removeChild(col);
}

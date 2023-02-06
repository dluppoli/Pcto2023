function erastotene(n)
{
    const valori = [];
    for(let i=0; i<=n;i++) valori.push(true);

    valori[0] = false;
    
    for(let i=2; i<n; i++)
    {
        if(  valori[i] == true)
        {
            for(let j=i+1; j<=n; j++)
            {
                if( valori[j] == true && j%i == 0 ) valori[j] = false;
            }
        }
    }

    return valori;
}

function calcola()
{
    let n = document.getElementById('numero').value;
    let soloPrimi = document.getElementById('soloPrimi').checked;

    if( isNaN(n) )
    {
        alert('Inserire un numero');
        pulisci();
        return;
    }

    let valori = erastotene(n);

    for(let i=0; i<=valori.length; i++)
    {
        if(valori[i]==true) console.log(i);
    }


    let placeholder = document.getElementById('placeholder');
    let innerHTML = '';

    for(let i=1; i<valori.length; i++)
    {
        if(valori[i]==true || soloPrimi==false)
            innerHTML += `<div class="cella ${valori[i]==true ? 'primo' : 'nonprimo'}">${i}</div>`;
    }

    placeholder.innerHTML = innerHTML;
}

function pulisci()
{
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = "";
}
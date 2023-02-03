let n=9;

console.log("Triangolo Sx");
for(let i = 1 ; i<=n; i++)
{
    console.log( '*'.repeat(i) + ' '.repeat(n-i) );
}

console.log("\nTriangolo Dx");
for(let i = 1 ; i<=n; i++)
{
    console.log( ' '.repeat(n-i) + '*'.repeat(i) );
}

console.log("\nClessidra");
for(let i = 0 ; i<n; i++)
{
    if( i < n/2)
        console.log( ' '.repeat(i) + '*'.repeat(n-2*i) + ' '.repeat(i) );
    else
        console.log( ' '.repeat(n-i-1) + '*'.repeat( 2*i+2-n) + ' '.repeat(n-i+1) );
}

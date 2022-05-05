// individuo la riga di html dove inserire il ciclo

const intoSection=document.querySelector("section.container");

// effettuo un ciclo per 100 elementi

for (let i=1; i<101; i++) {
    let myAdd;
    if (i%15==0) {
        myAdd=`<div class="square fizz buzz"><h5>FizzBuzz!</h5></div>`}
    else if (i%3==0) {
        myAdd=`<div class="square fizz"><h5>Fizz</h5></div>`}
    else if (i%5==0) {
        myAdd=`<div class="square buzz"><h5>Buzz</h5></div>`}
    else {
        myAdd=`<div class="square"><h5> ${i} </h5></div>`}

        intoSection.innerHTML += myAdd;

    }
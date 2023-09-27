// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    // console.log(mushroom);
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons(but) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // console.log('2', but);
  if (but) {
    but.classList.toggle('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let pricepepperoni = state.pepperoni ? 1 : 0;
  let pricemushrooms = state.mushrooms ? 1 : 0;
  let pricegreenPeppers = state.greenPeppers ? 1 : 0;
  let pricewhiteSauce = state.whiteSauce ? 3 : 0;
  let priceglutenFreeCrust = state.glutenFreeCrust ? 5 : 0;

  const total = document.querySelector('.panel.price strong');

  total.textContent =
    '$' +
    (10 +
      pricepepperoni +
      pricemushrooms +
      pricegreenPeppers +
      pricewhiteSauce +
      priceglutenFreeCrust);

  total.textContent;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function (e) {
    state.pepperoni = !state.pepperoni;
    renderButtons(e.target);
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function (e) {
    state.mushrooms = !state.mushrooms;
    renderButtons(e.target);
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function (e) {
    state.greenPeppers = !state.greenPeppers;
    renderButtons(e.target);
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document
  .querySelector('.btn.btn-sauce')
  .addEventListener('click', function (e) {
    state.whiteSauce = !state.whiteSauce;
    renderButtons(e.target);
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document
  .querySelector('.btn.btn-crust')
  .addEventListener('click', function (e) {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderButtons(e.target);
    renderEverything();
  });

const API = (() => {
  const URL = "http://localhost:3000";
  const getCart = () => {
    // define your method to get cart data
    return fetch(URL + "/cart")
    .then(data => data.json());
  };

  const getInventory = () => fetch(URL + "/inventory").then((data) => data.json());

  const addToCart = (inventoryItem) => {
    // define your method to add an item to cart
    return fetch(URL + "/cart", {
      method: "POST",
      body: JSON.stringify(inventoryItem),
      headers: {
          "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  };

  const updateCart = (id, newAmount) => {
    // define your method to update an item in cart
    fetch(URL + "/cart/" + id, {
      method: 'PATCH',
      body: JSON.stringify({
        amount: newAmount    
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => response.json())
  };

  const deleteFromCart = (id) => {
    // define your method to delete an item in cart
    fetch(URL + "/cart" + "/" + id, { method: "DELETE" })
    .then(data => data.json())
    .then(item => console.log(item));
  };

  const checkout = () => {
    // you don't need to add anything here
    return getCart().then((data) =>
      Promise.all(data.map((item) => deleteFromCart(item.id)))
    );
  };

  return {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();

const Model = (() => {
  // implement your logic for Model
  class State {
    #onChange;
    #inventory;
    #cart;
    constructor() {
      this.#inventory = [];
      this.#cart = [];
    }
    get cart() {
      return this.#cart;
    }

    get inventory() {
      return this.#inventory;
    }

    set cart(newCart) {
      this.#cart = newCart;
      this.#onChange();
    }

    set inventory(newInventory) {
      this.#inventory = newInventory;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }
  const {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  } = API;

  return {
    State,
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();

const View = (() => {
  // implement your logic for View
  const inventoryListEl = document.querySelector(".inventory-container ul");
  const cartItemListEl = document.querySelector(".cart-container ul");
  const checkoutbtnEl = document.querySelector(".checkout-btn");

  const renderInventory = (inventories) => {
    let inventoryTemp = "";
    inventories.forEach((inventory) => {
        const content = inventory.content;
        const id = inventory.id;
        const liTemp = `<li>
          <span id="content${id}">${content}</span>
          <button id="dec${id}" class="decrement-btn" >-</button></li> 
          <span id="amount${id}">0</span> 
          <button id="inc${id}" class="increment-btn">+</button></li> 
          <button id="addbtn${id}" class="add-button"> Add to Cart </button>
        </li>`;
        inventoryTemp += liTemp;
    });
    inventoryListEl.innerHTML = inventoryTemp;
  };

  const renderCart = (cartItems) => {
    let cartTemp = "";
    cartItems.forEach((cartItem) =>{
      const content = cartItem.content;
      const id = cartItem.id;
      const amount = cartItem.amount;
      const liTemp = `<li todo-id="${id}">
      <span>${content}</span>
      <span>${amount}</span>
      <button class="delete-btn">Delete</button></li>`;
      cartTemp += liTemp;
    })
    cartItemListEl.innerHTML = cartTemp;
  };

  return {
    inventoryListEl,
    renderInventory,
    cartItemListEl,
    renderCart,
    checkoutbtnEl
  };
})();

const Controller = ((model, view) => {
  // implement your logic for Controller
  const state = new model.State();

  const init = () => {
    model.getInventory().then((data) => {
      console.log("init", data);
      state.inventory = data;
    });
  };

  const handleUpdateAmount = () => {
    view.inventoryListEl.addEventListener("click", (event)=>{
      if(event.target.className !== "increment-btn")
        return;

      event.preventDefault();
      console.log("incre button");

      var id = +event.target.id.substring(3);

      var curr = document.getElementById("amount" + id);
      console.log(curr);
      var amount = +curr.innerText + 1;

      curr.innerHTML = " " + amount;
    });

    view.inventoryListEl.addEventListener("click", (event)=>{
      if(event.target.className !== "decrement-btn")
        return;

      event.preventDefault();
      console.log("decr button");

      var id = +event.target.id.substring(3);

      var curr = document.getElementById("amount" + id);
      console.log(curr);

      var amount = +curr.innerText;
        if(amount > 0)
          amount -= 1;
      
      curr.innerHTML = " " + amount;
    });
  };

  const handleAddToCart = () => {
    view.inventoryListEl.addEventListener("click", (event)=>{
      if(event.target.className !== "add-button")
        return;

      event.preventDefault();
      console.log("handleAddtoCart");

      // var id = +event.target.id.substring(3);
      // var curr = document.getElementById("amount" + id);
      // var amount = +curr.innerText;

      // model.addToCart();
      
      console.log("s", state.inventory);
      view.renderCart(state.inventory);

    });
  };

  const handleDelete = () => {
    view.cartItemListEl.addEventListener("click", (event)=>{
      if(event.target.className !== "delete-btn")
        return;
      
      event.preventDefault();
      state.cart = [];
    })
  };

  const handleCheckout = () => {
    view.checkoutbtnEl.addEventListener("click", (e)=>{
      e.preventDefault();
      console.log("checkout button");
      model.checkout();
      state.cart = [];
    });
  };

  const bootstrap = () => {
    handleUpdateAmount()
    handleAddToCart()
    handleCheckout()
    handleDelete()
    init()
    state.subscribe(()=>{
      view.renderInventory(state.inventory);
      view.renderCart(state.cart);
    });
  };
  
  return {
    bootstrap
  };
})(Model, View);

Controller.bootstrap();



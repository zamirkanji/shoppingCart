(function () {
  const menuData = {
    //stock keeping unit (sku), as the key and details are the values
    "21321231": {
      productName: "Ducky Keyboard",
      price: 199,
    },
    "12345698": {
      productName: "AMD CPU",
      price: 249,
    },
    "92813019": {
      productName: "Mouse",
      price: 49,
    },
  };

  let cartData = {};

  let setMenu = function () {
    for (let sku in menuData) {
      let menuItem = createMenuItem(sku);

      document.getElementById("menu-area").appendChild(menuItem);
    }
  };

  let createMenuItem = function (sku) {
    let data = menuData[sku];

    let menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    let menuText = document.createElement("span");
    menuText.className = "menu-text";
    menuText.innerText = data.productName + " - " + "$" + data.price;

    let menuActionSpam = document.createElement("span");
    menuActionSpam.className = "menu-action";

    let menuActionButton = document.createElement("button");
    menuActionButton.innerText = "+";
    menuActionButton.setAttribute("data-sku", sku);

    menuActionButton.onclick = addToCart;

    menuItem.appendChild(menuText);
    menuItem.appendChild(menuActionSpam);

    menuActionSpam.appendChild(menuActionButton);

    return menuItem;
  };

  const addToCart = function (e) {
    let button = e.target;

    let sku = button.getAttribute("data-sku");

    if (sku in cartData) {
      cartData[sku] += 1;
    } else {
      cartData[sku] = 1;
    }

    console.log(cartData);

    setCart();
  };

  const setCart = () => {
    //   let total = 0;
    for (let sku in cartData) {
      let cartItem = createCartItem(sku);

      let cartArea = document.getElementById("cart-area").appendChild(cartItem);
    }
  };

  let createCartItem = function (sku) {
    let data = menuData[sku];
    let qty = cartData[sku];

    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";

    const itemText = document.createElement("span");
    itemText.className = "item-text";
    itemText.innerText = data.productName + " x " + qty;

    const itemTotal = document.createElement("span");
    itemTotal.className = "item-total";
    itemTotal.innerText = "$" + data.price * qty;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerText = "-";
    removeButton.setAttribute("data-sku", sku);

    cartItemDiv.appendChild(itemText);
    cartItemDiv.appendChild(itemTotal);
    cartItemDiv.appendChild(removeButton);

    return cartItemDiv;
  };

  setMenu();
})();

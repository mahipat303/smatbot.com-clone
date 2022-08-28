list1 = [
  {
    li: "All",
  },
  {
    li: "Usecases",
  },
  {
    li: "Education",
  },
  {
    li: "Medical",
  },
  {
    li: "Rental",
  },
  {
    li: "Travel",
  },
  {
    li: "Finance",
  },
  {
    li: "Real Estate",
  },
  {
    li: "Fitness",
  },
  {
    li: "Agency",
  },
  {
    li: "Software",
  },
  {
    li: "HR",
  },
  {
    li: "E-Commerce",
  },
  {
    li: "Event Organizing",
  },
  {
    li: "Franchise",
  },
  {
    li: "Hotels & Restaurants",
  },
  {
    li: "Miscellaneous",
  },
];

list2 = [
  {
    li: "All",
  },
  {
    li: "Education",
  },
  {
    li: "Travel",
  },
  {
    li: "Finance",
  },
  {
    li: "Software",
  },
  {
    li: "E-Commerce",
  },
  {
    li: "Hotels & Restaurants",
  },
  {
    li: "Entertainment",
  },
  {
    li: "Tech Support",
  },
  {
    li: "Miscellaneous",
  },
];

var category_selector = document.getElementById("category_selector");
category_selector.addEventListener("change", function () {
  let value = category_selector.value;
  if (value == "L_G_B") {
    append(templates);
    ulAppend(list1);
  } else {
    append(templates2);
    ulAppend(list2);
  }
});

var container = document.getElementById("template_container");

var ul = document.getElementById("ul");
var ulAppend = (data) => {
  ul.innerHTML = null;
  data.forEach((ele) => {
    let li = document.createElement("li");
    li.innerText = ele.li;
    li.addEventListener("click", function () {
      temFilter(li.innerText);
    });
    ul.append(li);
  });
};
ulAppend(list1);

function temFilter(list) {
  window.location.href = "chatbot-templates.html";
}

var mail = JSON.parse(localStorage.getItem("email"));
var users = JSON.parse(localStorage.getItem("userdetail"));

// document.getElementById("username").innerText=user
users.forEach((ele) => {
  if (ele.email == mail) {
    document.getElementById("username").innerText = ele.name;
    document.getElementById("firstletter").innerText = ele.name[0];
  }
});
document.getElementById("email").innerText = mail;

function goTemp() {
  window.location.href = "chatbot-templates.html";
}
function goDash() {
  window.location.href = "dashboard.html";
}
function goAi() {
  window.location.href = "botAi.html";
}

const items = [
    {
      name: "apple",
      category: "fruit",
    },
    {
      name: "Cucumber",
      category: "vegetable",
    },
    {
      name: "Banana",
      category: "fruit",
    },
    {
      name: "Celery",
      category: "vegetable",
    },
    {
      name: "orange",
      category: "fruit",
    },
    {
      name: "sausage",
      category: "meat",
    },
    {
      name: "bacon",
      category: "meat",
    },
  ];

  function updateHeader() {
    var selectBoxName = document.getElementById("selectName");
    var header = document.getElementById("header");
    header.textContent = selectBoxName.options[selectBoxName.selectedIndex].textContent;
  }

  var visited = new Set();

  function updateOptions() {
    var selectBox1 = document.getElementById("selectCategory");

    for (let item of items) {
      if (!visited.has(item.category)) {
        visited.add(item.category);
        let option = document.createElement("option");
        option.textContent = item.category;
        selectBox1.appendChild(option);
      }
    }

    var selectBox2 = document.getElementById("selectName");
    selectBox2.innerHTML = "";

    var selectedCategory = selectBox1.options[selectBox1.selectedIndex].value;

    for (let item of items) {
      if (item.category === selectedCategory) {
        var option = document.createElement("option");
        option.textContent = item.name;
        selectBox2.appendChild(option);
      }
    }
    updateHeader();
  }
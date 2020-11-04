const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1
const cat = {
    complain: function meow() {
        console.log("Meow!");
    }
};

// cat.complain() => "Meow!"

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function catNames(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    };
};
catNames(cats);

// Question 8
function createCats(cats) {
    let catHtml = "";

    for (let i = 0; i < cats.length; i++) {
        let catAge = "Unknown";
        if (cats[i].age) {
            catAge = cats[i].age;
        };
        catHtml += `<div>
                        <h5>Name: ${cats[i].name}</h5>
                        <p>Age: ${catAge}</p>
                    </div>`
    };
    return catHtml;
};

let catHtml = createCats(cats);
let catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catHtml;
// Could also give the innerHTML the value createCats(cats), but I guess abstracting is a thing.




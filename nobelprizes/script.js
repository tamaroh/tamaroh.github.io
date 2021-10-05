'use strict'
// Please don't delete the 'use strict' line above
const emojiCode = {
    physics:"&#x269b;",
    chemistry:"&#x1f9ea;",
    medicine:"&#x1f48a;",
    peace:"&#x262e;",
    economics:"&#x1f4b8;",
    literature:"&#x1f58b;"
};
function createElementList(elementname) {
    const allList = nobels.prizes.map(element => element[elementname]);
    return allList.filter((x, i, self) => self.indexOf(x) === i);
}
const years = createElementList("year");
const categories = createElementList("category");

function setHTML(tag, classname, inner) {
    const element = document.createElement(tag);
    (classname) && element.classList.add(classname);
    (inner) && (element.innerHTML = inner);
    return element;
}
const float = setHTML("div", "float","Jump To ");
document.getElementById("container").appendChild(float);
const jump = document.createElement("select");
jump.id = "jump";
const jumpElement = float.appendChild(jump);
const firstOption = setHTML("option","","Top");
firstOption.value = "#Top";
jumpElement.appendChild(firstOption);
for (const year of years) {
    const option = setHTML("option","",year);
    option.value = "#" + year;
    jumpElement.appendChild(option);
}
jumpElement.addEventListener("change", event => {
    location.href = event.target.value ;
});
for(const year of years) { 
    const yearHeader = setHTML("h2", false, year);
    const yearBox = setHTML("div","yearBox");
    yearBox.id = year;
    document.getElementById("container").appendChild(yearBox);
    document.getElementById(year).appendChild(yearHeader);
    for (const category of categories) {
        const target = nobels.prizes.filter(element => (element.year === year && element.category === category));
        if (target.length != 0) {
            const categoryHeader = setHTML("h3", false, emojiCode[category] + "&nbsp;" + category);
            const categoryBox = setHTML("div", "categoryBox");
            categoryBox.id = year + category;
            document.getElementById(year).appendChild(categoryBox);
            document.getElementById(categoryBox.id).appendChild(categoryHeader);
            for (const element of target[0].laureates) {
                ("motivation" in element) && categoryBox.append(setHTML("div", "motivation", element.motivation));
                categoryBox.append(setHTML("div", "name", element.firstname + "&nbsp;" + element.surname));
            }
        }
    }
}
const testargument = [];
 ([]) ? console.log(true): console.log(false);
 ({}) ? console.log(true): console.log(false);

 const likesAry = [
    "VRChat（というサービス）でワールドめぐりをしたりするのが好きです。",
    "最近は中国第8世代の映画に夢中です。",
    "なんでも、現物を見られるというのが好きです。",
    "日本城郭における、石垣と縄張りを見るのが好きです。",
    "変わり種のキーマカレーを研究しています。"
    ];

 const target = document.getElementById("vr");
 function mOver(num) {
    console.log("mouseover!")
    document.getElementById("info0").innerHTML = likesAry[num]; 
    document.getElementById("info0").style.visibility = "visible";
}
function mOut() {
    document.getElementById("info0").style.visibility = "hidden";
}
 target.addEventListener("mouseover", mOver(0));
 target.addEventListener("mouseout", mOut());
 

let stars = document.querySelectorAll(".star");
console.log(stars);

let ans;
let star1 = stars[0];
let star2 = stars[1];
let star3 = stars[2];
let star4 = stars[3];
let star5 = stars[4];
console.log(star1);
star1.addEventListener("click", () => {
    // star1.style.backgroundColor="orange";
    submit.setAttribute("id", "temp");
    star1.setAttribute("id", "temporary");
    star2.removeAttribute("id", "temporary");
    star3.removeAttribute("id", "temporary");
    star4.removeAttribute("id", "temporary");
    star5.removeAttribute("id", "temporary");
    ans = star1.innerHTML;
});
star2.addEventListener("click", () => {
    // star2.style.backgroundColor="orange";
    submit.setAttribute("id", "temp");
    star2.setAttribute("id", "temporary");
    star1.removeAttribute("id", "temporary");
    star3.removeAttribute("id", "temporary");
    star4.removeAttribute("id", "temporary");
    star5.removeAttribute("id", "temporary");
    ans = star2.innerHTML;
});
star3.addEventListener("click", () => {
    // star3.style.backgroundColor="orange";
    submit.setAttribute("id", "temp");
    star3.setAttribute("id", "temporary");
    star1.removeAttribute("id", "temporary");
    star2.removeAttribute("id", "temporary");
    star4.removeAttribute("id", "temporary");
    star5.removeAttribute("id", "temporary");
    ans = star3.innerHTML;
});
star4.addEventListener("click", () => {
    // star4.style.backgroundColor="orange";
    submit.setAttribute("id", "temp");
    star4.setAttribute("id", "temporary");
    star1.removeAttribute("id", "temporary");
    star2.removeAttribute("id", "temporary");
    star3.removeAttribute("id", "temporary");
    star5.removeAttribute("id", "temporary");
    ans = star4.innerHTML;
});
star5.addEventListener("click", () => {
    // star5.style.backgroundColor="orange";
    submit.setAttribute("id", "temp");
    star5.setAttribute("id", "temporary");
    star1.removeAttribute("id", "temporary");
    star2.removeAttribute("id", "temporary");
    star3.removeAttribute("id", "temporary");
    star4.removeAttribute("id", "temporary");
    ans = star5.innerHTML;
});


let submit = document.querySelector("#submit");


submit.addEventListener("click", () => {
    localStorage.setItem("rating", ans);
});
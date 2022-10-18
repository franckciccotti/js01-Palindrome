const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const inp = document.querySelector(".input-text");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = inp.value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  console.log(end);

  let flip1 = [...end].reverse();
  console.log(flip1);
  let flip = [...end].reverse().join("");
  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} est un palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} n'est pas un palindrome`;
  }
}
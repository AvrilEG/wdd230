// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// long, medium, short options ... try them
datefield.innerHTML = `<aside>${fulldate}</aside>`;

const accesskey =""

const formE1 =document.querySelector("input")
const inputE1=document.getElementById("search input")
const search=document.querySelector("search")
const showmore =document.getElementById("button")

let inputdata=""
let page = 1;

function searchImage{
    inputdata=inputE1.value;
    const url='https://api.unsplash.com/search/photos?
    page=${page}&query=${inputdata)$clint_id=${accesskey}'
}
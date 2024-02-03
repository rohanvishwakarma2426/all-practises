let a = document.querySelector('a');
a.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt ('Home')
    a.textcontent = 'Roll no. 1:' + name;
}
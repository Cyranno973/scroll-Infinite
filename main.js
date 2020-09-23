const container = document.querySelector('.container');
let index = 12;

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    //scrollTop :  ceux qui à été scroller de puis le top 
    //scrollHeight : la hauteur total que lon peut scroller depuis le top
    //clientHeight : la hauteur partie visible du client
   // console.log(scrollTop, scrollHeight, clientHeight);

    if(clientHeight + scrollTop >= scrollHeight - 100){
        //console.log('creation');
        addStuff(3);
    }
})

function addStuff(nb){

    for (let i = 0; i < nb; i++) {
        index++;
        const newItem = document.createElement('div');
        newItem.className = 'item';
        const newImg = document.createElement('img');
        newImg.src = `https://loremflickr.com/320/240?random=${index}`;
        newItem.appendChild(newImg);
        container.appendChild(newItem);

    }
}
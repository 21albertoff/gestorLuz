console.log('%c' + 'Hecho por Alberto Fuentes', 'font-family:Comic Sans MS; font-size:50px; font-weight:bold; background: linear-gradient(#f00, yellow); border-radius: 5px; padding: 20px')


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max-min)) + min;
}

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);  
        const data = await res.json();

        const pokemon = {
            nombre: data.name
        }

        printCard(pokemon)
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const intRandom = getRandomInt(1,150)
    fetchData(intRandom);
})


const printCard = (pokemon) => {
    console.log(pokemon);

    const flex = document.querySelector('.flex');
    const template = document.getElementById('template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.h1').textContent = `0,151`;

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}
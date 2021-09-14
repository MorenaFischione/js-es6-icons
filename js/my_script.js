/**
 * Milestone 1
 * Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
 * 
 * Milestone 2
 * Coloriamo le icone per tipo
 * 
 * Milestone 3
 * Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/ 

const icons = 
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];



// Milestone 1
//  * Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

let container = document.getElementById("icon");


// Milestone 2
// Coloriamo le icone per tipo

const colors = ["magenta", "lime", "turquoise"];

colorizedIcons = colorizeItems(icons, colors);

printToPage(colorizedIcons, container);

// ****** FUNCTION *******

// FUNZIONE che mostra in pagina tutti gli elementi dell'Array Icons.
function printToPage(array, container){
    let htmlContent = "";
    array.forEach(element => {
        const {name, prefix, type, family, color} = element;

        htmlContent += 
        `<div>
            <i class="${family} ${prefix}${name}
            style="color: ${color}"></i>
            <h4 class="title">${name}</h4>
         </div>
        `;
    });
    container.innerHTML = htmlContent;
};


// FUNZIONE 
// che prende: 
// - un array di oggetti  
// - il nome della proprietà da analizzare 
// e ritorna un nuovo array di valori univoci di quella proprietà nell'array data.
function getUniquePropertyValues(array, property){
    const types = [];

    array.forEach((element, index) => {
        if (! types.includes(element[property])){
            types.push(element[property]);
        };
    });

    return types;
}


function colorizeItems(array, colors){
    const types = getUniquePropertyValues(array, "type");
    console.log(types);  

    const colorizedArray = array.map((element) => {
        const indexOfTipe = types.indexOf(element.type);
        if(indexOfTipe !== -1 ){
            element.color = colors[indexOfTipe];
        }
        return element;
    });
    return colorizedArray;
}

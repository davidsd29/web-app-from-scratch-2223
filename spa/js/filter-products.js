import {filter} from './variable.js';
import {totalSugars, totalSalt, totalKoolhydr, totalProteins} from './render-products.js';

function FilterProduct(filterlink) {
    const linkParts = filterlink.split('0'); // Split the hash into an array of parts

    if (linkParts.length > 1) {
        const filterName = linkParts[1]; // Get the ID from the hash
        filter.title.textContent = filterName;
        console.log(filterName)

        switch (filterName) { // Check which part of the hash we're dealing with
        case "sugar":
            filter.value.textContent = totalSugars + " g"
        break; 

        case "salt":
            filter.value.textContent = totalSalt + " g"
        break;        
        
        case "koolhydr":
           filter.value.textContent = totalKoolhydr + " g"
        break;   
        
        case "proteine":
            filter.value.textContent = totalProteins + " g"
        break;        
        
        default:
            console.log("nothing found");
    }
    }

}

export { FilterProduct }
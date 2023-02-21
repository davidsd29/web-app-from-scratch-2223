const listFrame = document.getElementById("list-frame");

export function RenderListProduct(productInfo) {

if (productInfo.nutriments.sugars == null) productInfo.nutriments.sugars = 0;
if (productInfo.nutriments.salt == null) productInfo.nutriments.salt = 0;
if (productInfo.nutriments.proteins == null) productInfo.nutriments.proteins = 0;

const xmlString  =
    `<li> 
        <img src='${productInfo.image_url}' alt='${productInfo.product_name}'></img>
        <aside>
            <h3>${productInfo.product_name}</h3>
            <p><span id='koolhydr'>${productInfo.nutriments.proteins}</span>Koolhydr</p>
            <p><span id='sugar'>${productInfo.nutriments.sugars}</span>Sugar</p>
            <p><span id='salt'>${productInfo.nutriments.salt}</span>Salt</p>
        </aside>
        
    </li> `;

const listItem = new DOMParser().parseFromString(xmlString, "text/xml");

// Append to another element:
document.getElementById("list-frame").appendChild(listItem.documentElement);
}


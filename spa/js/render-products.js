const listFrame = document.getElementById("list-frame");
let totalSugars,
    totalSalt,
    totalProteins,
    totalKoolhydr;

function RenderListProduct(productInfo) {
    totalSugars = totalSugars + productInfo.nutriments.sugars;
    totalSalt = totalSalt + productInfo.nutriments.salt;
    totalProteins = totalProteins + productInfo.nutriments.proteins;
    // totalKoolhydr = totalKoolhydr + productInfo.nutriments.sugars;

if (productInfo.nutriments.sugars == null) productInfo.nutriments.sugars = 0;
if (productInfo.nutriments.salt == null) productInfo.nutriments.salt = 0;
if (productInfo.nutriments.proteins == null) productInfo.nutriments.proteins = 0;

const xmlString  =
    `<li> 
        <img src='${productInfo.image_url}' alt='${productInfo.product_name}'></img>
        <aside>
            <h3>${productInfo.product_name}</h3>
            <div>
                <p><span id='koolhydr'>${productInfo.nutriments.proteins}</span>Koolhydr</p>
                <p><span id='sugar'>${productInfo.nutriments.sugars}</span>Sugar</p>
                <p><span id='salt'>${productInfo.nutriments.salt}</span>Salt</p>
            </div>
        </aside>
    </li> `;

const listItem = new DOMParser().parseFromString(xmlString, "text/xml");

// Append to another element:
listFrame.appendChild(listItem.documentElement);
}

export { 
    RenderListProduct, 
    totalSugars,
    totalSalt,
    totalProteins,
    totalKoolhydr 
}
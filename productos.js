
document.addEventListener('DOMContentLoaded', () => {
    const products = {
        bioestimulantes: [
            {
                name: 'Bioestimulante AMINOROC',
                price: '$20.00',
                imageUrl: 'c:/xampp/htdocs/img/aminoroc.png',
                shortDescription: 'Bioestimulante vegetal concentrado.',
                longDescription: [
                    'c:/xampp/htdocs/img/foto1aminoroc.png', 
                    'c:/xampp/htdocs/img/foto2aminoroc.png'
                ]
            },
            {
                name: 'Bioestimulante Mikuat',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/mikuat.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'c:/xampp/htdocs/img/mikuatf1.png', 
                    'c:/xampp/htdocs/img/mikuatf2.png'
                ]
            },



{
                name: 'Bioestimulante Gorden',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/gorden.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'c:/xampp/htdocs/img/gordenf1.png', 
                    'c:/xampp/htdocs/img/gordenf2.png'
                ]
            },


{
                name: 'Bioestimulante Multigra',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/multigra.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'c:/xampp/htdocs/img/multigraf1.png', 
                    'c:/xampp/htdocs/img/multigraf2.png'
                ]
            },



{
                name: 'Bioestimulante Rizactiv',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/rizactiv.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'c:/xampp/htdocs/img/rizactivf1.png', 
                    'c:/xampp/htdocs/img/rizactivf2.png'
                ]
            },



{
                name: 'Bioestimulante Stimax',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/stimax.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'c:/xampp/htdocs/img/stimaxf1.png', 
                    'c:/xampp/htdocs/img/stimaxf2.png'
                ]
            },




{
                name: 'Bioestimulante Turbocal',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/turbocal.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'c:/xampp/htdocs/img/turbocalf1.png', 
                    'c:/xampp/htdocs/img/turbocalf2.png'
                ]
            }





        ],
        'mejoradores-de-suelo': [
            {
                name: 'Mejorador de suelo Terroc',
                price: '$30.00',
                imageUrl: 'c:/xampp/htdocs/img/terroc.png',
                shortDescription: 'Mejorador de suelo orgánico.',
                longDescription: [
                    'c:/xampp/htdocs/img/terrocf1.png', 
                    'c:/xampp/htdocs/img/terrocf2.png'
                ]
            },


{
                name: 'Mejorador de suelo Agro bass',
                price: '$30.00',
                imageUrl: 'c:/xampp/htdocs/img/agrobass.png',
                shortDescription: 'Mejorador de suelo orgánico.',
                longDescription: [
                    'c:/xampp/htdocs/img/agrobassf1.png', 
                    'c:/xampp/htdocs/img/agrobassf2.png'
                ]
            },



            {
                name: 'Mejorador de suelo Humirroc',
                price: '$30.00',
                imageUrl: 'c:/xampp/htdocs/img/humirroc.png',
                shortDescription: 'Mejorador de suelo orgánico.',
                longDescription: [
                    'c:/xampp/htdocs/img/humirrocf1.png', 
                    'c:/xampp/htdocs/img/humirrocf2.png'
                ]
            }






        ],
        'correctores-carencias': [
            {
                name: 'Corrector de Carencias Flor Go',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/florgo.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/florgof1.png', 
                    'c:/xampp/htdocs/img/florgof2.png'
                ]
            },



{
                name: 'Corrector de Carencias Carvi 35',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/carvi35.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/carvi35f1.png', 
                    'c:/xampp/htdocs/img/carvi35f2.png'
                ]
            },



{
                name: 'Corrector de Carencias Microroc',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/microroc.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/microrocf1.png', 
                    'c:/xampp/htdocs/img/microrocf2.png'
                ]
            },


{
                name: 'Corrector de Carencias Boromac',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/boromac.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/boromacf1.png', 
                    'c:/xampp/htdocs/img/boromacf2.png'
                ]
            },



{
                name: 'Corrector de Carencias Calroc 14',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/calroc14.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/calroc14f1.png', 
                    'c:/xampp/htdocs/img/calroc14f2.png'
                ]
            },


{
                name: 'Corrector de Carencias Ferromac',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/ferromac.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/ferromacf1.png', 
                    'c:/xampp/htdocs/img/ferromacf2.png'
                ]
            },


{
                name: 'Corrector de Carencias Florive',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/florive.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/florivef1.png', 
                    'c:/xampp/htdocs/img/florivef2.png'
                ]
            },




{
                name: 'Corrector de Carencias Greenest',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/greenest.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/greenestf1.png', 
                    'c:/xampp/htdocs/img/greenestf2.png'
                ]
            },


{
                name: 'Corrector de Carencias Zincrop',
                price: '$15.00',
                imageUrl: 'c:/xampp/htdocs/img/zincrop.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'c:/xampp/htdocs/img/zincropf1.png', 
                    'c:/xampp/htdocs/img/zincropf2.png'
                ]
            }







        ],
        'nutricion-especial': [
            {
                name: 'Nutrición Especial Amipro',
                price: '$40.00',
                imageUrl: 'c:/xampp/htdocs/img/amipro.png',
                shortDescription: 'Fertilizante de nutrición especial.',
                longDescription: [
                    'c:/xampp/htdocs/img/amiprof1.png', 
                    'c:/xampp/htdocs/img/amiprof2.png'
                ]
            },



 {
                name: 'Nutrición Especial Silika20',
                price: '$40.00',
                imageUrl: 'c:/xampp/htdocs/img/silika20.png',
                shortDescription: 'Fertilizante de nutrición especial.',
                longDescription: [
                    'c:/xampp/htdocs/img/silika20f1.png', 
                    'c:/xampp/htdocs/img/silika20f2.png'
                ]
            }








        ],
        'acondicionadores-agua': [
            {
                name: 'Acondicionador de Agua Phositone',
                price: '$10.00',
                imageUrl: 'c:/xampp/htdocs/img/phositone.png',
                shortDescription: 'Acondicionador de agua para riego.',
                longDescription: [
                    'c:/xampp/htdocs/img/phositonef1.png', 
                    'c:/xampp/htdocs/img/phositonef2.png'
                ]
            }
        ],
        'acondicionadores-suelo': [
            {
                name: 'Acondicionador de Suelo Disal',
                price: '$35.00',
                imageUrl: 'c:/xampp/htdocs/img/disal.png',
                shortDescription: 'Acondicionador de suelo para mejorar la estructura.',
                longDescription: [
                    'c:/xampp/htdocs/img/disalf1.png', 
                    'c:/xampp/htdocs/img/disalf2.png'
                ]
            }
        ]
    };

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const productContainer = document.getElementById('product-container');

    if (category && products[category]) {
        document.querySelectorAll('nav ul li a').forEach(link => {
            if (link.href.includes(category)) {
                link.classList.add('active');
            }
        });

        products[category].forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            productItem.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.shortDescription}</p>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <p><strong>Precio:</strong> ${product.price}</p>
                    ${product.longDescription.map(imgUrl => `<img src="${imgUrl}" alt="${product.name} detail">`).join('')}
                </div>
            `;

            productContainer.appendChild(productItem);
        });
    } else {
        productContainer.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const products = {
        bioestimulantes: [
            {
                name: 'Bioestimulante AMINOROC',
                price: '$20.00',
                imageUrl: 'aminoroc.png',
                shortDescription: 'Bioestimulante vegetal concentrado.',
                longDescription: [
                    'foto1aminoroc.png', 
                    'foto2aminoroc.png'
                ]
            },
            {
                name: 'Bioestimulante Mikuat',
                price: '$25.00',
                imageUrl: 'c:/xampp/htdocs/img/mikuat.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'mikuatf1.png', 
                    'mikuatf2.png'
                ]
            },



{
                name: 'Bioestimulante Gorden',
                price: '$25.00',
                imageUrl: 'gorden.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'gordenf1.png', 
                    'gordenf2.png'
                ]
            },


{
                name: 'Bioestimulante Multigra',
                price: '$25.00',
                imageUrl: 'multigra.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'multigraf1.png', 
                    'multigraf2.png'
                ]
            },



{
                name: 'Bioestimulante Rizactiv',
                price: '$25.00',
                imageUrl: 'rizactiv.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'rizactivf1.png', 
                    'rizactivf2.png'
                ]
            },



{
                name: 'Bioestimulante Stimax',
                price: '$25.00',
                imageUrl: 'stimax.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'stimaxf1.png', 
                    'stimaxf2.png'
                ]
            },




{
                name: 'Bioestimulante Turbocal',
                price: '$25.00',
                imageUrl: 'turbocal.png',
                shortDescription: 'Bioestimulante natural.',
                longDescription: [
                    'turbocalf1.png', 
                    'turbocalf2.png'
                ]
            }





        ],
        'mejoradores-de-suelo': [
            {
                name: 'Mejorador de suelo Terroc',
                price: '$30.00',
                imageUrl: 'terroc.png',
                shortDescription: 'Mejorador de suelo orgánico.',
                longDescription: [
                    'terrocf1.png', 
                    'terrocf2.png'
                ]
            },


{
                name: 'Mejorador de suelo Agro bass',
                price: '$30.00',
                imageUrl: 'agrobass.png',
                shortDescription: 'Mejorador de suelo orgánico.',
                longDescription: [
                    'agrobassf1.png', 
                    'agrobassf2.png'
                ]
            },



            {
                name: 'Mejorador de suelo Humirroc',
                price: '$30.00',
                imageUrl: 'humirroc.png',
                shortDescription: 'Mejorador de suelo orgánico.',
                longDescription: [
                    'humirrocf1.png', 
                    'humirrocf2.png'
                ]
            }






        ],
        'correctores-carencias': [
            {
                name: 'Corrector de Carencias Flor Go',
                price: '$15.00',
                imageUrl: 'florgo.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'florgof1.png', 
                    'florgof2.png'
                ]
            },



{
                name: 'Corrector de Carencias Carvi 35',
                price: '$15.00',
                imageUrl: 'carvi35.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'carvi35f1.png', 
                    'carvi35f2.png'
                ]
            },



{
                name: 'Corrector de Carencias Microroc',
                price: '$15.00',
                imageUrl: 'microroc.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'microrocf1.png', 
                    'microrocf2.png'
                ]
            },


{
                name: 'Corrector de Carencias Boromac',
                price: '$15.00',
                imageUrl: 'boromac.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'boromacf1.png', 
                    'boromacf2.png'
                ]
            },



{
                name: 'Corrector de Carencias Calroc 14',
                price: '$15.00',
                imageUrl: 'calroc14.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'calroc14f1.png', 
                    'calroc14f2.png'
                ]
            },


{
                name: 'Corrector de Carencias Ferromac',
                price: '$15.00',
                imageUrl: 'ferromac.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'ferromacf1.png', 
                    'ferromacf2.png'
                ]
            },


{
                name: 'Corrector de Carencias Florive',
                price: '$15.00',
                imageUrl: 'florive.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'florivef1.png', 
                    'florivef2.png'
                ]
            },




{
                name: 'Corrector de Carencias Greenest',
                price: '$15.00',
                imageUrl: 'greenest.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'greenestf1.png', 
                    'greenestf2.png'
                ]
            },


{
                name: 'Corrector de Carencias Zincrop',
                price: '$15.00',
                imageUrl: 'zincrop.png',
                shortDescription: 'Corrector de carencias para macro y micronutrientes.',
                longDescription: [
                    'zincropf1.png', 
                    'zincropf2.png'
                ]
            }







        ],
        'nutricion-especial': [
            {
                name: 'Nutrición Especial Amipro',
                price: '$40.00',
                imageUrl: 'amipro.png',
                shortDescription: 'Fertilizante de nutrición especial.',
                longDescription: [
                    'amiprof1.png', 
                    'amiprof2.png'
                ]
            },



 {
                name: 'Nutrición Especial Silika20',
                price: '$40.00',
                imageUrl: 'silika20.png',
                shortDescription: 'Fertilizante de nutrición especial.',
                longDescription: [
                    'silika20f1.png', 
                    'silika20f2.png'
                ]
            }








        ],
        'acondicionadores-agua': [
            {
                name: 'Acondicionador de Agua Phositone',
                price: '$10.00',
                imageUrl: 'phositone.png',
                shortDescription: 'Acondicionador de agua para riego.',
                longDescription: [
                    'phositonef1.png', 
                    'phositonef2.png'
                ]
            }
        ],
        'acondicionadores-suelo': [
            {
                name: 'Acondicionador de Suelo Disal',
                price: '$35.00',
                imageUrl: 'disal.png',
                shortDescription: 'Acondicionador de suelo para mejorar la estructura.',
                longDescription: [
                    'disalf1.png', 
                    'disalf2.png'
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



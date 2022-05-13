const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/ButtermilkPancakes.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/diner double.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/godzilla milkshake.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/country delight.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/egg.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/oreo dream.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/bacon overflow.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/american.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/quarantine buddy.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/steak dinner.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

onload = () => {
    const center = document.getElementById("article"); 

    showMenu(menu);

    function showMenu (menu) {
        let display = menu.map((item) => {
            return (`
                <section>
                <img src="${item.img}" alt="${item.title}">
                <div>
                    <h3>${item.title}</h3>
                    <h2>$${item.price}</h2>
                    <hr />
                    <p>${item.desc}</p>
                </div>
            </section>
            `);
        });

        display = display.join("");
        center.innerHTML = display;
    }

    const btn = [
        document.getElementById("all"),
        document.getElementById("breakfast"),
        document.getElementById("lunch"),
        document.getElementById("shakes"),
        document.getElementById("dinner")
    ];

    /*
    const all = document.getElementById("all");
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");
    const shakes = document.getElementById("shakes");
    const dinner = document.getElementById("dinner");
    */

    btn.forEach ((item) => {

        //console.log(item);

        item.addEventListener ("click", () => {
            if (item.id === "all") {
                showMenu(menu);
            }
            else {
                let display = menu.map ((MenuItem) => {
                    if (MenuItem.category === item.id) {
    
                        //console.log(MenuItem.category);
                        //console.log(item.id);
    
                        return (`
                            <section>
                                <img src="${MenuItem.img}" alt="${MenuItem.title}">
                                <div>
                                    <h3>${MenuItem.title}</h3>
                                    <h2>$${MenuItem.price}</h2>
                                    <hr />
                                    <p>${MenuItem.desc}</p>
                                </div>
                            </section>
                        `);
                    }
                });
                display = display.join("");
    
                center.innerHTML = display;
            }         
        });
    });
}
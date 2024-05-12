
export const data = {
    header: {
        logo: {
            src: "./img/Header/logo.svg",
            alt: "Логотип"
        },
        links: [
            {
                text: "Menu",
                href: ""
            },
            {
                text: "Delivery",
                href: ""
            },
            {
                text: "FAQ",
                href: ""
            },
            {
                text: "Contacts",
                href: ""
            }
        ],
        tel: "000000000",
        lang: ["en", "ru"],
        account: {
            img: {
                src: "./img/Header/account.svg",
                alt: "Символ личного кабинета"
            },
            text: "sign in"
        }
    },
    intro: {
        title: "Your personal cook",
        subtitle: "The balanced diet for every day",
        button: {
            text: "Make your choice",
            href: ""
        },
        img: {
            src: "./img/Intro/decor-1.png",
            alt: "Декорация"
        },
        decor: [
            {
                src: "./img/Intro/decor-2.png",
                alt: "Декорация",
                dataSpeed: "0.06"
            },
            {
                src: "./img/Intro/decor-3.png",
                alt: "Декорация",
                dataSpeed: "0.03"
            },
            {
                src: "./img/Intro/decor-4.png",
                alt: "Декорация",
                dataSpeed: "0.03"
            },
            {
                src: "./img/Intro/decor-5.png",
                alt: "Декорация",
                dataSpeed: "0.06"
            }
        ]
    },
    menu: {
        title: "Our menu",
        complex: [
            {
                name: "Power",
                kcal: "1800 kcal"
            },
            {
                name: "Slim",
                kcal: "1500 kcal"
            },
            {
                name: "Balance",
                kcal: "1300 kcal"
            },
            {
                name: "Slim",
                kcal: "1500 kcal"
            },
            {
                name: "Balance",
                kcal: "1300 kcal"
            },
            {
                name: "Slim",
                kcal: "1500 kcal"
            },
            {
                name: "Balance",
                kcal: "1300 kcal"
            },
        ],
        mainBlock: {
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            description: "A balanced menu helps to maintain health and a slim figure, allows you to be cheerful and active throughout the week. While preparing our dishes, we use products from the best suppliers and always choose products that correspond to the concept of healthy nutrition. For example, lean beef, turkey and chicken, low-calorie sauces, pasta of hard varieties. Delivery is carried out every 2 days.",
            gd: ["from ", "$ gel/day"],
            composition: [
                {
                    img:{
                        src: "./img/Menu/protein.svg",
                        alt: "Белки"
                    },
                    label: "Protein",
                    count: "0",
                },
                {
                    img:{
                        src: "./img/Menu/fat.svg",
                        alt: "жиры"
                    },
                    label: "Fat",
                    count: "0",
                },
                {
                    img:{
                        src: "./img/Menu/carbohydrates.svg",
                        alt: "углеводы"
                    },
                    label: "Carbohydrates",
                    count: "0",
                }
            ],
            button: "Order now"
        }
    }
}
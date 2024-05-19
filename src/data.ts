
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
                kcal: 1800
            },
            {
                name: "Slim",
                kcal: 1500
            },
            {
                name: "Balance",
                kcal: 1300
            },
            {
                name: "Slim",
                kcal: 1500
            },
            {
                name: "Balance",
                kcal: 1300
            },
            {
                name: "Slim",
                kcal: 1500 
            },
            {
                name: "Balance",
                kcal: 1300
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
            menuList: [{
                img: {
                    src: "./img/Menu/item-1.png",
                    alt: "Внешний вид блюда"
                },
                type: "Breakfast 1",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345"

            },
            {
                img: {
                    src: "./img/Menu/item-2.png",
                    alt: "Внешний вид блюда"
                },
                type: "Breakfast 2",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345"

            },
            {
                img: {
                    src: "./img/Menu/item-3.png",
                    alt: "Внешний вид блюда"
                },
                type: "Lunch",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345"

            },
            {
                img: {
                    src: "./img/Menu/item-4.png",
                    alt: "Внешний вид блюда"
                },
                type: "snack",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345"

            },
            {
                img: {
                    src: "./img/Menu/item-5.png",
                    alt: "Внешний вид блюда"
                },
                type: "Dinner",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345"

            }],
            description: "A balanced menu helps to maintain health and a slim figure, allows you to be cheerful and active throughout the week. While preparing our dishes, we use products from the best suppliers and always choose products that correspond to the concept of healthy nutrition. For example, lean beef, turkey and chicken, low-calorie sauces, pasta of hard varieties. Delivery is carried out every 2 days.",
            gd: ["from ", "$ gel/day"],
            composition: [
                {
                    img: {
                        src: "./img/Menu/protein.svg",
                        alt: "Белки"
                    },
                    label: "Protein",
                    count: "0",
                },
                {
                    img: {
                        src: "./img/Menu/fat.svg",
                        alt: "жиры"
                    },
                    label: "Fat",
                    count: "0",
                },
                {
                    img: {
                        src: "./img/Menu/carbohydrates.svg",
                        alt: "углеводы"
                    },
                    label: "Carbohydrates",
                    count: "0",
                }
            ],
            button: "Order now"
        }
    },
    faq: {
        title: "FAQ",
        items: [
            {
                img: {
                    src: "./img/FAQ/faq-item-1.svg",
                    alt: "Изображение для оформления"
                },
                text: "Cashback"
            },
            {
                img: {
                    src: "./img/FAQ/faq-item-2.svg",
                    alt: "Изображение для оформления"
                },
                text: "Weight loss"
            },
            {
                img: {
                    src: "./img/FAQ/faq-item-3.svg",
                    alt: "Изображение для оформления"
                },
                text: "Products"
            },
            {
                img: {
                    src: "./img/FAQ/faq-item-4.svg",
                    alt: "Изображение для оформления"
                },
                text: "Rates"
            },
            {
                img: {
                    src: "./img/FAQ/faq-item-5.svg",
                    alt: "Изображение для оформления"
                },
                text: "Payment"
            },
            {
                img: {
                    src: "./img/FAQ/faq-item-6.svg",
                    alt: "Изображение для оформления"
                },
                text: "Storage"
            }
        ],
        question: [
            {
                title: "What is cashback?",
                body: {
                    text: "Make orders, take part in promotions, recommend us to friends or connect a family tariff. We will refund up to 50% of the order value."
                }
            }
        ]
    }
}
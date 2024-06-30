
export const data = {
    header: {
        logo: {
            src: "./img/Header/logo.svg",
            alt: "Логотип"
        },
        links: [
            {
                text: "Menu",
                section: "menu",
            },
            {
                text: "Delivery",
                section: "area"
            },
            {
                text: "FAQ",
                section: "faq"
            },
            {
                text: "Contacts",
                section: "footer"
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
            src: "./img/Intro/decor-1.webp",
            alt: "Декорация"
        },
        decor: [
            {
                src: "./img/Intro/decor-2.webp",
                alt: "Декорация",
                dataSpeed: "0.04"
            },
            {
                src: "./img/Intro/decor-3.webp",
                alt: "Декорация",
                dataSpeed: "0.03"
            },
            {
                src: "./img/Intro/decor-4.webp",
                alt: "Декорация",
                dataSpeed: "0.06"
            },
            {
                src: "./img/Intro/decor-5.webp",
                alt: "Декорация",
                dataSpeed: "0.03"
            }
        ]
    },
    menu: {
        title: "Our menu",
        complex: [
            {
                kcal: 1300
            },
            {
                kcal: 1500
            },
            {
                kcal: 1800
            },
            {
                kcal: 2000
            },
            {
                kcal: 2300
            },
            {
                kcal: 2500
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
                    src: "./img/Menu/item-1.webp",
                    alt: "Внешний вид блюда"
                },
                type: "Breakfast 1",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345",
                price: "7"
            },
            {
                img: {
                    src: "./img/Menu/item-2.webp",
                    alt: "Внешний вид блюда"
                },
                type: "Breakfast 2",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345",
                price: "7"
            },
            {
                img: {
                    src: "./img/Menu/item-3.webp",
                    alt: "Внешний вид блюда"
                },
                type: "Lunch",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345",
                price: "7"
            },
            {
                img: {
                    src: "./img/Menu/item-4.webp",
                    alt: "Внешний вид блюда"
                },
                type: "snack",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345",
                price: "7"

            },
            {
                img: {
                    src: "./img/Menu/item-5.webp",
                    alt: "Внешний вид блюда"
                },
                type: "Dinner",
                name: "Chicken fricassee with mushrooms and bulgur",
                protein: "15",
                fat: "7",
                carbo: "24",
                energy: "285",
                weight: "345",
                price: "7"

            }],
            description: "A balanced menu helps to maintain health and a slim figure, allows you to be cheerful and active throughout the week. While preparing our dishes, we use products from the best suppliers and always choose products that correspond to the concept of healthy nutrition. For example, lean beef, turkey and chicken, low-calorie sauces, pasta of hard varieties. Delivery is carried out every 2 days.",
            gd: ["from ", "$/day"],
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
                        src: "./img/Menu/carbohydrates.svg",
                        alt: "углеводы"
                    },
                    label: "Carbohydrates",
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
            ],
            button: "Order now"
        },
        decor: [
            {
                src: "./img/Menu/decor-1.webp",
                alt: "Декорация",
                dataSpeed: "0.04"
            },
            {
                src: "./img/Menu/decor-2.webp",
                alt: "Декорация",
                dataSpeed: "0.05"
            },
        ]
    },
    area: {
        title: "Delivery areas"
    },
    advantage: {
        title: "Our advantages",
        list: [
            {
                img: {
                    src: "./img/Advantage/item-1.svg",
                    alt: "Изображение для оформления"
                },
                text: ["We'll deliver it free of charge ", "In a convenient 2-hour interval"]
            },
            {
                img: {
                    src: "./img/Advantage/item-2.svg",
                    alt: "Изображение для оформления"
                },
                text: ["We’ll calculate calories ", "It will be easy for you to control your diet"]
            },
            {
                img: {
                    src: "./img/Advantage/item-3.svg",
                    alt: "Изображение для оформления"
                },
                text: ["We'll help you to save up to 20 hours ", "of free time a week for you"]
            },
            {
                img: {
                    src: "./img/Advantage/item-4.svg",
                    alt: "Изображение для оформления"
                },
                text: ["Everything is ready, just warm it up ", "We’ll bring you ready-made dishes"]
            },
            {
                img: {
                    src: "./img/Advantage/item-5.svg",
                    alt: "Изображение для оформления"
                },
                text: ["Lorem ipsum dolor sit amet consectetur. ", "Quisque sed nisi turpis enim. Amet blandit ut."]
            },
        ]
    },
    promotion: {
        title: "1 day at the price of 23$",
        text: "Make orders, take part in promotions, recommend us to friends or connect recommend us to friends or connect",
        button: {
            text: "Sing up"
        },
        decor: [
            {
                src: "./img/Promotion/decor-1.webp",
                alt: "Изображение для оформления",
                dataSpeed: "0.06"
            },
            {
                src: "./img/Promotion/decor-2.webp",
                alt: "Изображение для оформления",
                dataSpeed: "0.06"
            }
        ]
    },
    faq: {
        title: "FAQ",
        items: [
            {
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
            },
            {
                title: "How to get cashback?",
                body: {
                    text: "Make orders, take part in promotions, recommend us to friends or connect a family tariff. We will refund up to 50% of the order value."
                }
            },
            {
                title: "Why can I only spend part of the cashback?",
                body: {
                    text: "Make orders, take part in promotions, recommend us to friends or connect a family tariff. We will refund up to 50% of the order value."
                }
            }, {
                title: "Where can I see how many bonus rubles I have in my account?",
                body: {
                    text: "Make orders, take part in promotions, recommend us to friends or connect a family tariff. We will refund up to 50% of the order value."
                }
            },
            {
                title: "What can I spend cashback on?",
                body: {
                    text: "Make orders, take part in promotions, recommend us to friends or connect a family tariff. We will refund up to 50% of the order value."
                }
            }
        ]
    },
    feedback: {
        title: "LET'S GET IN TOUCH",
        text: "Make orders, take part in promotions, recommend us to friends or connect ",
        form: {
            name: {
                placeholder: "Your name"
            },
            tel: {
                placeholder: "Your phone number"
            },
            email: {
                placeholder: "Your E-mail"
            }
        },
        button: {
            text: "Make your choice"
        },
        hrefTg: {
            img: {
                src: "./img/Feedback/icon-tg.svg",
                alt: "Иконка Telegram"
            },
            href: ""
        },
        decor: [
            {
                src: "./img/Feedback/decor-1.webp",
                alt: "Изображение для оформления",
                dataSpeed: "0.02"
            },
            {
                src: "./img/Feedback/decor-2.webp",
                alt: "Изображение для оформления",
                dataSpeed: "0.06"
            },
        ]
    },
    footer: {
        logo: {
            src: "./img/Footer/logo-white.svg",
            alt: "Логотип"
        },
        links: [
            {
                text: "Menu",
                section: "menu"
            },
            {
                text: "Delivery",
                section: "area"
            },
            {
                text: "FAQ",
                section: "faq"
            },
            {
                text: "Contacts",
                section: "footer"
            }
        ],
        messages: [
            {
                src: "./img/Footer/tg-icon.svg",
                alt: "Иконка Telegram"
            },
            {
                src: "./img/Footer/inst-icon.svg",
                alt: "Иконка Instagram"
            },
            {
                src: "./img/Footer/fb-icon.svg",
                alt: "Иконка Facebook"
            }
        ],
        info: ["City, street",
            "999999999 (9:00 - 18:00)",
            "info@email.com"
        ],
        decor: {
            src: "./img/Footer/plate.png",
            alt: "Изображение для оформления"
        }
    }
}
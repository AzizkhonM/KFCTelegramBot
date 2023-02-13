require("dotenv").config()
const TelegramBot = require("node-telegram-bot-api")


let bot = new TelegramBot(process.env.API_TOKEN, {
    polling: true
})

bot.onText(/start/, msg => {
    console.log(msg);
    if(msg.text == "/start"){
        bot.sendMessage(msg.chat.id, "Bosh menyudasiz\nO‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Menyu"
                        },
                        {
                            text: "Biz haqimizda"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }
})


bot.onText(/echo/, msg => {
    console.log(msg);
    if(msg.text == "/echo"){
        bot.sendMessage(msg.chat.id, "Aks-sado")
    }
})


bot.on("message", msg => {
    if(msg.text == 'Orqaga'){
        bot.sendMessage(msg.chat.id, "Bosh menyudasiz\nO‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Menyu"
                        },
                        {
                            text: "Biz haqimizda"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Biz haqimizda"){
        bot.sendPhoto(msg.chat.id, "https://en.wikipedia.org/wiki/KFC#/media/File:KFC_logo.svg", {
            caption:  "<b>KFC (Kentucky Fried Chicken)</b> — shtab-kvartirasi Kentucky shtatining Louisville shahrida joylashgan, qovurilgan tovuqqa ixtisoslashgan tez ovqatlanish restoranlari tarmog‘i. KFC (sotish bo‘yicha) dunyodagi ikkinchi yirik restoranlar tarmog‘i. O‘zbekistondagi birinchi restoran Toshkent shahrida 2018-yil 12-sentyabrda ochilgan. Hozirgi kunga kelib Toshkent shahrida 13 ta, Andijon, Qo‘qon, Samarqand shaharlarida 1 tadan KFC restoranlari mavjud",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Telegram",
                            url: "https://t.me/kfcuzbekistanofficial"
                        },
                        {
                            text: "Instagram",
                            url: "https://www.instagram.com/kfcinuzbekistan/"
                        },
                        {
                            text: "Facebook",
                            url: "https://www.facebook.com/KFC.uz"
                        }
                    ]
                ]
            }
        })
    }

    
    if(msg.text == "Menyu"){
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Burgerlar"
                        },
                        {
                            text: "Souslar"
                        },
                        {
                            text: "Desertlar"
                        }
                    ],
                    [
                        {
                            text: "Muzqaymoqlar"
                        },
                        {
                            text: "Milksheyklar"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Burgerlar"){
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Big Sanders Burger"
                        },
                        {
                            text: "Chizburger"
                        }
                    ],
                    [
                        {
                            text: "Longer"
                        },
                        {
                            text: 'Orqaga'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Souslar"){
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Chili nordon-shirin sousi"
                        },
                        {
                            text: "Tomatli ketchup"
                        }
                    ],
                    [
                        {
                            text: "Pishloqli sous"
                        },
                        {
                            text: 'Orqaga'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Desertlar"){
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Shokoladli maffin"
                        },
                        {
                            text: "Karamelli donat"
                        }
                    ],
                    [
                        {
                            text: "Olchali pirogcha"
                        },
                        {
                            text: 'Orqaga'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Muzqaymoqlar"){
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Shokoladli «Yoz xayoloti» muzqaymog‘i"
                        },
                        {
                            text: "Quyma «Yozgi» muzqaymog‘i"
                        }
                    ],
                    [
                        {
                            text: 'Orqaga'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Milksheyklar"){
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Vanilli milksheyk 0.4 l"
                        },
                        {
                            text: "Vanilli milksheyk 0.25 l"
                        }
                    ],
                    [
                        {
                            text: 'Orqaga'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Vanilli milksheyk 0.4 l"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4570.jpg", {
            caption : "<b>Taom:</b> Vanilli milksheyk 0.4 l\n\n<b>Narxi:</b> 15 000 so‘m\n\n<b>Taom haqida:</b> Mayin vanil ta'mli kokteylni tanlang, u biram sodda va shu bilan birga nozik ta'mga ega.",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#milkshakes/milkshake-vanilla-04"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Vanilli milksheyk 0.25 l"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4570.jpg", {
            caption : "<b>Taom:</b> Vanilli milksheyk 0.25 l\n\n<b>Narxi:</b> 12 000 so‘m\n\n<b>Taom haqida:</b> Mayin vanil ta'mli kokteylni tanlang, u biram sodda va shu bilan birga nozik ta'mga ega.",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#milkshakes/milkshake-vanilla"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Shokoladli «Yoz xayoloti» muzqaymog‘i"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4568.jpg", {
            caption : "<b>Taom:</b> Shokoladli «Yoz xayoloti» muzqaymog‘i\n\n<b>Narxi:</b> 10 000 so‘m\n\n<b>Taom haqida:</b> Qaymoqli, mayin, yumshoq muzqaymoq",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#ice-cream/ice-cream-chocolate-toppping"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Quyma «Yozgi» muzqaymog‘i"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4567.jpg", {
            caption : "<b>Taom:</b> Quyma «Yozgi» muzqaymog‘i\n\n<b>Narxi:</b> 5 000 so‘m\n\n<b>Taom haqida:</b> Vafli «karnaycha»siga solingan qaymoqli, mayin, yumshoq muzqaymoq",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#ice-cream/ice-cream-cone"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Shokoladli maffin"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4561.jpg", {
            caption : "<b>Taom:</b> Shokoladli maffin\n\n<b>Narxi:</b> 14 000 so‘m\n\n<b>Taom haqida:</b> Ikkita shokoladli maffin – haqiqiy gurmanlar tanlovi. 104 gr Blueberry Muffin",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#desserts/chocolate-muffin"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Karamelli donat"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4563.jpg", {
            caption : "<b>Taom:</b> Karamelli donat\n\n<b>Narxi:</b> 14 000 so‘m\n\n<b>Taom haqida:</b> Karamel bilan qoplangan va karamel bilan to‘ldirilgan donat, 67 gramm",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#desserts/caramel-donut"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Olchali pirogcha"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4566.jpg", {
            caption : "<b>Taom:</b> Olchali pirogcha\n\n<b>Narxi:</b> 14 000 so‘m\n\n<b>Taom haqida:</b> Olchali jem bilan to‘ldirilgan pirogcha, 85 gramm",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#desserts/cherry-pie"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Chili nordon-shirin sousi"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4525.jpg", {
            caption : "<b>Taom:</b> Chili nordon-shirin sousi\n\n<b>Narxi:</b> 3 000 so‘m\n\n<b>Taom haqida:</b> Chili nordon-shirin sousi",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#sauces-add-ons/sweet-n-sour-sauce"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Tomatli ketchup"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4522.jpg", {
            caption : "<b>Taom:</b> Tomatli ketchup\n\n<b>Narxi:</b> 3 000 so‘m\n\n<b>Taom haqida:</b> Tomatli ketchup",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#sauces-add-ons/ketchup-tomato"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Pishloqli sous"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4523.jpg", {
            caption : "<b>Taom:</b> Pishloqli sous\n\n<b>Narxi:</b> 3 000 so‘m\n\n<b>Taom haqida:</b> Pishloqli, original sous",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#sauces-add-ons/cheese-sauce"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Big Sanders Burger"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/5122.jpg", {
            caption : "<b>Taom:</b> Big Sanders Burger\n\n<b>Narxi:</b> 34 000 so‘m\n\n<b>Taom haqida:</b> Original Big Sanders burger – nihoyatda katta va ishtahaochar! U ko‘p pishloq, barra sabzavotlar va sous, og‘izda eriydigan bulkacha va Polkovnik Sandersning maxfiy retsepti bo‘yicha 11 ta giyoh va ziravorlarning ideal uyg‘unligida sara tovuq go‘shtidan tayyorlangan yumshoqqina va xushbo‘y Stripslardan iborat",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#featured/b-sanders-burger-original"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Chizburger"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4449.jpg", {
            caption : "<b>Taom:</b> Chizburger\n\n<b>Narxi:</b> 15 000 so‘m\n\n<b>Taom haqida:</b> Jo‘xori talqoni sepilgan bulochka, original panirovkada sarxil strips, piyoz, Chedder pishlog‘i, bodring, xantalli sous va ketchup",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#burgers/cheeseburger"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Longer"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4450.jpg", {
            caption : "<b>Taom:</b> Longer\n\n<b>Narxi:</b> 13 000 so‘m\n\n<b>Taom haqida:</b> Sarxil tovuq go‘shti, marinadlangan bodring va ishtahaochar sous",
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Buyurtma berish",
                            callback_data: "Buyurtma"
                        },
                        {
                            text: "Batafsil",
                            url: "https://kfc.com.uz/uz/menu#burgers/longer"
                        }
                    ]
                ]
            }
        })
    }


    if(msg.data == "Buyurtma"){
        bot.sendContact(msg.chat.id, "998977281104", "Kuryer")
    }
})


bot.on("callback_query", msg => {
    console.log(msg);
    if(msg.data == "Buyurtma"){
        bot.sendContact(msg.message.chat.id, "998977281104", "Kuryer")
    }
})


bot.on("message", msg => {

})
require("dotenv").config()
const TelegramBot = require("node-telegram-bot-api")


let bot = new TelegramBot(process.env.API_TOKEN, {
    polling: true
})
let menu = 0

bot.onText(/start/, msg => {
    console.log(msg);
    menu = 1
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
                    ],
                    [
                        {
                            text: "Filliallarimiz"
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


    if(msg.text == "Bosh menyu"){
        menu = 1
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
                    ],
                    [
                        {
                            text: "Filliallarimiz"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Filliallarimiz"){
        menu = 2
        bot.sendMessage(msg.chat.id, "Istalgan fillialni tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "KFC C1"
                        },
                        {
                            text: "KFC Chilonzor"
                        },
                        {
                            text: "KFC Chimgan"
                        },
                        {
                            text: "KFC Compass"
                        }                      
                    ],
                    [
                        {
                            text: "KFC Fayz"
                        },
                        {
                            text: "KFC Kefayat"
                        },
                        {
                            text: "KFC Magic City"
                        },
                        {
                            text: "KFC Family Park"
                        },                        
                    ],
                    [
                        {
                            text: "KFC Navruz Mall"
                        },
                        {
                            text: "KFC Oazis"
                        },
                        {
                            text: "KFC Rossini"
                        },
                        {
                            text: "KFC Samarqand Darvoza"
                        },                        
                    ],
                    [
                        {
                            text: "KFC Westminster Drive"
                        },
                        {
                            text: "KFC Kokand Drive"
                        },
                        {
                            text: "KFC Sergeli Drive"
                        },
                        {
                            text: "KFC Beruniy"
                        },                        
                    ],
                    [
                        {
                            text: "Orqaga"
                        }
                    ]
                ]
            })
        })
    }


    if(msg.text == "Orqaga"){
        console.log(msg.text, menu);
        if(menu == 2){
            menu = 1
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
                        ],
                        [
                            {
                                text: "Filliallarimiz"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }


        if(menu == 3){
            menu = 2
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
                            },
                            {
                                text: "Orqaga"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }
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
        menu = 2
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
                        },
                        {
                            text: "Orqaga"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "KFC C1"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4350.jpg", {
            caption : "<b>KFC C1</b>\n\n<b>Manzil:</b> Toshkent shahri, Mirzo-Ulug‘bek tumani, O‘zbekiston ovozi ko‘chasi, 21-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.3120621", longitude = "69.2904075")
    }


    if(msg.text == "KFC Chilonzor"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4351.jpg", {
            caption : "<b>KFC Chilonzor</b>\n\n<b>Manzil:</b> Toshkent shahri, Chilonzor tumani, Bunyodkor shoh ko‘chasi, 52/2-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.27553", longitude = "69.204373")
    }


    if(msg.text == "KFC Chimgan"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4352.jpg", {
            caption : "<b>KFC Chimgan</b>\n\n<b>Manzil:</b> Toshkent shahri, Mirzo-Ulug‘bek tumani, Temur Malik ko‘chasi, 3A-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.3516727", longitude = "69.3520268")
    }


    if(msg.text == "KFC Compass"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4353.jpg", {
            caption : "<b>KFC Compass</b>\n\n<b>Manzil:</b> Toshkent shahri, Bektemir tumani, Toshkent halqa avtomobil yo‘li ko‘chasi, 17-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.2391272", longitude = "69.3288088")
    }


    if(msg.text == "KFC Fayz"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4354.jpg", {
            caption : "<b>KFC Fayz</b>\n\n<b>Manzil:</b> Toshkent shahri, Mirzo-Ulug‘bek tumani, Buyuk Ipak yo‘li ko‘chasi, 105-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.326660796612", longitude = "69.330905661377")
    }


    if(msg.text == "KFC Kefayat"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4355.jpg", {
            caption : "<b>KFC Kefayat</b>\n\n<b>Manzil:</b> Toshkent shahri, Yunusobod tumani, Amir Temur shoh ko‘chasi, 141-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.3632568", longitude = "69.2876985")
    }


    if(msg.text == "KFC Magic City"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4356.jpg", {
            caption : "<b>KFC Magic City</b>\n\n<b>Manzil:</b> Toshkent shahri, Chilonzor tumani, Bobur ko‘chasi, 174/2-uy\n\n<b>Telefon raqami:</b> +998781297002",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.304179460127", longitude = "69.246250862654")
    }


    if(msg.text == "KFC Family Park"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/5248.jpg", {
            caption : "<b>KFC Family Park</b>\n\n<b>Manzil:</b> Samarqand shahri, Narpay ko‘chasi, 76-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "39.663591", longitude = "66.90738")
    }


    if(msg.text == "KFC Navruz Mall"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4357.jpg", {
            caption : "<b>KFC Navruz Mall</b>\n\n<b>Manzil:</b> Andijon shahri, Loihaviy Mashrab ko‘chasi, 60-uy\n\n<b>Telefon raqami:</b> +998781297002",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "40.752057233056", longitude = "72.362774225604")
    }


    if(msg.text == "KFC Oazis"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4358.jpg", {
            caption : "<b>KFC Oazis</b>\n\n<b>Manzil:</b> Toshkent shahri, Uchtepa tumani, Lutfiy ko‘chasi, 21A-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.2860209", longitude = "69.1860038")
    }


    if(msg.text == "KFC Rossini"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4359.jpg", {
            caption : "<b>KFC Rossini</b>\n\n<b>Manzil:</b> Toshkent shahri, Shayxontohur tumani, Abdulla Qodiriy ko‘chasi, 20-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.3272976", longitude = "69.2476312")
    }


    if(msg.text == "KFC Samarqand Darvoza"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4360.jpg", {
            caption : "<b>KFC Samarqand Darvoza</b>\n\n<b>Manzil:</b> Toshkent shahri, Shayxontohur tumani, Qoratosh ko‘chasi, 5A-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.3161546", longitude = "69.2312087")
    }


    if(msg.text == "KFC Westminster Drive"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4361.jpg", {
            caption : "<b>KFC Westminster Drive</b>\n\n<b>Manzil:</b> Toshkent shahri, Yashnobod tumani, Istiqbol ko‘chasi, 17-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.307343183014", longitude = "69.284071521565")
    }


    if(msg.text == "KFC Kokand Drive"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/4362.jpg", {
            caption : "<b>KFC Kokand Drive</b>\n\n<b>Manzil:</b> Qo‘qon shahri, Abu Toib Hukandiy ko‘chasi, 101D-uy\n\n<b>Telefon raqami:</b> +998781297002",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "40.54885433956", longitude = "70.924030661377")
    }


    if(msg.text == "KFC Sergeli Drive"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/5247.jpg", {
            caption : "<b>KFC Sergeli Drive</b>\n\n<b>Manzil:</b> Toshkent shahri, Yangihayot tumani, Uzar ko‘chasi, 78-uy\n\n<b>Telefon raqami:</b> +998781297002",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.2256654", longitude = "69.1896485")
    }


    if(msg.text == "KFC Beruniy"){
        bot.sendPhoto(msg.chat.id, "https://kfc.com.uz/admin/files/5263.jpg", {
            caption : "<b>KFC Beruniy</b>\n\n<b>Manzil:</b> Toshkent shahri, Shayxontohur tumani, Beruniy shoh ko‘chasi, 41A-uy\n\n<b>Telefon raqami:</b> +998781297000",
            parse_mode: "HTML"
        })
        bot.sendLocation(msg.chat.id, latitude = "41.3445598", longitude = "69.2056435")
    }


    if(msg.text == "Burgerlar"){
        menu = 3
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Big Sanders Burger"
                        },
                        {
                            text: "Chizburger"
                        },
                        {
                            text: "Longer"
                        },
                    ],
                    [
                        {
                            text: 'Orqaga'
                        },
                        {
                            text: "Bosh menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Souslar"){
        menu = 3
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Chili nordon-shirin sousi"
                        },
                        {
                            text: "Tomatli ketchup"
                        },
                        {
                            text: "Pishloqli sous"
                        }
                    ],
                    [
                        {
                            text: 'Orqaga'
                        },
                        {
                            text: "Bosh menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Desertlar"){
        menu = 3
        bot.sendMessage(msg.chat.id, "O‘zingizga zarur tugmani tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Shokoladli maffin"
                        },
                        {
                            text: "Karamelli donat"
                        },
                        {
                            text: "Olchali pirogcha"
                        }
                    ],
                    [
                        {
                            text: 'Orqaga'
                        },
                        {
                            text: "Bosh menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Muzqaymoqlar"){
        menu = 3
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
                        },
                        {
                            text: "Bosh menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text == "Milksheyklar"){
        menu = 3
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
                        },
                        {
                            text: "Bosh menyu"
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
            },
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


})


bot.on("callback_query", msg => {
    console.log(msg);
    if(msg.data == "Buyurtma"){
        bot.sendContact(msg.message.chat.id, "998971234567", "Kuryer")
    }
    if(msg.data == "Back to Main"){
        console.log(msg);
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
                    ],
                    [
                        {
                            text: "Filliallarimiz"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }
})


bot.on("message", msg => {

})
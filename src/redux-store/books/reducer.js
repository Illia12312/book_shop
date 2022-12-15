import {
    SLICE_BOOKS
  } from "./constants";
  
  const initialState = {
    books: [
        {
          "name": "Волшебные Бусины",
          "img": "https://live.staticflickr.com/65535/52563868045_fb3cf8a77f_n.jpg",
          "price": 100,
          "author": "Анна Гончарова",
          "type": "kid",
          "isDiscount": false,
          "isPopular": true,
          "id": "1"
        },
       {
        "name": "История Украины",
        "img": "https://live.staticflickr.com/65535/52563407061_25b6109c8e_m.jpg",
        "price": 199,
        "author": "Игорь Данилевсий",
        "type": "history",
        "isDiscount": false,
        "isPopular": true,
        "id": "2"
       },
       {
        "name": "Победитель отсаеться один",
        "img": "https://live.staticflickr.com/65535/52563689709_b4810ed3ec_m.jpg",
        "price": 239,
        "author": "Пауло Коэльо",
        "type": "novel",
        "isDiscount": true,
        "isPopular": false,
        "id": "3"
       },
       {
        "name": "Морской волк",
        "img": "https://live.staticflickr.com/65535/52563868155_08189aa9b6_m.jpg",
        "price": 329,
        "author": "Джек Лондон",
        "type": "fantasy",
        "isDiscount": true,
        "isPopular": false,
        "id": "4"
       },
       {
        "name": "Чужие",
        "img": "https://live.staticflickr.com/65535/52562950767_0a37d11f8f_m.jpg",
        "price": 300,
        "author": "Стив Перри",
        "type": "type 5",
        "isDiscount": true,
        "isPopular": false,
        "id": "5"
       },
       {
        "name": "Скрытая Угроза",
        "img": "https://live.staticflickr.com/65535/52563689849_c94563e9a7_m.jpg",
        "price": 169,
        "author": "Дрор Мишани",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": false,
        "id": "6"
       },
       {
        "name": "Идеальная пара",
        "img": "https://live.staticflickr.com/65535/52563941498_6192fd1b99_m.jpg",
        "price": 345,
        "author": "Джеки Каблер",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": true,
        "id": "7"
       },
       {
        "name": "Загадочная история Бенджамина Баттона",
        "img": "https://live.staticflickr.com/65535/52563689259_bd3387845b_m.jpg",
        "price": 99,
        "author": "Фрэнсис Скотт Фицжеральд",
        "type": "audio",
        "isDiscount": false,
        "isPopular": true,
        "id": "8"
       },
       {
        "name": "Зодиак",
        "img": "https://live.staticflickr.com/65535/52563868505_b4800a684d_m.jpg",
        "price": 206,
        "author": "Роберт Грейсмит",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": true,
        "id": "9"
       },
       {
        "name": "Аллен Эскенс",
        "img": "https://live.staticflickr.com/65535/52563941523_bd374b6543_m.jpg",
        "price": 89,
        "author": "Жизнь, которую мы потеряли",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": false,
        "id": "10"
       },
       {
        "name": "Мистер марседес",
        "img": "https://live.staticflickr.com/65535/52563689879_82e3d78215_m.jpg",
        "price": 218,
        "author": "Стивен Кинг",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": true,
        "id": "11"
       },
       {
        "name": "Год Оракула",
        "img": "https://live.staticflickr.com/65535/52563689499_34aaafa136_m.jpg",
        "price": 98,
        "author": "Чарльз Соул",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": true,
        "id": "12"
       },
       {
        "name": "Дюна",
        "img": "https://live.staticflickr.com/65535/52563406956_46110dd929_m.jpg",
        "price": 113,
        "author": "Брайан Герберт",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": true,
        "id": "13"
       },
       {
        "name": "Братство магов",
        "img": "https://live.staticflickr.com/65535/52563406996_b9513af375_m.jpg",
        "price": 213,
        "author": "Владислав Жеребьев",
        "type": "fantasy",
        "isDiscount": true,
        "isPopular": false,
        "id": "14"
       },
       {
        "name": "451 градус по Фарингейту",
        "img": "https://live.staticflickr.com/65535/52562950757_7c124a2570_m.jpg",
        "price": 68,
        "author": "Рэй Брэдбери",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": true,
        "id": "15"
       },
       {
        "name": "Римская Республика",
        "img": "https://live.staticflickr.com/65535/52563868210_344a3f94d5_m.jpg",
        "price": 83,
        "author": "Игорь Данилевсий",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "16"
       },
       {
        "name": "Мавританская Испания",
        "img": "https://live.staticflickr.com/65535/52563868255_6d2fe174a9_m.jpg",
        "price": 100,
        "author": "Рэйнхарт Дози",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "17"
       },
       {
        "name": "Тайная жизнь писателей",
        "img": "https://live.staticflickr.com/65535/52563689274_4cd275a9a8_m.jpg",
        "price": 64,
        "author": "Гийом Мюссо",
        "type": "audio",
        "isDiscount": false,
        "isPopular": false,
        "id": "18"
       },
       {
        "name": "Серое Преосвященство",
        "img": "https://live.staticflickr.com/65535/52562950572_1f295020c7_m.jpg",
        "price": 62,
        "author": "Олдос Хаксли",
        "type": "audio",
        "isDiscount": false,
        "isPopular": false,
        "id": "19"
       },
       {
        "name": "Портрет Дориана Грея",
        "img": "https://live.staticflickr.com/65535/52562950602_5ebd23893d_m.jpg",
        "price": 88,
        "author": "Оскар Уайлд",
        "type": "audio",
        "isDiscount": false,
        "isPopular": true,
        "id": "20"
       },
       {
        "name": "Выдох",
        "img": "https://live.staticflickr.com/65535/52562950807_4c3aabd9f6_m.jpg",
        "price": 182,
        "author": "Тед Чан",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": false,
        "id": "21"
       },
       {
        "name": "Половина солнца",
        "img": "https://live.staticflickr.com/65535/52562950812_96bb37bd5e_m.jpg",
        "price": 157,
        "author": "Ад Вороновский",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": false,
        "id": "22"
       },
       {
        "name": "Медленные пути",
        "img": "https://live.staticflickr.com/65535/52562950847_f1e0928d8b_m.jpg",
        "price": 163,
        "author": "Аластер Рейнольдс",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": false,
        "id": "23"
       },
       {
        "name": "Двери иных миров",
        "img": "https://live.staticflickr.com/65535/52563941263_7db69c1226_m.jpg",
        "price": 135,
        "author": "Роберт Хайнлайн",
        "type": "fantasy",
        "isDiscount": false,
        "isPopular": true,
        "id": "24"
       },
       {
        "name": "Раассказы о пилоте Пирске Фиаско",
        "img": "https://live.staticflickr.com/65535/52563689519_3de559778e_m.jpg",
        "price": 165,
        "author": "Станислав Лем",
        "type": "fantasy",
        "isDiscount": true,
        "isPopular": false,
        "id": "25"
       },
       {
        "name": "Японская цивилизация",
        "img": "https://live.staticflickr.com/65535/52563407001_cf91de0e3c_m.jpg",
        "price": 93,
        "author": "Хан Горо",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "26"
       },
       {
        "name": "Как мы стали людьми",
        "img": "https://live.staticflickr.com/65535/52563941293_dfc978ac8a_m.jpg",
        "price": 170,
        "author": "Мадлен Бёме",
        "type": "history",
        "isDiscount": true,
        "isPopular": false,
        "id": "27"
       },
       {
        "name": "Арабы в мировой истории",
        "img": "https://live.staticflickr.com/65535/52563941363_b16f5ae4f8_m.jpg",
        "price": 117,
        "author": "Бернард Льюис",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "28"
       },
       {
        "name": "Венгрия XVI-XVII вв.",
        "img": "https://live.staticflickr.com/65535/52563868250_236f3a3134_n.jpg",
        "price": 73,
        "author": "Татьяна Гусарова",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "29"
       },
       {
        "name": "Византийская культура",
        "img": "https://live.staticflickr.com/65535/52563868230_95c4e24a93_m.jpg",
        "price": 94,
        "author": "А. Каждан",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "30"
       },
       {
        "name": "Греко-турецкая война",
        "img": "https://live.staticflickr.com/65535/52563407036_4f9cc4ddc6_m.jpg",
        "price": 189,
        "author": "Кольмар фон дер Гольц",
        "type": "history",
        "isDiscount": true,
        "isPopular": false,
        "id": "31"
       },
       {
        "name": "Египет под властью Птолемеев",
        "img": "https://live.staticflickr.com/65535/52563689564_0a61a5d126_m.jpg",
        "price": 64,
        "author": "Татьяна Гусарова",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "32"
       },
       {
        "name": "История культуры винопития в Китае",
        "img": "https://live.staticflickr.com/65535/52563689639_4120591203_n.jpg",
        "price": 92,
        "author": "Кольмар фон дер Гольц",
        "type": "history",
        "isDiscount": false,
        "isPopular": false,
        "id": "33"
       },
       {
        "name": "Безмолвный король",
        "img": "https://live.staticflickr.com/65535/52563689634_b37fe96fc4_m.jpg",
        "price": 143,
        "author": "Амо Джонс",
        "type": "novel",
        "isDiscount": true,
        "isPopular": true,
        "id": "34"
       },
       {
        "name": "Счастливчики",
        "img": "https://live.staticflickr.com/65535/52563689644_f968b134e7_m.jpg",
        "price": 293,
        "author": "Даниэла Стил",
        "type": "novel",
        "isDiscount": true,
        "isPopular": false,
        "id": "35"
       },
       {
        "name": "Квартира в Париже",
        "img": "https://live.staticflickr.com/65535/52562951042_e2678dede8_m.jpg",
        "price": 179,
        "author": "Гийом Мюссо",
        "type": "novel",
        "isDiscount": false,
        "isPopular": true,
        "id": "36"
       },
       {
        "name": "Здесь и сейчас",
        "img": "https://live.staticflickr.com/65535/52562951052_7635e95e99_n.jpg",
        "price": 222,
        "author": "Гийом Мюссо",
        "type": "novel",
        "isDiscount": true,
        "isPopular": true,
        "id": "37"
       },
       {
        "name": "Замок",
        "img": "https://live.staticflickr.com/65535/52563689684_1d68238f75_m.jpg",
        "price": 287,
        "author": "Франц Кафка",
        "type": "novel",
        "isDiscount": true,
        "isPopular": false,
        "id": "38"
       },
       {
        "name": "Маленькая Принцесса",
        "img": "https://live.staticflickr.com/65535/52563868300_3a4efe5961_m.jpg",
        "price": 93,
        "author": "Фрэнсис Бернетт",
        "type": "novel",
        "isDiscount": false,
        "isPopular": false,
        "id": "39"
       },
       {
        "name": "Ночь Нежна",
        "img": "https://live.staticflickr.com/65535/52562951072_63779f62fc_m.jpg",
        "price": 199,
        "author": "Фрэнсис Скотт Фицжеральд",
        "type": "novel",
        "isDiscount": false,
        "isPopular": false,
        "id": "40"
       },
       {
        "name": "Ромео и Джульета",
        "img": "https://live.staticflickr.com/65535/52563868315_b9d2335ed8_m.jpg",
        "price": 181,
        "author": "Уильям Шекспир",
        "type": "novel",
        "isDiscount": false,
        "isPopular": false,
        "id": "41"
       },
       {
        "name": "Миллион",
        "img": "https://live.staticflickr.com/65535/52562951102_a250be853a_m.jpg",
        "price": 118,
        "author": "Моника Вуд",
        "type": "novel",
        "isDiscount": false,
        "isPopular": false,
        "id": "42"
       },
       {
        "name": "Рациональная фармакотерапия",
        "img": "https://live.staticflickr.com/65535/52563689744_74b3afc54b_m.jpg",
        "price": 258,
        "author": "Ольга Рукавицина",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "43"
       },
       {
        "name": "Современные методы анализа",
        "img": "https://live.staticflickr.com/65535/52563407176_6c1dd05e28_n.jpg",
        "price": 158,
        "author": "Анна Дальцова",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "44"
       },
       {
        "name": "Стратегическое управление",
        "img": "https://live.staticflickr.com/65535/52563868355_d77f8ced56_z.jpg",
        "price": 75,
        "author": "Ирина Ларинова",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "45"
       },
       {
        "name": "Маркетинг",
        "img": "https://live.staticflickr.com/65535/52563868365_7639ac4c46_m.jpg",
        "price": 232,
        "author": "Елена Васильева",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "46"
       },
       {
        "name": "Разработка современных веб-приложений",
        "img": "https://live.staticflickr.com/65535/52563941463_097dacd25e_n.jpg",
        "price": 116,
        "author": "Дино Экспозито",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "47"
       },
       {
        "name": "Цифровая революция",
        "img": "https://live.staticflickr.com/65535/52563941468_42d0485480_m.jpg",
        "price": 169,
        "author": "Владимир Овчинский",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "48"
       },
       {
        "name": "Экономика и финансы фирмы",
        "img": "https://live.staticflickr.com/65535/52563941473_d651343329_m.jpg",
        "price": 79,
        "author": "Лидия Паштова",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "49"
       },
       {
        "name": "Повышение срока службы запчастей",
        "img": "https://live.staticflickr.com/65535/52563868420_fa3c3191d7_m.jpg",
        "price": 115,
        "author": "Анатолий Веселовский",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "50"
       },
       {
        "name": "Повышение срока службы чугунных деталей гидроцилиндров",
        "img": "https://live.staticflickr.com/65535/52563407236_08573a0a4a_m.jpg",
        "price": 87,
        "author": "Анатолий Веселовский",
        "type": "science",
        "isDiscount": false,
        "isPopular": false,
        "id": "51"
       },
       {
        "name": "Люди зимы",
        "img": "https://live.staticflickr.com/65535/52563868425_0dfd273b82_m.jpg",
        "price": 202,
        "author": "Дженнифер Макмахон",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": false,
        "id": "52"
       },
       {
        "name": "В толще воды",
        "img": "https://live.staticflickr.com/65535/52563868450_b58aea0400_m.jpg",
        "price": 204,
        "author": "Арне Даль",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": false,
        "id": "53"
       },
       {
        "name": "Свобода",
        "img": "https://live.staticflickr.com/65535/52562951182_ca42ae19d8_m.jpg",
        "price": 125,
        "author": "Арне Даль",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": false,
        "id": "54"
       },
       {
        "name": "Слишком близко",
        "img": "https://live.staticflickr.com/65535/52563689844_0c647cf431_m.jpg",
        "price": 232,
        "author": "Аманда Рейнольдс",
        "type": "thriller",
        "isDiscount": false,
        "isPopular": false,
        "id": "55"
       },
       {
        "name": "Родничок",
        "img": "https://live.staticflickr.com/65535/52563941193_826554208f_m.jpg",
        "price": 99,
        "author": "Татьяна Шорыгина",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "56"
       },
       {
        "name": "Запоминаем цифры и считаем",
        "img": "https://live.staticflickr.com/65535/52563868120_44234df6d0_m.jpg",
        "price": 60,
        "author": "Татьяна Шорыгина",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "57"
       },
       {
        "name": "Беседы о домашних инструментах",
        "img": "https://live.staticflickr.com/65535/52562950762_d2e2c17cfc_m.jpg",
        "price": 76,
        "author": "Татьяна Шорыгина",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "58"
       },
       {
        "name": "Игры-бродилки",
        "img": "https://live.staticflickr.com/65535/52562950627_b33d4a2d59_n.jpg",
        "price": 88,
        "author": "Анна Гончарова",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "59"
       },
       {
        "name": "Забавные предметы",
        "img": "https://live.staticflickr.com/65535/52562950647_5418b415a6_n.jpg",
        "price": 126,
        "author": "Леонид Яхнин",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "60"
       },
       {
        "name": "Животные фермы",
        "img": "https://live.staticflickr.com/65535/52562950652_8708aeb0c7_m.jpg",
        "price": 74,
        "author": "Леонид Яхнин",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "61"
       },
       {
        "name": "Посчитаем вместе",
        "img": "https://live.staticflickr.com/65535/52563406806_447a0112e7_n.jpg",
        "price": 68,
        "author": "Леонид Яхнин",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "62"
       },
       {
        "name": "Ребятам о Зверятам",
        "img": "https://live.staticflickr.com/65535/52563868080_d1a269f8af_m.jpg",
        "price": 87,
        "author": "Леонид Яхнин",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "63"
       },
       {
        "name": "Тесты",
        "img": "https://live.staticflickr.com/65535/52563689364_c94ca827fb_m.jpg",
        "price": 79,
        "author": "Анна Гончарова",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "64"
       },
       {
        "name": "Азбука",
        "img": "https://live.staticflickr.com/65535/52562950702_469e5f6d96_m.jpg",
        "price": 100,
        "author": "Анна Гончарова",
        "type": "kid",
        "isDiscount": false,
        "isPopular": false,
        "id": "65"
       }
      ],
    sliceBooks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SLICE_BOOKS:
        return {
          ...state,
          sliceBooks: state.books.splice(0, 10),
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;
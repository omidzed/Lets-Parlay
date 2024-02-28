const apiEvents = [
  {
    commenceTime: '2024-03-02T18:00:00Z',
    outcomes: [
      {
        name: 'Chris Duncan',
        moneyline: -305,
      },
      {
        name: 'Claudio Ribeiro',
        moneyline: 240,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T19:00:00Z',
    outcomes: [
      {
        name: 'Abdul-Kareem Al-Selwady',
        moneyline: -166,
      },
      {
        name: 'Loik Radzhabov',
        moneyline: 130,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T19:50:00Z',
    outcomes: [
      {
        name: 'Christian Leroy Duncan',
        moneyline: -310,
      },
      {
        name: 'Claudio Ribeiro',
        moneyline: 260,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T20:15:00Z',
    outcomes: [
      {
        name: 'Aiemann Zahabi',
        moneyline: 450,
      },
      {
        name: 'Javid Basharat',
        moneyline: -720,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T21:00:00Z',
    outcomes: [
      {
        name: 'A.J. Cunningham',
        moneyline: 575,
      },
      {
        name: "L'udovit Klein",
        moneyline: -835,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T21:00:00Z',
    outcomes: [
      {
        name: 'Bekzat Almakhan',
        moneyline: 750,
      },
      {
        name: 'Umar Nurmagomedov',
        moneyline: -1250,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T21:15:00Z',
    outcomes: [
      {
        name: 'Matt Schnell',
        moneyline: 280,
      },
      {
        name: 'Stephen Erceg',
        moneyline: -380,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T22:15:00Z',
    outcomes: [
      {
        name: 'Eryk Anders',
        moneyline: -430,
      },
      {
        name: 'Jamie Pickett',
        moneyline: 300,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T22:45:00Z',
    outcomes: [
      {
        name: 'Alex Perez',
        moneyline: 280,
      },
      {
        name: 'Muhammad Mokaev',
        moneyline: -390,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T23:15:00Z',
    outcomes: [
      {
        name: 'Tyson Pedro',
        moneyline: 240,
      },
      {
        name: 'Vitor Petrino',
        moneyline: -330,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-02T23:45:00Z',
    outcomes: [
      {
        name: 'Jairzinho Rozenstruik',
        moneyline: 134,
      },
      {
        name: 'Shamil Gaziev',
        moneyline: -172,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T18:00:00Z',
    outcomes: [
      {
        name: 'Bahram Rajabzadeh',
        moneyline: -125,
      },
      {
        name: 'Kevin Tariq Osaro',
        moneyline: -110,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T18:00:00Z',
    outcomes: [
      {
        name: 'Donegi Abena',
        moneyline: -250,
      },
      {
        name: 'Tarik Khbabez',
        moneyline: 170,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T18:00:00Z',
    outcomes: [
      {
        name: 'Enriko Kehl',
        moneyline: 320,
      },
      {
        name: 'Tyjani Beztati',
        moneyline: -500,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T18:00:00Z',
    outcomes: [
      {
        name: 'Iliass Hammouche',
        moneyline: 135,
      },
      {
        name: 'Ivan Galaz',
        moneyline: -200,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T18:00:00Z',
    outcomes: [
      {
        name: 'Levi Rigters',
        moneyline: -400,
      },
      {
        name: 'Uku Jurjendal',
        moneyline: 250,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T18:00:00Z',
    outcomes: [
      {
        name: 'Rico Verhoeven',
        moneyline: -835,
      },
      {
        name: 'Sofian Laïdouni',
        moneyline: 450,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T23:00:00Z',
    outcomes: [
      {
        name: 'Curtis Blaydes',
        moneyline: -110,
      },
      {
        name: 'Jailton Almeida',
        moneyline: -110,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-09T23:00:00Z',
    outcomes: [
      {
        name: 'Mateusz Gamrot',
        moneyline: -375,
      },
      {
        name: 'Rafael dos Anjos',
        moneyline: 285,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T00:00:00Z',
    outcomes: [
      {
        name: 'Asu Almabaev',
        moneyline: -390,
      },
      {
        name: 'CJ Vergara',
        moneyline: 280,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T00:00:00Z',
    outcomes: [
      {
        name: 'Joanne Wood',
        moneyline: 136,
      },
      {
        name: 'Maryna Moroz',
        moneyline: -174,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T00:00:00Z',
    outcomes: [
      {
        name: 'Josh Parisian',
        moneyline: 310,
      },
      {
        name: 'Robelis Despaigne',
        moneyline: -440,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T00:00:00Z',
    outcomes: [
      {
        name: 'Katlyn Chookagian',
        moneyline: 152,
      },
      {
        name: 'Maycee Barber',
        moneyline: -196,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T00:00:00Z',
    outcomes: [
      {
        name: 'Kyler Phillips',
        moneyline: -245,
      },
      {
        name: 'Pedro Munhoz',
        moneyline: 186,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T00:00:00Z',
    outcomes: [
      {
        name: 'Michal Oleksiejczuk',
        moneyline: 122,
      },
      {
        name: 'Michel Pereira',
        moneyline: -156,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T02:00:00Z',
    outcomes: [
      {
        name: 'Benoit Saint-Denis',
        moneyline: -170,
      },
      {
        name: 'Dustin Poirier',
        moneyline: 142,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T03:00:00Z',
    outcomes: [
      {
        name: 'Gilbert Burns',
        moneyline: 105,
      },
      {
        name: 'Jack Della Maddalena',
        moneyline: -125,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T03:00:00Z',
    outcomes: [
      {
        name: 'Kevin Holland',
        moneyline: -140,
      },
      {
        name: 'Michael Page',
        moneyline: 120,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T03:00:00Z',
    outcomes: [
      {
        name: 'Petr Yan',
        moneyline: -135,
      },
      {
        name: 'Song Yadong',
        moneyline: 115,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-10T04:00:00Z',
    outcomes: [
      {
        name: 'Marlon Vera',
        moneyline: 170,
      },
      {
        name: "Sean O'Malley",
        moneyline: -200,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Ange Loosa',
        moneyline: 126,
      },
      {
        name: 'Bryan Battle',
        moneyline: -162,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Bryan Barberena',
        moneyline: 160,
      },
      {
        name: 'Gerald Meerschaert',
        moneyline: -192,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Chad Anheliger',
        moneyline: 164,
      },
      {
        name: 'Charalampos Grigoriou',
        moneyline: -198,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Chelsea Chandler',
        moneyline: 124,
      },
      {
        name: 'Josiane Nunes',
        moneyline: -148,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Christian Rodriguez',
        moneyline: 122,
      },
      {
        name: 'Isaac Dulgarian',
        moneyline: -156,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Cory McKenna',
        moneyline: 110,
      },
      {
        name: 'Jaqueline Amorim',
        moneyline: -130,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Danny Silva',
        moneyline: 164,
      },
      {
        name: 'Josh Culibao',
        moneyline: -198,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Jafel Filho',
        moneyline: -180,
      },
      {
        name: 'Ode Osbourne',
        moneyline: 150,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Kennedy Nzechukwu',
        moneyline: -425,
      },
      {
        name: 'Ovince St. Preux',
        moneyline: 330,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-16T20:00:00Z',
    outcomes: [
      {
        name: 'Macy Chiasson',
        moneyline: -175,
      },
      {
        name: 'Pannie Kianzad',
        moneyline: 140,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-17T02:00:00Z',
    outcomes: [
      {
        name: 'Marcin Tybura',
        moneyline: 102,
      },
      {
        name: 'Tai Tuivasa',
        moneyline: -122,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-03-24T00:00:00Z',
    outcomes: [
      {
        name: 'Amanda Ribas',
        moneyline: 140,
      },
      {
        name: 'Rose Namajunas',
        moneyline: -160,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-13T23:00:00Z',
    outcomes: [
      {
        name: 'Bobby Green',
        moneyline: -210,
      },
      {
        name: 'Jim Miller',
        moneyline: 180,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T00:00:00Z',
    outcomes: [
      {
        name: 'Bo Nickal',
        moneyline: -1500,
      },
      {
        name: 'Cody Brundage',
        moneyline: 750,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T01:00:00Z',
    outcomes: [
      {
        name: 'Holly Holm',
        moneyline: 320,
      },
      {
        name: 'Kayla Harrison',
        moneyline: -410,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T02:00:00Z',
    outcomes: [
      {
        name: 'Aljamain Sterling',
        moneyline: -105,
      },
      {
        name: 'Calvin Kattar',
        moneyline: -115,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T02:00:00Z',
    outcomes: [
      {
        name: 'Cody Garbrandt',
        moneyline: 270,
      },
      {
        name: 'Deiveson Figueiredo',
        moneyline: -340,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T02:00:00Z',
    outcomes: [
      {
        name: 'Weili Zhang',
        moneyline: -345,
      },
      {
        name: 'Yan Xiaonan',
        moneyline: 275,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T02:30:00Z',
    outcomes: [
      {
        name: 'Aleksandar Rakic',
        moneyline: -130,
      },
      {
        name: 'Jiri Prochazka',
        moneyline: 110,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T02:30:00Z',
    outcomes: [
      {
        name: 'Arman Tsarukyan',
        moneyline: -198,
      },
      {
        name: 'Charles Oliveira',
        moneyline: 164,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T03:00:00Z',
    outcomes: [
      {
        name: 'Justin Gaethje',
        moneyline: -205,
      },
      {
        name: 'Max Holloway',
        moneyline: 175,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-04-14T04:00:00Z',
    outcomes: [
      {
        name: 'Alex Pereira',
        moneyline: -155,
      },
      {
        name: 'Jamahal Hill',
        moneyline: 135,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-07-29T02:00:00Z',
    outcomes: [
      {
        name: 'Conor McGregor',
        moneyline: -128,
      },
      {
        name: 'Michael Chandler',
        moneyline: 100,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [
      {
        name: 'Alex Pereira',
        moneyline: 155,
      },
      {
        name: 'Israel Adesanya',
        moneyline: -185,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [
      {
        name: 'Conor McGregor',
        moneyline: -110,
      },
      {
        name: 'Michael Chandler',
        moneyline: -110,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [
      {
        name: 'Dricus Du Plessis',
        moneyline: -105,
      },
      {
        name: 'Israel Adesanya',
        moneyline: -115,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [
      {
        name: 'Khamzat Chimaev',
        moneyline: -225,
      },
      {
        name: 'Leon Edwards',
        moneyline: 190,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [
      {
        name: 'Khamzat Chimaev',
        moneyline: -230,
      },
      {
        name: 'Sean Strickland',
        moneyline: 195,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [
      {
        name: 'Leon Edwards',
        moneyline: 180,
      },
      {
        name: 'Shavkat Rakhmonov',
        moneyline: -210,
      },
    ],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
  {
    commenceTime: '2024-12-31T22:59:00Z',
    outcomes: [{}, {}],
    overUnderOdds: [
      {
        name: 'O 2.5',
        overUnderOdds: -190,
      },
      {
        name: 'U 2.5',
        overUnderOdds: 150,
      },
    ],
  },
];

export default apiEvents;

const products = [
  // {
  //   name: "Bici Elettrica Urban X7",
  //   description: "Una bici elettrica urbana adatta per spostamenti in città, dotata di motore potente e design moderno.",
  //   brand: "Urban Bikes",
  //   imageUrl: "https://it.fiido.com/cdn/shop/files/1-c11_f56727d0-2031-486a-b546-df5b90c3c461_1000x.jpg?v=1724824989",
  //   price: 1200.0,
  //   category: "electric bike"
  // },
  // {
  //   name: "Monopattino Elettrico Speedy S3",
  //   description: "Monopattino elettrico veloce e leggero, perfetto per il commuting quotidiano con un’autonomia di 30 km.",
  //   brand: "Speedy",
  //   imageUrl: "https://contents.mediadecathlon.com/p2105360/k$a6113176d58bab27263d4baa4d069e86/sq/monopattino-adulto-c-900-grigio.jpg?format=auto&f=720x720",
  //   price: 499.99,
  //   category: "electric scooter"
  // },
  // {
  //   name: "Bici Elettrica Mountain MX500",
  //   description: "Una bicicletta elettrica progettata per affrontare sentieri di montagna, con sospensioni robuste e autonomia elevata.",
  //   brand: "Mountain Pro",
  //   imageUrl:
  //     "https://contents.mediadecathlon.com/p2623181/k$761727051bc8134ff80c48ab70e246fc/sq/bici-elettrica-a-pedalata-assistita-mtb-e-st-500-nera-275-motore-centrale.jpg?format=auto&f=1800x1800",
  //   price: 1899.0,
  //   category: "electric bike"
  // },
  // {
  //   name: "Monopattino Pieghevole Compact X2",
  //   description: "Monopattino elettrico pieghevole, facile da trasportare e riporre, con un motore silenzioso e potente.",
  //   brand: "Compact",
  //   imageUrl:
  //     "https://img01.cncest.store/products/OT-YCZYQ-4507/1_540x_facf5d2e-199a-4909-94b2-58b7b925cb6c.png?x-oss-process=image/resize,m_fill,w_1000,h_1000",
  //   price: 399.0,
  //   category: "electric scooter"
  // },
  // {
  //   name: "Bici Elettrica Trekking T100",
  //   description: "Ideale per lunghi viaggi su strada e fuori strada, questa bici elettrica da trekking offre comfort e prestazioni elevate.",
  //   brand: "Trekker",
  //   imageUrl: "https://msenergy.hr/wp-content/uploads/2022/08/m11_1-e1661247250307.png",
  //   price: 1600.0,
  //   category: "electric bike"
  // },
  {
    name: "Monopattino Offroad XT-350",
    description: "Monopattino elettrico per terreni difficili, con pneumatici larghi e sospensioni per un'esperienza off-road unica.",
    brand: "XTreme",
    imageUrl: "https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/38/3D/fcef0b23-30de-40c6-9df3-eeb2fe052524.jpg.webp",
    price: 699.0,
    category: "electric scooter"
  },
  {
    name: "Bici Elettrica City Cruiser",
    description: "Una bici elettrica elegante e confortevole, perfetta per muoversi in città senza fatica.",
    brand: "CityLine",
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/S494d6395627e47929b1437ca65384e08G/Nuova-bici-elettrica-Heybike-Cityrun-500W-City-Cruiser-Ebike-con-batteria-rimovibile-48V-15Ah-bicicletta-elettrica.jpg_.webp",
    price: 1350.0,
    category: "electric bike"
  },
  {
    name: "Monopattino UltraLight 2000",
    description: "Monopattino ultraleggero e pieghevole con un design elegante e batterie di lunga durata.",
    brand: "Ultra",
    imageUrl: "https://www.geekmall.com/23697-home_default/kukirin-g2-master-scooter-elettrico-motore-2-1000w.jpg",
    price: 420.0,
    category: "electric scooter"
  },
  {
    name: "Bici Elettrica Adventure Pro",
    description: "Bici elettrica progettata per gli avventurieri, ideale per affrontare sentieri fuoristrada.",
    brand: "Adventure",
    imageUrl: "https://it.fiido.com/cdn/shop/files/1_0bad4f74-d920-4754-a4bd-62c1006fb143_1000x.jpg?v=1723097381",
    price: 2200.0,
    category: "electric bike"
  },
  {
    name: "Monopattino TurboSpeed Z5",
    description: "Monopattino elettrico ad alte prestazioni, dotato di una potente batteria e velocità massima elevata.",
    brand: "Turbo",
    imageUrl: "https://img.gkbcdn.com/p/2024-06-14/Kukirin-G2-Electric-Scooter-800W-48V-15Ah-524848-0._p1_.jpg",
    price: 550.0,
    category: "electric scooter"
  },
  {
    name: "Bici Elettrica Roadmaster X1",
    description: "Bici elettrica ad alte prestazioni, pensata per chi cerca velocità e comfort nei lunghi tragitti.",
    brand: "Roadmaster",
    imageUrl: "https://it.fiido.com/cdn/shop/files/1_86997294-efd6-407a-b98a-036d8ac98f36_1000x.jpg?v=1726024520",
    price: 2450.0,
    category: "electric bike"
  },
  {
    name: "Monopattino Urban Glide G4",
    description: "Monopattino elettrico con una guida fluida e un’autonomia elevata, perfetto per la città.",
    brand: "Urban Glide",
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/S486d50027bf740e28f478e5e644369aed/EU-G4-2000W-60V-20AH-doppio-motore-adulto-veloce-Scooter-elettrico-velocit-70-km-h-gamma.png_.webp",
    price: 530.0,
    category: "electric scooter"
  },
  {
    name: "Bici Elettrica Eco Ride",
    description: "Bicicletta elettrica eco-friendly con telaio leggero e batterie a lunga durata.",
    brand: "Eco Bikes",
    imageUrl: "https://www.diruvo.com/wp-content/uploads/2023/10/Atala-B-Tour-A7.1-Uomo-bosch-e-bike.jpg",
    price: 1800.0,
    category: "electric bike"
  },
  {
    name: "Monopattino Pro Xtreme 700",
    description: "Monopattino elettrico con pneumatici resistenti e motore potente, progettato per velocità elevate.",
    brand: "Pro Xtreme",
    imageUrl: "https://scooter.guide/wp-content/uploads/2021/05/outstorm-maxx-pro-electric-scooter-main-image-1024x1024.jpg",
    price: 620.0,
    category: "electric scooter"
  },
  {
    name: "Bici Elettrica Speedster S2",
    description: "Bicicletta elettrica sportiva, perfetta per chi cerca una guida dinamica e prestazioni eccellenti.",
    brand: "Speedster",
    imageUrl:
      "https://contents.mediadecathlon.com/p2266524/k$3d536f34319cbb14b542fa1530f984ae/sq/bici-citta-lunga-distanza-elettrica-a-pedalata-assistita-500-e-telaio-alto.jpg?format=auto&f=720x720",
    price: 2500.0,
    category: "electric bike"
  },
  {
    name: "Monopattino Elettrico Foldable X7",
    description: "Monopattino pieghevole ultra compatto, ideale per chi cerca mobilità e portabilità senza compromessi.",
    brand: "FoldX",
    imageUrl: "https://img.gkbcdn.com/p/2019-05-31/hx-x7-electric-foldable-scooter-black-red-1571990410901._w500_.jpg",
    price: 480.0,
    category: "electric scooter"
  },
  {
    name: "Bici Elettrica Hybrid Trek",
    description: "Bicicletta ibrida che combina performance e comfort per spostamenti sia in città che su terreni accidentati.",
    brand: "Hybrid",
    imageUrl: "https://sportmo.b-cdn.net/7070-large_default/dual-sport-2.jpg",
    price: 2100.0,
    category: "electric bike"
  },
  {
    name: "Monopattino TrailMaster 600",
    description: "Monopattino elettrico robusto, perfetto per affrontare i sentieri più difficili con sicurezza.",
    brand: "TrailMaster",
    imageUrl: "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/38/3D/fcef0b23-30de-40c6-9df3-eeb2fe052524.jpg.webp",
    price: 750.0,
    category: "electric scooter"
  }
];

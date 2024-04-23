import { Category, Company } from './types';

export const IMAGE_PATH = 'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/';

const data: {
  category: Category;
  items: Company[];
}[] = [
  {
    category: Category.Hotels,
    items: [
      {
        name: 'Armenia Marriott Hotel Yerevan',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/2013-18287551938411268559648971941809069120459603n-16922526498912.webp',
        description: [
          'Armenia Marriott Hotel Yerevan is a historic hotel perfectly located a few steps away from Republic Square in the city center.',
          'Armenia Marriott Hotel Yerevan offers a permanent 20% discount exclusively for you and your Family members.',
          'Enjoy your rest with a discounted option.',
        ],
        discount: [20],
        tel: ['+37410599000'],
        socialMedia: { facebook: 'facebook.com', website: 'marriott.com' },
        category: Category.Hotels,
      },
      {
        name: 'Shiraz Plaza Hotel',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1729-3751768561221167561840179675561558658987077083n-17080874632292.webp',
        description: [
          'Here is our version to discover Gyumri, Shiraz Hotel Plaza offers us a permanent 10% discount for accommodation. Book your weekend and visit the most colorful city of Armenia.',
          'And after sightseeing, you can find complete relaxation at the Alexandra Spa. Alexandra Spa provides 15-20% discount for SPA services. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [10],
        discountDescription: 'Alexandra Spa provides 15-20% discount for SPA services.',
        tel: ['+37444700200', '044700300'],
        socialMedia: {
          facebook: 'facebook.com/hotel',
          website: 'facebook.com/spa',
        },
        category: Category.Hotels,
      },
      {
        name: 'Best Resort Aghveran Hotel',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/7909-bra.png?v=1708081642',
        description: [
          'Aghveran has been known since ancient times for its healthy climate and beautiful landscapes of the surrounding mountains. The "Best Resort Aghveran" Hotel complex has all the necessary conditions are created for you for family rest and holding various events.',
          'The hotel provides a permanent 10-15% discount for our staff and family members.',
          'When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [10, 15],
        tel: ['+37491224054'],
        socialMedia: { facebook: 'facebook.com', website: 'aghveranhotel.am' },
        category: Category.Hotels,
      },
      {
        name: 'Blue Sevan Resort Centre',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/7916-kaputaksevan.webp',
        description: [
          'Enjoy your vacation on the most beautiful beach of Sevan.',
          'The hotel provides a permanent 20% discount for our staff and family members.',
          'When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [20],
        tel: ['+37491288277'],
        socialMedia: { facebook: 'facebook.com' },
        category: Category.Hotels,
      },
      {
        name: 'Apaga Resort',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/7921-32716779718792786990845495851667167442151249n-17080895023345.webp',
        description: [
          "Apaga Resort is your ideal solution to have a rest outside the urban fuss in Armenia's mountains. Where you will find an interesting and productive activity, as well as be able to relax and enjoy the bewitching views of the mountains.",
          'The hotel provides a permanent 10-15% discount for our staff. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [10, 15],
        tel: ['+37460650651'],
        socialMedia: { facebook: 'facebook.com', website: 'apagaresort.com' },
        category: Category.Hotels,
      },
      {
        name: 'Dilijazz Hotel and Restaurant',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/7928-35239320916507395154320175555938750192347715n-17080904673408.webp',
        description: [
          'For travelers appreciating the beauty of nature Dilijazz Hotel and Restaurant is the perfect destination for an unforgettable vacation. Being surrounded in the greenest nature of Armenia your needs for comfort and a relaxing stay will meet all your expectations in one place.',
          'The hotel provides a Special offer 15% discount for our staff and family members. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [15],
        tel: ['+37460521515'],
        socialMedia: { instagram: 'instagram.com', website: 'dilijazz.am' },
        category: Category.Hotels,
      },
      {
        name: 'Best Western Plus Paradise Hotel Dilijan',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/7933-3265716655121697975701828554744264308817515n-17080909673554.webp',
        description: [
          'The Best Western Plus Paradise Hotel Dilijan is a luxury hotel located in the picturesque site of Dilijan Resort Town, on the interstate highway connecting Armenia and Georgia.',
          'The hotel provides a permanent 10-20% discount for our staff and family members. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [10, 20],
        tel: ['+37477299216'],
        socialMedia: { facebook: 'facebook.com' },
        category: Category.Hotels,
      },
      {
        name: 'Kanach Tun',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/7940-2930121225252667692881545978470791816611079n-17080915066367.webp',
        description: [
          'Come to Kanach tun to experience the pleasure of being out of the world, in tune with nature!',
          'The hotel provides a permanent 15% discount for our staff and family members. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [15],
        tel: ['+37491288277'],
        socialMedia: { instagram: 'kanachtun.com', facebook: 'facebook.com' },
        category: Category.Hotels,
      },
      {
        name: 'Grand Resort Jermuk',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8124-54350999526660411197777341160565265137664n-17108472924386.webp',
        description: [
          'Grand Resort Jermuk Hotel is located in the center of Jermuk city. The hotel provides the perfect space and essential services for a blended lifestyle.',
          'The hotel offers a permanent 10% discount for you. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [10],
        tel: ['+37460740000'],
        socialMedia: {
          facebook: 'https://www.facebook.com/GrandResortJermuk/',
          website: 'https://www.grandresortjermuk.com/',
        },
        category: Category.Hotels,
      },
      {
        name: 'Tufenkian Heritage Hotels',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8130-3049470341898870900656171980189726677284007n-17108491674632.webp',
        description: [
          'Enjoy the charm of hotels that are part of the Armenian heritage, decorated with hand-crafted furniture and the famous Tufenkian carpets.',
          'Tufenkian Heritage Hotels provides a permanent 10-15% discount for our staff. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [10, 15],
        tel: ['+37491288277'],
        socialMedia: {
          facebook: 'https://www.facebook.com/TufenkianHeritageHotels/',
          website: 'https://tufenkianheritage.com/',
        },
        category: Category.Hotels,
      },
      {
        name: 'Eighty Eight Hotel & Spa',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8411-eighty-eight-hotel-and-spa-logo-17135260675254.webp',
        description: [
          'Eighty Eight Hotel & Spa" offers up to 35% discount us to use its services.',
          'Tufenkian Heritage Hotels provides a permanent 10-15% discount for our staff. When making a reservation, mention that you are an employee of our company, present your badge and passport at the hotel reception.',
        ],
        discount: [35],
        discountVariant: 'up to',
        tel: ['+37433108855'],
        socialMedia: {
          instagram: 'https://www.instagram.com/eightyeight_hotel/?igsh=NXpuYzZobG1wa3d1',
        },
        category: Category.Hotels,
      },
    ],
  },
  {
    category: Category.Clinics,
    items: [
      {
        name: 'Bnatur',
        image: 'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1771-bnatur.webp',
        discount: [20],
        promoCode: 'Soft Family & Bnatur',
        socialMedia: { facebook: 'facebook.com/Bnatur/' },
        category: Category.Clinics,
      },
      {
        name: 'Helios',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1778-helios.jpg?v=1625228655',
        discount: [15],
        discountDescription: 'for aesthetic, laboratory, podology, SPA services',
        familyDiscount: '10% for medical consultations',
        socialMedia: { facebook: 'facebook.com/HeliosMC' },
        category: Category.Clinics,
      },
      {
        name: 'Ecosense',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1807-ecosense-16541660923296.jpg?v=1655112671',
        discount: [30],
        socialMedia: { website: 'www.ecosense.am' },
        category: Category.Clinics,
      },
      {
        name: 'Ort and Art',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/005675671827-ort-and-art.png?v=1633589028',
        discount: [10, 20],
        socialMedia: { website: 'www.ortandart.com' },
        category: Category.Clinics,
      },
      {
        name: 'Studio 36',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8203-studio-36-16353338533919.webp',
        discount: [30],
        discountDescription: 'This discount is valid only for women.',
        socialMedia: { website: 'www.gents.am' },
        category: Category.Clinics,
      },
      {
        name: 'Dops. Barbershop',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8208-dops-17109319864479.webp',
        discount: [15, 20],
        socialMedia: {
          instagram: 'https://www.instagram.com/dops.barbershop/?igsh=am5waGk2bXF3bWV2',
        },
        tel: ['+37444774417'],
        category: Category.Clinics,
      },
      {
        name: 'AKG Pharmacy',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8227-akg-logo-original-1710930846338.webp',
        discount: [10, 15],
        discountDescription:
          'permanent 10% discount on medicines, baby care products, food, and appliances only for Softies. And a 15% discount on cosmetics.',
        description: [
          'The "AKG" pharmacy chain is delighted to extend a permanent 10% discount on medicines, baby care products, food, and appliances only for Softies. And a 15% discount on cosmetics.',
          'You just need to present your work pass card at the pharmacy to avail of this offer.',
        ],
        socialMedia: {
          instagram: 'https://www.instagram.com/akgpharmacy/',
        },
        category: Category.Clinics,
        tel: ['+37410260008'],
      },
      {
        name: 'Avanta',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8231-avanta-17109302605964.webp',
        discount: [20],
        discountDescription:
          'permanent 10% discount on medicines, baby care products, food, and appliances only for Softies. And a 15% discount on cosmetics.',
        description: [
          'Avanta" Aesthetic Medicine Center is extending a special 20% discount to Softies on alexandrite laser hair removal and "imsirun" facial care packages.',
          'You just need to present your badge to avail of this offer.',
        ],
        socialMedia: {
          website: 'https://www.ortandart.com/',
        },
        category: Category.Clinics,
        tel: ['+37410541171'],
      },
    ],
  },
  {
    category: Category.Cafes,
    items: [
      {
        name: 'Arvestanoc Cafe & Bar',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1834-4231323728673263387372754936508867195602434n-17074621622725.webp',
        discount: [15],
        socialMedia: {
          facebook: 'www.facebook.com/arvestanoccafeandbar',
        },
        category: Category.Cafes,
      },
      {
        name: 'Say Cheese',
        image: 'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1871-saycheese.webp',
        discount: [20],
        socialMedia: {
          facebook: 'www.facebook.com/SayCheeseArmenia',
        },
        category: Category.Cafes,
      },
      {
        name: 'Classic Burger',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8151-classic-burger.webp',
        discount: [15],
        socialMedia: {
          facebook: 'www.facebook.com/classicburger.am',
        },
        category: Category.Cafes,
      },
    ],
  },
  {
    category: Category.Stores,
    items: [
      {
        name: 'Vega',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1855-vega.png?v=1654088597',
        discountDescription: 'Wholesale prices',
        socialMedia: { website: 'www.vega.am' },
        category: Category.Stores,
      },
      {
        name: 'Danz',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1861-danz.jpg?v=1625559286',
        discount: [20],
        socialMedia: {
          facebook: 'www.facebook.com/danz.eyewearstore',
        },
        category: Category.Stores,
      },
      {
        name: 'Hator',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/4646-hator.jpg?v=1654169612',
        discount: [10, 20],
        discountDescription: '10-15% on stationery (special offer for women), 20% on books',
        socialMedia: {
          facebook: 'www.facebook.com/hatorbookstore',
        },
        category: Category.Stores,
      },
      {
        name: 'ArLeAM',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/4650-252.jpg?v=1654169635',
        discount: [20],
        promoCode: 'EMPLOYEE20',
        socialMedia: { website: 'www.arleam.love/hy' },
        category: Category.Stores,
      },
      {
        name: 'Akos',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/4730-akos.png?v=1655875752',
        discount: [20],
        promoCode: 'AKOS&SOFT',
        socialMedia: {
          facebook: 'www.facebook.com/akosagroproducts',
        },
        category: Category.Stores,
      },
    ],
  },
  {
    category: Category.Gym,
    items: [
      {
        name: 'Grand Sport',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1983-grand-sport.png?v=1628495960',
        price: '35,000 AMD monthly',
        registrationLink: 'https://grandsport.am',
        category: Category.Gym,
      },
      {
        name: 'Hills Sport Complex',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1989-hills.png?v=1628496993',
        price: '260,000-490,000 AMD per year',
        registrationLink: 'www.hillssportcomplex.am',
        category: Category.Gym,
      },
      {
        name: 'Multi Wellness Center',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/1997-multi.png?v=1628497265',
        price: '250,000-550,000 AMD per year (price depends on preferred time sheet)',
        registrationLink: 'www.mwc.am',
        category: Category.Gym,
      },
      {
        name: 'Reebok',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/2001-reebok.png?v=1628497332',
        price: '480,000-500,000 AMD per year',
        registrationLink: 'www.reeboksportsclub.com',
        category: Category.Gym,
      },
      {
        name: 'Aquatek Sport Complex',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/6398-20749597144753523224763118590075460765533583n.webp',
        price: '170,000-240,000 AMD per year (price depends on preferred time sheet)',
        registrationLink: 'www.facebook.com/AquatekSportComplex',
        tel: ['+37491500202'],
        category: Category.Gym,
      },
      {
        name: 'Cloud7 Wellness & Spa',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/6402-3090643894067749916054812591218239518415890n-16831092809209.webp',
        price: '190,000-240,000 AMD per year',
        contactPerson: 'Lilit Hakobyan',
        registrationLink: 'https://www.facebook.com/Cloud7WellnessandSpa',
        category: Category.Gym,
      },
      {
        name: 'Move Fitness Club',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8187-4212639893475049948061975063787424902305496n-17062638512335.webp',
        discount: [10, 30],
        discountDescription:
          '10% for SPA services (valid only for women and children), 30% for fitness club',
        website: 'instagram.com/movefitnessclub',
        category: Category.Gym,
      },
    ],
  },
  {
    category: Category.Other,
    items: [
      {
        name: 'Capital Build',
        image:
          'https://static.ucraft.net/fs/ucraft/userFiles/hrbetco/images/8199-4160919468697213751599328772399619213888621n-17062646717838.webp',
        discount: [5],
        discountDescription: 'For Avenue22 Project',
        instructions: 'Just submit your badge and use the offer.',
        contactPerson: 'Lusine',
        contactNumber: '+37455583112',
        website: 'capitalbuild.am',
        category: Category.Other,
      },
    ],
  },
];

export default data;

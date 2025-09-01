import demoimg from "../assets/fast devlivery.png"
import newsimage1 from "../assets/newsImage1.jpg"
import newsimage2 from "../assets/newsImage2.jpg"
import newsimage3 from "../assets/newsImage3.jpg"
import newsimage4 from "../assets/newsImage4.jpg"
import newsimage5 from "../assets/newsimage5.jpg"
import newsimage6 from "../assets/newsimage6.jpg"
import newsimage7 from "../assets/newsimage7.jpg"

export const navData = [
  { 
    id:1,
    title: "Home",
    path: "/",
  },
  {
    id:2,
    title: "Fruits",
    path: "/products/Fruits",
    children: [
      { title: "Citrus", path: "/products/citrus" },
      { title: "Berries", path: "/products/berries" },
      { title: "Tropical", path: "/products/tropical" }
    ]
  },
  {
    id:3,
    title: "Vegetables",
    path: "/products/Vegetables",
    children: [
      { title: "Leafy Greens", path: "/products/leafy-greens" },
      { title: "Root Vegetables", path: "/products/root" },
      { title: "Cruciferous", path: "/products/cruciferous" }
    ]
  },
  {
    id:4,
    title: "Juices",
    path: "/products/Juices",
    children: [
      { title: "Fruit Juices", path: "/products/fruit" },
      { title: "Smoothies", path: "/products/smoothies" },
      { title: "Cold Pressed", path: "/products/cold-pressed" }
    ]
  },
  {
    title: "About Us",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];


export const accordionData = [
  { id:1,
    title: "Contact Info",
    content: {
      storeName: "Greenleaf Store",
      address: "1801 Zboncak Island Suite Street Hampshire",
      city: "New Paris",
      postalCode: "90002",
      country: "United States",
      email: "demo.store@gmail.com",
      phone: "(+001) 0123-456-789",
      supportText: "You have any Questions ? Call us 24x7",
    },
  },
  {
    id:2,
    title: "Social Media",
    content: [
      { platform: "Facebook", link: "#" },
      { platform: "Twitter", link: "#" },
      { platform: "Instagram", link: "#" },
      { platform: "LinkedIn", link: "#" },
    ],
  },
  { 
    id:3,
    title: "Products",
    content: ["Prices drop", "New products", "Best sales"],
  },
  {
    id:4,
    title: "Our Company",
    content: [
      "Delivery",
      "Legal Notice",
      "Terms and conditions of use",
      "About us",
      "Secure payment",
      "Contact us",
      "Sitemap",
      "Stores",
    ],
  },
  {
    id:5,
    title: "Trending Categories",
    content: [
      "Cold Drinks",
      "Cooking Spice",
      "Fruits",
      "Juice",
      "Pretzels",
      "Vegetables",
    ],
  },
];


export const testimonialData = [
  {
    name: "Grace I.",
    location: "Lagos, Nigeria",
    message:
      "GreenLife delivers the freshest vegetables I’ve ever ordered online. The spinach was so crisp and the tomatoes were bursting with flavor. Highly recommend!",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Daniel O.",
    location: "Abuja, Nigeria",
    message:
      "I’ve been ordering from GreenLife for months now. The delivery is always on time and the fruits are incredibly sweet. Their mangoes are my absolute favorite!",
    rating: "⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amara C.",
    location: "Port Harcourt, Nigeria",
    message:
      "The quality is unmatched. I ordered a fruit basket for my mom and she loved it. Everything was fresh and beautifully packed.",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Tunde B.",
    location: "Ibadan, Nigeria",
    message:
      "Great service and affordable prices. The avocados were perfectly ripe. I just wish they had more exotic fruits available.",
    rating: "⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ngozi K.",
    location: "Enugu, Nigeria",
    message:
      "I am so happy I found GreenLife. The carrots were so fresh and sweet that my kids kept asking for more. Healthy eating made easy!",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

// src/assets/newsUpdatesData.js

export const newsUpdatesData = [
  {
    id: 1,
    title: "Lagos Farmers Introduce Improved Varieties of Tomatoes to Boost Supply",
    date: "August 25, 2025",
    author: "Ngozi Umeh",
    category: "Agriculture",
    image: newsimage1,
    description: `
      Tomato farmers in Lagos and Ogun states have announced the introduction of
      improved varieties of tomatoes that promise higher yields and longer shelf
      life. The initiative, supported by the Lagos State Ministry of Agriculture
      and several private agritech firms, is aimed at tackling the recurring
      problem of tomato scarcity that usually leads to sharp price increases in
      major markets.

      At the launch event in Agege, the Commissioner for Agriculture explained
      that the improved tomato varieties are resistant to the common "Tuta
      Absoluta" pest, which has ravaged farms in the past. She added that
      farmers will also benefit from training on better irrigation methods and
      post-harvest handling techniques.

      Market women in Mile 12 expressed excitement, noting that a more stable
      tomato supply will mean fewer shocks for households and restaurants. A
      trader, Mama Iya Basira, said: “Anytime tomatoes are scarce, we all feel
      it in our pockets. If this new method works, it will help both sellers and
      buyers.”  

      Analysts project that if successful, this scheme could reduce Nigeria’s
      dependence on imported tomato paste, saving the country millions in
      foreign exchange. The government is also encouraging youths to embrace
      vegetable farming as a profitable venture in the face of rising food
      demand.
    `,
  },
  {
    id: 2,
    title: "Fresh Pineapple Juice Now Trending Among Health-Conscious Lagosians",
    date: "August 27, 2025",
    author: "Samuel Adekunle",
    category: "Health & Lifestyle",
    image: newsimage2,
    description: `
      Pineapple juice has quickly become the drink of choice among young,
      health-conscious Lagosians, with sales skyrocketing in both supermarkets
      and roadside stalls. Vendors across Lekki, Surulere, and Ikeja report that
      demand for freshly squeezed pineapple juice has doubled in the last three
      months.

      Nutritionists attribute the rise in popularity to increased awareness of
      the health benefits of pineapple, which include boosting immunity,
      improving digestion, and providing natural hydration. Many fitness
      enthusiasts now prefer pineapple juice over carbonated drinks, viewing it
      as a refreshing yet healthy alternative.  

      According to a report from the Nigerian Dietetic Association, fresh fruit
      juices are becoming an integral part of urban lifestyles, especially among
      millennials and young professionals. Cafés and restaurants are now adding
      pineapple blends to their menus, sometimes mixed with ginger or mint for
      extra flavor.

      A business analyst noted that this trend is also fueling job creation, as
      more small-scale juice entrepreneurs emerge in the informal sector. With
      proper regulation and quality control, experts believe the fruit juice
      industry could become a multi-billion-naira business in Nigeria within the
      next five years.
    `,
  },
  {
    id: 3,
    title: "Carrot Farmers in Northern Nigeria Celebrate Record Harvest",
    date: "August 28, 2025",
    author: "Halima Yusuf",
    category: "Agriculture",
    image: newsimage3,
    description: `
      Carrot farmers in Kano and Kaduna states are celebrating a record harvest
      this season, thanks to favorable weather conditions and improved access to
      fertilizers. Reports from rural farming communities indicate that yields
      have increased by as much as 40% compared to last year.

      The bumper harvest has led to a significant drop in carrot prices across
      key markets, including Mile 12 in Lagos and Bodija in Ibadan. Traders
      confirm that carrots are now more affordable, encouraging households to
      buy in larger quantities for cooking and juicing.  

      Agricultural experts have praised the achievement, noting that carrots are
      a vital source of Vitamin A, which helps prevent vision-related health
      problems. Some NGOs are already working with schools to incorporate
      carrots into children’s daily meals as part of efforts to combat
      malnutrition in Nigeria.

      Farmers, however, have appealed to the government to provide better storage
      and processing facilities to prevent waste. Without cold storage and
      drying equipment, excess harvest often rots before reaching urban
      consumers. Stakeholders argue that with proper investment in carrot
      processing, Nigeria could develop export opportunities to neighboring West
      African countries.
    `,
  },
  {
    id: 4,
    title: "Watermelon Festival Draws Thousands in Abuja",
    date: "August 29, 2025",
    author: "Chinedu Okafor",
    category: "Culture & Lifestyle",
    image: newsimage4,
    description: `
      The annual Abuja Watermelon Festival attracted thousands of visitors this
      year, with farmers, traders, and food enthusiasts showcasing the
      versatility of the fruit. Held at the National Stadium grounds, the event
      featured watermelon carving competitions, juice-tasting stands, and
      educational workshops on the health benefits of the fruit.

      Families and young people trooped in from across the FCT to experience the
      festival, which has quickly become a calendar highlight for fruit lovers.
      Vendors reported brisk sales of fresh watermelon slices, smoothies, and
      cocktails, while restaurants used the event to launch new menu ideas
      centered around watermelon.

      The Minister of Agriculture, who attended the festival, noted that
      watermelon farming has expanded significantly in Nasarawa and Benue
      states, making the fruit more available year-round. He promised that the
      government would continue to support farmers with seedlings, irrigation
      facilities, and access to markets.

      Nutrition experts at the event highlighted the fruit’s benefits, pointing
      out its role in hydration, heart health, and skin care. The festival ended
      with a live concert, cementing its place as both an agricultural and
      cultural celebration in Nigeria’s capital.
    `,
  },
  {
    id: 5,
    title: "Export Opportunities Open Up for Nigerian Mangoes",
    date: "August 30, 2025",
    author: "Blessing Eze",
    category: "Business",
    image: newsimage5,
    description: `
      Nigerian mango farmers are set to benefit from new export opportunities
      following agreements reached with buyers in the Middle East and Europe.
      The deals, facilitated by the Nigerian Export Promotion Council (NEPC),
      could see thousands of tons of mangoes shipped abroad over the next three
      years.

      Mango farming is particularly common in Benue, Oyo, and Plateau states,
      where farmers have long complained about waste due to lack of preservation
      and processing facilities. With this new export window, farmers will now
      receive training on international quality standards, packaging, and
      transportation requirements.  

      Experts believe that the global demand for tropical fruits presents a huge
      opportunity for Nigeria to diversify its economy beyond oil. Mango exports
      alone could earn the country millions of dollars in foreign exchange if
      properly harnessed.

      Some challenges still remain, including poor rural infrastructure,
      unreliable power supply, and the need for cold-chain logistics. However,
      stakeholders are optimistic that with private-sector involvement, Nigeria
      can position itself as a major player in the global fruit market.

      The success of mango exports is also expected to encourage similar moves
      for other fruits such as pawpaw, guava, and soursop, giving Nigerian
      farmers a new source of income and global recognition.
    `,
  },
  {
  id: 6,
  title: "Orange Juice Consumption on the Rise as Nigerians Seek Healthier Options",
  date: "August 31, 2025",
  author: "Ibrahim Musa",
  category: "Health & Business",
  image: newsimage6,
  description: `
    Fresh orange juice is fast becoming a staple in many Nigerian homes,
    restaurants, and hotels as more people turn away from carbonated drinks in
    search of healthier alternatives. Reports from major cities like Lagos,
    Abuja, and Port Harcourt show a sharp increase in the number of roadside
    juice vendors and cafés offering freshly pressed orange juice.

    Nutritionists say this shift is largely due to growing awareness of the
    benefits of Vitamin C, which oranges provide in abundance. Doctors are also
    encouraging Nigerians to consume natural fruit juices to strengthen the
    immune system and reduce the risk of lifestyle diseases such as obesity and
    diabetes. This has led to a spike in demand, especially among middle-class
    families and young professionals who are more health-conscious.

    Traders at Mile 12 and Oyingbo markets report that bulk buyers — including
    juice companies and hotels — now purchase larger volumes of oranges weekly,
    driving prices slightly upward during peak seasons. However, farmers in Benue
    and Kogi, two of Nigerias largest orange-producing states, see this as an
    opportunity to expand production and increase their earnings.

    Industry experts predict that with proper investment in processing plants and
    packaging, Nigeria could soon become a leading exporter of orange juice in
    West Africa. Already, some start-ups are experimenting with bottled organic
    juices targeted at supermarkets and online delivery platforms.

    While challenges such as poor storage, inconsistent supply chains, and
    inadequate cold-chain infrastructure remain, the booming demand suggests
    that orange juice may soon rival bottled soft drinks as Nigeria’s top
    refreshment choice.
  `,
}
];

// storesData.js

export const storesData = [
  {
    id: 1,
    name: "Fresh Harvest Mart",
    phone: "08034567890",
    location: "Balogun Market, Lagos Island",
    openingHours: "Mon - Sat: 7:00 AM - 6:00 PM",
    image: "https://via.placeholder.com/300x200.png?text=Fresh+Harvest+Mart",
    description:
      "Fresh Harvest Mart is one of the busiest fruit and vegetable outlets in Lagos Island. They are known for selling freshly harvested produce like tomatoes, onions, spinach, and seasonal fruits such as mangoes and pineapples. Their juices are 100% natural, squeezed daily to maintain freshness.",
  },
  {
    id: 2,
    name: "GreenLife Stores",
    phone: "08123456789",
    location: "Surulere Main Market, Lagos",
    openingHours: "Mon - Sun: 8:00 AM - 7:00 PM",
    image: "https://via.placeholder.com/300x200.png?text=GreenLife+Stores",
    description:
      "GreenLife Stores supplies both wholesale and retail buyers with affordable fruits and vegetables. Customers love their freshly packed garden eggs, cucumbers, carrots, and fresh orange juice. They also provide home delivery for bulk buyers.",
  },
  {
    id: 3,
    name: "Juice & Veggie Hub",
    phone: "07098765432",
    location: "Yaba Market, Lagos Mainland",
    openingHours: "Mon - Sat: 9:00 AM - 8:00 PM",
    image: "https://via.placeholder.com/300x200.png?text=Juice+%26+Veggie+Hub",
    description:
      "Juice & Veggie Hub specializes in freshly blended fruit juices, smoothies, and a wide selection of green leafy vegetables. Their pineapple-watermelon blend is one of the best sellers in the market.",
  },
  {
    id: 4,
    name: "Nature’s Basket",
    phone: "08022334455",
    location: "Lekki Phase 1, Lagos",
    openingHours: "Mon - Sun: 7:30 AM - 9:00 PM",
    image: "https://via.placeholder.com/300x200.png?text=Nature's+Basket",
    description:
      "Nature’s Basket offers premium fresh produce for health-conscious families. They stock imported apples, grapes, avocados, alongside locally grown bananas, yams, and coconuts. They also sell bottled fresh juices with no preservatives.",
  },
  {
    id: 5,
    name: "Oasis Fruits & Veggies",
    phone: "09099887766",
    location: "Ikeja Computer Village, Lagos",
    openingHours: "Mon - Sat: 8:30 AM - 6:30 PM",
    image: "https://via.placeholder.com/300x200.png?text=Oasis+Fruits+%26+Veggies",
    description:
      "Oasis Fruits & Veggies is popular among commuters for its ready-to-eat fruit packs, quick smoothies, and fresh vegetables like lettuce, cabbage, and bell peppers. Their watermelon juice is a customer favorite.",
  },
];

// ordersData.js

export const ordersData= [
  {
    orderId: "ORD12345",
    customerName: "Chinedu Okafor",
    phone: "08012345678",
    items: ["Pineapple Juice", "Spinach", "Carrots"],
    status: "Out for Delivery",
    estimatedTime: "45 mins",
    location: "Ikeja, Lagos",
  },
  {
    orderId: "ORD67890",
    customerName: "Ngozi Adewale",
    phone: "08123456789",
    items: ["Bananas", "Watermelon", "Fresh Orange Juice"],
    status: "Processing",
    estimatedTime: "1 hr 30 mins",
    location: "Surulere, Lagos",
  },
  {
    orderId: "ORD54321",
    customerName: "Tunde Balogun",
    phone: "09098765432",
    items: ["Avocados", "Cucumbers", "Apple Juice"],
    status: "Delivered",
    estimatedTime: "Delivered 2 hrs ago",
    location: "Yaba, Lagos",
  },
];

;





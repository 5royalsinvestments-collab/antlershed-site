// Antler Shed Oklahoma — product catalog (single source of truth for store pages)
window.ANTLER_CATALOG = {
  slider: {
    name: "Slider Series",
    tag: "Horizontal Sliding Windows",
    image: "images/slider.jpg",
    blurb: "Smooth, quiet horizontal sliding windows for precise, silent shots — a favorite for bowhunters and rifle hunters alike. Insulated, weather-tight, and built to last for generations.",
    features: ["Horizontal sliding windows", "(2) 1×6 shooting shelves", "Upper storage shelving", "All-steel, powder-coated build"],
    items: [
      { id: "4-6S", size: "4×6", model: "4-6S", price: 2500, weight: "~400 lbs", note: "(1) upper storage shelf" },
      { id: "5-6S", size: "5×6", model: "5-6S", price: 2850, weight: "~500 lbs", note: "(2) upper storage shelves" },
      { id: "5-8S", size: "5×8", model: "5-8S", price: 3600, weight: "~600 lbs", note: "(2) upper storage shelves" }
    ]
  },
  drop: {
    name: "Drop Series",
    tag: "Vertical Drop Windows",
    image: "images/drop.jpg",
    blurb: "Vertical drop-down windows give you a wide, unobstructed field of view and fast, quiet shot setups. Rugged and sealed against Oklahoma weather.",
    features: ["Vertical drop windows", "(2) 1×6 shooting shelves", "Upper storage shelving", "All-steel, powder-coated build"],
    items: [
      { id: "4-6D", size: "4×6", model: "4-6D", price: 2600, weight: "~400 lbs", note: "(1) upper storage shelf" },
      { id: "5-6D", size: "5×6", model: "5-6D", price: 2975, weight: "~500 lbs", note: "(2) upper storage shelves" },
      { id: "5-8D", size: "5×8", model: "5-8D", price: 3725, weight: "~600 lbs", note: "(2) upper storage shelves" }
    ]
  },
  bowgun: {
    name: "Bow/Gun Series",
    tag: "Combo Bow + Gun Windows",
    image: "images/bowgun.jpg",
    blurb: "The do-it-all blind: dedicated bow windows plus gun windows in one combo build, so you're ready for archery and rifle season in the same setup.",
    features: ["Bow windows + gun windows", "Choice of slider or drop gun windows", "(2) 1×6 shooting shelves", "(2) storage shelves"],
    items: [
      { id: "5-6BGS", size: "5×6", model: "5-6BGS", price: 3250, weight: "~550 lbs", note: "(4) bow windows · Slider gun windows" },
      { id: "5-6BGD", size: "5×6", model: "5-6BGD", price: 3375, weight: "~550 lbs", note: "(4) bow windows · Drop gun windows" },
      { id: "5-8BGS", size: "5×8", model: "5-8BGS", price: 3875, weight: "~650 lbs", note: "(6) bow windows · Slider gun windows" },
      { id: "5-8BGD", size: "5×8", model: "5-8BGD", price: 4000, weight: "~650 lbs", note: "(6) bow windows · Drop gun windows" }
    ]
  },
  accessories: {
    name: "Accessories",
    tag: "Leg & Stair Kits · Shed Sleds",
    image: "images/legkit-premade.jpg",
    blurb: "Elevation kits and shed sleds to get your blind set up right — 16-gauge powder-coated steel, pre-made or DIY.",
    features: ["16-gauge powder-coated steel", "Pre-made or DIY leg & ladder kits", "Stair kits with hand rails", "Shed sleds for ground setups"],
    items: [
      { id: "5-LSK", size: "5 ft", model: "5-LSK", price: 1175, weight: "Leg & Stair Kit", note: "Staircase, platform, double hand rails, 3×3 legs", image: "images/legkit-premade.jpg" },
      { id: "8-LSK", size: "8 ft", model: "8-LSK", price: 1375, weight: "Leg & Stair Kit", note: "Staircase, platform, double hand rails, 3×3 legs", image: "images/legkit-premade.jpg" },
      { id: "12-LSK", size: "12 ft", model: "12-LSK", price: 1775, weight: "Leg & Stair Kit", note: "Staircase, platform, double hand rails, 3×3 legs", image: "images/legkit-diy.jpg" },
      { id: "1-SSK", size: "1 ft", model: "1-SSK", price: 375, weight: "Shed Sled", note: "Stubby shed sled on 8' treated 2×6 sleds", image: "images/shedsled.jpg" },
      { id: "3-SSK", size: "3 ft", model: "3-SSK", price: 800, weight: "Shed Sled", note: "Shed sled on 8' treated 2×6 sleds with ladder", image: "images/shedsled.jpg" }
    ]
  },
  feeders: {
    name: "Feeders",
    tag: "Texas Wildlife Supply",
    image: "images/gallery/feeder-2.jpg",
    blurb: "Texas Wildlife Supply feeders — gravity, broadcast, and road feeders to keep your stand fed all season. Built tough and ready to run.",
    features: ["Gravity & broadcast options", "Road feeders with remote", "Optional timers", "Catwalk & ladder on the big ones"],
    items: [
      { id: "F-50R", size: "50#", model: "F-50R", price: 400, weight: "Monster Road Feeder", note: "50 lb road feeder with remote (TWS)", image: "images/gallery/feeder-8.jpg" },
      { id: "F-100R", size: "100#", model: "F-100R", price: 450, weight: "Monster Road Feeder", note: "100 lb road feeder with remote (TWS)", image: "images/gallery/feeder-7.jpg" },
      { id: "F-350G", size: "350#", model: "F-350G", price: 650, weight: "Gravity Feeder", note: "350 lb gravity-feed (Texas Wildlife Supply)", image: "images/gallery/feeder-2.jpg" },
      { id: "F-600G", size: "600#", model: "F-600G", price: 800, weight: "Gravity Feeder", note: "600 lb gravity-feed (TWS)", image: "images/gallery/feeder-3.jpg" },
      { id: "F-600T", size: "600# + Timer", model: "F-600T", price: 1200, weight: "Gravity Feeder", note: "600 lb gravity-feed with timer (TWS)", image: "images/gallery/feeder-3.jpg" },
      { id: "F-2000", size: "2000# + Catwalk", model: "F-2000", price: 1900, weight: "Gravity Feeder", note: "2,000 lb with catwalk & ladder (TWS)", image: "images/gallery/feeder-1.jpg" },
      { id: "F-2000T", size: "2000# + Catwalk + Timer", model: "F-2000T", price: 2300, weight: "Gravity Feeder", note: "2,000 lb with catwalk, ladder & timer (TWS)", image: "images/gallery/feeder-1.jpg" },
      { id: "F-600B", size: "600# Lucky Buck", model: "F-600B", price: 800, weight: "Broadcast Feeder", note: "600 lb Lucky Buck broadcast feeder (TWS)", image: "images/gallery/feeder-5.jpg" },
      { id: "F-2000B", size: "2000# Lucky Buck", model: "F-2000B", price: 1500, weight: "Broadcast Feeder", note: "2,000 lb Lucky Buck broadcast feeder (TWS)", image: "images/gallery/feeder-6.jpg" }
    ]
  }
};
window.ANTLER_SERIES_ORDER = ["slider", "drop", "bowgun", "feeders", "accessories"];

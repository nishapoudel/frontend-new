export const products = {
    product1: {
        id: "product1",
        title: "You Like It Darker",
        image: "../img/products/thriller/You like it darker -King Sthepen.jpg",
        brand: "Stephen King",
        stars: 5,
        price: "$32",
        description: "A gripping thriller by Stephen King that delves into the darker sides of human nature and suspense."
    },
    product2: {
        id: "product2",
        title: "Behind Closed Doors",
        image: "../img/products/thriller/Behind Closed Doors- BA.jpg",
        brand: "B.A. Paris",
        stars: 4,
        price: "$28",
        description: "A psychological thriller about a seemingly perfect marriage that hides dark secrets and chilling truths."
    },
    product3: {
        id: "product3",
        title: "The Alchemist",
        image: "../img/products/thriller/The Alhemist- Coehlo Paulo.jpg",
        brand: "Paulo Coelho",
        stars: 5,
        price: "$30",
        description: "A captivating tale of a shepherd's journey to find his personal legend, with elements of adventure and mysticism."
    },
    product4: {
        id: "product4",
        title: "The Bible of Dark Psychology",
        image: "../img/products/thriller/The bible of dark Psychology- Ward Halbert.jpg",
        brand: "Ward Halbert",
        stars: 4,
        price: "$25",
        description: "An exploration into the dark corners of psychology, offering insights into manipulation and influence."
    },
    product5: {
        id: "product5",
        title: "The Housemaid is Watching",
        image: "../img/products/thriller/The house maid is watching- Macfadden Frieda.jpg",
        brand: "Frieda Macfadden",
        stars: 4,
        price: "$27",
        description: "A suspenseful sequel about a housemaid who becomes entangled in a web of secrets and danger."
    },
    product6: {
        id: "product6",
        title: "The Orphanage",
        image: "../img/products/thriller/The orphanage-Miller Daniel.jpg",
        brand: "Daniel Miller",
        stars: 4,
        price: "$29",
        description: "A chilling tale set in an orphanage where dark secrets from the past come to light."
    },
    product7: {
        id: "product7",
        title: "Atomic Habit",
        image: "../img/products/health/Atomic Habit- James clear.jpg",
        brand: "James Clear",
        stars: 5,
        price: "$150",
        description: "If you answered Yes to at least HE Bible of Dark Psychology one of these questions, buckle up because this isn't your average, run-of-the-mill psychology book. It's a deep dive into the mind's secret corners, and it's about to become your new, almost-daily best friend."
    },
    product8: {
        id: "product8",
        title: "Good to Great",
        image: "../img/products/business/GoodToGreat author=JimCollins.jpg",
        brand: "Nestor James",
        stars: 4,
        price: "$45",
        description: "This absolutely explosive and shockingly twisty sequel to international phenomenon and New York Times, USA Today, and Wall Street Journal bestseller The Housemaid will keep you racing through the pages late into the night. Anyone who loves The Perfect Marriage by Jeneva Rose, The Woman in the Window, and Gone Girl will be totally hooked!."
    }
};

//new
export const new_books = {
    product9: {
        id: "product9",
        title: "The Housemaid is Watching",
        image: "../img/products/thriller/The house maid is watching- Macfadden Frieda.jpg",
        brand: "Frieda Macfadden",
        stars: 4,
        price: "$27",
        description: "A suspenseful sequel about a housemaid who becomes entangled in a web of secrets and danger."
    },
    product10: {
        id: "product10",
        title: "Scattered Minds",
        image: "../img/products/health/scattered minds-Mate MD Gabor.jpg",
        brand: "Mate MD Gabor",
        stars: 5,
        price: "$25",
        description: "An exploration of ADHD and its impact on the brain, offering insights and strategies for coping and thriving."
    },
    product11: {
        id: "product11",
        title: "The Haunting of Hill House",
        image: "../img/products/horror/The haunting of hill house-Jackson shirley.jpg",
        brand: "Jackson Shirley",
        stars: 5,
        price: "$60",
        description: "A classic horror story that explores the terrifying experiences within Hill House."
    },
    product12: {
        id: "product12",
        title: "Breath",
        image:"../img/products/health/Breath- Nestor James.jpg",
        brand: "Nestor James",
        stars: 4,
        price: "$45",
        description: "This absolutely explosive and shockingly twisty sequel to international phenomenon and New York Times, USA Today, and Wall Street Journal bestseller The Housemaid will keep you racing through the pages late into the night. Anyone who loves The Perfect Marriage by Jeneva Rose, The Woman in the Window, and Gone Girl will be totally hooked!."
    },
    product13: {
        id: "product13",
        title: "The Rage Colony",
        image: "../img/products/horror/The rage colony-Hunt Shanon.jpg",
        brand: "Hunt Shanon",
        stars: 4,
        price: "$55",
        description: "A gripping tale that dives deep into the dark corners of human nature and the psyche."
    }
};


// api.js

export const categories = [
    { name: "thriller", imgSrc: "../img/features/f1.png" },
    { name: "health", imgSrc: "../img/features/f2.png" },
    { name: "horror", imgSrc: "../img/features/f3.png" },
    { name:"history", imgSrc: "../img/features/f4.png" },
    { name: "business", imgSrc: "../img/features/f5.png" },
    { name: "cooking",  imgSrc: "../img/features/f5.png" },
    { name: "romance", imgSrc: "../img/features/f6.png" },
    { name: "business",  imgSrc: "../img/features/f5.png" },
];

//books according to category

export const categoryBooks = {
    thriller: [
        {
            id: "book1",
            title: "You Like It Darker",
            image: "../img/products/thriller/You like it darker -King Sthepen.jpg",
            brand: "Stephen King",
            stars: 5,
            price: "$32",
            description: "A gripping thriller by Stephen King that delves into the darker sides of human nature and suspense."
        },
        {
            id: "book2",
            title: "Behind Closed Doors",
            image: "../img/products/thriller/Behind Closed Doors- BA.jpg",
            brand: "B.A. Paris",
            stars: 4,
            price: "$28",
            description: "A psychological thriller about a seemingly perfect marriage that hides dark secrets and chilling truths."
        },
        {
            id: "book3",
            title: "The Alchemist",
            image: "../img/products/thriller/The Alhemist- Coehlo Paulo.jpg",
            brand: "Paulo Coelho",
            stars: 5,
            price: "$30",
            description: "A captivating tale of a shepherd's journey to find his personal legend, with elements of adventure and mysticism."
        },
        {
            id: "book4",
            title: "The Bible of Dark Psychology",
            image: "../img/products/thriller/The bible of dark Psychology- Ward Halbert.jpg",
            brand: "Ward Halbert",
            stars: 4,
            price: "$25",
            description: "An exploration into the dark corners of psychology, offering insights into manipulation and influence."
        },
        {
            id: "book5",
            title: "The Housemaid is Watching",
            image: "../img/products/thriller/The house maid is watching- Macfadden Frieda.jpg",
            brand: "Frieda Macfadden",
            stars: 4,
            price: "$27",
            description: "A suspenseful sequel about a housemaid who becomes entangled in a web of secrets and danger."
        },
        {
            id: "book6",
            title: "The Orphanage",
            image: "../img/products/thriller/The orphanage-Miller Daniel.jpg",
            brand: "Daniel Miller",
            stars: 4,
            price: "$29",
            description: "A chilling tale set in an orphanage where dark secrets from the past come to light."
        }
    ],
    health: [
        {
            id: "book7",
            title: "Atomic Habit",
            image: "../img/products/health/Atomic Habit- James clear.jpg",
            brand: "James Clear",
            stars: 5,
            price: "$150",
            description: "If you answered Yes to at least HE Bible of Dark Psychology one of these questions, buckle up because this isn't your average, run-of-the-mill psychology book. It's a deep dive into the mind's secret corners, and it's about to become your new, almost-daily best friend."
        },
        {
            id: "book8",
            title: "Breath",
            image:"../img/products/health/Breath- Nestor James.jpg",
            brand: "Nestor James",
            stars: 4,
            price: "$45",
            description: "This absolutely explosive and shockingly twisty sequel to international phenomenon and New York Times, USA Today, and Wall Street Journal bestseller The Housemaid will keep you racing through the pages late into the night. Anyone who loves The Perfect Marriage by Jeneva Rose, The Woman in the Window, and Gone Girl will be totally hooked!."
        },
        {
            id: "book9",
            title: "It's Ok to Be Different",
            image: "../img/products/health/Its ok to be different-Saha sujata.jpg",
            brand: "Saha sujata",
            stars: 5,
            price: "$10",
            description: "If you answered Yes to at least HE Bible of Dark Psychology one of these questions, buckle up because this isn't your average, run-of-the-mill psychology book. It's a deep dive into the mind's secret corners, and it's about to become your new, almost-daily best friend."
        },
        {
            id: "book10",
            title: "Master Your Emotions",
            image: "../img/products/health/Master your emotions-Meruirsse.jpg",
            brand: "-Meruirsse",
            stars: 5,
            price: "$150",
            description: "If you answered Yes to at least HE Bible of Dark Psychology one of these questions, buckle up because this isn't your average, run-of-the-mill psychology book. It's a deep dive into the mind's secret corners, and it's about to become your new, almost-daily best friend."
        },
        {
            id: "book11",
            title: "When My Brain is Messy",
            image: "../img/products/health/when my brain is messy-Tania chakraborty.jpg",
            brand: "Tania Chakraborty",
            stars: 4,
            price: "$22",
            description: "A guide to managing mental clutter and achieving mental clarity with practical strategies and insights."
        },
        {
            id: "book12",
            title: "Scattered Minds",
            image: "../img/products/health/scattered minds-Mate MD Gabor.jpg",
            brand: "Mate MD Gabor",
            stars: 5,
            price: "$25",
            description: "An exploration of ADHD and its impact on the brain, offering insights and strategies for coping and thriving."
        },
        {
            id: "book13",
            title: "The Galveston Diet",
            image: "../img/products/health/The Galveston Diet-Mary Claire.jpg",
            brand: "Mary Claire",
            stars: 4,
            price: "$28",
            description: "A diet plan designed to promote health and weight loss, focusing on hormonal balance and metabolic health."
        },
        {
            id: "book14",
            title: "The New Meno Pause",
            image: "../img/products/health/The new meno pause-Mary Claire.jpg",
            brand: "Mary Claire",
            stars: 4,
            price: "$30",
            description: "A comprehensive guide to managing menopause, including dietary advice, lifestyle changes, and hormonal health tips."
        },
        {
            id: "book15",
            title: "The Subtle Art of Not Giving a F*ck",
            image: "../img/products/health/The subtle art of not giving a fuck- Manson mark.jpg",
            brand: "Mark Manson",
            stars: 5,
            price: "$20",
            description: "A no-nonsense guide to living a better life by focusing on what truly matters and letting go of the things that don't."
        }
    ],
    horror: [
        {
            id: "book16",
            title: "An Awakening of Terror",
            image: "../img/products/horror/an Awakening of terror -Cassidy Nat.jpg",
            brand: "Cassidy Nat",
            stars: 5,
            price: "$150",
            description: "If you answered Yes to at least one of these questions, buckle up because this isn't your average, run-of-the-mill psychology book. It's a deep dive into the mind's secret corners, and it's about to become your new, almost-daily best friend."
        },
        {
            id: "book17",
            title: "The Housemaid is Watching",
            image: "../img/products/thriller/The house maid is watching- Macfadden Frieda.jpg",
            brand: "Macfadden Frieda",
            stars: 4,
            price: "$45",
            description: "This absolutely explosive and shockingly twisty sequel to international phenomenon and New York Times, USA Today, and Wall Street Journal bestseller The Housemaid will keep you racing through the pages late into the night. Anyone who loves The Perfect Marriage by Jeneva Rose, The Woman in the Window, and Gone Girl will be totally hooked!"
        },
        {
            id: "book18",
            title: "The Rage Colony",
            image: "../img/products/horror/The rage colony-Hunt Shanon.jpg",
            brand: "Hunt Shanon",
            stars: 4,
            price: "$55",
            description: "A gripping tale that dives deep into the dark corners of human nature and the psyche."
        },
        {
            id: "book19",
            title: "The Haunting of Hill House",
            image: "../img/products/horror/The haunting of hill house-Jackson shirley.jpg",
            brand: "Jackson Shirley",
            stars: 5,
            price: "$60",
            description: "A classic horror story that explores the terrifying experiences within Hill House."
        },
        {
            id: "book20",
            title: "The Asylum Confession",
            image: "../img/products/horror/The asylum confession-steen jack.jpg",
            brand: "Steen Jack",
            stars: 4,
            price: "$50",
            description: "A chilling account of the secrets and horrors within an old asylum."
        },
        {
            id: "book21",
            title: "Old Lady Kitchen's Revenge",
            image: "../img/products/horror/old lady kitchen's renvenge-blierbach chris.jpg",
            brand: "Blierbach Chris",
            stars: 3,
            price: "$40",
            description: "A tale of vengeance and horror revolving around an old lady's kitchen."
        },
        {
            id: "book22",
            title: "Man Eater",
            image: "../img/products/horror/Man eater-Green Ryan.jpg",
            brand: "Green Ryan",
            stars: 4,
            price: "$35",
            description: "A horror story about a creature that terrorizes a small town."
        }
    ]
};

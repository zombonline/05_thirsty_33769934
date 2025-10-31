// Create a new router
const express = require("express");
const router = express.Router();
const validateEmail = require("../middleware/validateEmail");

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});

router.get("/search", (req, res) => {
    res.render("search.ejs", {...shopData, searchData: null})
});

router.get('/search_result', function (req, res) {
    res.render('search.ejs', {
        ...shopData,
        searchData: {
            name: req.query.search_name,
            category: req.query.search_category
        }   
    });
});

router.get("/register", (req, res) => {
    res.render("register.ejs", {
            ...shopData,           
            errorMessage: null,
            formData: req.body     
        })
});

router.get('/survey', function (req, res) {
    res.render('survey.ejs', shopData);
});

router.post('/registered', function (req, res, next) {
    //email validation
    try {
        validateEmail(req.body.email);
        next();
    } catch (err) {
        res.render('register.ejs', {
            ...shopData,           
            errorMessage: err.message,
            formData: req.body     
        });
    }
}, function (req, res) {
    res.render('register_results.ejs', {
        ...shopData,
        formData: req.body
    });
});

router.post('/submit_survey', function (req, res) {
    res.render('survey_results.ejs', {
        ...shopData,
        formData: req.body
    });
});



//define our data
var shopData = {
    shopName: "The Thirsty Student",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    locations: [{
        name: "Goldsmiths Campus",
        address: "New Cross, London SE14 6NW",
        shop_manager: "Alice Johnson",
        image_url: "/images/goldsmiths.jpg"
    }, 
    {
        name: "Greenwich Campus",
        address: "Old Royal Naval College, Park Row, London SE10 9LS",
        shop_manager: "Bob Smith",
        image_url: "/images/greenwich.jpg"
    },
    {
        name: "UCL Campus",
        address: "Gower St, Bloomsbury, London WC1E 6BT",
        shop_manager: "Charlie Brown",
        image_url: "/images/ucl.jpg"
    },
    {
        name: "Brighton Campus",
        address: "University of Brighton, Mithras House, Lewes Rd, Brighton BN2 4AT",
        shop_manager: "Diana Prince",
        image_url: "/images/brighton.jpg"
    },
    {
        name: "Coventry Campus",
        address: "Coventry University, Coventry CV1 5FB",
        shop_manager: "Ethan Hunt",
        image_url: "/images/coventry.jpg"
    },
    {
        name: "East London Campus",
        address: "University of East London, University Way, London E16 2RD",
        shop_manager: "Fiona Gallagher",
        image_url: "/images/east_london.jpg"
    }
]

};



// Export the router object so index.js can access it
module.exports = router;

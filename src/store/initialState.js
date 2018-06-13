import TableImage from '../components/dashboard/main/TableImage';
import EditRow from '../components/dashboard/main/EditRow';
import moment from 'moment'

const today = moment();
const ourWeddingDate = moment("2019-07-06", "YYYY-MM-DD");
const ourMoveInDate = moment("2019-08-01", "YYYY-MM-DD");
const otaStartDate = moment("2016-11-30", "YYYY-MM-DD");
const mmStartDate = moment("2017-10-16", "YYYY-MM-DD");
const daysUntilTheWedding = ourWeddingDate.diff(today, "days");
const daysUntilTheMoveIn = ourMoveInDate.diff(today, "days");
const timeWorkedAtOTA = today.diff(otaStartDate, "years");
const timeWorkedAtMM = today.diff(mmStartDate, "months");

export default {
  activities: [
    {
      title: "Boston Aquarium",
      content:
        "One of our favorite spots is the Boston Aquarium. Here you can watch the penguins play, pet sand sharks, watch the seals show off and more!",
      photo:
        "http://d279m997dpfwgl.cloudfront.net/wp/2016/08/0819_seal-aquarium-1000x665.jpg",
      website: "http://www.neaq.org/",
      price: "28"
    },
    {
      title: "Whale Watching",
      content: "",
      photo: "https://www.bostonharborcruises.com/media/1136/jabiru.jpg",
      website: "https://www.bostonharborcruises.com/whale-watch/",
      price: "53"
    },
    {
      title: "Boston Duck Tour",
      content:
        "Looking to explore Boston a bit? Why not checkout Boston from a bus and a boat! On the duck tours they will show Boston from a number of different angles, give some history about Boston and crack a few jokes.",
      photo:
        "http://www.bostonducktours.com/wp-content/uploads/2015/07/hp3.jpg",
      website: "http://www.bostonducktours.com/",
      price: "42"
    },
    {
      title: "Museum of Science",
      content:
        "Another one of our favorite spots is the Museum of Science! Here you can watch some cool shows from the lightning in the cage to great imax screens. You can try out all of their interactive exhibits that test your math and science skills. You can also go and learn a bit more about the human body and the animal kingdom while you are there!",
      photo: "",
      website: "https://www.mos.org/",
      price: "25"
    },
    {
      title: "Greenway",
      content:
        "Looking for an enjoyable hike through boston? Follow the old highway that was turned into a park! There are events popping up along the route like the Trillium beer garden to lawn games.",
      photo:
        "https://www.rosekennedygreenway.org/files/cache/984158103c5ef27096eee15782673a55_f2183.jpg",
      website: "https://www.rosekennedygreenway.org/",
      price: "Free"
    },
    {
      title: "Paul's work!",
      content:
        "So much more exciting than it sounds is going to visit the building Paul works in. The 14th floor is open to the public and has a great view out into the harbor and you can even see where we are getting married from there!",
      photo: "https://c1.staticflickr.com/6/5089/5351220903_57ab3f66df_b.jpg",
      website: "http://www.470atlanticboston.com/",
      price: "Free"
    },
    {
      title: "Boston Tea Party Ships & Museum",
      content:
        "Honestly have yet to go here, but it is on our list as one of the Boston main stays we have to try out!",
      photo:
        "https://cdn.trolleytours.com/wp-content/uploads/2016/05/boston-tea-party-ships-ticket.jpg",
      website: "http://www.bostonteapartyship.com/",
      price: "30"
    },
    {
      title: "Freedom Trail",
      content:
        "Honestly have yet to go here, but it is on our list as one of the Boston main stays we have to try out!",
      photo: "",
      website: "http://www.thefreedomtrail.org/",
      price: "12-20"
    },
    {
      title: "Sam Adams Brewery",
      content: "Probably the most well known brewery in Boston and a great thing to check of your list of tihngs to do while you are here!",
      photo: "http://www.samueladams.com//app_media/SamAdamsRedux/Modules/Split-Content-Hero-Block-Images/Brewery-Image.file",
      website: "http://www.samueladams.com/",
      price: "Free minus the cost of beer"
    },
    {
      title: "Harpoon Brewery",
      content: "One of Paul's favorite breweries in the Boston area. Paul highly recommends doing the tour where you can sample all of their beers, eat delicious pretzal and learn a little more about the process of brewing a great beer.",
      photo: "",
      website: "https://www.harpoonbrewery.com/",
      price: ""
    },
    {
      title: "Trillium Brewery",
      content: "A great local brewery that is one of Paul's favorites. The only tip he has is to checkout the Boston locations as the canton one is a bit outside of Boston.",
      photo: "",
      website: "http://www.trilliumbrewing.com/",
      price: ""
    },
    {
      title: "Trillium Beer Garden",
      content: "Looking to enjoy the wonderful weather and a beer? One of Paul's favorite spots to do both is the trillium beer garden which is about a block away from work!",
      photo: "https://static1.squarespace.com/static/5527dc92e4b04be388ca48e4/t/5ae0a36baa4a99e2b64183b6/1524671343661/trillium_garden_glass-fence_web.jpg?format=2500w",
      website: "http://www.trilliumbrewing.com/greenway-garden/",
      price: "Free minus the cost of beer"
    },
    {
      title: "Boston Public Garden/Common",
      content: "Two parks downtown right next to each other that are great to wander around in, enjoy the view and where Michelle and Paul got engaged!",
      photo: "https://cache-graphicslib.viator.com/graphicslib/page-images/360x240/100488_Boston_Boston%20Public%20Garden_d678-48.jpg",
      website: "https://www.viator.com/Boston-attractions/Boston-Public-Garden/d678-a1233",
      price: "Free"
    },
    {
      title: "Top of the hub",
      content:
        "All we have to say is great food, amazing view, a tad expensive! We went here for Boston's restaurant week and highly recommend it if the prices aren't to scary.",
      photo:
        "http://topofthehub.net/wp-content/uploads/2016/06/headerimage21.jpg",
      website: "http://topofthehub.net/",
      price: "$$$$"
    },
    {
      title: "Faneuil Hall",
      content:
        "A great place to wander around before doing the freedom trail, some great food, shops and performers with something new to checkout every time!",
      photo:
        "https://faneuilhallmarketplace.com/wp-content/uploads/sites/203/2017/10/things-to-do-in-boston-mall-faneuil-hall-1024x640.jpg",
      website: "https://faneuilhallmarketplace.com/",
      price: "Free"
    }
  ],
  events: [
    {
      id: 1,
      photo:
        "https://img.etsystatic.com/il/06f4f2/844471562/il_fullxfull.844471562_4r88.jpg?version=0",
      date: "January 6th",
      time: "12:30 pm to 6 pm",
      location: {
        label: "44 Matthew Lane, Waltham MA",
        link:
          "https://www.google.com/maps/place/44+Matthew+Ln,+Waltham,+MA+02452/@42.4006173,-71.2266826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e39d1637027a97:0x7c74e41d871625fc!8m2!3d42.4006134!4d-71.2244939"
      },
      title: "Bridal Shower",
      content:
        "I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle! I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle! I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle! I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle! I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle! I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle! I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle!"
    },
    {
      id: 2,
      photo:
        "https://img.etsystatic.com/il/06f4f2/844471562/il_fullxfull.844471562_4r88.jpg?version=0",
      date: "January 6th",
      time: "12:30 pm to 6 pm",
      location: {
        label: "44 Matthew Lane, Waltham MA",
        link:
          "https://www.google.com/maps/place/44+Matthew+Ln,+Waltham,+MA+02452/@42.4006173,-71.2266826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e39d1637027a97:0x7c74e41d871625fc!8m2!3d42.4006134!4d-71.2244939"
      },
      title: "Bridal Shower",
      content:
        "I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle!"
    },
    {
      id: 3,
      photo:
        "https://img.etsystatic.com/il/06f4f2/844471562/il_fullxfull.844471562_4r88.jpg?version=0",
      date: "January 6th",
      time: "12:30 pm to 6 pm",
      location: {
        label: "44 Matthew Lane, Waltham MA",
        link:
          "https://www.google.com/maps/place/44+Matthew+Ln,+Waltham,+MA+02452/@42.4006173,-71.2266826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e39d1637027a97:0x7c74e41d871625fc!8m2!3d42.4006134!4d-71.2244939"
      },
      title: "Bridal Shower",
      content:
        "I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle!"
    },
    {
      id: 4,
      photo:
        "https://img.etsystatic.com/il/06f4f2/844471562/il_fullxfull.844471562_4r88.jpg?version=0",
      date: "January 6th",
      time: "12:30 pm to 6 pm",
      location: {
        label: "44 Matthew Lane, Waltham MA",
        link:
          "https://www.google.com/maps/place/44+Matthew+Ln,+Waltham,+MA+02452/@42.4006173,-71.2266826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e39d1637027a97:0x7c74e41d871625fc!8m2!3d42.4006134!4d-71.2244939"
      },
      title: "Bridal Shower",
      content:
        "I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle!"
    },
    {
      id: 5,
      photo:
        "https://img.etsystatic.com/il/06f4f2/844471562/il_fullxfull.844471562_4r88.jpg?version=0",
      date: "January 6th",
      time: "12:30 pm to 6 pm",
      location: {
        label: "44 Matthew Lane, Waltham MA",
        link:
          "https://www.google.com/maps/place/44+Matthew+Ln,+Waltham,+MA+02452/@42.4006173,-71.2266826,17z/data=!3m1!4b1!4m5!3m4!1s0x89e39d1637027a97:0x7c74e41d871625fc!8m2!3d42.4006134!4d-71.2244939"
      },
      title: "Bridal Shower",
      content:
        "I don't know what we do during a bridal shower, but it is a thing women do some come and join us to celebrate Michelle!"
    }
  ],
  hotels: [
    {
      name: "Hyatt Regency Boston Harbor Hotel",
      images: [
        "https://assets.hipmunk.com/assets/hotel_image/v1/5634d3078f3484588f847a2d.jpg",
        "http://flightfinders.tours/wp-content/uploads/2017/04/HAYAT.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/112/112481610.jpg"
      ],
      location: {
        label: "101 Harborside Dr, Boston, MA 02128",
        link:
          "https://www.google.com/maps/place/Hyatt+Regency+Boston+Harbor/@42.359191,-71.027198,15z/data=!4m2!3m1!1s0x0:0x8a4b971fac1ea5d2?sa=X&ved=2ahUKEwjsj-Wtg4baAhVEiqwKHQpfB7IQ_BIwDnoFCAAQqQE"
      },
      content:
        "This is our room block, please follow the link if you are interested in staying here with in"
    },

    {
      name: "Hyatt Regency Boston Harbor Hotel",
      images: [
        "https://assets.hipmunk.com/assets/hotel_image/v1/5634d3078f3484588f847a2d.jpg",
        "http://flightfinders.tours/wp-content/uploads/2017/04/HAYAT.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/112/112481610.jpg"
      ],
      location: {
        label: "101 Harborside Dr, Boston, MA 02128",
        link:
          "https://www.google.com/maps/place/Hyatt+Regency+Boston+Harbor/@42.359191,-71.027198,15z/data=!4m2!3m1!1s0x0:0x8a4b971fac1ea5d2?sa=X&ved=2ahUKEwjsj-Wtg4baAhVEiqwKHQpfB7IQ_BIwDnoFCAAQqQE"
      },
      content:
        "This is our room block, please follow the link if you are interested in staying here with in"
    },

    {
      name: "Hyatt Regency Boston Harbor Hotel",
      images: [
        "https://assets.hipmunk.com/assets/hotel_image/v1/5634d3078f3484588f847a2d.jpg",
        "http://flightfinders.tours/wp-content/uploads/2017/04/HAYAT.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/112/112481610.jpg"
      ],
      location: {
        label: "101 Harborside Dr, Boston, MA 02128",
        link:
          "https://www.google.com/maps/place/Hyatt+Regency+Boston+Harbor/@42.359191,-71.027198,15z/data=!4m2!3m1!1s0x0:0x8a4b971fac1ea5d2?sa=X&ved=2ahUKEwjsj-Wtg4baAhVEiqwKHQpfB7IQ_BIwDnoFCAAQqQE"
      },
      content:
        "This is our room block, please follow the link if you are interested in staying here with in"
    },

    {
      name: "Hyatt Regency Boston Harbor Hotel",
      images: [
        "https://assets.hipmunk.com/assets/hotel_image/v1/5634d3078f3484588f847a2d.jpg",
        "http://flightfinders.tours/wp-content/uploads/2017/04/HAYAT.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/112/112481610.jpg"
      ],
      location: {
        label: "101 Harborside Dr, Boston, MA 02128",
        link:
          "https://www.google.com/maps/place/Hyatt+Regency+Boston+Harbor/@42.359191,-71.027198,15z/data=!4m2!3m1!1s0x0:0x8a4b971fac1ea5d2?sa=X&ved=2ahUKEwjsj-Wtg4baAhVEiqwKHQpfB7IQ_BIwDnoFCAAQqQE"
      },
      content:
        "This is our room block, please follow the link if you are interested in staying here with in"
    },

    {
      name: "Hyatt Regency Boston Harbor Hotel",
      images: [
        "https://assets.hipmunk.com/assets/hotel_image/v1/5634d3078f3484588f847a2d.jpg",
        "http://flightfinders.tours/wp-content/uploads/2017/04/HAYAT.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/112/112481610.jpg"
      ],
      location: {
        label: "101 Harborside Dr, Boston, MA 02128",
        link:
          "https://www.google.com/maps/place/Hyatt+Regency+Boston+Harbor/@42.359191,-71.027198,15z/data=!4m2!3m1!1s0x0:0x8a4b971fac1ea5d2?sa=X&ved=2ahUKEwjsj-Wtg4baAhVEiqwKHQpfB7IQ_BIwDnoFCAAQqQE"
      },
      content:
        "This is our room block, please follow the link if you are interested in staying here with in"
    },

    {
      name: "Hyatt Regency Boston Harbor Hotel",
      images: [
        "https://assets.hipmunk.com/assets/hotel_image/v1/5634d3078f3484588f847a2d.jpg",
        "http://flightfinders.tours/wp-content/uploads/2017/04/HAYAT.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/112/112481610.jpg"
      ],
      location: {
        label: "101 Harborside Dr, Boston, MA 02128",
        link:
          "https://www.google.com/maps/place/Hyatt+Regency+Boston+Harbor/@42.359191,-71.027198,15z/data=!4m2!3m1!1s0x0:0x8a4b971fac1ea5d2?sa=X&ved=2ahUKEwjsj-Wtg4baAhVEiqwKHQpfB7IQ_BIwDnoFCAAQqQE"
      },
      content:
        "This is our room block, please follow the link if you are interested in staying here with in"
    }
  ],
  photos: [
    {
      image:
        "https://assets.marthastewartweddings.com/styles/wmax-1500/d49/aislinn-eric-wedding-malibu-bride-groom-102896024/aislinn-eric-wedding-malibu-bride-groom-102896024_horiz.jpg?itok=2X6AtG4N",
      caption: ""
    },
    {
      image:
        "https://media.brides.com/photos/5a1c369e3a5c87214f6de130/master/pass/lizzy-stone-and-chandler-brown-wedding20171106_01.JPG",
      caption: ""
    },
    {
      image:
        "https://6737455825196301ef70-26c82c9028aee0c5860aa60a0bbaa4da.ssl.cf1.rackcdn.com/dxthm1000.Best-Long-Island-Wedding-Photographers-037-.jpg",
      caption: ""
    },
    {
      image:
        "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: ""
    },
    {
      image:
        "https://assets.marthastewartweddings.com/styles/wmax-1500/d49/aislinn-eric-wedding-malibu-bride-groom-102896024/aislinn-eric-wedding-malibu-bride-groom-102896024_horiz.jpg?itok=2X6AtG4N",
      caption: ""
    },
    {
      image:
        "https://media.brides.com/photos/5a1c369e3a5c87214f6de130/master/pass/lizzy-stone-and-chandler-brown-wedding20171106_01.JPG",
      caption: ""
    },
    {
      image:
        "https://6737455825196301ef70-26c82c9028aee0c5860aa60a0bbaa4da.ssl.cf1.rackcdn.com/dxthm1000.Best-Long-Island-Wedding-Photographers-037-.jpg",
      caption: ""
    },
    {
      image:
        "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: ""
    },
    {
      image: "https://peopledotcom.files.wordpress.com/2017/11/kate-upton2.jpg",
      caption: ""
    },
    {
      image:
        "https://www.oncewed.com/wp-content/uploads/2015/12/1-romantic-lace-wedding-gown-1300x1765.jpg",
      caption: ""
    },
    {
      image:
        "https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_two_thirds/public/image/2017/06/main/autumn-charleston-wedding-jophoto-kn5a9998.jpg?itok=A8gDXji4",
      caption: ""
    },
    {
      image:
        "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: ""
    },
    {
      image:
        "https://img1.etsystatic.com/218/1/9469340/il_340x270.1418447595_8kuw.jpg",
      caption: ""
    },
    {
      image:
        "https://www.levkuperman.com/wp-content/uploads/2016/12/Kayti_Jake_Wedding_444.jpg",
      caption: ""
    },
    {
      image:
        "https://www.hitched.co.uk/images/articles/fave-wedding-photos.jpg",
      caption: ""
    },
    {
      image:
        "https://s-i.huffpost.com/gen/2806956/images/o-WEDDING-facebook.jpg",
      caption: ""
    },
    {
      image:
        "http://blog.stylishwedd.com/wp-content/uploads/2017/05/stunning-diy-floral-wedding-arch-decoration-ideas.jpg",
      caption: ""
    },
    {
      image:
        "https://gossipweddings.com/wp-content/uploads/2017/10/Small-bride-and-groom-dancing-139.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.marthastewartweddings.com/styles/wmax-1500/d49/aislinn-eric-wedding-malibu-bride-groom-102896024/aislinn-eric-wedding-malibu-bride-groom-102896024_horiz.jpg?itok=2X6AtG4N",
      caption: ""
    },
    {
      image:
        "https://media.brides.com/photos/5a1c369e3a5c87214f6de130/master/pass/lizzy-stone-and-chandler-brown-wedding20171106_01.JPG",
      caption: ""
    },
    {
      image:
        "https://6737455825196301ef70-26c82c9028aee0c5860aa60a0bbaa4da.ssl.cf1.rackcdn.com/dxthm1000.Best-Long-Island-Wedding-Photographers-037-.jpg",
      caption: ""
    },
    {
      image:
        "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: ""
    },
    {
      image: "https://peopledotcom.files.wordpress.com/2017/11/kate-upton2.jpg",
      caption: ""
    },
    {
      image:
        "https://www.oncewed.com/wp-content/uploads/2015/12/1-romantic-lace-wedding-gown-1300x1765.jpg",
      caption: ""
    },
    {
      image:
        "https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_two_thirds/public/image/2017/06/main/autumn-charleston-wedding-jophoto-kn5a9998.jpg?itok=A8gDXji4",
      caption: ""
    },
    {
      image:
        "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: ""
    },
    {
      image:
        "https://img1.etsystatic.com/218/1/9469340/il_340x270.1418447595_8kuw.jpg",
      caption: ""
    },
    {
      image:
        "https://www.levkuperman.com/wp-content/uploads/2016/12/Kayti_Jake_Wedding_444.jpg",
      caption: ""
    },
    {
      image:
        "https://www.hitched.co.uk/images/articles/fave-wedding-photos.jpg",
      caption: ""
    },
    {
      image:
        "https://s-i.huffpost.com/gen/2806956/images/o-WEDDING-facebook.jpg",
      caption: ""
    },
    {
      image:
        "http://blog.stylishwedd.com/wp-content/uploads/2017/05/stunning-diy-floral-wedding-arch-decoration-ideas.jpg",
      caption: ""
    },
    {
      image:
        "https://gossipweddings.com/wp-content/uploads/2017/10/Small-bride-and-groom-dancing-139.jpg",
      caption: ""
    },
    {
      image:
        "https://media.brides.com/photos/59e7a4d31c1f6118730f1e34/master/pass/elisa-hong-and-edward-chung-wedding20171016_01.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.vogue.com/photos/5a1dab699871cf3583efa544/16:9/pass/00-story-image-fei-and-lincoln-capri-wedding.jpg",
      caption: ""
    },
    {
      image:
        "https://media1.s-nbcnews.com/i/MSNBC/Components/Video/201705/pippa-middleton-wedding-groom-today-170520-tease-01.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d44/louisa-robert-wedding-couple-61-6274642-0317/louisa-robert-wedding-couple-61-6274642-0317_vert.jpg?itok=90SeHzGx",
      caption: ""
    },
    {
      image:
        "https://media.brides.com/photos/59e7a4d31c1f6118730f1e34/master/pass/elisa-hong-and-edward-chung-wedding20171016_01.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.vogue.com/photos/5a1dab699871cf3583efa544/16:9/pass/00-story-image-fei-and-lincoln-capri-wedding.jpg",
      caption: ""
    },
    {
      image:
        "https://media1.s-nbcnews.com/i/MSNBC/Components/Video/201705/pippa-middleton-wedding-groom-today-170520-tease-01.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d44/louisa-robert-wedding-couple-61-6274642-0317/louisa-robert-wedding-couple-61-6274642-0317_vert.jpg?itok=90SeHzGx",
      caption: ""
    },
    {
      image: "https://peopledotcom.files.wordpress.com/2017/11/kate-upton2.jpg",
      caption: ""
    },
    {
      image:
        "https://www.oncewed.com/wp-content/uploads/2015/12/1-romantic-lace-wedding-gown-1300x1765.jpg",
      caption: ""
    },
    {
      image:
        "https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_two_thirds/public/image/2017/06/main/autumn-charleston-wedding-jophoto-kn5a9998.jpg?itok=A8gDXji4",
      caption: ""
    },
    {
      image:
        "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: ""
    },
    {
      image:
        "https://img1.etsystatic.com/218/1/9469340/il_340x270.1418447595_8kuw.jpg",
      caption: ""
    },
    {
      image:
        "https://www.levkuperman.com/wp-content/uploads/2016/12/Kayti_Jake_Wedding_444.jpg",
      caption: ""
    },
    {
      image:
        "https://www.hitched.co.uk/images/articles/fave-wedding-photos.jpg",
      caption: ""
    },
    {
      image:
        "https://s-i.huffpost.com/gen/2806956/images/o-WEDDING-facebook.jpg",
      caption: ""
    },
    {
      image:
        "http://blog.stylishwedd.com/wp-content/uploads/2017/05/stunning-diy-floral-wedding-arch-decoration-ideas.jpg",
      caption: ""
    },
    {
      image:
        "https://gossipweddings.com/wp-content/uploads/2017/10/Small-bride-and-groom-dancing-139.jpg",
      caption: ""
    },
    {
      image:
        "https://media.brides.com/photos/59e7a4d31c1f6118730f1e34/master/pass/elisa-hong-and-edward-chung-wedding20171016_01.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.vogue.com/photos/5a1dab699871cf3583efa544/16:9/pass/00-story-image-fei-and-lincoln-capri-wedding.jpg",
      caption: ""
    },
    {
      image:
        "https://media1.s-nbcnews.com/i/MSNBC/Components/Video/201705/pippa-middleton-wedding-groom-today-170520-tease-01.jpg",
      caption: ""
    },
    {
      image:
        "https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d44/louisa-robert-wedding-couple-61-6274642-0317/louisa-robert-wedding-couple-61-6274642-0317_vert.jpg?itok=90SeHzGx",
      caption: ""
    }
  ],
  weddingParty: [
    {
      id: "1",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },
    {
      id: "2",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },
    {
      id: "3",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },
    {
      id: "4",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },
    {
      id: "5",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },
    {
      id: "6",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },
    {
      id: "7",
      type: "bridesmaid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphCTPOIzqwX1tH_17IaYPhF39U68HyDjfY3UGdT9QHt_T5qtd",
      name: "Aileen Tartanian",
      bio:
        "I love learning about how the world works around us and how we can get along better with animals! Michelle and I became good friends in college :)"
    },

    {
      id: "8",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    },
    {
      id: "9",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    },
    {
      id: "10",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    },
    {
      id: "11",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    },
    {
      id: "12",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    },
    {
      id: "13",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    },
    {
      id: "14",
      type: "groomsMen",
      image:
        "https://scontent.fbed1-1.fna.fbcdn.net/v/t31.0-8/12045704_10205336135308263_1578082194425790852_o.jpg?_nc_cat=0&oh=aedf07f4486cca39f98de083ac30c892&oe=5B2C499F",
      name: "Matt Smith",
      bio:
        "I like to lift things up and put them down! I also have been chilling with Paul and Michelle since back in the day when we were in High School."
    }
  ],
  dashboard: {
    displaying: "weddingParty",
    row: {}
  },
  tables: {
    weddingParty: {
      title: "Wedding Party",
      rowSize: 14,
      columns: [
        {
          accessor: "image",
          label: "Image",
          priorityLevel: 3,
          position: 1,
          minWidth: 150,
          CustomComponent: TableImage
        },
        {
          accessor: "name",
          label: "Name",
          priorityLevel: 1,
          position: 2,
          minWidth: 150
        },

        {
          accessor: "bio",
          label: "Bio",
          priorityLevel: 4,
          position: 3,
          minWidth: 300
        },
        {
          accessor: "edit",
          label: "Edit",
          priorityLevel: 2,
          position: 4,
          minWidth: 150,
          CustomComponent: EditRow
        }
      ]
    },
    events: {
      title: "Wedding Events",
      columns: [
        {
          accessor: "photo",
          label: "Image",
          priorityLevel: 1,
          position: 1,
          minWidth: 150,
          CustomComponent: TableImage
        },
        {
          accessor: "title",
          label: "Title",
          priorityLevel: 3,
          position: 2,
          minWidth: 150
        },
        {
          accessor: "date",
          label: "Date",
          priorityLevel: 4,
          position: 3,
          minWidth: 150
        },
        {
          accessor: "time",
          label: "Time",
          priorityLevel: 5,
          position: 4,
          minWidth: 300
        },
        {
          accessor: "content",
          label: "Description",
          priorityLevel: 6,
          position: 5,
          minWidth: 150
        },
        {
          accessor: "edit",
          label: "Edit",
          priorityLevel: 2,
          position: 7,
          minWidth: 150,
          CustomComponent: EditRow
        }
      ]
    }
  },
  home: {
    hero: {
      url:
        "https://lh3.googleusercontent.com/XxqCAp_1j_OkHT7HJMBVjShTtZtqsTxScZ1UF_znL4iqc-nJxwOHz6wetCUsVisfL1PRF_S2OWkA3Ggan3SB9Ot_WSGmrh76sffX2p5kRyw5TGTFFne9OB9RDJWDcoZ-qU_0rCeOlKW5vGe69KIyR2QB1kdcG6cTNmIUmTVb1vcnLO-zLcApZSb0gh9Tx_uS8cdKxMth6eVANGGbfj2kyup07LlMybVpBW5QH0pDddn2jNCUF1DucmvrLgiCWcTAnQoqXayr04-P-eM_8b0bGnv2rCTl_VpCYd-frSbaJ6MscgoWVVzI9hpxp4QInXrkz99cbOGCmjYddmWIbpzeNiAHCw3hHgOvmtai1BP9e5CTda1y7f1b3ngJvjEiZCgcbK6n_M86kEDGDB5598rA7QI67j5ZrIzmXh4XFQbuKr1VTFGn_82ucxUYAmRBibuo3ohB_aTCamkszjTqBlNE4IBAHcn64cOhj5IYf0w7Iq9E0kmUyg1zQ-bqFjqeJr_UxqFfEGy0jWdEDChKSF_TFaZ0CWcVOXiGnEMgjG6rK9axT8cLbxgQ4cocJgjaiYpN7_b-RhHQMKud1yy1tx4cnAHJDR_tDtvXJA=w2620-h1746-no"
    },
    aboutUs: [
      "Hi we are Michelle and Paul! We met back in highschool. It all started when we sat next to each other in biology. That is when we started figuring out that this might be that one special person in the world that I want to annoy for the rest of my life!",
      "We both headed out to western NY for college, Michelle went to Ithaca College and Paul went to Rochester Institute of Technology. During college we both had some time to grow and learn, but in the end decided that we were right in high school so we picked up where we left off! We also added some new things to our relationship such as our love for wine and day drinking.",
      `Now that we decided to start being adults after graduating, Michelle has been working at OTA for ${timeWorkedAtOTA} years and Paul has recently started working at Mass Mutual in the customer experience group and has been there for ${timeWorkedAtMM} months. We have enjoyed being able to try new and different things now that we have some spending money and time and our favorite experience thus far is our trip to Thailand together as our official first vacation! Though we are excited to say we are ready to take the next step and start living together in ${daysUntilTheMoveIn} days`
    ],
    theProposal: ["", "", ""],
    daysUntilTheWedding
  }
};


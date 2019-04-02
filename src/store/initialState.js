import TableImage from '../components/dashboard/main/TableImage';
import EditRow from '../components/dashboard/main/EditRow';
import moment from 'moment'

const today = moment();
const ourWeddingDate = moment("2019-07-06", "YYYY-MM-DD");
// const ourMoveInDate = moment("2019-08-01", "YYYY-MM-DD");
// const otaStartDate = moment("2016-11-30", "YYYY-MM-DD");
// const mmStartDate = moment("2017-10-16", "YYYY-MM-DD");
const daysUntilTheWedding = ourWeddingDate.diff(today, "days");
// const daysUntilTheMoveIn = ourMoveInDate.diff(today, "days");
// const timeWorkedAtOTA = today.diff(otaStartDate, "years");
// const timeWorkedAtMM = today.diff(mmStartDate, "months");

const photosOfUs = []
for(let i=1; i < 84; i++) {
  photosOfUs.push({
    image: `https://s3.amazonaws.com/paulmichelle2019-website-photos/${i}.jpg`,
    caption: ""
  })
}

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
        "Looking to explore Boston a bit? Why not check out Boston from a bus and a boat! On the duck tours they will show Boston from a number of different angles, give some history about Boston and crack a few jokes.",
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
        "Looking for an enjoyable hike through Boston? Follow the old highway that was turned into a park! There are events popping up along the route like the Trillium beer garden to lawn games.",
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
      content: "Probably the most well known brewery in Boston and a great thing to check off your list of tihngs to do while you are here!",
      photo: "http://www.samueladams.com//app_media/SamAdamsRedux/Modules/Split-Content-Hero-Block-Images/Brewery-Image.file",
      website: "http://www.samueladams.com/",
      price: "Free minus the cost of beer"
    },
    {
      title: "Harpoon Brewery",
      content: "One of Paul's favorite breweries in the Boston area. Paul highly recommends doing the tour where you can sample all of their beers, eat delicious pretzel and learn a little more about the process of brewing a great beer.",
      photo: "",
      website: "https://www.harpoonbrewery.com/",
      price: "5"
    },
    {
      title: "Trillium Brewery",
      content: "A great local brewery that is one of Paul's favorites. The only tip he has is to checkout the Boston locations as the Canton one is a bit outside of Boston.",
      photo: "",
      website: "http://www.trilliumbrewing.com/",
      price: "Free"
    },
    {
      title: "Trillium Beer Garden",
      content: "Looking to enjoy the wonderful weather and a beer? One of Paul's favorite spots to do both is the Trillium Beer Garden which is about a block away from work!",
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
        "All we have to say is great food, amazing view, a tad expensive! We went here for Boston's restaurant week and highly recommend it if the prices aren't too scary.",
      photo:
        "http://topofthehub.net/wp-content/uploads/2016/06/headerimage21.jpg",
      website: "http://topofthehub.net/",
      price: "$$$$"
    },
    {
      title: "Faneuil Hall",
      content:
        "A great place to wander around before walking the Freedom Trail, some great food, shops and performers with something new to checkout every time!",
      photo:
        "https://faneuilhallmarketplace.com/wp-content/uploads/sites/203/2017/10/things-to-do-in-boston-mall-faneuil-hall-1024x640.jpg",
      website: "https://faneuilhallmarketplace.com/",
      price: "Free"
    }
  ],
  events: [
    {
      id: 1,
      photo: "https://img.etsystatic.com/il/06f4f2/844471562/il_fullxfull.844471562_4r88.jpg?version=0",
      date: "Sunday April 7th, 2019",
      time: "Time TBD",
      location: {
        label: "Location TBD",
        link: ""
      },
      title: "Bridal Shower",
      content: "Ladies, please join us on  for Michelle’s Bridal Shower. Formal invitation with details to follow."
    },
    {
      id: 2,
      photo: "https://apis.xogrp.com/media-api/images/eb8af8fd-55fa-43a2-b5fd-52f8c02b8569~sc_768.576.fit?quality=60",
      date: "Friday July 5th, 2019",
      time: "Time TBD",
      location: {
        label: "Location TBD",
        link: ""
      },
      title: "Rehearsal Dinner",
      content: "Check back later as these details fall into place!"
    },
    {
      id: 3,
      photo: "https://c1.staticflickr.com/5/4152/4837580854_b8d476a6ef_b.jpg",
      date: "Saturday July 6th, 2019",
      time: "2:30 pm",
      location: {
        label: "Sacred Heart of Jesus Church",
        link: "https://www.google.com/maps/place/311+River+St,+Waltham,+MA+02453/@42.3739145,-71.2299801,17z"
      },
      title: "Ceremony",
      content: "Please join us at 2:30pm for our Catholic wedding mass!"
    },
    {
      id: 4,
      photo: "http://dun6irwnoloqf.cloudfront.net/images/venues/9590/Hyatt-Regency-Boston-Harbor-wedding-Boston-MA-147503-orig.1484347437.jpg",
      date: "Saturday July 6th, 2019",
      time: "5:30 pm",
      location: {
        label: "Hyatt Regency Boston Harbor",
        link: "https://www.google.com/maps/place/101+Harborside+Dr,+Boston,+MA+02128/@42.3592641,-71.0294005,17z/"
      },
      title: "Reception",
      content: "We are so excited to celebrate on the lawn and pavilion tent of the Hyatt Regency Boston Harbor Hotel with all of you! Cocktail hour begins at 5:30pm on the Harbor Lawn."
    },
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
  photos: photosOfUs,
  weddingParty: [
    {
      id: "1",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/delanie.png",
      name: "Delaney Pfohl",
      bio: "My name is Delaney. Michelle and I met in college during a summer anatomy course in Rochester, NY, during which we became quick friends. Since then I have had the pleasure of living with Michelle for two years filled with lots of laughter, food, TV binge watching, the occasional drink, and more pink and glitter than I ever thought possible. One of my favorite memories with both Michelle and Paul was wine touring with the two of them on Cayuga Lake. A fun fact about me is that I have been to 17 countries (3 continents) and plan to visit many more!"
    },
    {
      id: "2",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/aileen.jpg",
      name: "Aileen Tartanian",
      bio: "Although Michelle and I met freshman year at IC (Ithaca College), we didn't really become friends until we were housemates for the PT/OT summer human anatomy course in 2014.  We bonded immediately; laughing and crying during hours of studying, wrangling (possibly rabid) kittens, dishing on boy drama, and discovering the strange world that is Michelle's cooking.  Since graduation three years ago, Michelle has remained one of my closest friends.  I'm currently working towards a PhD in Organsimal Biology & Anatomy at the University of Chicago.  As I navigate this new chapter in my life, Michelle helps me realize the little bits of humor in every day awkwardness and setbacks.  For instance, yes, I've had to deal with a lot of animal poop since I've started grad school.  BUT, if this trend continues, I'll likely be able to say that I've been pooped on by members of all the major taxonomic groups in vertebrates!  Michelle taught me to approach each day with a smile, even on days when your opossum has diarrhea."
    },
    {
      id: "3",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/emily.png",
      name: "Emily Bonin",
      bio: "My name is Emily and I am a physical therapist in Los Angeles, California. I met Michelle at Ithaca College during our summer anatomy course, where she was definitely the calmest out of all of us. My favorite memory of Michelle during school was our once-a-week tea and coloring nights, which kept me sane and balanced throughout the craziest years of PT school. Since graduating, my favorite memory of Michelle has been playing cross-country phone tag and never giving up until we finally get ahold of each other. A fun fact about me is that I grew up on a farm and spent a lot of time showing cows at county fairs and made it all the way to the National Dairy Quiz Bowl competition!"
    },
    {
      id: "4",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/sarah.jpg",
      name: "Sarah Milley",
      bio: "My name is Sarah and I’ve been friends with Michelle since middle school. Throughout my years of knowing her, we’ve made some great memories! One of my favorites has to be when her, Anhthi and I got all dressed up to go see a movie! We were in dresses and heels with full faces of make up, just to sit in a dark (and ultimately empty) theater! It seemed crazy at the time, but it was definitely the most fun I’ve had at a movie!"
    },
    {
      id: "5",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/anhthi.jpg",
      name: "Anhthi Nguyen",
      bio: "My name is Anhthi and I have been friends with Michelle and Sarah since middle school! I recently joined the Salesian Sisters of St. John Bosco where I have the pleasure of working with many wonderful children! Prior to joining the Salesian Sisters I taught first grade CCD and helped my group of first graders to make their first communion! We had so much fun one weekend when we stayed at Sarah’s parents’ house on the Cape exploring lots of shops and getting henna tattoos that we sported with pride for the rest of the weekend!"
    },
    {
      id: "6",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/beth.png",
      name: "Beth Fournier",
      bio: "Hello everyone my name is Beth and I am Michelle’s cousin. Michelle and I grew up together; I can remember loving to swing on a huge circle swing at her old house. We always tried to swing as high as we could so we felt like we were flying. We would always catch up with very long conversations and I always look forward to hearing from her. One fun fact about me is that I studied abroad in Scotland for a semester, this was one experience I will never forget."
    },
    {
      id: "7",
      type: "bridesmaid",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/annemarie.png",
      name: "Annemarie Fournier",
      bio: "My name is Annemarie and I am one of Michelle’s cousins. I am also Beth’s older sister and work as a dietary aide. I remember swimming with Michelle in her backyard pool growing up and going to Niagra Falls just Aunt Nancy, Mom, Beth, Steven, Michelle and me! It was a blast! A fun fact about me is that I have a cat named Timmy."
    },
    {
      id: "8",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/mattSmith.png",
      name: "Matt Smith",
      bio: "Hey everyone my name is Matt Smith, I met Paul at Bishop Feehan High School during our sophomore year, we enjoy cooking, making pizza, stroking raw duck and using Matt’s shoulder as Paul’s arm rest. One of my favorite moments with Paul is when he was my armrest for prom pictures. A fun fact about myself is I don’t know any songs off the top of my head about trucks but I do know how to play one about a tractor."
    },
    {
      id: "9",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/brandonNieves.jpg",
      name: "Brandon Nieves",
      bio: "My name is Brandon Nieves and I met Paul at RIT. I ended up joining the same fraternity as Paul, ΦΚΤ, and later on he became my big brother. We connected very well and since then we became best friends ever since. My favorite memories of Paul and I have to include our long walks on the beach, going on picnics, and our favorite: cheap dinner and watching a rom-com while drinking wine together. I like to think of myself as an entrepreneur, jack of all trades, master of none. Future pilot for the United States Marine Corps.Semper Fidelis"
    },
    {
      id: "10",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/nickCifranic.png",
      name: "Nick Cifranic",
      bio: "My name is Nick. I met Paul at a dirty fraternity house party – and our standards have been the same since. Paul and I have been through thick and thin (no pun intended) – whether that’s traveling through Switzerland, Germany, Dubai, or just simply getting lost in the tunnels at RIT. My favorite memory of us was our Junior year when we released/unveiled the RIT bikeshare program. A fun fact about myself – I witnessed Paul murder a baby black bear."
    },
    {
      id: "11",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/bryanHarper.png",
      name: "Bryan Harper",
      bio: "My name is Bryan Harper. I met Paul at RIT, where we <strike>became connoisseurs of mediocre bourbon</strike> attended college. My favorite memory with Paul was being challenged to eat atomic wings and sharing the suffering that ensued. A fun fact about me is that I can make convincing cricket sounds, especially during awkward silences."
    },
    {
      id: "12",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/masonSciotti.png",
      name: "Mason Scioti",
      bio: "My name is Mason Sciotti, and I've been fortunate enough to have known Paul since fourth grade. I moved to North Attleboro mid school year, and as anyone will tell you, making new friends is hard. Paul was one of my first friends in North Attleboro, and remains one of my lifelong best friends. Ever since I first saw the both of them together in high school, I've known that Paul and Michelle would marry each other. I couldn't be happier for some of my best friends. Also, called it."
    }, 
    {
      id: "13",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/jaimeDarragh.png",
      name: "Jamie Darragh",
      bio: "Hi I am Jamie, I am Paul's younger brother. Some of my favorite memories with Paul are when we used to visit our grandparents for a week at a time in New Hampshire to ski in the winter and go swimming in the summer. One fun fact about me is that I got to travel all over the US as a truck driver with my trusted companion Luna."
    },
    {
      id: "14",
      type: "groomsMen",
      image: "https://s3.amazonaws.com/paulmichelle2019-website-photos/steveDenison.png",
      name: "Steven Denison",
      bio: "<img src='http://78.media.tumblr.com/tumblr_memiirCLKW1rek337o1_500.gif?fbclid=IwAR1WS8Y1-cyA1djsoAanpGQ319WqhyvRHDw7iPQ7E0A2hvRy7_3462SiMqA' /> <br /> Why? Because I am a god damn stallion!"
    }
  ],
  dashboard: {
    displaying: "weddingParty",
    row: {}
  },
  registeries: [
    {
      name: "",
      photo: "https://www.myregistry.com/LP/Partner/Macys/Images/MacyLOGO.png",
      url: 'https://www.macys.com/wgl/registry/guest/6990244',
      alt: "Macy's registry link",
    },
    {
      name: "",
      photo: 'https://d28m5bx785ox17.cloudfront.net/v1/img/-Y1JlqqN2s6M0FtcxkiWm5FGIMGKvqgkYKlnkHcW0zA=/d/l',
      url: 'https://www.crateandbarrel.com/gift-registry/michelle-denison-and-paul-darragh/r5911703',
      alt: 'Crate &amp; Barrel registry link',
    },
    {
      name: "Zola (Things not sold at Macy's or Crate & Barrel)",
      photo: 'https://gulfbeachweddings.com/wp-content/uploads/2018/04/Zola-Logo.png',
      url: 'https://www.zola.com/registry/paulandmichelle2019',
      alt: "Zola (Things not sold at Macy's or Crate & Barrel) registry link",
    },
  ],
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
      url: "https://s3.amazonaws.com/paulmichelle2019-website-photos/hero-photo.jpg"
    },
    engagmentPhoto: {
      url: 'https://s3.amazonaws.com/paulmichelle2019-website-photos/engagementPhoto.jpg'
    },
    howWeMet: {
      url: 'https://s3.amazonaws.com/paulmichelle2019-website-photos/9.jpg'
    }, 
    whereAreWe: {
      url: 'https://s3.amazonaws.com/paulmichelle2019-website-photos/40.jpg'
    },
    aboutUs: [
      "Hi we are Michelle and Paul, which you likely know if you are reading this! But in case you wanted to re-visit history here’s a little bit about how we got to be us today. We met in high school as freshmen when we shared not two but three classes together; religion, biology, and history. And while Michelle and Paul paired together in class never resulted in much work getting done, it did result in a whole lot of fun! Flirting by the lockers, standing in the lunch line together, and always trying to stick a $20 bill in each other’s pockets were just a few of the crazy adventures that made up high school. We both headed out to upstate New York for college, with Michelle studying Occupational Therapy at Ithaca College and Paul studying Software Engineering at Rochester Institute of Technology.During college we both had some time to grow and learn, but after spending a summer together in Rochester NY before senior year we started to realize that we had each found the one special person in the world that we wanted to annoy for the rest of our lives! The remainder of college was filled with adventures exploring the vineyards of upstate New York, hiking the beautiful gorges of Ithaca, and of course hanging out with a few Phi Tau brothers."
    ],
    today: ["Being done with college is a wild thought but since then Paul and Michelle have started to explore this idea of being “grown-ups” and are enjoying it! Michelle has been working in a sensory integration occupational therapy clinic and Paul has recently started working at Mass Mutual in the customer experience group. We have enjoyed being able to try new and different things now and loved our first official vacation trip together where we traveled to Thailand last winter!"],
    theProposal: ["Firstly, Michelle would like you to know, she was on to him! It all started the day before Paul would actually end up proposing to Michelle. The weather was a typical New England December day with freezing rain and sleet in the forecast for the entire day. Paul however was undeterred by this weather as he had already seemed particularly dedicated to going ice skating since he brought up the idea of going skating a few days ago. Michelle asked Paul that morning if he was sure he still wanted to go ice skating but Paul was absolutely sure they should still go. Suspicious!! Off they went, first eating at a Chinese restaurant that offered the most interesting of fortune cookies: Michelle’s read, “What if you got what you always wanted?” while Paul’s read, “Take the next step.” Well needless to say, Michelle knew this was the night. However, when they arrived at the Frog Pond only to learn it had closed down…due to the terrible weather… Michelle thought Paul might just improvise. But no. Slightly surprised, Michelle actually told Paul she had thought he was being very suspicious. However, Paul’s Phi Tau background came to his rescue sticking with a mantra that existed long before that day, “Deny everything.” And that is exactly what he did! Sitting on the subway with the ring stuffed into his jeans pocked he asked Michelle, “See where would I even keep a ring, look at all these pockets of my jacket.” Suffice to say, Michelle fell for it. The next morning Paul asked if she still wanted to go ice skating and Michelle believing in small miracles (it was Christmas Eve morning and her parents said they didn’t need any help prepping for that evening??) agreed; choosing her less favorite jacket since she now knew it wasn’t happening yet. Not one hour later, Paul went from holding her hands while skating backwards to suddenly dropping to one knee and pulling a ring out of his pocket asking Michelle to marry him. With a tearful yes, Michelle and Paul were ready to start planning a wedding!"],
    daysUntilTheWedding
  }
};


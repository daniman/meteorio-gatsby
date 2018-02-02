const people = [
  {
    name: "Geoff Schmidt",
    picture: "geoff.jpg",
    founder: true,
    title: "CEO",
    twitter: "immir",
    bio:
      "Geoff is both our CEO and our SMT (“Sayer of Many Things”). He raised his first venture capital round at age 20, and outside of MDG, is the proprietor of Monument, a 24-unit live/work community. He wins the prize for “Lives Closest to the Office”."
  },
  {
    name: "Nick Martin",
    picture: "nick.jpg",
    founder: true,
    title: "CTO",
    twitter: "n1mmy",
    bio:
      "Nick is a serial hobbyist and has had a wide array of interests over time, from bread baking to perfume making to ham radio and many more. He's our CTO and chief architecture whisperer, as well as our hot sauce sommelier."
  },
  {
    name: "Matt DeBergalis",
    picture: "matt.jpg",
    founder: true,
    title: "VP R&D",
    twitter: "debergalis",
    bio:
      "Matt runs Research and Development at MDG, so if you don't like our stuff, he's the person to blame. Before Meteor, he founded and ran ActBlue. Before that, he was a kernel hacker. He's also the pilot of his own Beechcraft Baron."
  },
  {
    name: "Mark Trang",
    picture: "trang.jpg",
    title: "VP Business Development",
    twitter: "marktrang",
    bio:
      "Ramen lover, certified rescue diver, adventure photographer, and omelette maker extraordinaire, Mark is in charge of business development and growth at MDG. We're still waiting to be invited to his private social club."
  },
  {
    name: "Chris Shaw",
    picture: "shaw.jpg",
    title: "Director of Talent/People Ops",
    twitter: "cshaw4",
    bio:
      "Chris has recruited talent for some of the top tech companies in the world. He makes sure not only that our company has the best people, but also that our fridge has the best beer. His classic look: a space-themed graphic tee and sport coat."
  },
  {
    name: "Sashko Stubailo",
    picture: "sashko.jpg",
    title: "Engineering Manager",
    twitter: "stubailo",
    bio:
      "In addition to being an engineering manager, tech lead, and Meteor Forum champion, Sashko is also the office’s resident DJ, tennis ball collector, board game master, and in the minority of snowboarders (the rest of us know skiing is better)."
  },
  {
    name: "Ben Newman",
    picture: "ben.jpg",
    title: "Tech Lead : Meteor OSS",
    twitter: "benjamn",
    bio:
      "When not maintaining his dog's Instagram, Ben is passionate about pushing the limits of JavaScript with automatic code transformation tools like Recast and Regenerator. He's a Brooklyner, Burning Man regular, and JavaScript guru."
  },
  {
    name: "David Glasser",
    picture: "glasser.jpg",
    title: "Tech Lead : Galaxy Backend",
    twitter: "glasser",
    bio:
      "A Guardian of Galaxy and administrator of the world famous “Glasser Code Review”, David has read the source code from more Github repositories than anyone else we know. He's probably also been to more concerts than anyone else."
  },
  {
    name: "Danielle Man",
    picture: "danielle.jpg",
    title: "Engineering Manager",
    twitter: "danimman",
    bio:
      "“Chief Monkey Herder 🐵”. Danielle built most of this website, and didn't want to write a bio for herself."
  },
  {
    name: "Martijn Walraven",
    picture: "martijn.jpg",
    title: "Technical Product Manager",
    twitter: "martijnwalraven",
    bio:
      "Martijn joined MDG as our resident mobile expert, but has since become our go-to person for knowing what makes GraphQL developers tick. When not traveling the world and talking to GraphQL devs, he also manages our (1-person) Amsterdam office."
  },
  {
    name: "Alisha Ehrlich",
    picture: "alisha.jpg",
    title: "Talent/People Ops Specialist",
    twitter: "alishaehrlich",
    bio:
      "When not improving MDG’s processes or supporting our talent acquisition and D&I efforts, Alisha loves to read, play board games, and marathon episodes on Netflix. She’s also an actress outside of MDG and saw the final dress of Hamilton!"
  },
  {
    name: "Tim Hingston",
    picture: "tim.jpg",
    title: "Tech Lead : Galaxy Frontend",
    twitter: "timbotnik",
    bio:
      "Not only is Tim the only person at MDG to have worked across the full stack of all our commercial products, he's also an accomplished guitarist who's toured with several indie bands and appeared at SXSW and on MTV."
  },
  {
    name: "Faby Zavala",
    picture: "faby.jpg",
    title: "Office Manager",
    twitter: "",
    bio:
      "Faby has been with MDG longer than most people. She does a ton of stuff behind the scenes, including knowing what everyone's favorite cuisine is, keeping our office running smoothy, and making sure everything in our kitchen is delicious!"
  },
  {
    name: "Jesse Rosenberger",
    picture: "jesse.jpg",
    title: "Core Developer",
    twitter: "abernix",
    bio:
      "A California-Helsinkilainen, Jesse has caught bug after bug: DOS, FreeBSD, startups, Burning Man, backpacking, hostels, hostel parties, hostel management, marrying a Finnish backpacker he met at a hostel — and of course, countless bugs in Meteor.js."
  },
  {
    name: "Julian Martinez",
    picture: "julian.jpg",
    title: "Technical Support Engineer",
    twitter: "julianeon",
    bio:
      "Julian is more in-touch with our customers than anyone else, and is the reason they have a great customer experience. He's also the reason we have gourmet chocolate bars in the office, and is the biggest fan of our Emacs mug."
  },
  {
    name: "Pierre Carrier",
    picture: "pierre.jpg",
    title: "Tech Lead : Optics",
    twitter: "pcarrier",
    bio:
      "While he specialized in distributed systems, Pierre is an expert on a number of other things including typography, strategy games, and keyboards (he's designed his own, the Planck). He's also the fastest talker this side of the Rhine. "
  },
  {
    name: "Joseph Glanville",
    picture: "joseph.jpg",
    title: "Cloud Systems Engineer",
    twitter: "jpgvm",
    bio:
      "From the Australian outback, Joseph has taught us a lot about aussie animals, radio waves, and beer. He's a frequent Pacific traverser, a Guardian of Galaxy, and has brought his expertise on distributed state machines to all of our products."
  },
  {
    name: "Pete Wagner",
    picture: "pete.png",
    title: "Core Developer",
    github: "thepwagner",
    bio:
      "Pete, our most authentic Canadian, joins our team after coming from Fitbit. He's a core dev and backend engineer who works primarily on Galaxy and loves poutine. We're happy to say we introduced him to Korean food."
  },
  {
    name: "Klaire Tan",
    picture: "klaire.jpg",
    title: "Core Developer",
    github: "klairetan",
    bio:
      "Klaire joins us from Yale’s CS program. She’s not only built several highly requested features for our commercial products Optics + Galaxy, but she’s the reason we now have kettle corn in the office and she’s been teaching us how to properly throw frisbees."
  },
  {
    name: "James Baxley",
    picture: "james.jpg",
    title: "Core Developer",
    twitter: "jbaxleyiii",
    bio:
      "Normally found in his garden tending his bee hives, James is a believer in cultivating happy and healthly communities. He is a lover of design systems, all things javascript and fixing old land rovers."
  },
  {
    name: "Peggy Rayzis",
    picture: "peggy.jpg",
    title: "Core Developer",
    twitter: "peggyrayzis",
    bio:
      "An avid speaker, traveler, and world-traveling speaker, Peggy also loves skiing, sticker designing, and of course building open source software. You may not know that she’s also a former cheerleader, a skilled DJ, and has a sweet record collection!"
  },
  {
    name: "Johanna Griffin",
    picture: "johanna.jpg",
    title: "Technical Support Engineer",
    twitter: "jkgriffin234",
    bio:
      'A Bay Area native, Johanna is passionate about coding, writing and UX, along with finding new rock climbing, hiking trails, and local food. Previously a "dog person", she has recently re-evaluated her position and has adopted two cats.'
  },
  {
    name: "Adam Zionts",
    picture: "adam.jpg",
    title: "Core Developer",
    github: "zionts",
    bio:
      "Adam moved from one sunshine state to another to join us as a backend services dev. He brings with him expertise in buffalo chicken cooking, spanish speaking, and bungee jumping. He also joins the minority of snowboarders in the office!"
  },
  {
    name: "Nicole Seo",
    picture: "nicole.jpg",
    title: "Product Experience Manager",
    github: "nicseo",
    bio:
      "A Parisian trained pastry chef and French Bulldog lover, you might be surprised to know that Nicole does not have a thick French accent. She does however have a lot of travel stories to share, a great eye for design, and a natural talent for product dev."
  },
  {
    name: "Marie Bowles",
    picture: "marie.jpg",
    title: "People Ops Generalist",
    bio:
      "An East Coast native and part of the “not West Coast” contingent, Marie represents the northern of the two Carolinas at MDG. A coffee-aholic, fitness nut, and lover of music and wine, she’s a Jill of all trades on the People Ops team!"
  },
  {
    name: "Andrew Moehrke",
    picture: "andrew.jpg",
    title: "Sales",
    bio:
      "On winter weekends there's a 80% chance you'll find Andrew shredding the ski slopes of Lake Tahoe. He has a background in electrical engineering and loves soldering together tube amps for his home audio system."
  }
];

export default people;

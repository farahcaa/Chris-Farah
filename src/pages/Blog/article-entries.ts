export type BlogEntryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogEntry = {
  id: string;
  topicSlug: string;
  title: string;
  dateISO: string;
  images?: BlogEntryImage[];
  // Add article body (you can make this markdown later)
  content?: string[];
};

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: "blog-01",
    topicSlug: "international-work-experience",
    title: "Transition to Host Country, Adjustment & Culture Shock",
    dateISO: "2026-01-10",
    images: [
      {
        src: "/family-lunch.JPG",
        alt: "colonge cathedral",
      },
      {
        src: "/art.jpg",
        alt: "museum ludwig art",
      },
      {
        src: "/colonge-dom.jpg",
        alt: "colonge cathedral",
      },
      {
        src: "/german-treats.jpg",
        alt: "german treats",
      },
      {
        src: "/family-dom.jpg",
        alt: "family picture in front of cathedral",
      },
    ],
    content: [
      "I arrived in Germany on January 1st with my family, which I feel incredibly lucky about. Moving to another country can be overwhelming on its own, and having my parents and siblings with me made the transition a lot less intimidating. It allowed me to face early challenges with a support system instead of trying to figure everything out alone. We also treated the beginning of the trip as a chance to explore Europe together before I fully settled into life abroad.",

      "Because I work at Forschungszentrum Jülich, we flew into Frankfurt first and spent some time there adjusting to the time change and getting our bearings. From Frankfurt, we made our way to Cologne, which became our home base for the first part of the trip. Cologne was where everything started to feel real. Navigating trains, luggage, and a new city immediately pushed me out of my comfort zone, but it was exciting at the same time.",

      "Arriving in Cologne by train was one of my first unforgettable moments. I didn’t know what to expect, but I definitely wasn’t expecting such a massive and beautiful cathedral right in the center of the city. Seeing the Cologne Cathedral in person made it clear that I was somewhere very different from home. We spent time walking around, exploring the area, and taking pictures, and it was my first real impression of how old and historic many European cities feel compared to the United States.",

      "While in Cologne, we also visited Museum Ludwig, which I really enjoyed. I don’t usually go out of my way to visit art museums, but this one stood out to me because of how different and modern a lot of the pieces were. It was interesting to see how much contemporary art is valued here and how integrated museums are into everyday city life.",

      "After settling into Cologne, we visited family in Koblenz, where we were able to explore the area and get a local perspective on life in Germany. Having family there made the experience more personal and helped me feel more connected to the country. The following day, we traveled to Bonn to explore even more, which reinforced how well-connected everything is through public transportation. Traveling between cities by train felt very natural and efficient, something I wasn’t as used to back home.",

      "One of the biggest internal challenges during this transition has been the language. I’ve been learning German for almost three years, but trying to speak without being able to fall back on English was a completely different experience. It quickly showed me how little conversational German I actually knew. Simple interactions like ordering food or asking questions felt intimidating at first, but they also pushed me to improve.",

      "After a few weeks, I’m now comfortable ordering food and asking basic questions, which feels like a small but meaningful win. However, understanding native speakers when they talk quickly is still very difficult, and that can be frustrating at times. It’s a reminder that learning a language in a classroom is very different from using it every day in real life.",

      "One thing that surprised me in a good way was the food, especially desserts. German desserts don’t feel overly sweet or heavy, and they don’t leave you feeling weighed down after eating. In the dessert shown in the image, the cream tasted like natural whipped cream with little to no added sugar, which made it feel lighter and more balanced than what I’m used to in the United States. It was simple, but really good.",

      "Overall, Germany doesn’t feel drastically different from the United States outside of the language and the older architecture. I feel that American culture adapts fairly well to European culture, which has made the adjustment easier than I expected. That said, being in a new country has made me more aware of how much I still have to learn, both culturally and personally.",

      "During my time here, I hope to explore more of Germany, visit nearby countries, and see as many historic places and castles as possible. I also hope to continue improving my German. Ich hoffe, dass ich flüssig werde. This experience already feels like a major period of growth, and I’m excited to see how it continues to shape me.",
    ],
  },
  {
    id: "book-01",
    topicSlug: "book-reviews",
    title: "Introduction to my Reading.",
    dateISO: "2026-01-15",
    images: [
      {
        src: "https://www.popsci.com/wp-content/uploads/2024/07/buy_physical_books.jpg?quality=85",
        alt: "Open book on a table",
      },
    ],

    content: [
      "I read a lot of books that are meant to teach you something. Not novels, not fiction, but informational and “help” books that are supposed to make you think a little differently about how things work. Software, design, finance, real estate, productivity, basically anything that helps me build better systems or avoid making the same mistakes twice.",

      "I’ve already read books like The Mythical Man-Month on software planning, Don’t Make Me Think on UX and UI, Rich Dad Poor Dad on finance and mindset, and a bunch of others that all kind of blend together in my head over time. I realized that while I get a lot of value out of reading, I don’t always do a great job of capturing what actually sticks with me once I’m done.",

      "So this section is me fixing that.",

      "From here on out, whenever I finish a book, I’m going to write down the big takeaways, the ideas that made me pause, and the notes I’d actually want to come back to later. This isn’t meant to be a full summary or a formal review. It’s more like a snapshot of what I took away from the book at that point in time. Mostly for me, but if you’re reading this, you’ll get a preview of how I’m thinking and what kinds of ideas I’m trying to learn from.",

      "This post is just an introduction to that process.",

      "The first book I’ll be writing about next is The Book on Managing Rental Properties by Brandon and Heather Turner. Real estate has been something I’ve been slowly learning more about, and this book felt like a good place to start because it’s very practical and very grounded in how things actually work. I’ll be focusing less on summarizing chapters and more on the lessons that felt useful or changed how I look at managing property.",

      "If you’re into informational books, or just curious what I’m reading and learning along the way, welcome. This is where I’ll be dumping my notes as I go.",

      "Enjoy.",
    ],
  },
];

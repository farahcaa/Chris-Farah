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
    id: "blog-02",
    topicSlug: "international-work-experience",
    title: "Local Culture",
    dateISO: "2026-03-1",
    images: [
      {
        src: "https://i.redd.it/2026-carnival-floats-in-d%C3%BCsseldorf-germany-v0-xivil5xcwujg1.jpg?width=1280&format=pjpg&auto=webp&s=0a80cab6408c5380e97f03eeae46c899a30968a6",
        alt: "carnival float",
      },
      {
        src: "https://europa.tips/wordpress/wp-content/uploads/binche_carnival-768x432.webp",
        alt: "people in carnival costume",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn7Vi0p8Ji7tJRu-FLV-0FudpYUZMQ4gQYg&s",
        alt: "carnival float with putin",
      },
    ],
    content: [
      "Culture is something you really notice through day-to-day life more than anything else. Even in a short time abroad, things like how people interact, what they eat, and what they value socially start to stand out. Being here has made it clear that culture isn’t just traditions or holidays, but how people live and treat each other on a regular basis.",

      "One of the biggest cultural experiences so far has been Karneval. It’s a long-standing tradition in this region that dates back centuries and is deeply rooted in local history. Karneval is a day where people are allowed to poke fun at authority and the ruling class. During Karneval, normal routines slow down and the focus shifts toward public celebration and satire. Seeing how seriously people take it makes it clear how important shared traditions and collective expression are in this culture.",

      "Food has also been a big part of experiencing the culture. I've had traditional dishes like schnitzel and Haxe, and overall the food has been consistently really good. There are also a lot of Döner places everywhere, and they're popular quick, affordable, and solid every time. ",

      "Language and everyday social behavior have also shaped my cultural experience. While German is the primary language spoken, people have been very friendly and patient, even when there are language barriers. One moment that stood out to me was when I purchased a bike and was allowed to take it before paying, trusting that I would return later to complete the payment. That level of trust and kindness left a strong impression on me.",

      "Overall, while Karneval has been the most visible cultural highlight, it has been the smaller everyday experiences—shared meals, trust between people, and friendly interactions—that have helped me understand the local culture the most. These moments have made the culture feel welcoming, community-oriented, and rooted in long-standing traditions.",
    ],
  },
  {
    id: "blog-03",
    topicSlug: "international-work-experience",
    title: "Forschungszentrum Jülich & Work Culture",
    dateISO: "2026-04-5",
    images: [
      {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhycologne.de%2Fwp-content%2Fuploads%2F2021%2F10%2Fforschungszentrumjuelich.jpg&f=1&nofb=1&ipt=c545b75b9fad89ddada0e50095c2a8d7c37be734b7b65a8b412c89f9c154afd0",
        alt: "forschungszentrum logo",
      },
      {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.helmholtz.de%2Ffileadmin%2F_processed_%2F2%2F7%2Fcsm_juelich_luftbild_600x402_162c897aaa.jpg&f=1&nofb=1&ipt=d482f2f35aac25f72f01a14020a1f15ac81ac9c03bc9a5499d61800f074f97a9",
        alt: "Forschungszentrum Jülich campus aerial view",
      },
      {
        src: "https://www.basicthinking.de/blog/wp-content/uploads/2025/09/supercomputer-jupiter.jpeg",
        alt: "Jülich's supercomputer Jupiter",
      },
      {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gauss-centre.eu%2Ffileadmin%2Fresearch_projects%2F2016%2FEnv_Energy%2FLaurien_TurboCon_Fig01.jpg&f=1&nofb=1&ipt=ea8218d1b5583152f9c12acebf0836e0f6c9eec721e4a4c5cc9ad0be5a6a058b",
        alt: "Containmentfoam simulation",
      },
      {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fz-juelich.de%2Fde%2Faktuelles%2Fnews%2Fpressemitteilungen%2F2023%2Fkaelter-als-der-weltraum%2F2023_10_10_quant_023_1.jpg%2F%40%40images%2Fimage%2Fgreat&f=1&nofb=1&ipt=be008ac1a396da9e4fc784b7b1bba9dec7e32b72639f78acc8eaf6f515152cb3",
        alt: "Jülich's quantum computer",
      },
    ],
    content: [
      "Working at Forschungszentrum Jülich has been a really interesting experience because it’s not just a normal company, it’s one of the largest research centers in Europe and home to some of the most powerful supercomputers. It’s located in Jülich, Germany, which is a smaller town, but the work being done there is on a global scale. Being in that kind of environment makes it feel like what you’re working on actually matters beyond just the company itself.",

      "The research center was originally founded in the 1950s with a focus on nuclear research, but over time it has expanded into a wide range of fields like energy, climate, and high-performance computing. That evolution is pretty clear when you’re working there because you can see how modern and advanced everything is, especially with the computing infrastructure. It’s a mix of older research roots with very cutting-edge technology.",

      "I work in the Nuclear Waste Management department, also known as IFN-2. The focus there is on safely managing and studying nuclear waste, which involves a lot of simulation and analysis. Even though that sounds very specialized, my role is more on the software and performance side, so I get to contribute in a different way than the traditional research roles.",

      "My position is as a performance engineer, and my main responsibility has been developing scripts to test how systems perform under different conditions. At the start, I was focused more on performance testing, but more recently my work has shifted toward finding memory leaks in applications. A big part of what I’ve been doing is integrating those tests into GitLab CI/CD pipelines so that performance and memory checks run automatically. Day-to-day, that means writing scripts, analyzing logs, debugging issues, and trying to make systems more reliable and efficient.",

      "In terms of workplace culture, it honestly feels pretty similar to what I’ve experienced in the United States, especially in engineering environments. People are focused on their work, communication is pretty direct, and expectations are clear. One small difference I noticed is that people here are more likely to eat lunch together, which might just be a me thing but at home I was used to people eating at their desks or going out separately. Here, it seems more common for teams to take a break and have lunch together, which creates a different kind of social dynamic. It’s a nice way to build camaraderie and take a break from work, and it’s something I’ve come to appreciate.",

      "Comparing Germany to the U.S., the actual work itself is almost identical, especially in software engineering. The tools, workflows, and expectations are all very similar. The main differences are more in lifestyle and structure. There seems to be a stronger emphasis on work-life balance in Germany, and the overall pace feels slightly more steady and less rushed. At the same time, collaboration and productivity are still very high.",

      "Overall, this experience has shown me that while technical work is pretty universal, the way people interact around that work can still vary. The biggest differences haven’t been in the engineering itself, but in the smaller daily habits—like eating together or how people structure their day. Those are the things that make the experience feel different, even when the job itself feels familiar.",
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
  {
    id: "book-02",
    topicSlug: "book-reviews",
    title:
      "The Book on Managing Rental Properties: Introduction & Key Takeaways",
    dateISO: "2026-02-28",
    images: [
      {
        src: "https://th.bing.com/th/id/OIP.dCze_eyCU5sgxyCGXbvvpgHaEK?w=308&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        alt: "Rental property management book cover",
      },
    ],
    content: [
      "One of the most important lessons from the book is strict compliance with fair housing laws. These laws are broad, unforgiving, and violations—intentional or not—can result in serious legal consequences. Landlords must be extremely careful with their language in advertisements, applications, emails, texts, and in-person conversations. Even subtle implications or preferences can be interpreted as discrimination. While certain situations such as owner-occupied house hacking may qualify for limited exemptions, relying on exemptions without legal clarity is risky. The safest approach is to always use neutral, standardized language and apply the same rules to every applicant. Fair housing compliance is not a formality, it must shape how you operate at every level.",

      "The book strongly emphasizes the importance of predefined tenant qualification standards. By setting objective criteria, such as a minimum credit score (e.g., 650+), income requirements (e.g., income at least three times the monthly rent), and clean eviction history, landlords remove emotion from tenant selection. These standards protect the business from risky tenants while also ensuring consistent, defensible decisions. Having clear rules makes it easier to deny unqualified applicants without guilt or second-guessing, and it reinforces professionalism while reducing exposure to fair housing violations.",

      "Being strict but fair is presented as a cornerstone of successful landlording. Rules must be clearly defined, communicated upfront, and enforced consistently regardless of circumstance. Inconsistent enforcement, such as making exceptions for certain tenants, can lead to resentment, operational chaos, and even legal exposure. The book stresses that consistency is not about being harsh, but about being predictable and principled. When tenants know that rules are applied uniformly, disputes decrease and expectations stay aligned. Firm boundaries ultimately reduce stress and long-term headaches.",

      "Organization and documentation are portrayed as non-negotiable systems for landlords. The book advises maintaining detailed files for every tenant and every property. Tenant files should include leases, applications, conversation logs, maintenance requests, notices, and any disputes. Property files should track maintenance histories, repairs, warranties, contractor work, and costs. Staying organized ensures you are prepared for legal disputes, audits, tenant disagreements, or unexpected situations. Documentation is not just administrative, it is your primary form of protection.",

      "The concept of training tenants through positive and negative reinforcement is a subtle but powerful insight from the book. Tenants do not inherently know how to be ideal renters, and it is the landlord's role to set expectations and guide behavior. Positive reinforcement, such as acknowledging timely rent payments or cooperative behavior, encourages compliance, while negative reinforcement—such as enforcing late fees or lease violations, discourages bad habits. The key is to maintain authority without becoming overly friendly. Professional distance preserves respect and ensures the landlord-tenant relationship remains healthy and functional.",

      "Another practical strategy discussed in the book is the use of a 'cash for keys' agreement as an alternative to eviction. When a tenant becomes persistently problematic and it is clear that the situation will likely escalate into a formal eviction, offering a one-time payment in exchange for a voluntary move-out can be a far more efficient solution. While paying a tenant to leave may feel counterintuitive, the reality is that evictions are often expensive, time-consuming, emotionally draining, and can take months to resolve—especially in tenant-friendly jurisdictions. A modest payment, such as $500, can incentivize cooperation, allow the unit to be recovered quickly, and avoid legal fees, court delays, and prolonged vacancy. When handled professionally and documented in writing, cash for keys can be a clean, mutually beneficial exit strategy that protects both time and capital.",

      "The book highlights critical protections when working with contractors, particularly the importance of lien releases. After a contractor completes work and is paid, landlords should always obtain a signed lien waiver confirming the contractor has received full payment and relinquishes the right to file a lien against the property. Without this, contractors may legally place a mechanic's lien on the property, potentially preventing the owner from selling or refinancing until disputes are resolved. The authors also stress thorough vetting of contractors, avoiding full upfront payments, and paying in installments tied to project milestones. Paying for materials directly and rewarding reliable contractors long-term helps mitigate risk while building strong vendor relationships.",
    ],
  },
  {
    id: "book-03",
    topicSlug: "book-reviews",
    title: "Essential Scrum: Introduction & Key Takeaways",
    dateISO: "2026-03-1",
    images: [],
    content: ["currently reading, will post notes and takeaways when done!"],
    // content: ["description of scrum what it is what its based on 'agile principles' eg overview",
    //    "LRM last respospible moment scrum keep options open dont make large decisions until the cost of the decision out weighs the cost not",
    //    " low cost exploration of options via iterative trial and error",
    // "focus on idle work not the idle worker cost of worker not being fully utilized is marginal compared to the cost of idle work not being done eg documenter hired to do the project documentation at the end of the project say costing 2 months vs having them the whole year continually documenting.documenter costs 75k per year vs product being delayed 2 months could cost 500k ","Stick to your commitments at the beggining of the sprint, if the product owner is constantly changing the sprint goals it can and will demotivate the team and lead to a lack of trust and buy in. Of course this is not an end all rule, there are some times when the sprint goal needs to be changed but it should be the exception not the norm. ", "user stories are ___. stories should be independent such that they do not depend on other stories this makes it easier to prioritize necessary work. ", "One thing That I need to work on is not planning so far into the future the book makes a great point about how in scrum development you dont know what direction the product will take yet and it could change on a dime so trying to add things in release 2 and release 3 of a software product is a waste of time and effort as we dont know if that will even be relavent in the future.", " Kenneth tells us in chapter 7 that it is much easier to give a relative estimation versus an exact estimation. In PBI (product backlog item) estimation there are 2 standard techniques story points and ideal days with most people using story points. Story points are decided by the team and are meant to be relative to keep estimations consistent e.g. if creating a single api endpoint is 1 story point then creating a new feature could be upwards of 10. Ideal days in my opinion feels better. Ideal days are exactly what they sound like you estimate idealy how many days the PBI would take. Keep in mind these ideal days are not commitments and it is important to avoid miscommunications. When doing estimation as a mangager or product owner it is important not to count the development teams estimates as commitments as it will cause them to over estimate how long each item will take especially when they have bonuses on the line."," Estimating product development is always a very difficult tasks as you cannot predict what challenges will come up during the course of product development. With that being said it is important to calculate velocity across your sprints and with good data your predictions can become even more accurate. Lets say you have been keeping track and you average on the high end 20 points per sprint and low end 17 you could then based on total story points a feature or product has calculate a rough amount of sprints it will take to compelete. ","making technical debt known to non technical people via another backlog or board is helpful to give them a better understanding of why and what is going on with the product. the author mentions that creating technical debt items in a financial sheet can help business people understand the costs of technical debt but organizations almost never do this. It is important to make technical devt visible and store it in familar places be it in the backlog or a seperate bug list. Debt should be serviced like payments on a car a little every sprint. When encountering technical debt depending on the size the developer should clean up as much as resonably possible and depending on how much mark it down in the appropriate place. The author compares this to how campers try to make the camp grounds cleaner for the people who come after them as this helps all the developers working on the product.", "Roles" Product owner is the connection glue between stakeholders and the scrum team they are responsible for setting the end specifications and ensuring the team produces features in the correct order. The product owner is also responsible for the economics of the product eg the author describes a scenario where a new feature is identified and delaying the release by a few weeks to gain 50% more revenue this is up to the product owner to decide. they also have the ability to cut short sprints and even end the life of a product if the economics of it dont work out. "The scrim masters job is to be a coach to the development team and the prodcut owner. The scrum master acts as an "interference shield" and "impediment remover" for the team ensuring that outside distractions and blockers are dealt with as well as working to resolve issues out of the development teams control. ", "In scrum it is the development teams job to create the business value the product owner defines. What I found interesting is there should be no one to instruct the team who does what it is the teams job to self organize into a system that best fits the work. It is important when assembling a development team to include T shaped skills people with t shaped skills have a deep expertise in one area but also have a breadth of knowledge across multiple areas. This allows the team to be more flexible and self sufficient as they can help each other when needed. It is also important the team carries a musketeer attitude eg all for one and one for all. At no point should and team member say I got my work done you didnt therefore we failed. The team should be working together to ensure the success of the sprint and the product as a whole."],
  },
];

export type NoteEntryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type NoteEntry = {
  id: string;
  topicSlug: string;
  title: string;
  dateISO: string;
  images?: NoteEntryImage[];
  content?: string[];
};

export const NOTE_ENTRIES: NoteEntry[] = [
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

      "Overall, while Karneval has been the most visible cultural highlight, it has been the smaller everyday experiences, shared meals, trust between people, and friendly interactions, that have helped me understand the local culture the most. These moments have made the culture feel welcoming, community-oriented, and rooted in long-standing traditions.",
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
      "Working at Forschungszentrum Jülich has been a really interesting experience because it’s not just a normal company, it’s one of the largest research centers in Europe and home to Europes most powerful supercomputer Jupiter. It’s located in Jülich, Germany, which is a smaller town, but the work being done there is on a global scale. Being in that kind of environment makes it feel like what you’re working on actually matters beyond just the company itself.",

      "The research center was originally founded in the 1950s with a focus on nuclear research, but over time it has expanded into a wide range of fields like energy, climate, and high-performance computing. That evolution is pretty clear when you’re working there because you can see how modern and advanced everything is, especially with the computing infrastructure. It’s a mix of older research roots with very cutting-edge technology.",

      // this here is partly incorrect I was on the ifn yes but we did work on reactor simulations to see what would happen in certain situations
      `I work at Forschungszentrum Jülich on the reactor safety side of their
nuclear research program. The team develops containmentFoam, an open-source
CFD solver built on OpenFOAM that simulates what happens inside a nuclear
reactor containment building during a severe accident — things like hydrogen
mixing, steam distribution, and aerosol transport. The goal is to help
assess safety measures and prevent the kind of containment failures seen
at Fukushima. My role is on the software and performance side, so I
contribute to the tooling rather than the nuclear physics directly.`,

      "My position is as a performance engineer, and my main responsibility has been developing scripts to test how systems perform under different conditions. At the start, I was focused more on performance testing, but more recently my work has shifted toward finding memory leaks in applications. A big part of what I’ve been doing is integrating those tests into GitLab CI/CD pipelines so that performance and memory checks run automatically. Day-to-day, that means writing scripts, analyzing logs, debugging issues, and trying to make systems more reliable and efficient.",

      "In terms of workplace culture, it honestly feels pretty similar to what I’ve experienced in the United States, especially in engineering environments. People are focused on their work, communication is pretty direct, and expectations are clear. One small difference I noticed is that people here are more likely to eat lunch together, which might just be a me thing but at home I was used to people eating at their desks or going out separately. Here, it seems more common for teams to take a break and have lunch together, which creates a different kind of social dynamic. It’s a nice way to build camaraderie and take a break from work, and it’s something I’ve come to appreciate.",

      "Comparing Germany to the U.S., the actual work itself is almost identical, especially in software engineering. The tools, workflows, and expectations are all very similar. The main differences are more in lifestyle and structure. There seems to be a stronger emphasis on work-life balance in Germany, and the overall pace feels slightly more steady and less rushed. At the same time, collaboration and productivity are still very high.",

      "Overall, this experience has shown me that while technical work is pretty universal, the way people interact around that work can still vary. The biggest differences haven’t been in the engineering itself, but in the smaller daily habits, like eating together or how people structure their day. Those are the things that make the experience feel different, even when the job itself feels familiar.",
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
      "One of the most important lessons from the book is strict compliance with fair housing laws. These laws are broad, unforgiving, and violations, intentional or not, can result in serious legal consequences. Landlords must be extremely careful with their language in advertisements, applications, emails, texts, and in-person conversations. Even subtle implications or preferences can be interpreted as discrimination. While certain situations such as owner-occupied house hacking may qualify for limited exemptions, relying on exemptions without legal clarity is risky. The safest approach is to always use neutral, standardized language and apply the same rules to every applicant. Fair housing compliance is not a formality, it must shape how you operate at every level.",

      "The book strongly emphasizes the importance of predefined tenant qualification standards. By setting objective criteria, such as a minimum credit score (e.g., 650+), income requirements (e.g., income at least three times the monthly rent), and clean eviction history, landlords remove emotion from tenant selection. These standards protect the business from risky tenants while also ensuring consistent, defensible decisions. Having clear rules makes it easier to deny unqualified applicants without guilt or second-guessing, and it reinforces professionalism while reducing exposure to fair housing violations.",

      "Being strict but fair is presented as a cornerstone of successful landlording. Rules must be clearly defined, communicated upfront, and enforced consistently regardless of circumstance. Inconsistent enforcement, such as making exceptions for certain tenants, can lead to resentment, operational chaos, and even legal exposure. The book stresses that consistency is not about being harsh, but about being predictable and principled. When tenants know that rules are applied uniformly, disputes decrease and expectations stay aligned. Firm boundaries ultimately reduce stress and long-term headaches.",

      "Organization and documentation are portrayed as non-negotiable systems for landlords. The book advises maintaining detailed files for every tenant and every property. Tenant files should include leases, applications, conversation logs, maintenance requests, notices, and any disputes. Property files should track maintenance histories, repairs, warranties, contractor work, and costs. Staying organized ensures you are prepared for legal disputes, audits, tenant disagreements, or unexpected situations. Documentation is not just administrative, it is your primary form of protection.",

      "The concept of training tenants through positive and negative reinforcement is a subtle but powerful insight from the book. Tenants do not inherently know how to be ideal renters, and it is the landlord's role to set expectations and guide behavior. Positive reinforcement, such as acknowledging timely rent payments or cooperative behavior, encourages compliance, while negative reinforcement, such as enforcing late fees or lease violations, discourages bad habits. The key is to maintain authority without becoming overly friendly. Professional distance preserves respect and ensures the landlord-tenant relationship remains healthy and functional.",

      "Another practical strategy discussed in the book is the use of a 'cash for keys' agreement as an alternative to eviction. When a tenant becomes persistently problematic and it is clear that the situation will likely escalate into a formal eviction, offering a one-time payment in exchange for a voluntary move-out can be a far more efficient solution. While paying a tenant to leave may feel counterintuitive, the reality is that evictions are often expensive, time-consuming, emotionally draining, and can take months to resolve, especially in tenant-friendly jurisdictions. A modest payment, such as $500, can incentivize cooperation, allow the unit to be recovered quickly, and avoid legal fees, court delays, and prolonged vacancy. When handled professionally and documented in writing, cash for keys can be a clean, mutually beneficial exit strategy that protects both time and capital.",

      "The book highlights critical protections when working with contractors, particularly the importance of lien releases. After a contractor completes work and is paid, landlords should always obtain a signed lien waiver confirming the contractor has received full payment and relinquishes the right to file a lien against the property. Without this, contractors may legally place a mechanic's lien on the property, potentially preventing the owner from selling or refinancing until disputes are resolved. The authors also stress thorough vetting of contractors, avoiding full upfront payments, and paying in installments tied to project milestones. Paying for materials directly and rewarding reliable contractors long-term helps mitigate risk while building strong vendor relationships.",
    ],
  },
  {
    id: "book-03",
    topicSlug: "book-reviews",
    title: "Essential Scrum: Key Takeaways",
    dateISO: "2026-03-1",
    images: [],
    content: [
      "Scrum is a framework for building products through short, iterative cycles instead of trying to plan and deliver everything at once. The basic structure involves a product owner, a Scrum master, and a development team working from a prioritized product backlog. Work is selected for a sprint, completed in a fixed timebox, reviewed, and then used to inform the next round of planning. The goal is to keep progress visible, create frequent feedback loops, and allow the product to adapt as more is learned.",

      "The Last Responsible Moment is the point where a decision should be made before waiting any longer becomes more expensive than deciding. In Scrum, this means keeping options open when the team does not yet have enough information. This should be applied when product direction, architecture, or feature scope is uncertain. Instead of locking into a large decision early, the team should use small experiments, prototypes, and incremental delivery to learn first.",

      "Scrum should optimize for reducing idle work, not simply keeping every worker busy at all times. A fully utilized person is not automatically the same thing as an efficient system. Work sitting unfinished can create larger costs than a person having extra capacity. For example, delaying documentation until the end of a project might save salary in the short term, but if the product release is delayed because documentation was not built continuously, the delay can cost far more. This applies anywhere work waits in queues, handoffs, reviews, testing, or documentation.",

      "Sprint commitments should be stable enough to build trust. Once a sprint goal is agreed on, the team should be able to focus on that goal without constant changes from the product owner or stakeholders. Changes can happen when something truly important appears, but they should be treated as exceptions. This should be applied when managing stakeholder requests during a sprint: new requests should usually go into the backlog for future prioritization instead of disrupting the current sprint.",

      "User stories are the main way work is described in the product backlog. A user story explains a piece of value from the user's perspective, usually by describing who the user is, what they need, and why it matters. The backlog should be written in user stories where possible, then ranked by priority so the most valuable work is addressed first. The product owner is responsible for ordering the backlog, while the development team is responsible for estimating the effort and deciding how the work will be implemented.",

      "User stories should be independent whenever possible. If stories depend too heavily on each other, it becomes harder to prioritize work, harder to move items around, and harder to deliver value incrementally. Independent stories make planning cleaner because the team can select the most valuable items without being trapped by unnecessary sequencing. This should be applied when writing or refining backlog items: split stories so each one can deliver useful value on its own.",

      "Long-range planning should stay lightweight. Scrum works best when teams accept that product direction can change as new information appears. Detailed plans for release two or release three can become waste if the product changes before those releases arrive. This does not mean there should be no vision. It means future plans should stay flexible, with the highest detail reserved for the work closest to implementation.",

      "Estimation should be treated as a planning tool, not a promise. Product backlog items can be estimated with story points or ideal days. Story points are relative estimates. For example, if a small API endpoint is one story point, a larger feature might be ten points. The purpose is to compare work consistently without pretending the team can predict exact timelines.",

      "Ideal days estimate how many uninterrupted, ideal workdays a product backlog item would take. This can be easier to understand, but it still should not be treated as a commitment. Product owners and managers should avoid using estimates as promises, performance targets, or bonus criteria. When estimates are used against developers, teams are incentivized to overestimate in order to protect themselves.",

      "Velocity should be used to forecast, not pressure the team. If a team usually completes between 17 and 20 story points per sprint, that range can help estimate how many sprints a feature might take. The forecast becomes more useful as more real sprint data is collected. This should be applied during release planning, where the goal is to make realistic predictions based on actual team performance instead of guesses.",

      "Technical debt should be visible to both technical and non-technical stakeholders. If debt stays hidden, product decisions will ignore the cost of maintaining and improving the system. Debt can be tracked in the product backlog, a separate board, or a bug list, but it needs to live somewhere familiar to decision makers. This should be applied whenever cleanup work, fragile code, missing tests, or infrastructure problems begin to slow delivery.",

      "Technical debt should be serviced continuously. A small amount should be addressed every sprint, similar to making regular payments on debt. When developers encounter technical debt, they should clean up what is reasonable and record anything larger for future prioritization. The operating rule should be to leave the codebase better than it was found, so small improvements compound over time.",

      "The product owner connects stakeholders to the Scrum team. They define what the product should become, order the backlog, and make economic tradeoffs. For example, if delaying a release by a few weeks could increase revenue by 50%, that decision belongs to the product owner. The product owner can also stop a sprint or end a product when the economics no longer make sense.",

      'The Scrum master coaches the development team and the product owner in using Scrum effectively. Their job is to remove blockers, reduce outside interference, and help the team improve how it works. The Scrum master acts as an "interference shield" and an "impediment remover." This role should be applied when the team is being distracted, blocked, or pulled away from the sprint goal.',

      "The development team creates the business value defined by the product owner. The team should self-organize rather than wait for someone to assign every task from above. This means the team decides how to complete the work and how to divide responsibilities. The team should be accountable for the sprint goal as a whole, not just for individual task completion.",

      "T-shaped skills make Scrum teams more flexible. A T-shaped person has deep expertise in one area and enough breadth to help in related areas. Teams should be built with enough overlapping skills that work can continue even when one person is busy or unavailable. This supports the expectation that the team succeeds or fails together, rather than each person only protecting their own assigned work.",

      "Managers still matter in a Scrum organization, but their role changes. Instead of assigning every task to the development team, managers can provide functional area leadership. For example, frontend, backend, QA, and other managers can coordinate standards across teams, support career growth, and share best practices. This helps keep quality consistent without taking control away from self-organizing teams. refer to image above for a visual of how this works.",

      "Planning in Scrum happens at several levels: strategy, portfolio, product, release, sprint, and daily planning. Strategy defines the overall direction. Portfolio planning decides which products should be started, continued, changed, or ended. Product and release planning organize larger goals. Sprint and daily planning focus on the immediate work. The closer the work is to implementation, the more detailed the plan should be.",

      "The practical use of Scrum is to create a system for learning while building. It should make work visible, keep priorities ordered, protect team focus, and use feedback to guide what happens next. Scrum is not useful when it becomes rigid process for its own sake. It is useful when it helps teams deliver value, inspect results, and adapt based on what they learn.",
    ],
  },
  {
    id: "book-04",
    topicSlug: "book-reviews",
    title: "The Mom Test: Key Takeaways",
    dateISO: "2026-10-04",
    content: [
      "Coming soon. The Mom Test is about getting honest feedback on an idea by asking better questions. Instead of pitching the idea directly and inviting people to be polite, the book focuses on learning from real behavior, past problems, and concrete experiences so the feedback is useful instead of just encouraging.",
    ],
  },
  {
    id: "lifting-01",
    topicSlug: "weight-lifting",
    title: "Weight Lifting Notes",
    dateISO: "2026-05-03",
    content: [
      "Coming soon. This will be where I keep notes on training, lifting progress, programming ideas, and what I’m learning in the gym.",
    ],
  },
];

export const chapterContent = {
  chapterName: "Delta Upsilon",
  chapterSubtitle: "DePauw Chapter",

  hero: {
    eyebrow: "Building Better Men Since 1887",
    title: "The DePauw Chapter of Delta Upsilon",
    lead: "The DePauw Chapter of Delta Upsilon is a brotherhood built on friendship, character, culture, justice, leadership, service, and lifelong connection. Established at DePauw in 1887, the chapter reflects DU's mission of Building Better Men through service, leadership development, and personal growth.",
    stats: [
      { value: "1887", label: "Established at DePauw University" },
      { value: "1834", label: "Founded nationally at Williams College" },
      { value: "Old Gold", label: "and Sapphire Blue define the chapter colors" },
    ],
    badges: ["Non-Secret Heritage", "Leadership", "Service"],
  },

  about: {
    eyebrow: "About Delta Upsilon",
    title: "A Brotherhood Built on Public Values",
    paragraphs: [
      "Founded in 1834 at Williams College, Delta Upsilon is one of the oldest men's college fraternities in North America and the first founded as non-secret. DU's identity is rooted in a simple idea: our values should be known, our mission should be visible, and our brotherhood should be judged by the way we live.",
      "At DePauw, Delta Upsilon has carried that legacy forward since 1887. Guided by the principles of Friendship, Character, Culture, and Justice, the chapter is committed to building better men through leadership, service, brotherhood, and lifelong growth.",
    ],
    heritageCards: [
      {
        title: "Public Values",
        text: "Our principles are not hidden. DU brothers are challenged to live openly, lead with character, and represent the fraternity through their actions.",
      },
      {
        title: "Better Men, Better Leaders",
        text: "The chapter experience is built around growth: becoming a better friend, student, leader, servant, and brother.",
      },
      {
        title: "DePauw DU Since 1887",
        text: "For more than a century, DePauw DU has been part of campus life, connecting generations of brothers through the chapter, the house, and the alumni network.",
      },
    ],
  },

  principles: {
    eyebrow: "Our Principles",
    title: "The four principles that define Delta Upsilon.",
    description:
      "These principles are central to DU's identity and should feel distinctly DePauw when you update the final copy with chapter stories and examples.",
    items: [
      {
        title: "Promotion of Friendship",
        text: "Brotherhood that lasts beyond four years and grows stronger through shared experiences in the house, on campus, and after graduation.",
      },
      {
        title: "Development of Character",
        text: "Holding one another accountable, building trust, and helping members grow as leaders, friends, and men of integrity.",
      },
      {
        title: "Diffusion of Liberal Culture",
        text: "Learning from different backgrounds, ideas, majors, hometowns, and perspectives inside one chapter community.",
      },
      {
        title: "Advancement of Justice",
        text: "Serving others, acting fairly, and carrying the chapter's values into philanthropy, campus life, and everyday decisions.",
      },
    ],
  },

  brotherhood: {
    eyebrow: "Brotherhood",
    title: "More Than a House. A Brotherhood.",
    description:
      "This section should show what it feels like to be a DU at DePauw: close friendships, active traditions, campus involvement, and the kind of chapter life that keeps alumni connected long after graduation.",
    experiences: [
      {
        title: "House Traditions",
        text: "Use this space to highlight the role of 626 East Seminary in chapter culture: everyday life, chapter meetings, meals, traditions, and memories that become part of the alumni story.",
      },
      {
        title: "Campus Life and Little 5",
        text: "Show the energy of DU through intramurals, Little 5, family weekend, social events, and the moments that make the chapter feel active and visible on campus.",
      },
      {
        title: "Academic and Leadership Support",
        text: "Brotherhood should also look like mentorship, accountability, academic encouragement, and members stepping into leadership roles across the chapter and the university.",
      },
    ],
  },

  geography: {
    eyebrow: "Brotherhood Footprint",
    title: "Brothers from across the country and around the world.",
    description:
      "A map is one of the strongest ways to show that the chapter brings together men from different backgrounds and places. Visitors should be able to click pins and immediately see the breadth of the brotherhood.",
    highlights: [
      { value: "National", label: "reach across the United States" },
      { value: "Global", label: "space to showcase international brothers" },
      { value: "Interactive", label: "click pins to reveal hometowns and stories" },
    ],
    origins: [] as {
      id: string;
      label: string;
      shortLabel?: string;
      lat: number;
      lng: number;
      count: string;
      blurb: string;
      examples: string[];
    }[],
  },

  academics: {
    eyebrow: "Academics",
    title: "A chapter with real academic breadth.",
    description:
      "A majors box works best when it gives one strong number and then backs it up with visible variety. This helps prospective members, families, and alumni immediately see that the chapter is serious, diverse, and well-rounded.",
    majorsCount: "20+",
    majorsLabel: "majors and interdisciplinary programs represented across the chapter",
    groups: [
      {
        name: "Business and Economics",
        majors: ["Economics", "Accounting", "Management", "Finance"],
      },
      {
        name: "STEM and Analytics",
        majors: ["Computer Science", "Data Science", "Biochemistry", "Mathematics"],
      },
      {
        name: "Humanities and Social Sciences",
        majors: ["Political Science", "History", "Philosophy", "Psychology"],
      },
      {
        name: "Creative and Pre-Professional",
        majors: ["Communication", "Media Studies", "Music", "Pre-Law", "Pre-Med"],
      },
    ],
  },

  alumni: {
    eyebrow: "Alumni Network",
    title: "A Brotherhood That Lasts Beyond DePauw",
    description:
      "DePauw DU is a lifelong network of brothers connected by shared history, mentorship, service, and pride in the chapter. Whether you want to mentor an undergraduate brother, reconnect with alumni, read the latest chapter news, or support the house at 626 East Seminary, there is always a way to stay involved.",
    features: [
      {
        title: "Become a Mentor",
        text: "Share your experience with current brothers and help them navigate internships, careers, leadership opportunities, and life after DePauw.",
        href: "https://forms.gle/CxWLJEfEWEetvWeX6",
      },
      {
        title: "Update Your Contact Information",
        text: "Stay connected with chapter news, alumni events, reunion weekends, newsletters, and opportunities to support the brotherhood.",
        href: "https://forms.gle/CxWLJEfEWEetvWeX6",
      },
      {
        title: "Read the Latest Newsletter",
        text: "Catch up on chapter updates, alumni stories, campus events, brotherhood highlights, and the latest news from 626 East Seminary.",
        href: "https://forms.gle/CxWLJEfEWEetvWeX6",
      },
      {
        title: "Support the Chapter",
        text: "Help preserve the house, strengthen the brotherhood, and invest in the next generation of DePauw DU brothers.",
        href: "https://www.deltau.org/depauw",
      },
    ],
  },

  recruitment: {
    eyebrow: "Recruitment",
    title: "For men who want more than a social experience.",
    description:
      "Recruitment should speak directly to students who want to lead, serve, grow, and contribute to something bigger than themselves. Make it clear that DU is looking for men who value accountability, public values, campus involvement, and lifelong brotherhood.",
    points: [
      "Leadership and service over empty status",
      "Brotherhood without secrecy",
      "Academic and personal support",
      "Access to a lifelong alumni network",
    ],
    cta: "Interested in Joining? Contact Recruitment",
  },

  families: {
    eyebrow: "Parents and Families",
    title: "A values-based chapter families can understand and trust.",
    description:
      "This section helps parents and families understand that DU is not only social. It is developmental, values-driven, and built around public principles, leadership, service, academic expectations, and alumni mentorship.",
    items: [
      "What DU stands for and why its non-secret heritage matters",
      "Values-based brotherhood and clear expectations",
      "Academic support and leadership opportunities",
      "Family Weekend, chapter contact points, and ways to ask questions",
    ],
  },

  philanthropy: {
    eyebrow: "Service and Philanthropy",
    title: "Leadership in service should be visible and measurable.",
    description:
      "DU's mission includes service and leadership development, so this section should show what the chapter is doing locally: philanthropy, campus service, Little 5 fundraising, and the impact of chapter-wide effort.",
    initiatives: [
      "Little 5 fundraiser support",
      "United Way of Central Indiana youth literacy fundraising",
      "Community service events",
      "Campus service and philanthropy updates",
    ],
    fundraiser: {
      title: "Support DU Little 5",
      text: "Our riders have been training hard, and every dollar raised supports United Way of Central Indiana's youth literacy work while also contributing to our Little 5 competition effort.",
      progressLabel: "Fundraising Goal",
      progressValue: 68,
    },
  },

  leadership: {
    eyebrow: "Leadership",
    title: "A chapter that looks organized, accountable, and approachable.",
    description:
      "Show the executive board and key chairs with photos, class year, major, hometown, and a contact path. Even placeholder cards help the page feel more complete and trustworthy.",
    officers: [
      { role: "President", name: "Add Name", year: "Class Year", major: "Major", hometown: "Hometown" },
      { role: "Vice President", name: "Add Name", year: "Class Year", major: "Major", hometown: "Hometown" },
      { role: "Recruitment Chair", name: "Add Name", year: "Class Year", major: "Major", hometown: "Hometown" },
      { role: "Alumni Relations Chair", name: "Add Name", year: "Class Year", major: "Major", hometown: "Hometown" },
      { role: "Philanthropy Chair", name: "Add Name", year: "Class Year", major: "Major", hometown: "Hometown" },
      { role: "Academic Chair", name: "Add Name", year: "Class Year", major: "Major", hometown: "Hometown" },
    ],
  },

  history: {
    eyebrow: "History of DePauw DU",
    title: "A Legacy Since 1887",
    description:
      "This timeline connects Delta Upsilon's national founding, DePauw's own history, the chapter house at 626 East Seminary, and the brothers who continue carrying the legacy forward today.",
    timeline: [
      {
        year: "1834",
        title: "Founded at Williams College",
        description:
          "Delta Upsilon was founded on November 4, 1834, at Williams College in Williamstown, Massachusetts. Nationally, DU is recognized as the sixth-oldest men's college fraternity and the first fraternity founded as non-secret, giving the organization a distinctive public identity built on openness, accountability, and principle.",
      },
      {
        year: "1887",
        title: "Established at DePauw",
        description:
          "The DePauw chapter of Delta Upsilon was established in 1887, just a few years after Indiana Asbury College became DePauw University in 1884. Since then, DU has been part of DePauw's long Greek life tradition and one of the chapter communities that helped shape campus life across generations.",
      },
      {
        year: "1930",
        title: "The House at 626 East Seminary",
        description:
          "The chapter house at 626 E. Seminary Street has become one of the most visible symbols of DePauw DU. Built in 1930, the house is part of the Eastern Enlargement Historic District, which is listed on the National Register of Historic Places. More than just a place to live, 626 has served as a chapter home, a gathering place for brothers, and a lasting symbol of alumni memory, pride, and stewardship.",
      },
      {
        year: "Today",
        title: "Carrying the Legacy Forward",
        description:
          "Today, DePauw DU continues to carry forward a legacy rooted in Delta Upsilon's founding principles: the Promotion of Friendship, the Development of Character, the Diffusion of Liberal Culture, and the Advancement of Justice. The current chapter builds on that history through brotherhood, service, leadership, recruitment, alumni connection, and a continued commitment to strengthening the next generation of DePauw DU brothers.",
      },
    ],
  },

  giving: {
    eyebrow: "Giving",
    title: "Give Back to the Brotherhood That Built You",
    description:
      "The DePauw DU experience does not end at graduation. Your support helps preserve the house at 626 East Seminary, strengthen the undergraduate chapter, and carry forward a brotherhood that has shaped generations of DePauw men.",
    url: "https://www.deltau.org/depauw",
    buttonLabel: "Give to DePauw DU",
    allowEmbed: false,
    reasons: [
      "Preserve the House — Protect and improve the chapter home at 626 East Seminary.",
      "Support Student Leaders — Invest in leadership, service, programming, and undergraduate opportunities.",
      "Carry the Legacy Forward — Help keep DePauw DU strong for the brothers who come next.",
    ],
  },

  quickLinks: [
    { label: "Delta Upsilon International", href: "https://www.deltau.org/" },
    { label: "DePauw Greek Life", href: "https://www.depauw.edu/campus-life/greek-life/" },
    { label: "Instagram", href: "https://www.instagram.com/deltaupsilondpu/" },
    { label: "Jump to Contact", href: "#contact" },
  ],

  contactDetails: [
    { label: "Chapter House", value: "626 East Seminary Street, Greencastle, IN 46135" },
    { label: "Email", value: "depauwdu@gmail.com" },
  ],
};

export const WP = 'https://www.fiveplay.com/wp-content/uploads';

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  img: string;
  body: string;
}

export interface TeamMember {
  name: string;
  img: string;
  bio: string;
}

export interface CaseStudy {
  name: string;
  img: string;
  excerpt: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'About Us', href: '#about-us' },
  { label: 'What We Do', href: '#we-do' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact Us', href: '#contact-us' },
];

export const services: Service[] = [
  {
    title: 'Events & Launches',
    img: `${WP}/2022/12/images4.jpeg`,
    body: 'Product launches and events are central to what we do. Delivering bespoke experiences that meet the needs of a variety of different brands, we take a personal approach to every brief. Be it a corporate party, a product launch or a round table event, we create campaigns that both tell an engaging story and that capture the hearts and minds of your audience.',
  },
  {
    title: 'Influencer Engagement',
    img: `${WP}/2022/12/web_header___amara_and_kris_492x209__false__true.jpg`,
    body: 'We believe that content is king and that advocacy is key to delivering brand engagement and trust. We have an extensive network of influencers across multiple sectors with which we have built long-term relationships. Our focus is on integrating influencer relations into a broader communications programme to build communities which drive business growth.',
  },
  {
    title: 'Brand Strategy & Messaging',
    img: `${WP}/2022/12/hanbury-st.jpg`,
    body: "A brand is what a brand does which is why our focus is on getting under the skin of a company's actions, behaviours and beliefs. Invested in creating cultures, we work closely with clients on their values and tone of voice, brand strategies and creative programmes that help to increase awareness, change or reinforce perceptions and build customer loyalty and value.",
  },
  {
    title: 'Media Relations & Storytelling',
    img: `${WP}/2022/12/East-Busway-Photo-by-PGH-Murals-800x520-1.jpg`,
    body: 'We pride ourselves on our media relationships which have been built over many years. Recognising that a one size fits all approach does not work, we craft each story individually in a way that meets the business needs of the brand, the journalist who is writing it and the person who is reading it. Every great moment starts with a great story.',
  },
  {
    title: 'Reputation Management',
    img: `${WP}/2022/12/99b2bf6b15e99d47d3b1cba.jpeg`,
    body: 'With a proven track record in protecting and enhancing the reputation of brands and business leaders, we are experts in analysing reputational needs and in building strategic programmes that deliver optimal results. Part of this includes identifying issues before they arise so that we can stay one step ahead of what is happening around us.',
  },
  {
    title: 'Media Training',
    img: `${WP}/2022/12/images4.jpeg`,
    body: 'Working with a team of experienced media experts, we offer extensive training for those who want to learn how to build their profile, effectively promote their brand or secure great coverage. In the media and influencer world, where first impressions last, we will arm you with the skills and confidence to deliver the very best result every time.',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Jules, CMPRCA',
    img: `${WP}/2026/02/jules_new.png`,
    bio: "With 20+ years in the industry, and as the former Global VP of Comms for both HTC and Deezer, Jules is a seasoned brand communications expert who quickly gets to the heart of what a company needs to deliver business growth. A strategic thinker with a hands on attitude, she adopts an omni-channel approach to building communications strategies and creative campaigns that deliver strong awareness and engagement. She also knows how to turn the complicated into the easy. Ultimately she wants to work for companies where she can help shape their future. Jules is currently the Chair of the Public Relations & Communications Association Council (CMPRCA).",
  },
  {
    name: 'Sarah',
    img: `${WP}/2022/11/2.png`,
    bio: "As FIAB's lead for Germany, Sarah Schindler has worked in entertainment, tech and culture for more than fifteen years as both a freelancer and a journalist. Her heart beats for good stories, convincing products and strategies that satisfy partners as well as media outlets and readers. When she is not on (business) trips, she works from Cologne, Germany, where she's always on the lookout for new ice cream inspirations, watches tons of (mostly good) movies and plays story driven video games.",
  },
  {
    name: 'Jack',
    img: `${WP}/2026/02/jack_new.png`,
    bio: 'Jack has worked in the PR and Branding space for the past nine years – focusing mostly on transformative tech and video games. In these roles, Jack has overseen product launch campaigns, crisis communications, long term strategic planning and brand building. Before that, Jack worked as a journalist for a national newspaper in the UAE and also spent a spell in the French Alps as a chef. Away from work, Jack is an avid snowboarder and cook – and is also a huge fan of video games.',
  },
  {
    name: 'Ross',
    img: `${WP}/2026/02/ross_new.png`,
    bio: 'Ross started his PR journey in the property industry, amassing four years of experience there before joining Five in a Boat, where he could follow his true passions in video games and tech. He has helped secure coverage across the video game, EV and health-tech industry in the national press. Originally from South Africa, Ross has lived in India, the Netherlands and now the UK. Outside of work, Ross is a huge sports fan – regularly attending his beloved Arsenal play in the Premier League.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: 'No More Robots',
    img: `${WP}/2026/02/no-more-robots-logo.png`,
    excerpt:
      "No More Robots engaged Five Play to strategise and execute a reputational growth campaign to showcase founder Mike Rose's thought leadership credentials. To date, we have secured strong regional coverage that has allowed us to secure national pieces – including with Tech Radar and The Yorkshire Post.",
    href: 'https://www.fiveplay.com/no-more-robots/',
  },
  {
    name: 'Lockwood Publishing',
    img: `${WP}/2022/12/lkwd.jpg`,
    excerpt:
      'Lockwood Publishing engaged Five Play as its B2B and B2C agency on a retainer basis to support the company with brand awareness and media relations across multiple campaigns.',
    href: 'https://www.fiveplay.com/lockwood-publishing/',
  },
  {
    name: 'Go Mate',
    img: `${WP}/2022/12/mate.jpg`,
    excerpt:
      'Five Play was engaged by Go Mate on the run up to the launch of its all-natural energy drink product – building brand awareness and driving consumer and trade media coverage.',
    href: 'https://www.fiveplay.com/go-mate/',
  },
  {
    name: 'Arctic7',
    img: `${WP}/2022/12/arctic7.jpg`,
    excerpt:
      'Arctic7 engaged Five Play as its B2B and B2C agency on a retainer basis to support multiple activity streams including brand awareness, product launches and corporate communications.',
    href: 'https://www.fiveplay.com/arctic7/',
  },
  {
    name: 'Antstream Arcade',
    img: `${WP}/2022/11/antstream-arcade.jpg`,
    excerpt:
      "Antstream originally engaged Five in a Boat as its B2B communications agency with a view to raising the profile of the world's largest streaming service for retro games.",
    href: 'https://www.fiveplay.com/antstream-arcade/',
  },
  {
    name: 'Challengermode',
    img: `${WP}/2022/11/challengermode.jpg`,
    excerpt:
      'Swedish esports brand Challengermode originally engaged us to publicise its $12 million Series A investment round, leading to sustained brand growth across key markets.',
    href: 'https://www.fiveplay.com/challengermode/',
  },
  {
    name: 'Jagex',
    img: `${WP}/2022/11/X-jagex-1.jpg`,
    excerpt:
      'We were originally contracted by Jagex to support with media training and messaging for the launch of its third major IP – a relationship that expanded into full-service PR.',
    href: 'https://www.fiveplay.com/jagex/',
  },
  {
    name: 'JXP Partners',
    img: `${WP}/2026/02/jagex-partners-logo-248x300.png`,
    excerpt:
      'We launched the JXP proposition as a unique alternative for third party publishing groups within video games. Five Play generated coverage in key games titles, increased social engagement and secured speaking spots – culminating in the signing of three new development partners.',
    href: 'https://www.fiveplay.com/jxp-partners/',
  },
];

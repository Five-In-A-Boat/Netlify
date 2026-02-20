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
  body: string;
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
    img: '/images/image_elite02_ls.avif',
    body: 'Product launches and events are central to what we do. Delivering bespoke experiences that meet the needs of a variety of different brands, we take a personal approach to every brief. Be it a corporate party, a product launch or a round table event, we create campaigns that both tell an engaging story and that capture the hearts and minds of your audience.',
  },
  {
    title: 'Influencer Engagement',
    img: '/images/image_wipeout_sq.avif',
    body: 'We believe that content is king and that advocacy is key to delivering brand engagement and trust. We have an extensive network of influencers across multiple sectors with which we have built long-term relationships. Our focus is on integrating influencer relations into a broader communications programme to build communities which drive business growth.',
  },
  {
    title: 'Brand Strategy & Messaging',
    img: '/images/image_burnout_sq.avif',
    body: "A brand is what a brand does which is why our focus is on getting under the skin of a company's actions, behaviours and beliefs. Invested in creating cultures, we work closely with clients on their values and tone of voice, brand strategies and creative programmes that help to increase awareness, change or reinforce perceptions and build customer loyalty and value.",
  },
  {
    title: 'Media Relations & Storytelling',
    img: '/images/image_manic_sq.avif',
    body: 'We pride ourselves on our media relationships which have been built over many years. Recognising that a one size fits all approach does not work, we craft each story individually in a way that meets the business needs of the brand, the journalist who is writing it and the person who is reading it. Every great moment starts with a great story.',
  },
  {
    title: 'Reputation Management',
    img: '/images/image_lemming_sq.avif',
    body: 'With a proven track record in protecting and enhancing the reputation of brands and business leaders, we are experts in analysing reputational needs and in building strategic programmes that deliver optimal results. Part of this includes identifying issues before they arise so that we can stay one step ahead of what is happening around us.',
  },
  {
    title: 'Media Training',
    img: '/images/image_arkham_pt.avif',
    body: 'Working with a team of experienced media experts, we offer extensive training for those who want to learn how to build their profile, effectively promote their brand or secure great coverage. In the media and influencer world, where first impressions last, we will arm you with the skills and confidence to deliver the very best result every time.',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Jules, CMPRCA',
    img: '/images/team_jules_sq.avif',
    bio: "With 20+ years in the industry, and as the former Global VP of Comms for both HTC and Deezer, Jules is a seasoned brand communications expert who quickly gets to the heart of what a company needs to deliver business growth. A strategic thinker with a hands on attitude, she adopts an omni-channel approach to building communications strategies and creative campaigns that deliver strong awareness and engagement. She also knows how to turn the complicated into the easy. Ultimately she wants to work for companies where she can help shape their future. Jules is currently the Chair of the Public Relations & Communications Association Council (CMPRCA).",
  },
  {
    name: 'Sarah',
    img: '/images/team_sarah_sq.avif',
    bio: "As FIAB's lead for Germany, Sarah Schindler has worked in entertainment, tech and culture for more than fifteen years as both a freelancer and a journalist. Her heart beats for good stories, convincing products and strategies that satisfy partners as well as media outlets and readers. When she is not on (business) trips, she works from Cologne, Germany, where she's always on the lookout for new ice cream inspirations, watches tons of (mostly good) movies and plays story driven video games.",
  },
  {
    name: 'Jack',
    img: '/images/team_jack_sq.avif',
    bio: 'Jack has worked in the PR and Branding space for the past nine years – focusing mostly on transformative tech and video games. In these roles, Jack has overseen product launch campaigns, crisis communications, long term strategic planning and brand building. Before that, Jack worked as a journalist for a national newspaper in the UAE and also spent a spell in the French Alps as a chef. Away from work, Jack is an avid snowboarder and cook – and is also a huge fan of video games.',
  },
  {
    name: 'Ross',
    img: '/images/team_ross_sq.avif',
    bio: 'Ross started his PR journey in the property industry, amassing four years of experience there before joining Five in a Boat, where he could follow his true passions in video games and tech. He has helped secure coverage across the video game, EV and health-tech industry in the national press. Originally from South Africa, Ross has lived in India, the Netherlands and now the UK. Outside of work, Ross is a huge sports fan – regularly attending his beloved Arsenal play in the Premier League.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: 'No More Robots',
    img: '/images/no-more-robots-logo.png',
    excerpt:
      "No More Robots engaged Five Play to strategise and execute a reputational growth campaign to showcase founder Mike Rose's thought leadership credentials.",
    body: "No More Robots engaged Five Play to strategise and execute a reputational growth campaign to showcase founder Mike Rose's thought leadership credentials. To date, we have secured strong regional coverage that has allowed us to secure national pieces – including with Tech Radar and The Yorkshire Post.",
  },
  {
    name: 'Lockwood Publishing',
    img: '/images/lkwd.jpg',
    excerpt:
      'Lockwood Publishing engaged Five Play as its B2B and B2C agency on a retainer basis to support the company with brand awareness and media relations across multiple campaigns.',
    body: "Lockwood Publishing engaged Five Play as its B2B and B2C agency on a retainer basis to support the company with structural changes, with increasing media awareness of its metaverse social game, Avakin Life, and with refreshing the company's overarching values, vision and mission. As a result of this work, Lockwood's Senior Director of Corporate Brand and Communications has been invited to speak on panels at key industry events, and brand coverage has been achieved in key gaming titles, giving Lockwood's CEO the opportunity to speak about how the company plans to move into Web3 and interoperability in the future.",
  },
  {
    name: 'Go Mate',
    img: '/images/mate.jpg',
    excerpt:
      'Five Play was engaged by Go Mate on the run up to the launch of its all-natural energy drink product – building brand awareness and driving consumer and trade media coverage.',
    body: 'Five Play was engaged by Go Mate on the run up to the launch of its all-natural energy drink product – aimed at the competitive and casual gaming market. From leveraging B2B credentials and securing thought leadership opportunities alongside the creation of long-form academic pieces on ingredients and company strategy, to securing reviews, launch coverage and influencer partnerships – Five Play has ensured that Go Mate products are front of mind for consumers and respected by industry peers. The remit has recently been expanded to also include community management.',
  },
  {
    name: 'Arctic7',
    img: '/images/arctic7.jpg',
    excerpt:
      'Arctic7 engaged Five Play as its B2B and B2C agency on a retainer basis to support multiple activity streams including brand awareness, product launches and corporate communications.',
    body: 'Arctic7 engaged Five Play as its B2B and B2C agency on a retainer basis to support multiple activity streams including raising the profile of the founders, promoting its studio launches, maximising funding opportunities and maintaining a lights on approach to its communications outreach. To date, the CEO has since been approached by potential investors and as a keynote speaker at high profile events, positive coverage of the brand has been continuously achieved in major gaming titles and interviews have been secured with generalist media including Forbes.',
  },
  {
    name: 'Antstream Arcade',
    img: '/images/antstream-arcade.jpg',
    excerpt:
      "Antstream originally engaged Five in a Boat as its B2B communications agency with a view to raising the profile of the world's largest streaming service for retro games.",
    body: 'Antstream originally engaged Five in a Boat as its B2B communications agency with a view to raising the profile of the brand in vertical media. Off the back of a successful trial period with major coverage and executive profiling achieved in major tech, telco and gaming titles, Antstream expanded our remit to include B2C outreach. One of the signature pieces of coverage also drove significant customer sign-ups to the company\'s newly launched freemium tier.',
  },
  {
    name: 'Challengermode',
    img: '/images/challengermode.jpg',
    excerpt:
      'Swedish esports brand Challengermode originally engaged us to publicise its $12 million Series A investment round, leading to sustained brand growth across key markets.',
    body: 'Swedish esports brand Challengermode originally engaged us to publicise its $12 million Series A investment round. Following a signature piece in Forbes, alongside multiple other pieces of coverage, the exec team hired us on a retained basis. To date we have written Challengermode\'s brand guide and a number of internal decks and support the business on all elements of its external communications.',
  },
  {
    name: 'Jagex',
    img: '/images/X-jagex-1.jpg',
    excerpt:
      'We were originally contracted by Jagex to support with media training and messaging for the launch of its third party development platform Jagex Partners.',
    body: 'We were originally contracted by Jagex to support with some media training and messaging for the launch of its third party development platform Jagex Partners. We have since supported Jagex with a DCMS enquiry into gaming addiction and immersive technologies, with its acquisition by The Carlyle Group, we have rewritten the company\'s brand guide and are its retained corporate communications agency. We also won the brief to run the hub function of first game to be published on the platform managing a host of other agencies globally in addition to communications outreach in Germany.',
  },
  {
    name: 'Jagex Partners',
    img: '/images/jagex-partners-logo-248x300.png',
    excerpt:
      'We launched the Jagex Partners proposition as a unique alternative for third party publishing groups within video games, culminating in the signing of three new development partners.',
    body: 'We launched the Jagex Partners proposition as a unique alternative for third party publishing groups within video games (aimed at indie developers), raising awareness of Jagex Partners\' overall publishing capabilities within the industry and supporting with press outreach around Jagex Partners\' titles. Whilst acting as hub agency for all regions, Five Play generated coverage in key games titles, increased social engagement and secured speaking spots – culminating in increased customer acquisition and the signing of three new development partners.',
  },
];

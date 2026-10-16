
import educationImage from "@/app/gallery/images/education.jpg";
import healthcareImage from "@/app/gallery/images/healthcare.jpg";
import africaMapImage from "@/app/gallery/images/africa-map.jpg";
import ongerijunesimayoImage from "@/app/gallery/images/ongeri_june_simayo.jpg";
import peopleImage from "@/app/gallery/images/people.jpg";
import ongeriFriendsImage from "@/app/gallery/images/ongeri_friends.jpg";
import ongeriSpeakingImage from "@/app/gallery/images/ongeri_speaking.jpg";
import communityImage from "@/app/gallery/images/community.jpg";
import bestImage from "@/app/gallery/images/best.jpeg";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  story: string[];
  span?: "tall" | "wide" | "normal";
}

export const gallery: GalleryItem[] = [
  {
    id: "best.jpeg",
    src: bestImage.src,
    alt: "Community members gathered in Kajiado, Kenya",
    title: "Community Gathering: Building Hope Together",
    description:
      "Bringing people together around the shared goal of supporting Maasai girls and strengthening their communities.",
    story: [
      "Every meaningful community initiative begins with people coming together around a shared purpose. This gathering represents the community spirit at the heart of Utuhisaniwins and its commitment to working alongside Maasai girls, families, and local communities in Kajiado, Kenya.",
      "For girls growing up in communities where poverty and limited access to essential services can create barriers to opportunity, support from the people around them matters. Families, community members, and local leaders all have a role to play in creating an environment where girls can pursue education, access healthcare, and look toward the future with confidence.",
      "Community engagement is an important part of building that support. By recognizing local experiences and listening to the people closest to the challenges, Utuhisaniwins seeks to ensure that its work remains connected to the needs and priorities of the communities it serves.",
      "This photograph offers a glimpse of that community-centered mission. The specific date, participants, agenda, and activities associated with this gathering have not yet been documented in the information available for publication. These details can be added once confirmed by the organization."
    ],
    span: "wide",
  },
  {
    id: "education",
    src: educationImage.src,
    alt: "Girls pictured in an educational setting",
    title: "Education Support: Keeping Girls' Dreams Alive",
    description:
      "Promoting access to education and helping create opportunities for girls to continue learning.",
    story: [
      "Education can change the direction of a young person's life. It provides knowledge, develops confidence, and opens doors to opportunities that might otherwise remain out of reach. For Maasai girls in Kajiado, however, continuing their education can be difficult when families face financial hardship and other social challenges.",
      "Utuhisaniwins was founded with a commitment to helping girls access education and build a more hopeful future. The organization recognizes that every girl deserves the opportunity to learn, develop her abilities, and make informed choices about her life.",
      "Educational support is about more than attending school. It is also about encouraging girls to believe in their potential and helping communities recognize the value of investing in their education. When girls have the opportunity to continue learning, they can develop the skills and confidence needed to pursue their ambitions.",
      "This gallery image represents the organization's education-focused mission. The particular school, activity, date, and type of assistance associated with the photograph should be confirmed before this story is presented as a report of a specific event."
    ],
  },
  {
    id: "healthcare",
    src: healthcareImage.src,
    alt: "Community health and wellbeing activity",
    title: "Healthcare and Wellbeing: Supporting Healthier Communities",
    description:
      "Recognizing the importance of healthcare access, wellbeing, and practical support for girls and families.",
    story: [
      "Good health is essential to learning, personal development, and everyday life. Yet access to healthcare and reliable health information can be a challenge for families facing financial and geographical barriers. These challenges make community-centered approaches to wellbeing especially important.",
      "Healthcare is one of the areas of focus for Utuhisaniwins as it works with Maasai girls and their communities in Kajiado. Alongside education, access to appropriate healthcare can help girls and families address essential needs and make informed decisions about their wellbeing.",
      "Improving health outcomes requires an understanding of the circumstances people face in their daily lives. Listening to community concerns, recognizing local priorities, and connecting people with appropriate support are important considerations when developing responsible community initiatives.",
      "This photograph is presented as part of the organization's healthcare and wellbeing focus. The available information does not establish the date, location of the activity, medical services provided, or number of people reached. Those details should be added only after the organization confirms what took place."
    ],
    span: "tall",
  },
  {
    id: "listening",
    src: ongerijunesimayoImage.src,
    alt: "Community members listening and engaging in discussion",
    title: "Listening First: Working With the Community",
    description:
      "Making space for local perspectives when identifying needs and shaping community support.",
    story: [
      "Lasting community progress begins with understanding the people whose lives an initiative hopes to support. Listening creates space for community members to express their experiences, identify their priorities, and contribute ideas that reflect their circumstances.",
      "For an organization working with Maasai girls and their communities, this approach is especially important. Education, healthcare, and the challenges girls face cannot be understood through assumptions alone. Their experiences, along with the perspectives of families and other community members, help provide a fuller picture of local needs.",
      "Utuhisaniwins is committed to supporting girls and communities in Kajiado. A community-centered approach helps keep that mission connected to the people it is intended to serve and recognizes that meaningful progress involves participation, trust, and shared responsibility.",
      "This image highlights listening and partnership as important parts of community work. The exact discussion, participants, date, and decisions made during this moment have not been confirmed, so this story focuses on the broader importance of listening to local voices."
    ],
  },
  {
    id: "location",
    src: africaMapImage.src,
    alt: "Map illustration showing Kenya and the Kajiado region",
    title: "Our Community: Working in Kajiado, Kenya",
    description:
      "An introduction to the region at the center of Utuhisaniwins' commitment to Maasai girls and their communities.",
    story: [
      "Kajiado County, in southern Kenya, is the regional home of the communities at the center of Utuhisaniwins' work. The organization's focus is on supporting Maasai girls and their communities, with particular attention to access to education and healthcare.",
      "Understanding the local context matters when addressing the barriers that can affect girls' opportunities. Household circumstances, access to essential services, and community priorities all influence the support that may be needed. Effective initiatives must therefore be informed by the experiences of the people who live in the region.",
      "Utuhisaniwins was founded in 2024, following the experiences of its founder, Simayo Rempeyian, whose own educational journey was shaped by sponsorship. Seeing other girls face barriers to education helped inspire a commitment to extending opportunities and support to others.",
      "This map provides geographical context for the organization's mission rather than documenting a particular event. Specific project locations, partner institutions, and the communities served can be added as the organization verifies and approves those details."
    ],
  },
  {
    id: "people",
    src: peopleImage.src,
    alt: "Community members and girls pictured together",
    title: "Girls at the Center: People Behind the Mission",
    description:
      "Recognizing the girls, families, and communities whose experiences give purpose to the organization's work.",
    story: [
      "At the center of Utuhisaniwins' mission are the girls and communities it seeks to support. Every girl has her own experiences, ambitions, and hopes for the future. Recognizing those individual aspirations is an important starting point for work that aims to expand access to education and healthcare.",
      "Girls do not grow and develop in isolation. Families, peers, educators, and wider communities can all influence the opportunities available to them. When the people around girls recognize their potential and support their aspirations, they can help create a stronger foundation for their future.",
      "Utuhisaniwins works with a community-centered perspective, recognizing that progress involves more than providing assistance. It also involves respecting people, understanding their circumstances, and keeping their needs at the heart of the organization's priorities.",
      "This image celebrates the people connected to that mission. No individual names, personal histories, or specific outcomes are attributed to the people pictured because those details have not been provided for this photograph."
    ],
  },
  {
    id: "ongeri-friends",
    src: ongeriFriendsImage.src,
    alt: "Community members and friends gathered together",
    title: "Shared Effort: The Strength of Community",
    description:
      "Highlighting the value of solidarity, relationships, and collective commitment to community wellbeing.",
    story: [
      "Positive change is rarely the work of one person alone. It develops through relationships, shared responsibility, and the willingness of people to contribute toward a common purpose. Within community initiatives, these connections can help create a stronger foundation for sustained support.",
      "Utuhisaniwins' mission recognizes the importance of working alongside the communities it serves. Supporting Maasai girls requires attention to their educational and healthcare needs, while also recognizing the wider relationships and circumstances that influence their lives.",
      "Friendship, cooperation, and community participation can help people exchange ideas, identify priorities, and strengthen a shared sense of responsibility. These connections are valuable when an organization seeks to remain grounded in local experiences rather than work in isolation.",
      "This photograph reflects the theme of shared effort and community connection. The names of the people pictured, the occasion, the date, and any specific activities associated with this gathering should be added once the organization confirms them."
    ],
    span: "wide",
  },
  {
    id: "ongeri-speaking",
    src: ongeriSpeakingImage.src,
    alt: "A community member speaking during a gathering",
    title: "Community Voices: The Importance of Local Leadership",
    description:
      "Recognizing the role of community participation and local leadership in building understanding and trust.",
    story: [
      "Local voices are important in shaping initiatives that aim to respond to community needs. People who understand the circumstances, relationships, and priorities of their communities can contribute perspectives that help organizations work more thoughtfully and responsibly.",
      "For Utuhisaniwins, whose mission focuses on Maasai girls and their communities in Kajiado, engagement with local perspectives is relevant to both education and healthcare. Understanding the concerns and aspirations of the people involved helps keep community support connected to real circumstances.",
      "Speaking, listening, and exchanging ideas can create opportunities for people to share their experiences and consider common priorities. These conversations can contribute to stronger relationships between community members and organizations working toward a shared goal.",
      "This photograph highlights the importance of community voice and participation. The identity of the speaker, the subject of the discussion, the event date, and any resulting decisions have not been confirmed in the available information. These details can be included once verified."
    ],
  },
  {
    id: "community",
    src: communityImage.src,
    alt: "Ongeri pictured in a community setting",
    title: "On the Ground: The People Behind Community Work",
    description:
      "A glimpse of community presence and the relationships that support local engagement.",
    story: [
      "Community work takes place within people's everyday lives. Beyond an organization's mission statement, it depends on the time, attention, relationships, and practical efforts involved in engaging with the people it hopes to support.",
      "Utuhisaniwins works toward expanding opportunities for Maasai girls in Kajiado, with education and healthcare among its areas of focus. Carrying out that mission requires an understanding of local circumstances and a commitment to treating community members with dignity and respect.",
      "Being present within a community can help create opportunities to understand concerns, exchange ideas, and strengthen relationships. Meaningful engagement also requires recognizing that each community has its own experiences and priorities, rather than assuming that one approach will suit everyone.",
      "This image forms part of the visual record of the people and community connections associated with Utuhisaniwins. The specific activity, date, location, and identity or role of the person pictured should be confirmed before adding further details about this moment."
    ],
  },
];

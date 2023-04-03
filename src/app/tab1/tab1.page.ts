import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage} from '@angular/fire/storage';
import { LibraryService } from '../services/library.service';
import { IonSlides } from '@ionic/angular';


interface Card {
  subtitle: string;
  file: string;
  category: string;
  imageUrl: string;
  content?: string;
}

interface HTMLElementWithSwiper extends HTMLElement {
  swiper: any;
}

interface File {
  name: string;
  url: string;
  downloading: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  isOnline: boolean = true;
  slide: IonSlides;

  public cards: Card[] = [
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "AUWAGATOR: The Automatic Metal to Nonmetal Waste Segregator", 
      file: "AUWAGATOR.pdf",
       category: 'stem',
       content: "This article discusses the design and development of a waste management system prototype that addresses the issue of people's disregard for cleanliness and the lack of an effective waste management system in cities. The prototype focuses on separating metal and nonmetal wastes, which can be turned into profitable and commercialized recyclable waste. The system was built, tested, and found to be effective, accurate, and time-efficient. Overall, the prototype appears to work well and contributes to waste utilization by transforming it into an efficient waste segregator."
      },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "BOOM!: Card Game Incorporated with Exclusive subjects as an Alternative way of Learning", 
      file: "BOOM.pdf", 
      category: 'stem',
      content: "The study aimed to design a card game that integrates English, Social Studies, and Science subjects to make learning enjoyable, also assessing its educational content, level of difficulty, and game satisfaction. The research used a quantitative descriptive research design, with a purposive sampling method to select 100 Grade 12 students at Bauan Technical High School. The results showed that the game's educational content allowed students to review fundamental lessons and utilize their stock knowledge, with an average and adaptable level of difficulty. The game also satisfied the players through intellectual needs and contentment. Overall, the card game is strongly agreeable in all aspects and an ideal instructional material for reviewing, with the recommendation for further studies to include more subjects and a separate version for elementary students."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "Block 69: Sustainable Interlocking Building Blocks Using Rice Husk Ash and Pulverized Plastic", 
      file: "Block 69.pdf", 
      category: 'stem',
      content: "The article discusses Block 69, a sustainable housing solution that uses a mixture of rice husk ash, polyethylene terephthalate, cement, and water. The authors highlight the need for affordable housing in the Philippines, where there is a housing deficit of 4 million units. They also discuss the potential of using waste materials, such as horticultural waste and plastic waste, to create building materials and reduce carbon emissions. Additionally, the article explores the thermal properties and compressive strength of Block 69 and its potential for use in sustainable construction."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "CAPSCOOK: A Cooking Application for the Digital Generation", 
      file: "CAPSCOOK.pdf", 
      category: 'stem',
      content: "CapsCook is a recipe application that aims to help aspiring cooks improve their skills and achieve their goals. The app provides efficient and trustful recipes for healthy food and dishes. The researchers conducted a quantitative study using a descriptive research approach to determine the app's efficacy among Grade 8-10 culinary students. The app received positive feedback and comments from the respondents, with some concerns about its long-term efficiency and usefulness. The researchers concluded that the application was friendly and straightforward to use, with a balanced amount of entertainment and focus on giving knowledge of the dishes' health and nutritional benefits. Future updates and further research will help CapsCook grow more as an independent digital recipe tool for everyone who aspires to cook."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "CHAMBURST: A Self-Disenfecting COVID-19 Related Waste Chamber", 
      file: "CHAMBURST.pdf", 
      category: 'stem',
      content: "The study aimed to develop a Self-Disinfecting COVID-19 Related Waste Chamber, called Chamburst, that ensures effective and efficient management of medical waste in homes and medical institutions. The researchers used descriptive and inferential statistics to analyze the data obtained through purposive sampling of 100 participants from San Pascual, Batangas. The study found that some households have a specific waste receptacle for COVID-19 related waste, while hospitals strictly adhere to COVID-19 waste management criteria. The Chamburst performed well in both residential and hospital settings and satisfied waste management standards adopted during the pandemic. The study suggests a larger sample size and a more diverse range of individuals for more accurate assessment and improvement of the Chamburst."
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "Cost-effective website for performing proper waste disposal", 
      file: "COST-EFFECTIVE.pdf", 
      category: 'stem',
      content: "This research study is about developing a cost-effective website to promote proper waste disposal practices in homes and schools. The researchers used experimental and survey approaches to gather relevant data and Jimdo app to create the website. Social media platforms were also used to gather information and promote the website. The study aims to identify the website's effectiveness in eliminating issues related to waste disposal and promoting a healthier environment. The researchers found that the website is beneficial in resolving waste disposal issues and promoting a better relationship between humans and the environment."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "CapSica: An Interactive Assessment tool for Physics Subject", 
      file: "CapSica.pdf", 
      category: 'stem',
      content: "This study focuses on using game-based learning to improve student engagement and performance in physics assessments. The researchers developed a digital board game for physics learning and assessment through a website. 80 Grade 12 STEM students were surveyed using questionnaires, and the results showed that STEM students have a good level of competency in Physics. The analysis also revealed that digital board games had a significant impact on assessment scores, except for assessment difficulty. The study identified the challenges and issues of STEM students towards Physics, and suggested the development of personalized assessment tools such as mnemonics-integrated assessment and problem-based assessment with rubrics. The study includes recommendations for improving the digital assessment tool."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "DEXTER: Derelict Energy Xtractor Through Engineered Revolution", 
      file: "DEXTER.pdf", 
      category: 'stem',
      content: "This is a study on D.E.X.T.E.R, a sustainable generator that uses the pedaling motion of bicycles to generate electricity while promoting eco-friendly transportation. The study used a survey questionnaire and a focus group discussion to gather data from 234 Manalupang cyclists to determine the effectiveness and impact of D.E.X.T.E.R. Results showed that the cyclists lacked leverage to preserve the environment and generate electricity before using D.E.X.T.E.R. However, after implementation, they gained in terms of preserving the environment and generating electricity. The study suggests that D.E.X.T.E.R. can transform cycling into a more sustainable and efficient activity and still has room for improvement."
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "Efficiency of Using QR Code Based Attendance System as a Contact Tracing Tool for Resumption of Face-to-Face Classes on Selected Grade 12 TVL Students of Bauan Technical High School", 
      file: "EFFICIENCY OF USING QR CODE.pdf", 
      category: 'stem',
      content: "This study aimed to address the inefficiencies and waste of the traditional paper-based attendance system in schools and its negative impact on the environment. The researchers developed a Code-based Label for Attendance System (CLASS) card and a web application called Pulang Bato, which were found to be accessible, accurate, efficient, and reliable based on a survey conducted among Grade 12 students in a school in Bauan. The CLASS card contains personal information of the student and a designated QR code that is scanned by the Pulang Bato app to store attendance information. This eco-friendly technology offers an efficient and affordable solution for attendance-taking and contact tracing in schools."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "ENDELEMENTUM: A Chemical Elements Educational Board Game Providing Basic Knowledge Development in Chemistry", 
      file: "ENDELEMENTUM.pdf", 
      category: 'stem',
      content: "This study aims to design and develop an educational board game called EndElementum to help junior high school students learn and understand the components of chemical elements in a fun and interactive way. The researchers utilized a purposive sampling technique and collected data through literature reviews, questionnaires, and descriptive statistics. The findings show that the EndElementum board game is a potential educational tool that can provide positive learning outcomes and entertainment while still maintaining its educational purposes. The researchers recommend improving the present features and future perspectives of the product innovation."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "FORMULATE: An Instructive and Convenient Virtual Formula Handbook Application for High School Students", 
      file: "FORMULATE.pdf", 
      category: 'stem',
      content: "The study aims to provide an easier way for students to acquire Virtual Mathematical Formulas for basic mathematical equations by designing and developing a math assistance application. The application is accessible to all students and aims to develop their basic calculation skills and integrate their acquired mathematical abilities and attitudes to meet the demands of everyday life and future mathematical work. The researchers utilized a quantitative approach, particularly the descriptive research design, and a simple random sampling to identify the 150 respondents from Bauan Technical High School as the participants of the study. The findings revealed that high school students find less difficulty in understanding and gaining knowledge from the application, which can benefit them as students and in their daily lives. Moreover, the instant availability of Formulate helps the learners save time and effort, assists students in understanding basic math calculations, and allows the students to solve and calculate accurately."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "GRASS-O: Utilizing the Abundance of Cogon Grass, Lemon Grass, and Fiber Wood to Create a Biodegradable Pot That Screams Eco-Friendly", 
      file: "GRASS-O.pdf", 
      category: 'stem',
      content: "This study is about the development of biodegradable pots using cogon grass, lemon grass, and wood fiber as a sustainable alternative to plastic pots, which are a major contributor to non-biodegradable waste. The objective is to promote the product's quality in terms of durability, biodegradability, and marketability while exploring the economic and environmental benefits. The study used a quantitative approach, specifically a descriptive design, and purposive sampling to identify 50 respondents from the Bauan area. The results showed a statistically significant difference in quality between plastic plant pots and biodegradable pots, and the researchers recommended developing a simple and efficient technique for mass production and distribution to the market, as well as testing the feasibility of adding other types of grass to the composition."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "“INNO-BOOK RACK: An Innovative Book Rack Made with Non-Biodegradable Materials", 
      file: "INNO-BOOK RACK.pdf", 
      category: 'stem',
      content: "The INNO-BOOK RACK: AN INNOVATIVE BOOK RACK MADE WITH NON-BIODEGRADABLE MATERIALS study aimed to create a multi-purpose chair that can be used as a book rack and is accessible and convenient for users. The researchers used non-biodegradable materials to make an eco-friendly product that can help the community. The study utilized welding and combining of recycled materials to form the finished product. The Inno-Book Rack was found to function according to its design and is recommended for use in various settings, including classrooms. However, further research and innovations are needed to fully integrate a book chair into its quality."
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "LEARNING PLAYLIST: A Web-Based Instruction", 
      file: "LEARNING PLAYLIST.pdf", 
      category: 'stem',
      content: "This study is about the importance of education and the challenges faced during the Covid-19 pandemic, specifically in the Philippines. The researchers conducted a study on Grade 12 STEM students and teachers to gather data on the effectiveness of web-based instruction in replacing traditional face-to-face methods of instruction. They used a purposive sampling method and distributed questionnaires through an online platform. The researchers developed a prototype called Learning Playlist, which is a website that aims to provide a convenient way of gathering sources of learning materials. The prototype gained positive feedback from both students and teachers, and updates with new and useful features are expected to be implemented soon."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "LOT 17: An Interactive Learning Approach to Practice and Develop Problem Solving Skills in Algebra", 
      file: "LOT 17.pdf", 
      category: 'stem',
      content: "This article discusses a study on using game-based learning as a potential solution to the persisting problems of math teaching in the Philippines, particularly in Algebra. The researchers developed an interactive learning approach using the Lot 17 board game and conducted a survey among Grade 7 students of Bauan Technical High School. Results showed that the students had a positive perception towards game-based learning and considered the Lot 17 board game commendable in teaching Algebra. The researchers recommend learning institutions to encourage the implementation of game-based learning as an effective learning and teaching strategy. Future studies can improve the overall design and mechanics of the game and expand its use to other mathematical branches or subject matters."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "MULTRIBOX: A Collapsible Multipurpose Tri-Box", 
      file: "MULTRIBOX.pdf", 
      category: 'stem',
      content: "This study focuses on the problem of plastic pollution and the development of an alternative product named MulTriBox, a collapsible multipurpose box made of kawayan and sawali. The researchers utilized a descriptive research design and surveyed 60 participants using a questionnaire to assess the product's overall quality and environmental significance. Based on the findings, the respondents believed that the materials used have the qualities to make a high-quality product that can be used for numerous applications. They also commended the product's significance to the environment and considered it superior to other similar products. However, further improvements were proposed in terms of presentation, style, and use of other alternatives."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "Multi-functional Mask Storage as an Organizer", 
      file: "Multi-functional Mask.pdf", 
      category: 'stem',
      content: "This study developed a multi-functional mask storage organizer that aims to maintain a sanitized and organized spot for necessities during the COVID-19 pandemic. Researchers conducted a survey among food hub owners in San Pedro, Bauan, and Batangas to determine the qualities and benefits of the organizer, and found that it fits the demands of customers, owners, and workers. The organizer is made of acrylic and is intended for long-term usage, and fits in any workstation, making it extremely beneficial in places with little space for essentials. The study leaves a favorable impression on the participants and is open for further improvements." 
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "OSSC: One Stop Student Consult (An Overall Health Assessment Website)", 
      file: "OSSC.pdf", 
      category: 'stem',
      content: "This study is about developing a website called OSSC: One Stop Student Consult, to assess the overall health of Senior High School students during the COVID-19 pandemic. The researchers aimed to provide a quality overall health assessment website that is accessible, efficient, and sustainable. They used quantitative approach with online surveys and random sampling to collect data from 162 respondents. The study found that OSSC satisfied the attributes that a good website must have, and it offers countless advantages and benefits for students. The researchers recommend making an offline version of the website for individuals in remote areas without internet access."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "PROJECT ROCO: A Footwear Organizer from Used and Old Containers", 
      file: "PROJECT ROCO.pdf", 
      category: 'stem',
      content: "This study focuses on the problem of solid waste disposal and aims to design and create an organizer made of recycled materials that can help people organize their possessions and reduce the volume of solid waste. The researchers used a descriptive research design and online questionnaires to gather information from Grade 12 STEM students of Bauan Technical High School. They created the product, called ROCO, using used steel drum, plywood scraps, and metal scraps, and found that it was effective in addressing the growing amount of solid waste. Project ROCO promotes community sustainability by utilizing recyclable materials and reducing the use of primary materials. However, other types of containers and storage organizers were not explored in this study."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "PROJECT TECHBOT: An Automated Chat Response-Related Inquiries of Parents and Students in BTHS", 
      file: "PROJECT TECHBOT.pdf", 
      category: 'stem',
      content: "The study focuses on the use of digital technology, specifically chatbots, in education and customer service. The researchers developed a chatbot called Techbot to assist students in Bauan Technical High School with their inquiries, aiming to reduce customer service costs and provide round-the-clock coverage. They conducted a quantitative analysis of transcripts from one focus group to determine the effectiveness of Techbot in terms of language, accuracy, speed, and availability. The study found that Techbot met their assumptions and satisfied their standards, and it contributes to society's benefit by providing information through inquiries. Future studies could provide more alternatives for the chatbot to respond to."
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "Student Portal System: An Online Gateway to Various Academic Details at Bauan Technical High School", 
      file: "STUDENT PORTAL.pdf", 
      category: 'stem',
      content: "This study focuses on developing a web-based portal for Bauan Technical High School to address several student and school administration-related problems, such as access to academic details and record-keeping. Researchers used a descriptive research design and a survey questionnaire to evaluate the student portal, with the findings revealing that it is useful and convenient to use, while also reducing the usage of paper-based materials. The study recommends expanding the implementation of the student portal system to other Senior High School strands and Junior High School of Bauan Technical High School. The implementation of this portal system could significantly impact the new normal of academic processes."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "SYNTHESIS: A Scrabble-Inspired Game for Chemical Compounds", 
      file: "SYNTHESIS.pdf", 
      category: 'stem',
      content: "This study aims to design and develop a game-based learning tool in chemistry to help students with difficulties in learning chemistry concepts. The game, called Synthesis, is a combination of Scrabble and basic chemistry concepts. The researchers conducted a survey among 94 STEM students of Bauan Technical High School to rate the educational and entertainment factor of the game. The results showed that the students strongly agreed on the educational attributes and were completely satisfied with the entertainment features of the game. The researchers concluded that the Synthesis game has great potential as an effective game-based learning tool in chemistry and recommended further research to improve its reliability and validity."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "Trig Raceios: A Board Game for Recreational Education in Mathematics Trigonometry", 
      file: "Trig Raceios.pdf", 
      category: 'stem',
      content: "This research aims to address students' negative perception of mathematics by developing a tool for recreational education in Mathematics Trigonometry called Trig Raceios. The study's objectives are to devise the game's elements, develop the tangible form of the board game, and assess its effectiveness in terms of recreational and educational features. The researchers used various techniques, such as research, brainstorming, layouting, designing, printing, cutting, and evaluation. They found that Trig Raceios is an effective learning aid that increases students' efficiency in solving trigonometric functions while creating a fun and exciting environment that stimulates their enthusiasm in learning math. The researchers recommend further improvements in the game's components, mechanics, and research methodology to achieve its maximum potential. They also suggest developing a digitalized form of Trig Raceios."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "The Utilization of Sawdust and Peanut Shells as Alternative Sources for Placemats and Coasters", 
      file: "UTILIZATION OF SAWDUST.pdf", 
      category: 'stem',
      content: "The study explores the potential of using peanut shells and sawdust, agricultural and by-product waste materials, to create eco-friendly placemats and coasters that have better physical properties than standard products. The research used online questionnaires to gather data from 60 respondents, consisting of housewives, coffee shop, and restaurant owners. The results showed that the eco-friendly placemats and coasters had greater durability, heat resistance, and thickness than standard products. The researchers recommend improving the water absorption capabilities of the items by adjusting the proportions of materials. Overall, the study suggests that utilizing peanut shells and sawdust can provide an environmentally friendly way of recycling waste items and can be successful business products with a positive impact on the economy.",
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "Unit Tower: A Leisure Block Stacking GameFor Mastering Metric System of Measurements", 
      file: "Unit Tower.pdf", 
      category: 'stem',
      content: "The researchers developed an educational block stacking game called Unit Tower to teach the metric system of measurements and assess its effectiveness. They used literature review and descriptive research design for the study, with 30 junior high school students as participants. Descriptive statistics were used for the data analysis. The Unit Tower game was found to be educational, entertaining, and purposeful, and it can improve social skills. The researchers recommend integrating more educational content, wider subject engagement, including players' background assessment, and conducting face-to-face interviews and integrating more related studies."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "VELOX: An Interactive and Systematized Remote Acquisition of In-Campus Registrar Needs Application", 
      file: "VELOX.pdf", 
      category: 'stem',
      content: "This study aimed to develop a digital application called Velox that simplifies and systematizes the process of acquiring academic papers, while maintaining the traditional essence of the process. The researchers used a mixed-method research design and surveyed 100 Grade 12 students from a technical high school. The findings showed that while traditional methods of acquiring academic papers are satisfactory, the Velox application demonstrated excellence in terms of availability, efficiency, and accuracy of information. Respondents rated the application's efficiency as remarkable, making it an alluring proposition for a school registrar system. The researchers recommended conducting comprehensive studies and employing servers for a more expansive reach and implementation."
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "WEPLANTASK: Developing a Web-Based Weekly Task Planner System for Educators and Learners", 
      file: "WEPLANTASK.pdf", 
      category: 'stem',
      content: "This study explores the impact of procrastination on virtual learners and proposes a solution in the form of a web-based task planner system called WePlanTask. The system was developed using Wix and includes scheduling and monitoring tools to improve productivity and time management. A total of 30 Grade 12 STEM students and 3 STEM teachers from Bauan Technical High School participated in the study through a purposive sampling approach. Quantitative research and experimentation were used to gather and analyze data, and the WePlanTask Website was tested by the students. The study revealed that WePlanTask was effective in mitigating procrastination and improving organizational performance, and the researchers recommend further modifications to increase accessibility, security, and data-driven strategies. Future researchers can use this study as a starting point to optimize the use of web-based weekly work planners."
    },
    { 
      imageUrl: "assets/images/web.png", 
      subtitle: "ACI Capsule: A Website-based Data for Senior High School STEM", 
      file: "ACI .pdf", 
      category: 'stem',
      content: "This article discusses a study conducted on the use of a website called the Academic and Class Information (ACI) Capsule to support distance learning for grade 11 STEM students and teachers at Bauan Technical Integrated High School. The website was created to address the issues caused by cluttered conversations on Facebook Messenger. The study utilized a quantitative approach and found that the students' skills in using digital tools and communication were relatively good. The website's content, design, and navigation were well-developed, and students had no trouble using it. There were significant differences in content and navigation between student and teacher assessments, but none in design. Overall, the website usage performance was satisfactory."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "CoroNutter X: Algebraic Board Game for Edutainment in Mathematics Algebra", 
      file: "CoroNutter X.pdf", 
      category: 'stem',
      content: "This research aims to develop a board game called CoroNutter X, which is designed to teach Mathematics Algebra and raise awareness about Covid-19. The game was evaluated by 30 Junior High students from Bauan Technical High School, and it was found to be effective in providing both education and entertainment. The researchers used related literature to assist in designing the game, and they concluded that CoroNutter X has the potential to be a useful tool for teaching Mathematics Algebra and promoting awareness of Covid-19."
    },
    { 
      imageUrl: "assets/images/proto.png", 
      subtitle: "Salt Lamp: Efficiency of Sustainable Salt Water-Based Power Source Lamp", 
      file: "Salt Lamp.pdf", 
      category: 'stem',
      content: "This study explores the potential of using saltwater energy as a renewable energy source to power lamps in rural and remote communities in the Philippines. The researchers used experimentation to determine the factors that affect the performance of the saltwater energy generation, such as electrode combinations and the solution's salinity. They found that the combination of carbon as anode and aluminum as cathode produces the highest voltage output, and the voltage output increases with a higher concentration of salt in the solution. The device is capable of lighting an LED lamp for more than 17 hours after which the solution needs to be replaced. The product received an excellent rating in terms of functionality and could be a viable alternative light source that can replace standard lamps, contributing to reducing electricity consumption."
    },
    { 
      imageUrl: "assets/images/mobapp.png", 
      subtitle: "TAS TaNGo: A Validation and Verification of Temperature and Location Information Application", 
      file: "TAS TaNGo.pdf", 
      category: 'stem',
      content: "This is a study about contact tracing in the Philippines, specifically in Bauan. Due to concerns about waste and verification of information, researchers created a digital tool called Temperature Assurance Sharing (TAS) TaNGo for contact tracing. The study used a quantitative approach with 170 participants from Grade 12 Bauan Technical High School. The researchers found that personal information commonly collected in local and public stores include full name, date and time of visit, contact number, and temperature check. They also found that digital contact tracing had better quality than manual contact tracing."
    },
    { 
      imageUrl: "assets/images/fs.png", 
      subtitle: "Flawless Graphics and Inked Prints", 
      file: "Flawless Graphics and Inked Prints.pdf", 
      category: 'abm',
      content: "This is about a company called Flawless Graphics and Inked Prints that provides printing and graphic design services with the goal of creating flawless art and design to convey a specific message or mood to the viewer. The company takes pride in its mission to bring clients' imaginations to life through detailed compositions and high-quality craftsmanship while inspiring communities through the significance of graphic arts and flawless prints. They aim to provide visually appealing and artistic designs that capture the attention of viewers, and they are committed to innovation and adapting to changes and technology as the company grows."
    },
    { 
      imageUrl: "assets/images/fs2.png", 
      subtitle: "Quick N Steady Mobile Market", 
      file: "Quick n Steady.pdf", 
      category: 'abm',
      content: "Quick N' Steady Mobile Market is a retailing service business that offers mobile market services to barangay As-is, providing fresh and affordable goods such as meat, fish, vegetables, fruits, and rice. With the rise of the COVID-19 pandemic, mobile food services have become essential for people's survival amid the confusion brought about by the pandemic. The business utilizes modern equipment such as eco-friendly motorcycles with sidecars to offer convenience and affordability to the community. The mobile market service offers reliability and industry insight, enabling it to provide superior service compared to current service providers. The Quick N' Steady Mobile Market aims to combat the compelling problem of food accessibility within entrepreneurs and the community by providing hassle-free, fresh, and high-end goods and products services."
    },
    { 
      imageUrl: "assets/images/fs3.png", 
      subtitle: "S-Mart", 
      file: "S-Mart.pdf", 
      category: 'abm',
      content: "S-Mart is a new retail business located in San Teodoro, Bauan, Batangas, owned by four ABM students. It aims to provide good quality products at affordable prices to cater to the needs of the residents of the said barangay. The business is a form of partnership where two or more people share ownership and responsibility for managing the venture and its income or losses. Amidst the pandemic, S-Mart was established to give customers the satisfaction of providing their needs such as food, medicine, and fresh goods, while also creating employment opportunities. Despite having many competitors, the owners believe that S-Mart's return will be worth the struggle."
    },
    {
      imageUrl: "assets/images/fs.png", 
      subtitle: "Pick Streat", 
      file: "Pick Streat.pdf", 
      category: 'abm',
      content: "Pick Streat is a Filipino food park located in Bauan, Batangas that offers a unique experience for customers to enjoy popular snacks and street foods from all over the country. Customers can customize their orders and enjoy unlimited rice, while the second floor offers karaoke rooms for rent. Despite competition from other food parks and street vendors, Pick Streat stands out for offering affordable, clean, and trustworthy products and services. The business aims to bring back happiness and promote Filipino street foods locally and globally, providing an extraordinary experience for customers to indulge their taste buds and create new memories with loved ones."
    },
    {
      imageUrl: "assets/images/fs2.png", 
    subtitle: "S & D Animal Feeds and Supplies", 
    file: "S & D Animal Feeds and Supplies.pdf", 
    category: 'abm',
    content: "S & D Animal Feeds and Supplies is a livestock feed business that sells high-quality animal feeds and agricultural supplies. The company aims to provide professional services and keep clients satisfied by offering fresh and readily available goods at reasonable prices. The business targets people who raise livestock, pets, and poultry chickens. The main goal is to give satisfaction and convenience to customers by observing their needs and preferences. The company represents accessible feeds and supplies that are beneficial to agricultural people, and it plans to grow steadily in the coming years."
    }
    
  ];

  
  public selectedSegment: string = "all";
  public allCards: Card[] = this.cards;
  public stemCards: Card[] = this.cards.filter((card) => card.category === 'stem');
  public abmCards: Card[] = this.cards.filter((card) => card.category === 'abm');
  public displayedCards: Card[] = this.allCards;
  
  files: File[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 5000, // change slides every 5 seconds
    }
  };
  

  constructor(private navController: NavController,
    private Storage: Storage,
      private libraryService: LibraryService
    ) {
      this.slide = {} as IonSlides;
      this.displayedCards = this.cards;
    this.allCards = this.cards;

    


    window.addEventListener('online', () => {
      this.isOnline = true;
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  
    }

    handleImageError = (event: any) => {
      if (!this.isOnline) {
        event.target.src = 'assets/images/offline.png';
      }
    }
    

    public segmentChanged(event: any) {
      switch(event.target.value) {
          case "all":
              this.displayedCards = this.allCards;
              this.slide.slideTo(0);
              break;
          case "stem":
              this.displayedCards = this.stemCards;
              this.slide.slideTo(1);
              break;
          case "abm":
              this.displayedCards = this.abmCards;
              this.slide.slideTo(2);
              break;
          default:
              console.log("Invalid segment value");
      }
    
      // Move to corresponding slide
      this.slide.slideTo(this.getSlideIndex(event.target.value));
    }
    
    private getSlideIndex(segment: string): number {
      switch(segment) {
        case "all":
          return 0;
        case "stem":
          return 1;
        case "abm":
          return 2;
        default:
          return 0;
      }
    }
    
  
  

  slideTapped(event: any) {
    const selectedIndex = (event.target as HTMLElementWithSwiper).swiper.activeIndex;
    if (selectedIndex === 0) {
      this.selectedSegment = "all";
    } else if (selectedIndex === 1) {
      this.selectedSegment = "stem";
    } else if (selectedIndex === 2) {
      this.selectedSegment = "abm";
    }
    // You can add additional conditions for more slides if needed
    this.segmentChanged(this.selectedSegment);
    // This will trigger the segmentChanged() method and update the displayedCards
  }
  
  
  

  addToLibrary(card: Card) {
    console.log('Adding card to library:', card);
    this.libraryService.addToLibrary(card);
    this.navController.navigateBack('/tabs/tab3');
  }

  openFile(url: string) {
    const firebaseStorageUrl = `https://firebasestorage.googleapis.com/v0/b/ecaps-31ffe.appspot.com/o/${encodeURIComponent(url)}?alt=media`;
    window.open(firebaseStorageUrl, '_system');
  }
  
  public openCardDetail(card: any): void {
    this.navController.navigateForward('/card-details', { queryParams: { card: JSON.stringify(card) } });
  }

  

}

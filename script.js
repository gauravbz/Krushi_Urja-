document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const langButtons = document.querySelectorAll('.lang-btn');

    const translations = {
        mr: {
            navHome: 'मुख्यपृष्ठ',
            navAbout: 'आमच्याबद्दल',
            navServices: 'सेवा',
            navProject: 'कचरा ते संपत्ती',
            navProcess: 'प्रक्रिया',
            navFaq: 'सामान्य प्रश्न',
            navContact: 'संपर्क',
            ctaButton: 'कॉलबॅक विनंती करा',
            aboutTitle: '🌿 आमच्याबद्दल',
            knowMoreBtn: 'अधिक जाणून घ्या',
            aboutP1: 'Krushi Urja Innovations हे शाश्वत शेती सल्लागार आणि शेतकरी प्रशिक्षण संस्थान आहे, जे शेतकऱ्यांना व्यावहारिक जैविक शेती मार्गदर्शन, शाश्वत शेती पद्धती आणि शेतावर आधारित शिक्षण कार्यक्रमांद्वारे सहकार्य करते.',
            aboutP2: 'आमचे काम शेतकरी समुदायांना पर्यावरणपूरक, आर्थिकदृष्ट्या टिकाऊ आणि कृत्रिम शेती पद्धती स्वीकारण्यास मदत करणे, सल्लागार सेवा, प्रशिक्षण उपक्रम, शेत मार्गदर्शन आणि क्षमता-विकास कार्यक्रमांच्या माध्यमातून आहे.',
            aboutP3: 'आमचा विश्वास आहे की शेती केवळ उपजीविकेचा स्रोत नाही, तर ग्रामीण विकास, पर्यावरणीय शाश्वतता आणि भविष्यातील अन्नसुरक्षेची पायाभरणी आहे. व्यावहारिक शिक्षण, शेतकरी सहभाग आणि शाश्वत शेती पद्धतींमुळे आपण टिकाऊ कृषि प्रणाली निर्माण करण्याचा प्रयत्न करतो जी शेतकऱ्यांसाठी आणि समुदायांसाठी दीर्घकालीन मूल्य निर्माण करते.',
            aboutP4: 'Krushi Urja Innovations मध्ये आम्ही ज्ञानावर आधारित शेती, जबाबदार शेती पद्धती आणि सतत शिकण्यावर भर देऊन शेतकऱ्यांशी विश्वास-आधारित संबंध तयार करण्यासाठी समर्पित आहोत, जे शाश्वत वाढ आणि ग्रामीण सशक्तिकरणाला आधार देतात.',
            faqTitle: 'वारंवार विचारले जाणारे प्रश्न',
            faqText: 'जैविक प्रमाणन प्रक्रियेबद्दल माहिती मिळवा आणि सर्वात सामान्य प्रश्नांची उत्तरे शोधा. तुम्ही शेतकरी, प्रोसेसर किंवा निर्यातदार असाल तरी, आम्ही प्रत्येक टप्प्यावर मार्गदर्शन करतो.',
            faqButton: 'अधिक वाचा',
            faqQ1: 'NPOP म्हणजे काय?',
            faqA1: 'ते राष्ट्रीय जैविक उत्पादन कार्यक्रम (NPOP) आहे, जे भारत सरकारच्या वाणिज्य मंत्रालयाद्वारे विकसित केले गेले आहे.',
            faqQ2: 'NSOP म्हणजे काय?',
            faqA2: 'NSOP म्हणजे राष्ट्रीय जैविक उत्पादन मानके, जी राष्ट्रीय जैविक उत्पादन कार्यक्रमासाठी भारत सरकारच्या वाणिज्य मंत्रालयाद्वारे तयार केली गेली आहेत.',
            faqQ3: 'रूपांतरण कालावधी म्हणजे काय?',
            faqA3: 'जैविक पद्धती सुरू झाल्यापासून त्या पिकांना जैविक म्हणून प्रमाणन मिळेपर्यंतचा कालावधी.',
            faqQ4: 'रूपांतरण म्हणजे काय?',
            faqA4: 'सामान्य शेताला जैविक शेतात बदलण्याची प्रक्रिया. याला संक्रमण देखील म्हणतात.',
            faqQ5: 'निरीक्षणाचा अर्थ काय आहे?',
            faqA5: 'यामध्ये जैविक उत्पादन किंवा प्रक्रिया मानकांची पूर्तता तपासण्यासाठी साइट भेट समाविष्ट असते.',
            whatWeDo: 'आम्ही काय करतो',
            serviceTitle: 'आमची सेवा',
            serviceDesc: 'आम्ही जैविक शेती, सल्लागार सेवा, प्रशिक्षण, तपासणी, दस्तऐवजीकरण आणि शाश्वत ग्रामीण विकासासाठी संपूर्ण उपाय देतो.',
            service1Title: '1. प्रशिक्षण',
            service1Text: 'शेतकरी, विद्यार्थी, FPO आणि कृषिव्यवसायिकांसाठी व्यापक जैविक शेती प्रशिक्षण.',
            service2Title: '2. तपासणी',
            service2Text: 'सुसंगततेसाठी व्यावसायिक शेत तपासणी आणि जैविक सत्यापन.',
            service3Title: '3. सल्लागार',
            service3Text: 'शाश्वत शेती आणि जैविक प्रमाणनासाठी तज्ञ मार्गदर्शन.',
            service4Title: '4. दस्तऐवजीकरण',
            service4Text: 'जैविक प्रमाणन आणि नियामक अनुपालनासाठी पूर्ण दस्तऐवजीकरण सहाय्य.',
            service5Title: '5. कचरा ते संपत्ती तंत्रज्ञान',
            service5Text: 'उत्कृष्ट कचरा व्यवस्थापन आणि ग्रामीण शाश्वतता उपाय.',
            service6Title: '6. enquiry सहाय्य',
            service6Text: 'तुमच्या शेतीच्या गरजांसाठी योग्य उपायांसाठी आम्ही येथे आहोत.',
            projectSubtitle: 'आमचा मुख्य प्रकल्प',
            projectTitle: 'कचरा ते संपत्ती',
            projectDesc1: 'Krushi Urja Innovations अंतर्गत आमचा मुख्य संशोधन आणि विकास प्रकल्प “Waste to Wealth” या संकल्पनेवर आधारित आहे आणि तो सध्या प्रगत प्रक्रियेत आहे.',
            projectDesc2: 'या प्रकल्पाद्वारे कृषी अवशेष, सेंद्रिय कचरा आणि जैविक संसाधनांचे मूल्यवर्धन करून हरित ऊर्जा, जैवउर्जा आणि शाश्वत ग्रामीण संसाधन निर्मितीच्या दिशेने कार्य केले जात आहे.',
            projectQuote: '“कचरा ही समस्या नसून, योग्य तंत्रज्ञानाद्वारे ती भविष्यातील ऊर्जा आणि समृद्धीची नवी संधी बनू शकते.”',
            projectCard1: 'कृषी अवशेष व्यवस्थापन',
            projectCard2: 'सेंद्रिय कचरा मूल्यवर्धन',
            projectCard3: 'शाश्वत ग्रामीण संशोधन',
            projectCard4: 'हरित ऊर्जा व जैवउर्जा',
            projectCard5: 'पर्यावरणपूरक शेती समर्थन',
            projectCard6: 'नूतनीकरणयोग्य ऊर्जा प्रकल्प',
            processTitle: 'आमची कार्यपद्धती',
            processDesc: 'शाश्वत शेती आणि विकासाकडे वाटचाल करण्याचे सोपे टप्पे',
            step1: 'सल्लामसलत',
            step2: 'शेत तपासणी',
            step3: 'कागदपत्रे',
            step4: 'मार्गदर्शन',
            step5: 'प्रमाणन सहाय्य',
            step6: 'शाश्वत विकास',
            inspirationTitle: '🌾 आमची प्रेरणा',
            inspirationText: 'भारतीय शेतकरी हा देशाच्या अर्थव्यवस्थेचा कणा आहे. त्याच्या कष्टातूनच राष्ट्राची प्रगती घडते आणि समाजाची समृद्धी निर्माण होते. मात्र आजही ग्रामीण भागात तंत्रज्ञान, माहिती आणि आधुनिक व्यवस्थापन यांची कमतरता मोठ्या प्रमाणात जाणवते. ही दरी कमी करून शेतकऱ्यांना डिजिटल युगाशी जोडणे आणि त्यांच्या मेहनतीला नवतंत्रज्ञानाची ताकद देणे, हीच आमची प्रेरणा आहे.',
            formTitle: 'Enquiry Form',
            formSubtitle: 'अधिक माहितीसाठी संपर्क साधा',
            fieldName: 'नाव',
            fieldMobile: 'मोबाईल क्रमांक',
            fieldSubject: 'विषय',
            fieldMessage: 'संदेश',
            submitBtn: 'पुन्हा विचारणा करा',
            modal1Title: 'जैविक शेती प्रमाणन प्रक्रिया',
            modal2Title: 'प्रमाणन मार्गदर्शक',
            modalPage: 'पृष्ठ',
            modalPrev: 'मागील',
            modalNext: 'पुढील'
        },
        hi: {
            navHome: 'मुख्यपृष्ठ',
            navAbout: 'हमारे बारे में',
            navServices: 'सेवाएँ',
            navProject: 'कचरा से संपदा',
            navProcess: 'प्रक्रिया',
            navFaq: 'सामान्य प्रश्न',
            navContact: 'संपर्क',
            ctaButton: 'कॉलबैक का अनुरोध करें',
            aboutTitle: '🌿 हमारे बारे में',
            knowMoreBtn: 'और जानें',
            aboutP1: 'Krushi Urja Innovations एक सतत कृषि परामर्श और किसान प्रशिक्षण संगठन है, जो किसानों को व्यावहारिक जैविक खेती मार्गदर्शन, सतत कृषि पद्धतियों और खेत-आधारित सीखने के कार्यक्रमों के माध्यम से सहारा देता है।',
            aboutP2: 'हमारा काम किसानों के समुदायों को पर्यावरणीय रूप से जिम्मेदार और आर्थिक रूप से स्थिर कृषि पद्धतियों को अपनाने में सहायता करना, परामर्श, प्रशिक्षण, खेत मार्गदर्शन और क्षमता-विकास कार्यक्रमों के माध्यम से है।',
            aboutP3: 'हम मानते हैं कि कृषि केवल आजीविका का स्रोत नहीं है, बल्कि ग्रामीण विकास, पर्यावरणीय स्थिरता और भविष्य की खाद्य सुरक्षा की नींव भी है। व्यावहारिक सीख, किसान सहभाग और सतत कृषि दृष्टिकोण के माध्यम से हम ऐसी लचीली कृषि प्रणालियों को बढ़ावा देते हैं जो किसानों और समुदायों के लिए दीर्घकालिक मूल्य बनाती हैं।',
            aboutP4: 'Krushi Urja Innovations में हम ज्ञान-आधारित कृषि, जिम्मेदार खेती पद्धतियों और निरंतर सीखने को बढ़ावा देकर किसानों के साथ विश्वास-आधारित संबंध बनाना चाहते हैं, जो सतत विकास और ग्रामीण सशक्तिकरण को प्रोत्साहित करते हैं।',
            faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
            faqText: 'जैविक प्रमाणन प्रक्रिया की स्पष्ट जानकारी प्राप्त करें और सबसे सामान्य प्रश्नों के उत्तर जानें। चाहे आप किसान हों, प्रोसेसर हों या निर्यातक, हम हर कदम पर मार्गदर्शन करते हैं।',
            faqButton: 'और पढ़ें',
            faqQ1: 'NPOP क्या है?',
            faqA1: 'यह राष्ट्रीय जैविक उत्पादन कार्यक्रम (NPOP) है, जिसे भारत सरकार के वाणिज्य मंत्रालय द्वारा विकसित किया गया है।',
            faqQ2: 'NSOP क्या है?',
            faqA2: 'NSOP का अर्थ राष्ट्रीय जैविक उत्पादन मानक है, जिसे राष्ट्रीय जैविक उत्पादन कार्यक्रम के लिए भारत सरकार के वाणिज्य मंत्रालय द्वारा तैयार किया गया है।',
            faqQ3: 'रूपांतरण अवधि क्या है?',
            faqA3: 'जैविक प्रथाओं की शुरुआत से लेकर फसलों को जैविक के रूप में प्रमाणित होने तक का समय।',
            faqQ4: 'रूपांतरण क्या है?',
            faqA4: 'एक सामान्य खेत को जैविक खेत में बदलने की प्रक्रिया। इसे संक्रमण भी कहा जाता है।',
            faqQ5: 'निरीक्षण का अर्थ क्या है?',
            faqA5: 'इसमें जैविक उत्पादन या प्रसंस्करण मानकों के अनुपालन को सत्यापित करने के लिए साइट विज़िट शामिल होती है।',
            whatWeDo: 'हम क्या करते हैं',
            serviceTitle: 'हमारी सेवाएँ',
            serviceDesc: 'हम जैविक खेती, परामर्श, प्रशिक्षण, निरीक्षण, दस्तावेज़ीकरण और सतत ग्रामीण विकास के लिए समग्र समाधान प्रदान करते हैं।',
            service1Title: '1. प्रशिक्षण',
            service1Text: 'किसानों, छात्रों, FPOs और कृषि उद्यमियों के लिए व्यापक जैविक खेती प्रशिक्षण।',
            service2Title: '2. निरीक्षण',
            service2Text: 'अनुपालन के लिए व्यावसायिक खेत निरीक्षण और जैविक सत्यापन।',
            service3Title: '3. परामर्श',
            service3Text: 'सतत कृषि और जैविक प्रमाणन के लिए विशेषज्ञ मार्गदर्शन।',
            service4Title: '4. दस्तावेज़ीकरण',
            service4Text: 'जैविक प्रमाणन और नियामक अनुपालन के लिए पूर्ण दस्तावेज़ीकरण सहायता।',
            service5Title: '5. कचरा से संपदा प्रौद्योगिकी',
            service5Text: 'उन्नत अपशिष्ट प्रबंधन और ग्रामीण स्थिरता समाधान।',
            service6Title: '6. पूछताछ सहायता',
            service6Text: 'आपकी कृषि आवश्यकताओं के लिए सही समाधान के लिए हम यहाँ हैं।',
            projectSubtitle: 'हमारा मुख्य प्रोजेक्ट',
            projectTitle: 'कचरा से संपदा',
            projectDesc1: 'Krushi Urja Innovations के तहत हमारा मुख्य अनुसंधान और विकास प्रोजेक्ट “Waste to Wealth” अवधारणा पर आधारित है और यह वर्तमान में उन्नत चरण में है।',
            projectDesc2: 'इस प्रोजेक्ट के माध्यम से कृषि अवशेष, जैविक अपशिष्ट और जैविक संसाधनों का मूल्यवर्धन करके हरित ऊर्जा, बायोगैस और स्थायी ग्रामीण संसाधन निर्माण की दिशा में कार्य किया जा रहा है।',
            projectQuote: '“कचरा एक समस्या नहीं है, बल्कि सही प्रौद्योगिकी के उपयोग से यह भविष्य की ऊर्जा और समृद्धि का अवसर बन सकता है।”',
            projectCard1: 'कृषि अवशेष प्रबंधन',
            projectCard2: 'जैविक अपशिष्ट मूल्यवर्धन',
            projectCard3: 'सतत ग्रामीण अनुसंधान',
            projectCard4: 'हरित ऊर्जा और बायोगैस',
            projectCard5: 'पर्यावरण अनुकूल कृषि सहयोग',
            projectCard6: 'नवीकरणीय ऊर्जा परियोजनाएँ',
            processTitle: 'हमारी कार्य पद्धति',
            processDesc: 'सतत कृषि और विकास की दिशा में सरल कदम',
            step1: 'सामान्य चर्चा',
            step2: 'खेत निरीक्षण',
            step3: 'दस्तावेज़',
            step4: 'मार्गदर्शन',
            step5: 'प्रमाणन सहायता',
            step6: 'सतत विकास',
            inspirationTitle: '🌾 हमारी प्रेरणा',
            inspirationText: 'भारतीय किसान देश की अर्थव्यवस्था की रीढ़ है। उनके श्रम और समर्पण से राष्ट्र की प्रगति और समाज की समृद्धि संभव होती है। फिर भी ग्रामीण क्षेत्रों में आज भी तकनीक, सूचना और आधुनिक प्रबंधन की कमी स्पष्ट रूप से महसूस की जाती है। इस अंतर को कम करके किसानों को डिजिटल युग से जोड़ना और उनके मेहनत को नई तकनीकी ऊर्जा देना, यही हमारी प्रेरणा है।',
            formTitle: 'पुनरावेदन फॉर्म',
            formSubtitle: 'अधिक जानकारी के लिए संपर्क करें',
            fieldName: 'नाम',
            fieldMobile: 'मोबाइल नंबर',
            fieldSubject: 'विषय',
            fieldMessage: 'संदेश',
            submitBtn: 'पंजीकरण भेजें',
            modal1Title: 'जैविक खेती प्रमाणन प्रक्रिया',
            modal2Title: 'प्रमाणन मार्गदर्शिका',
            modalPage: 'पेज',
            modalPrev: 'पिछला',
            modalNext: 'अगला'
        },
        en: {
            navHome: 'Home',
            navAbout: 'About Us',
            navServices: 'Services',
            navProject: 'Waste To Wealth',
            navProcess: 'Process',
            navFaq: 'FAQ',
            navContact: 'Contact',
            ctaButton: 'Request A Call Back',
            aboutTitle: '🌿 About Us',
            knowMoreBtn: 'Know more',
            aboutP1: 'Krushi Urja Innovations is a sustainable agriculture consultancy and farmer training organization committed to supporting farmers through practical organic farming guidance, sustainable agricultural practices, and field-based learning programs.',
            aboutP2: 'Our work focuses on helping farming communities adopt environmentally responsible and economically sustainable agricultural methods through consultancy, training initiatives, farm guidance, and capacity-building programs.',
            aboutP3: 'We believe agriculture is not only a source of livelihood, but also the foundation of rural development, environmental sustainability, and future food security. Through practical learning, farmer engagement, and sustainable farming approaches, we aim to encourage resilient agricultural systems that create long-term value for both farmers and communities.',
            aboutP4: 'At Krushi Urja Innovations, we are dedicated to building trust-based relationships with farmers by promoting knowledge-driven agriculture, responsible farming practices, and continuous learning that supports sustainable growth and rural empowerment.',
            faqTitle: 'Frequently Asked Questions',
            faqText: 'Get clarity on the organic certification process with answers to the most common questions we receive. Whether you\'re a farmer, processor, or exporter, we\'re here to guide you every step of the way.',
            faqButton: 'Read More',
            faqQ1: 'What is NPOP?',
            faqA1: 'It is the National Programme for Organic Production (NPOP), developed by the Ministry of Commerce, Government of India.',
            faqQ2: 'What is NSOP?',
            faqA2: 'NSOP means National Standards for Organic Production, formulated by the Ministry of Commerce, Govt. of India for the National Program for Organic Production.',
            faqQ3: 'What is Conversion Period?',
            faqA3: 'The period between the initiation of organic practices and the certification of crops as organic.',
            faqQ4: 'What is conversion?',
            faqA4: 'The process of converting a conventional farm into an organic farm. This is also known as transition.',
            faqQ5: 'What is meant by inspection?',
            faqA5: 'Shall involve a site visit to verify that the operation is being conducted in compliance with organic production or processing standards.',
            whatWeDo: 'WHAT WE DO',
            serviceTitle: 'Our Services',
            serviceDesc: 'We provide end-to-end solutions for organic farming, consultancy, training, inspection, documentation and sustainable rural development.',
            service1Title: '1. Training',
            service1Text: 'Comprehensive organic farming training for farmers, students, FPOs & agripreneurs.',
            service2Title: '2. Inspection',
            service2Text: 'Professional field inspection and organic verification for compliance.',
            service3Title: '3. Consultancy',
            service3Text: 'Expert guidance for sustainable agriculture and organic certification.',
            service4Title: '4. Documentation',
            service4Text: 'Complete documentation support for organic certification and regulatory compliance.',
            service5Title: '5. Waste To Wealth Technology',
            service5Text: 'Innovative waste management and rural sustainability solutions.',
            service6Title: '6. Enquiry Support',
            service6Text: 'We are here to guide you with the right solutions for your agricultural needs.',
            projectSubtitle: 'Our Main Project',
            projectTitle: 'Waste To Wealth',
            projectDesc1: 'Our main research and development project under Krushi Urja Innovations is based on the concept of “Waste to Wealth” and is currently in an advanced development stage.',
            projectDesc2: 'Through this project, agricultural residues, organic waste, and bio-based resources are being transformed into green energy, biogas, and sustainable rural resource creation.',
            projectQuote: '“Waste is not a problem; with the right technology it can become a new opportunity for future energy and prosperity.”',
            projectCard1: 'Agricultural Residue Management',
            projectCard2: 'Organic Waste Valorization',
            projectCard3: 'Sustainable Rural Research',
            projectCard4: 'Green Energy & Bioenergy',
            projectCard5: 'Eco-Friendly Farming Support',
            projectCard6: 'Renewable Energy Projects',
            processTitle: 'Our Working Process',
            processDesc: 'Simple steps toward sustainable farming and development',
            step1: 'Consultation',
            step2: 'Field Inspection',
            step3: 'Documentation',
            step4: 'Guidance',
            step5: 'Certification Support',
            step6: 'Sustainable Growth',
            inspirationTitle: '🌾 Our Inspiration',
            inspirationText: 'Indian farmers are the backbone of the country’s economy. Their hard work and dedication drive national progress and social prosperity. Yet in rural areas, lack of technology, information, and modern management is still widely felt. Reducing this gap and connecting farmers to the digital era while empowering their effort with new technology is our inspiration.',
            formTitle: 'Enquiry Form',
            formSubtitle: 'Contact us for more information',
            fieldName: 'Name',
            fieldMobile: 'Mobile Number',
            fieldSubject: 'Subject',
            fieldMessage: 'Message',
            submitBtn: 'Submit Enquiry',
            modal1Title: 'Process of Organic Farming Certification',
            modal2Title: 'Certification Guide',
            modalPage: 'Page',
            modalPrev: 'Previous',
            modalNext: 'Next'
        }
    };

    function setLanguage(lang) {
        const selected = translations[lang] || translations.en;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            if (selected[key]) {
                element.textContent = selected[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.dataset.i18nPlaceholder;
            if (selected[key]) {
                element.placeholder = selected[key];
            }
        });

        langButtons.forEach((button) => {
            const isActive = button.dataset.lang === lang;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    langButtons.forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('show');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const form = document.getElementById('sheetdb-form');
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxm4q9V3j1r_6YkI02djzHYKCG4HM9p5jRzOuaIK9BlZhk4VrZuWTmS62fpSkmDp3nS4w/exec';

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
            btn.disabled = true;

            const formData = new FormData(form);

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData
            })
                .then(() => {
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Submitted Successfully';
                    btn.style.backgroundColor = '#22c55e';
                    form.reset();

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 3000);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error. Try Again.';
                    btn.style.backgroundColor = '#ef4444';

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 3000);
                });
        });
    }

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    const knowBtn = document.getElementById('know-more-btn');
    const modal = document.getElementById('knowMoreModal');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const slides = Array.from(document.querySelectorAll('.slide'));
    let current = 0;

    function showSlide(index) {
        if (!slides.length) return;
        slides.forEach(slide => slide.classList.remove('active'));
        const nextIndex = (index + slides.length) % slides.length;
        slides[nextIndex].classList.add('active');
        current = nextIndex;
    }

    function openModal(startIndex = 0) {
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        showSlide(startIndex);
    }

    function closeModal() {
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (knowBtn) knowBtn.addEventListener('click', () => openModal(0));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(current + 1));

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showSlide(current - 1);
        if (e.key === 'ArrowRight') showSlide(current + 1);
    });

    setLanguage(document.documentElement.lang || 'mr');
});

/* ------------------------------------------------------------------
   MOOL · prototype content
   Every story screen is checked against the cited public-domain source.
   en = English · hi = हिंदी · hg = Hinglish
------------------------------------------------------------------- */

const ART = {
  'ganga-shantanu': { src: 'assets/art/ganga-shantanu.jpg', credit: 'Raja Ravi Varma, “Ganga and Shantanu”, 1890' },
  'ganga-bhishma':  { src: 'assets/art/ganga-bhishma.jpg',  credit: 'Ravi Varma Press oleograph, “Ganga and Bhishma”, c. 1900' },
  'bhishma-oath':   { src: 'assets/art/bhishma-oath.jpg',   credit: 'Raja Ravi Varma, “Bhishma’s Vow”' },
  'bhishma-arrows': { src: 'assets/art/bhishma-arrows.jpg', credit: 'Razmnama folio, “Bhishma on the bed of arrows”, 1598–99' },
  'ganesha-scribe': { src: 'assets/art/ganesha-scribe.jpg', credit: '“Ganesha writing the Mahabharata”, 17th-century painting' },
  'karna-kavach':   { src: 'assets/art/karna-kavach.jpg',   credit: '“Karna gives away his armour”, painting, artist unknown' },
  'gita':           { src: 'assets/art/gita.jpg',           credit: '“Krishna urges Arjuna to fight”, painting, before 1857' },
  'churning':       { src: 'assets/art/churning.jpg',       credit: 'Razmnama folio, “The churning of the ocean”, c. 1598' },
  'valmiki':        { src: 'assets/art/valmiki.jpg',        credit: '“Valmiki and the krauncha birds”, CC0' },
};

const SPEAKERS = {
  vaishampayana: { av: 'वै', en: 'Vaishampayana narrates', hi: 'वैशम्पायन सुनाते हैं', hg: 'Vaishampayana sunaate hain' },
  sauti:         { av: 'सौ', en: 'Sauti narrates',         hi: 'सौति सुनाते हैं',      hg: 'Sauti sunaate hain' },
  krishna:       { av: 'कृ', en: 'Krishna',                hi: 'श्रीकृष्ण',             hg: 'Krishna' },
  yudhishthira:  { av: 'यु', en: 'Yudhishthira answers',   hi: 'युधिष्ठिर का उत्तर',     hg: 'Yudhishthira ka jawaab' },
  mool:          { av: 'मू', en: 'Mool · fact check',      hi: 'मूल · तथ्य जाँच',       hg: 'Mool · fact check' },
};

const PARVA = {
  adi:   { en: 'Adi Parva',   hi: 'आदि पर्व',  hg: 'Adi Parva' },
  sabha: { en: 'Sabha Parva', hi: 'सभा पर्व',  hg: 'Sabha Parva' },
  vana:  { en: 'Vana Parva',  hi: 'वन पर्व',   hg: 'Vana Parva' },
  gita:  { en: 'Bhagavad Gita', hi: 'भगवद्गीता', hg: 'Bhagavad Gita' },
};

const GANGULI = 'K. M. Ganguli (1883–96) · public domain';
const ST = (n) => `https://sacred-texts.com/hin/m01/m01${n}.htm`;

/* ============================== STORY ============================== */
const STORY = [
  {
    id: 's0', kind: 'title', look: 'art', art: 'ganga-shantanu', pos: '40% 35%',
    kicker: { en: 'Season 1 · Adi Parva', hi: 'सीज़न 1 · आदि पर्व', hg: 'Season 1 · Adi Parva' },
    title:  { en: 'The River’s Son', hi: 'नदी का पुत्र', hg: 'Nadi Ka Beta' },
    sub:    { en: 'Episode 1 · 19 screens · ~4 min', hi: 'एपिसोड 1 · 19 स्क्रीन · ~4 मिनट', hg: 'Episode 1 · 19 screens · ~4 min' },
  },
  {
    id: 's1', kind: 'story', look: 'art', art: 'ganga-shantanu', pos: '62% 22%', chars: ['shantanu', 'ganga'],
    text: {
      en: 'King Shantanu of the Kurus loved to hunt. One day, walking along the bank of the Ganga, he saw a woman of blazing beauty.',
      hi: 'कुरु वंश के राजा शांतनु को शिकार का बड़ा शौक़ था। एक दिन गंगा के किनारे घूमते हुए उन्होंने एक अत्यंत तेजस्वी, सुंदर स्त्री को देखा।',
      hg: 'Kuru vansh ke Raja Shantanu ko shikaar ka bada shauk tha. Ek din Ganga ke kinare unhone ek aisi stree dekhi jiski sundarta se nazar hi nahi hat rahi thi.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVII' }, tier: 'vyasa', url: ST('097'), tr: GANGULI,
    ex: 'And one day, as he was wandering along the bank of the Ganges, he came upon a region frequented by Siddhas and Charanas. And there he saw a lovely maiden of blazing beauty and like unto another Sri herself; of faultless and pearly teeth and decked with celestial ornaments…',
  },
  {
    id: 's2', kind: 'story', look: 'art', art: 'ganga-shantanu', pos: '30% 30%', chars: ['shantanu', 'ganga'],
    text: {
      en: 'Goddess, demon or human, he told her, it didn’t matter. He asked her to be his wife.',
      hi: 'उन्होंने कहा, तुम देवी हो, दानवी हो या मनुष्य, मुझे फ़र्क़ नहीं पड़ता। मेरी पत्नी बनो।',
      hg: 'Unhone kaha, tum devi ho, daanavi ho ya insaan, farak nahi padta. Meri patni ban jao.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVII' }, tier: 'vyasa', url: ST('097'), tr: GANGULI,
    ex: '‘O slender-waisted one, be thou a goddess or the daughter of a Danava, be thou of the race of the Gandharvas, or Apsaras, be thou of the Yakshas or the Nagas, or be thou of human origin, O thou of celestial beauty, I solicit thee to be my wife!’',
  },
  {
    id: 's3', kind: 'story', look: 'paper', style: 'quote', chars: ['ganga', 'shantanu'],
    text: {
      en: '“I will be your wife. But never stop me in anything I do, pleasant or unpleasant. Never speak unkindly to me. The moment you do, I leave.”',
      hi: '“मैं तुम्हारी पत्नी बनूँगी। पर मैं जो भी करूँ, अच्छा या बुरा, तुम मुझे कभी रोकोगे नहीं, कभी कठोर शब्द नहीं कहोगे। जिस दिन ऐसा किया, मैं चली जाऊँगी।”',
      hg: '“Main tumhari patni banungi. Par main jo bhi karun, accha ya bura, tum mujhe kabhi rokoge nahi, kabhi kadwa nahi bologe. Jis din aisa kiya, main chali jaungi.”',
    },
    note: { en: 'The king said: “So be it.”', hi: 'राजा ने कहा: “ऐसा ही हो।”', hg: 'Raja ne kaha: “Aisa hi ho.”' },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVIII' }, tier: 'vyasa', url: ST('098'), tr: GANGULI,
    ex: '‘O king, I shall become thy wife and obey thy commands. But, O monarch, thou must not interfere with me in anything I do, be it agreeable or disagreeable. Nor shall thou ever address me unkindly… But I shall certainly leave thee the moment thou interferest with me or speakest to me an unkind word.’ The king answered, ‘Be it so.’',
  },
  {
    id: 's4', kind: 'story', look: 'art', art: 'ganga-shantanu', pos: '22% 82%', chars: ['ganga'],
    text: {
      en: 'A son was born. She carried him to the river and threw him into the water. “This is for your good,” she said.',
      hi: 'पुत्र का जन्म हुआ। वह उसे नदी तक ले गई और जल में डाल दिया। बोली, “यह तुम्हारे भले के लिए है।”',
      hg: 'Beta paida hua. Woh use nadi tak le gayi aur paani mein daal diya. Boli, “Yeh tumhare bhale ke liye hai.”',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVIII' }, tier: 'vyasa', url: ST('098'), tr: GANGULI,
    ex: 'But, O Bharata, those children, one after another, as soon as they were born, were thrown into the river by Ganga who said, ‘This is for thy good.’ And the children sank to rise no more.',
  },
  {
    id: 's5', kind: 'story', look: 'night', motif: 'seven', chars: ['shantanu'],
    text: {
      en: 'Seven sons. Seven times, the river. Shantanu said nothing. He was afraid she would leave.',
      hi: 'सात पुत्र। सात बार नदी। शांतनु चुप रहे। उन्हें डर था कि वह चली जाएगी।',
      hg: 'Saat bete. Saat baar nadi. Shantanu chup rahe. Unhe darr tha ki woh chali jayegi.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVIII' }, tier: 'vyasa', url: ST('098'), tr: GANGULI,
    ex: 'The king, however, could not be pleased with such conduct. But he spoke not a word about it lest his wife should leave him.',
  },
  {
    id: 's6', kind: 'story', look: 'art', art: 'ganga-shantanu', pos: '88% 30%', chars: ['shantanu', 'ganga'],
    text: {
      en: 'When the eighth was born, he couldn’t hold it in. “Don’t kill him! Who are you? Why do you kill your own children?”',
      hi: 'आठवें पुत्र के जन्म पर वे स्वयं को रोक न सके। “इसे मत मारो! तुम कौन हो? अपने ही बच्चों को क्यों मारती हो?”',
      hg: 'Aathve bete ke time woh khud ko rok nahi paaye. “Ise mat maaro! Tum ho kaun? Apne hi bachchon ko kyun maarti ho?”',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVIII' }, tier: 'vyasa', url: ST('098'), tr: GANGULI,
    ex: '‘Kill it not! Who art thou and whose? Why dost thou kill thy own children? Murderess of thy sons, the load of thy sins is great!’',
  },
  {
    id: 's7', kind: 'story', look: 'art', art: 'ganga-bhishma', pos: '50% 22%', chars: ['ganga', 'vasus'],
    text: {
      en: '“I am Ganga,” she said. “Your sons were the eight Vasus, celestials cursed to be born as men. I promised to free them the moment they were born.”',
      hi: '“मैं गंगा हूँ,” उसने कहा। “तुम्हारे पुत्र आठ वसु थे, शाप के कारण मनुष्य बनकर जन्मे देवता। मैंने उन्हें वचन दिया था कि जन्म लेते ही उन्हें मुक्त कर दूँगी।”',
      hg: '“Main Ganga hoon,” usne kaha. “Tumhare bete aath Vasu the, shaap ki wajah se insaan bankar paida hue devta. Maine unse vaada kiya tha ki janam lete hi unhe mukt kar dungi.”',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVIII' }, tier: 'vyasa', url: ST('098'), tr: GANGULI,
    ex: '‘I am Ganga, the daughter of Jahnu… The eight illustrious Vasus endued with great energy had, from Vasishtha’s curse, to assume human forms… It was also agreed between myself and the Vasus that I should free them from their human forms as soon as they would be born.’',
  },
  {
    id: 's8', kind: 'story', look: 'art', art: 'ganga-bhishma', pos: '60% 48%', chars: ['ganga', 'devavrata'],
    text: {
      en: '“I will not harm this child. But our agreement is over.” She vanished, and took the eighth son with her.',
      hi: '“इस बालक को मैं नहीं मारूँगी। पर हमारा वचन अब पूरा हुआ।” और वह अदृश्य हो गईं, आठवें पुत्र को साथ लेकर।',
      hg: '“Is bachche ko main kuch nahi karungi. Par humara vaada ab khatam.” Aur woh gayab ho gayi, aathve bete ko saath lekar.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCVIII–XCIX' }, tier: 'vyasa', url: ST('099'), tr: GANGULI,
    ex: '‘I shall not destroy this child of thine. But according to our agreement, the period of my stay with thee is at an end.’ … Having said this, the goddess disappeared then and there. And taking with her the child, she went away to the region she chose.',
  },
  {
    id: 's9', kind: 'story', look: 'night', motif: 'river', chars: ['shantanu', 'devavrata'],
    text: {
      en: 'Years later, hunting by the Ganga, Shantanu noticed the river had gone shallow. A young man stood there. He had stopped its flow with a celestial weapon.',
      hi: 'बरसों बाद, गंगा किनारे शिकार करते हुए शांतनु ने देखा कि नदी का पानी घट गया है। वहाँ एक युवक खड़ा था, जिसने दिव्य अस्त्र से गंगा की धारा रोक दी थी।',
      hg: 'Saalon baad, Ganga kinare shikaar karte hue Shantanu ne dekha ki nadi ka paani kam ho gaya hai. Wahan ek ladka khada tha, jisne divya astra se Ganga ka behna rok diya tha.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: 'One day, while pursuing along the banks of the Ganges a deer that he had struck with his arrow, king Santanu observed that the river had become shallow… the illustrious monarch beheld that a youth of great comeliness, well-built and amiable person, like Indra himself, had, by his keen celestial weapon, checked the flow of the river.',
  },
  {
    id: 's10', kind: 'story', look: 'art', art: 'ganga-bhishma', pos: '50% 75%', chars: ['ganga', 'devavrata', 'shantanu'],
    text: {
      en: 'Ganga appeared with him. “This is your eighth son. He learned the Vedas from Vasishtha, and every weapon Parashurama knows. Take him home.”',
      hi: 'गंगा उसे लेकर प्रकट हुईं। “यह तुम्हारा आठवाँ पुत्र है। इसने वसिष्ठ से वेद पढ़े हैं, और परशुराम के सारे अस्त्र जानता है। इसे घर ले जाओ।”',
      hg: 'Ganga use lekar saamne aayi. “Yeh tumhara aathva beta hai. Isne Vasishtha se Ved padhe hain, aur Parashuram ke saare astra jaanta hai. Ise ghar le jao.”',
    },
    note: { en: 'His name: Devavrata.', hi: 'नाम: देवव्रत।', hg: 'Naam: Devavrata.' },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: '‘O tiger among men, that eighth son whom thou hadst some time before begat upon me is this… he has studied with Vasishtha the entire Vedas with their branches… And all the weapons known to the powerful and invincible Rama, the son of Jamadagni are known to this thy illustrious son of mighty arms.’',
  },
  {
    id: 's11', kind: 'story', look: 'paper', motif: 'boat', chars: ['shantanu', 'satyavati'],
    text: {
      en: 'Four years later, by the Yamuna, Shantanu met Satyavati, a fisherman’s daughter who rowed travellers across the river. He wanted to marry her.',
      hi: 'चार वर्ष बाद, यमुना के तट पर शांतनु की भेंट सत्यवती से हुई, मछुआरों के मुखिया की बेटी, जो नाव से यात्रियों को नदी पार कराती थी। शांतनु उससे विवाह करना चाहते थे।',
      hg: 'Chaar saal baad, Yamuna kinare Shantanu ki mulaqat Satyavati se hui, machhuaron ke mukhiya ki beti, jo naav se logon ko nadi paar karaati thi. Shantanu usse shaadi karna chahte the.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: 'Four years had thus passed away, when the king one day went into the woods on the bank of the Yamuna… he beheld a black-eyed maiden of celestial beauty, the daughter of a fisherman… ‘At his command, I am engaged for religious merit, in rowing passengers across this river in my boat.’',
  },
  {
    id: 's12', kind: 'story', look: 'paper', style: 'quote', chars: ['shantanu', 'fisherman'],
    text: {
      en: 'Her father had one condition: “Her son must be king after you, and no one else.” Shantanu could not promise it. He went home in sorrow.',
      hi: 'पिता की एक शर्त थी: “आपके बाद राजा इसका पुत्र ही बनेगा, और कोई नहीं।” शांतनु यह वचन न दे सके और दुखी होकर लौट आए।',
      hg: 'Pita ki ek shart thi: “Aapke baad raja iska beta hi banega, koi aur nahi.” Shantanu yeh vaada nahi de paaye aur dukhi hokar laut aaye.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: '‘O king, what I ask of thee is this: the son born of this maiden shall be installed by thee on thy throne and none else shall thou make thy successor.’ … when Santanu heard this, he felt no inclination to grant such a boon… The king with his heart afflicted by desire returned to Hastinapura…',
  },
  {
    id: 's13', kind: 'story', look: 'night', chars: ['devavrata'],
    text: {
      en: 'Devavrata saw his father wasting away. He asked the old minister why, learned the truth, and went to the fisherman himself.',
      hi: 'देवव्रत ने पिता को दिन-ब-दिन मुरझाते देखा। बूढ़े मंत्री से कारण पूछा, सच जाना, और स्वयं मछुआरे के पास जा पहुँचे।',
      hg: 'Devavrata ne dekha papa din-ba-din murjha rahe hain. Purane mantri se wajah poochhi, sach jaana, aur khud machhuare ke paas pahunch gaye.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: 'He then went to the old minister devoted to his father’s welfare and asked him about the cause of the king’s grief… Then Devavrata, accompanied by many Kshatriya chiefs of venerable age, personally repaired to the chief of the fishermen and begged of him his daughter on behalf of the king.',
  },
  {
    id: 's14', kind: 'story', look: 'art', art: 'bhishma-oath', pos: '40% 40%', chars: ['devavrata', 'fisherman'],
    text: {
      en: '“I give up my right to the throne. Her son will be king.” The fisherman still had a doubt: “But what about your children?”',
      hi: '“मैं राज्य पर अपना अधिकार छोड़ता हूँ। इसका पुत्र ही राजा होगा।” मछुआरे को फिर भी संदेह था: “पर आपकी संतानें?”',
      hg: '“Main gaddi par apna haq chhodta hoon. Iska beta hi raja banega.” Machhuare ko phir bhi shak tha: “Par aapke bachche?”',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: '‘The son that may be born of this maiden shall be our king.’ … ‘O thou of mighty arms, I have not the least doubt of its ever being violated by thee. But I have my doubts in respect of the children thou mayst beget.’',
  },
  {
    id: 's15', kind: 'story', look: 'art', art: 'bhishma-oath', pos: '72% 22%', style: 'vow', chars: ['devavrata'],
    text: {
      en: '“From this day, I take the vow of brahmacharya. Celibacy, for life.”',
      hi: '“आज से मैं ब्रह्मचर्य का व्रत लेता हूँ। आजीवन।”',
      hg: '“Aaj se main brahmacharya ka vrat leta hoon. Poori zindagi ke liye.”',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: '‘O fisherman, from this day I adopt the vow of Brahmacharya (study and meditation in celibacy). If I die sonless, I shall yet attain to regions of perennial bliss in heaven!’',
  },
  {
    id: 's16', kind: 'story', look: 'art', art: 'bhishma-oath', pos: '55% 10%', motif: 'petals', chars: ['devavrata', 'bhishma'],
    text: {
      en: 'Flowers rained from the sky. The gods, the apsaras and the rishis cried out: “This one is Bhishma!” The terrible one.',
      hi: 'आकाश से पुष्प-वर्षा हुई। देवता, अप्सराएँ और ऋषि पुकार उठे: “यह भीष्म है!” भीष्म, यानी भीषण।',
      hg: 'Aasmaan se phool barse. Devta, apsarayein aur rishi pukaar uthe: “Yeh Bhishma hai!” Bhishma matlab, bhayanak.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: 'Immediately after, the Apsaras and the gods with diverse tribes of Rishis began to rain down flowers from the firmament upon the head of Devavrata and exclaimed, ‘This one is Bhishma (the terrible).’',
  },
  {
    id: 's17', kind: 'story', look: 'paper', style: 'quote', chars: ['shantanu', 'bhishma'],
    text: {
      en: 'Hearing what his son had done, Shantanu gave him a boon: “Death shall never come to you as long as you wish to live.”',
      hi: 'पुत्र का यह त्याग सुनकर शांतनु ने उसे वरदान दिया: “जब तक तुम जीना चाहोगे, मृत्यु तुम्हें छू भी नहीं सकेगी।”',
      hg: 'Bete ka yeh tyaag sunkar Shantanu ne use vardaan diya: “Jab tak tum jeena chahoge, maut tumhe chhoo bhi nahi sakegi.”',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'C' }, tier: 'vyasa', url: ST('100'), tr: GANGULI,
    ex: '‘Death shall never come to thee as long as thou desirest to live. Truly death shall approach thee, O sinless one, having first obtained thy command.’',
  },
  {
    id: 's18', kind: 'end', look: 'art', art: 'bhishma-arrows', pos: '50% 45%',
    kicker: { en: 'Episode 1 complete', hi: 'एपिसोड 1 पूरा', hg: 'Episode 1 complete' },
    title:  { en: 'A vow that big always has a price.', hi: 'इतनी बड़ी प्रतिज्ञा की कीमत भी बड़ी होती है।', hg: 'Itni badi pratigya ki keemat bhi badi hoti hai.' },
    sub:    { en: 'Next · Episode 2: The Princesses of Kashi', hi: 'अगला · एपिसोड 2: काशी की राजकुमारियाँ', hg: 'Next · Episode 2: Kashi ki Rajkumariyan' },
    btn:    { en: 'Open Journey', hi: 'यात्रा देखें', hg: 'Journey kholo' },
  },
];

/* ============================= DISCOVER ============================= */
const DISCOVER = [
  {
    id: 'd1', kind: 'myth', look: 'paper', chars: ['draupadi', 'duryodhana', 'bhima'],
    kicker: { en: 'Myth vs Vyasa', hi: 'मिथक बनाम व्यास', hg: 'Myth vs Vyasa' },
    q: {
      en: 'Did Draupadi really say “andhe ka putra andha”?',
      hi: 'क्या द्रौपदी ने सच में कहा था, “अंधे का पुत्र अंधा”?',
      hg: 'Kya Draupadi ne sach mein kaha tha, “andhe ka putra andha”?',
    },
    verdict: { en: 'Not in Vyasa’s text.', hi: 'व्यास के ग्रंथ में यह नहीं है।', hg: 'Vyasa ke text mein yeh line hai hi nahi.' },
    body: {
      en: 'When Duryodhana falls into the pool, the narrator says Bhima, Arjuna, the twins and the servants laughed (Sabha XLVI). Later, Duryodhana tells his father Draupadi laughed too (XLIX). The line about his blind father? Nowhere.',
      hi: 'जब दुर्योधन जल-कुंड में गिरा, तो कथा के अनुसार भीम, अर्जुन, नकुल-सहदेव और सेवक हँसे (सभा XLVI)। बाद में दुर्योधन पिता से कहता है कि द्रौपदी भी हँसी थी (XLIX)। पर अंधे पिता वाला ताना? कहीं नहीं।',
      hg: 'Jab Duryodhana paani mein gira, toh narrator ke hisaab se Bhima, Arjuna, twins aur naukar hase (Sabha XLVI). Baad mein Duryodhana papa se kehta hai ki Draupadi bhi hasi thi (XLIX). Par andhe baap wala taana? Kahin nahi.',
    },
    foot: { en: 'The line became famous through screen adaptations.', hi: 'यह पंक्ति टीवी और फ़िल्मों से प्रसिद्ध हुई।', hg: 'Yeh line TV aur films se famous hui.' },
    speaker: 'mool', cite: { p: 'sabha', s: 'XLVI & XLIX' }, tier: 'myth', url: 'https://sacred-texts.com/hin/m02/m02046.htm', tr: GANGULI,
    ex: 'XLVI · ‘Beholding Duryodhana fallen into the lake, the mighty Bhima laughed aloud as also the menials of the palace… Beholding the plight of Duryodhana, the mighty Bhima and Arjuna and both the twins, all laughed aloud.’\n\nXLIX · Duryodhana to Dhritarashtra: ‘…Bhima with Arjuna once more laughed derisively, and Draupadi also accompanied by other females joined in the laughter.’',
  },
  {
    id: 'd2', kind: 'shloka', look: 'art', art: 'gita', pos: '50% 30%', chars: ['krishna', 'arjuna'], num: '२.४७',
    sa: 'कर्मण्येवाधिकारस्ते\nमा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भू-\nर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    tl: 'karmaṇy evādhikāras te mā phaleṣu kadācana · mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi',
    text: {
      en: 'Thy business is with the action only, never with its fruits; so let not the fruit of action be thy motive, nor be thou to inaction attached.',
      hi: 'तुम्हारा अधिकार केवल कर्म पर है, उसके फल पर कभी नहीं। फल को अपने कर्म का कारण मत बनाओ, और न ही कर्म न करने में आसक्त हो।',
      hg: 'Tumhara haq sirf karm par hai, uske phal par kabhi nahi. Phal ke liye kaam mat karo, aur kaam chhodne se bhi mat chipko.',
    },
    trBy: { en: 'Translation: Annie Besant (1922)', hi: 'अनुवाद: मूल (संस्कृत से)', hg: 'Translation: Mool (Sanskrit se)' },
    speaker: 'krishna', cite: { p: 'gita', s: '2.47' }, tier: 'vyasa',
    url: 'https://en.wikisource.org/wiki/Bhagavad-Gita_(Besant_4th)/Discourse_2', tr: 'Annie Besant, 4th ed. (1922) · public domain',
    ex: 'Thy business is with the action only, never with its fruits; so let not the fruit of action be thy motive, nor be thou to inaction attached. (47)',
  },
  {
    id: 'd3', kind: 'fact', look: 'art', art: 'ganga-bhishma', pos: '40% 18%', chars: ['bhishma', 'vasus', 'vasishtha'],
    kicker: { en: 'Did you know', hi: 'क्या आप जानते हैं', hg: 'Kya aapko pata tha' },
    title: {
      en: 'In his past life, Bhishma was a god who stole a cow.',
      hi: 'पिछले जन्म में भीष्म एक देवता थे, जिन्होंने एक गाय चुराई थी।',
      hg: 'Pichhle janam mein Bhishma ek devta the, jinhone ek gaay churayi thi.',
    },
    body: {
      en: 'He was Dyu, one of the eight Vasus. His wife wanted the sage Vasishtha’s wish-granting cow, Nandini, for a friend, so Dyu stole her. The curse: all eight would be born as men. Seven would be freed within a year. Dyu would stay on earth a long time and never have children.',
      hi: 'वे द्यु थे, आठ वसुओं में से एक। उनकी पत्नी को अपनी सखी के लिए ऋषि वसिष्ठ की कामधेनु नंदिनी चाहिए थी, तो द्यु ने उसे चुरा लिया। शाप: आठों वसु मनुष्य बनकर जन्मेंगे। सात एक वर्ष में मुक्त होंगे, पर द्यु लंबे समय तक पृथ्वी पर रहेगा और उसकी कोई संतान नहीं होगी।',
      hg: 'Woh Dyu the, aath Vasuon mein se ek. Unki wife ko apni friend ke liye Rishi Vasishtha ki ichha-poorti wali gaay Nandini chahiye thi, toh Dyu ne use chura liya. Shaap: aathon Vasu insaan bankar paida honge. Saat ek saal mein mukt honge, par Dyu lambe samay tak dharti par rahega aur uske koi bachche nahi honge.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'XCIX' }, tier: 'vyasa', url: ST('099'), tr: GANGULI,
    ex: '‘Ye Vasus, with Dhava and others, ye have been cursed by me. But ye shall be freed from my curse within a year of your birth among men. But he for whose deed ye have been cursed by me he, viz., Dyu, shall for his sinful act, have to dwell on earth for a length of time… Dyu, though dwelling on Earth, shall not beget children.’',
  },
  {
    id: 'd4', kind: 'yaksha', look: 'night', motif: 'lake', chars: ['yudhishthira', 'yaksha'],
    kicker: { en: 'Yaksha Prashna', hi: 'यक्ष प्रश्न', hg: 'Yaksha Prashna' },
    q: {
      en: 'The Yaksha asked: “What is the most wonderful thing?”',
      hi: 'यक्ष ने पूछा: “सबसे बड़ा आश्चर्य क्या है?”',
      hg: 'Yaksha ne poochha: “Sabse bada ajooba kya hai?”',
    },
    text: {
      en: '“Day after day, countless creatures go to the abode of Yama. Yet those who remain believe they are immortal. What could be more wonderful than this?”',
      hi: '“प्रतिदिन असंख्य प्राणी यमलोक जाते हैं, फिर भी जो बचे हैं वे स्वयं को अमर समझते हैं। इससे बड़ा आश्चर्य क्या होगा?”',
      hg: '“Roz anginat jeev Yamlok jaate hain, phir bhi jo bache hain woh khud ko amar samajhte hain. Isse bada ajooba kya hoga?”',
    },
    note: {
      en: 'His four brothers lay dead by the lake. The Yaksha’s price for bringing them back: answers.',
      hi: 'उसके चारों भाई सरोवर के किनारे मृत पड़े थे। यक्ष की शर्त: उत्तर दो, और वे जी उठेंगे।',
      hg: 'Uske chaaron bhai jheel ke kinare mare pade the. Yaksha ki shart: jawaab do, aur woh zinda ho jayenge.',
    },
    speaker: 'yudhishthira', cite: { p: 'vana', s: 'CCCXI' }, tier: 'vyasa', url: 'https://sacred-texts.com/hin/m03/m03311.htm', tr: GANGULI,
    ex: 'The Yaksha asked, ‘Who is truly happy? What is most wonderful? What is the path? And what is the news? Answer these four questions of mine and let thy dead brothers revive.’ … ‘Day after day countless creatures are going to the abode of Yama, yet those that remain behind believe themselves to be immortal. What can be more wonderful than this?’',
  },
  {
    id: 'd5', kind: 'fact', look: 'art', art: 'karna-kavach', pos: '45% 55%', chars: ['karna', 'kunti', 'surya', 'indra'],
    kicker: { en: 'Meet Karna', hi: 'मिलिए कर्ण से', hg: 'Milo Karna se' },
    title: {
      en: 'Before he was Karna, he was Vasusena.',
      hi: 'कर्ण बनने से पहले वह वसुषेण था।',
      hg: 'Karna banne se pehle woh Vasusena tha.',
    },
    body: {
      en: 'Son of Kunti and the Sun, born with natural armour and earrings. Kunti cast him into the water, and Radha and her husband, a suta, raised him. They named him Vasusena, “born with wealth”. When Indra, disguised as a Brahmin, asked for his armour, he cut it off and gave it. That is why he was called Karna.',
      hi: 'कुंती और सूर्यदेव का पुत्र, जन्म से ही कवच और कुंडल के साथ। कुंती ने उसे जल में बहा दिया; राधा और उनके पति (एक सूत) ने उसे पाला। नाम रखा वसुषेण, “धन के साथ जन्मा”। जब इंद्र ब्राह्मण वेश में कवच माँगने आए, उसने कवच काटकर दे दिया। इसीलिए वह कर्ण कहलाया।',
      hg: 'Kunti aur Surya Dev ka beta, janam se hi kavach aur kundal ke saath. Kunti ne use paani mein baha diya; Radha aur unke pati (ek suta) ne use paala. Naam rakha Vasusena, “dhan ke saath janma”. Jab Indra Brahmin ke bhes mein kavach maangne aaye, usne kavach kaatkar de diya. Isliye woh Karna kehlaya.',
    },
    speaker: 'vaishampayana', cite: { p: 'adi', s: 'CXI' }, tier: 'vyasa', url: ST('111'), tr: GANGULI,
    ex: 'Then the well-known husband of Radha, of the Suta caste, took up the child thus cast into the water, and he and his wife brought him up as their own son. And Radha and her husband bestowed on him the name of Vasusena (born with wealth)… since he cut off his natural armour, he came to be called Karna (the cutter or peeler of his own cover).',
  },
  {
    id: 'd6', kind: 'myth', variant: 'later', look: 'paper', art: 'ganesha-scribe', chars: ['ganesha', 'vyasa'],
    kicker: { en: 'Later addition', hi: 'बाद में जोड़ी गई कथा', hg: 'Baad mein joda gaya' },
    q: {
      en: 'Did Ganesha write down the Mahabharata?',
      hi: 'क्या गणेश जी ने महाभारत लिखी थी?',
      hg: 'Kya Ganesh ji ne Mahabharata likhi thi?',
    },
    verdict: { en: 'In many versions, but not the oldest.', hi: 'कई संस्करणों में है, सबसे पुराने में नहीं।', hg: 'Kai versions mein hai, sabse purane mein nahi.' },
    body: {
      en: 'Vyasa dictates, Ganesha writes, and his pen must never stop. It’s in Ganguli’s translation (Adi I). But the BORI Critical Edition, built by comparing over 1,200 manuscripts, keeps it out of the main text, because many old manuscripts don’t have it.',
      hi: 'व्यास बोलते गए, गणेश लिखते गए, शर्त यह कि क़लम एक पल को न रुके। यह गांगुली के अनुवाद (आदि I) में है। पर BORI क्रिटिकल एडिशन ने 1,200 से अधिक पांडुलिपियों की तुलना करके इसे मुख्य पाठ से बाहर रखा है, क्योंकि कई पुरानी पांडुलिपियों में यह है ही नहीं।',
      hg: 'Vyasa bolte gaye, Ganesh likhte gaye, shart yeh ki kalam ek pal ko na ruke. Yeh Ganguli ke translation (Adi I) mein hai. Par BORI Critical Edition ne 1,200 se zyada manuscripts compare karke ise main text se bahar rakha hai, kyunki kai purane manuscripts mein yeh hai hi nahi.',
    },
    speaker: 'sauti', cite: { p: 'adi', s: 'I' }, tier: 'later', url: ST('001'), tr: GANGULI,
    ex: '‘Ganesa, upon hearing this address, thus answered, ‘I will become the writer of thy work, provided my pen do not for a moment cease writing.’ And Vyasa said unto that divinity, ‘Wherever there be anything thou dost not comprehend, cease to continue writing.’',
  },
  {
    id: 'd7', kind: 'fact', look: 'art', art: 'churning', pos: '50% 20%', chars: ['devas', 'asuras', 'vishnu'],
    kicker: { en: 'Did you know', hi: 'क्या आप जानते हैं', hg: 'Kya aapko pata tha' },
    title: {
      en: 'The churning of the ocean is in the Mahabharata too.',
      hi: 'समुद्र मंथन की कथा महाभारत में भी है।',
      hg: 'Samudra manthan ki kahaani Mahabharata mein bhi hai.',
    },
    body: {
      en: 'Sauti tells it early in the Adi Parva: Mount Mandara becomes the churning rod as the ocean is churned for amrita. This painting is from the Razmnama, the Persian Mahabharata made at Akbar’s court.',
      hi: 'सौति इसे आदि पर्व की शुरुआत में सुनाते हैं: अमृत के लिए समुद्र मथा जाता है और मंदार पर्वत मथानी बनता है। यह चित्र रज़्मनामा से है, अकबर के दरबार में बना फ़ारसी महाभारत।',
      hg: 'Sauti ise Adi Parva ki shuruaat mein sunaate hain: amrit ke liye samudra matha jaata hai aur Mandar parvat mathani banta hai. Yeh painting Razmnama se hai, Akbar ke darbaar mein bani Persian Mahabharata.',
    },
    speaker: 'sauti', cite: { p: 'adi', s: 'XVII–XVIII' }, tier: 'vyasa', url: ST('018'), tr: GANGULI,
    ex: '‘There is a mountain called Mandara adorned with cloud-like peaks… The gods wanted to tear it up and use it as a churning rod but failing to do so [came] to Vishnu and Brahman who were sitting together…’',
  },
  {
    id: 'd8', kind: 'shloka', look: 'night', chars: ['krishna', 'arjuna'], num: '२.२२',
    sa: 'वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि ।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही ॥',
    tl: 'vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro ’parāṇi · tathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī',
    text: {
      en: 'As a man, casting off worn-out garments, taketh new ones, so the dweller in the body, casting off worn-out bodies, entereth into others that are new.',
      hi: 'जैसे मनुष्य पुराने वस्त्र उतारकर नए वस्त्र पहन लेता है, वैसे ही देह में रहने वाला पुराने शरीर छोड़कर नए शरीरों में प्रवेश करता है।',
      hg: 'Jaise insaan purane kapde utaarkar naye pehen leta hai, waise hi shareer mein rehne wala purane shareer chhodkar naye shareer mein chala jaata hai.',
    },
    trBy: { en: 'Translation: Annie Besant (1922)', hi: 'अनुवाद: मूल (संस्कृत से)', hg: 'Translation: Mool (Sanskrit se)' },
    speaker: 'krishna', cite: { p: 'gita', s: '2.22' }, tier: 'vyasa',
    url: 'https://en.wikisource.org/wiki/Bhagavad-Gita_(Besant_4th)/Discourse_2', tr: 'Annie Besant, 4th ed. (1922) · public domain',
    ex: 'As a man, casting off worn-out garments, taketh new ones, so the dweller in the body, casting off worn-out bodies, entereth into others that are new. (22)',
  },
];

/* ============================== INTRO ============================== */
const INTRO = [
  {
    id: 'i1', kind: 'intro-hero',
    title: { en: 'Your roots.\nOne swipe at a time.', hi: 'अपनी जड़ों से जुड़िए,\nएक स्वाइप में।', hg: 'Apni jadon se judo,\nek swipe mein.' },
    sub: {
      en: 'No lectures. No 900-page books. Just the stories, exactly as the texts tell them.',
      hi: 'न लंबे प्रवचन, न 900 पन्नों की किताबें। बस कथाएँ, जैसी ग्रंथों में लिखी हैं।',
      hg: 'Na lambe lecture, na 900 page ki kitaabein. Bas kahaaniyan, jaisi granthon mein likhi hain.',
    },
  },
  {
    id: 'i2', kind: 'intro-map',
    title: { en: 'Where it all comes from', hi: 'सब कुछ कहाँ से आया', hg: 'Sab kuch kahan se aaya' },
    rows: [
      { n: 'वेद', en: ['Vedas', 'The oldest hymns, asking how everything began.'], hi: ['वेद', 'सबसे प्राचीन सूक्त: सृष्टि कैसे शुरू हुई?'], hg: ['Ved', 'Sabse purane mantra: sab kuch shuru kaise hua?'] },
      { n: 'उपनिषद्', en: ['Upanishads', 'Conversations about the self and the universe.'], hi: ['उपनिषद', 'आत्मा और ब्रह्मांड पर संवाद।'], hg: ['Upanishad', 'Aatma aur brahmaand par baatcheet.'] },
      { n: 'इतिहास', en: ['Itihasa', 'The great epics: Ramayana and Mahabharata.'], hi: ['इतिहास', 'महाकाव्य: रामायण और महाभारत।'], hg: ['Itihasa', 'Mahakavya: Ramayana aur Mahabharata.'] },
      { n: 'पुराण', en: ['Puranas', 'Stories of gods, creation and the ages.'], hi: ['पुराण', 'देवताओं, सृष्टि और युगों की कथाएँ।'], hg: ['Puran', 'Devtaon, srishti aur yugon ki kahaaniyan.'] },
    ],
  },
  {
    id: 'i3', kind: 'intro-trust',
    title: { en: 'Every screen shows its source.', hi: 'हर स्क्रीन पर उसका स्रोत।', hg: 'Har screen par uska source.' },
    rows: [
      { t: 'vyasa', en: 'Straight from the scripture, with book and section.', hi: 'सीधे ग्रंथ से, पर्व और खंड सहित।', hg: 'Seedha granth se, parva aur section ke saath.' },
      { t: 'later', en: 'Found in some versions, but not in the oldest manuscripts.', hi: 'कुछ संस्करणों में मिलता है, सबसे पुरानी पांडुलिपियों में नहीं।', hg: 'Kuch versions mein hai, sabse purane manuscripts mein nahi.' },
      { t: 'myth', en: 'Famous from TV or folklore, but not in the text.', hi: 'टीवी या लोककथा से प्रसिद्ध, पर ग्रंथ में नहीं।', hg: 'TV ya lok-katha se famous, par text mein nahi.' },
    ],
    sub: { en: 'Tap the scroll icon on any screen to read the original.', hi: 'मूल पाठ पढ़ने के लिए किसी भी स्क्रीन पर स्क्रॉल-चिह्न दबाएँ।', hg: 'Original padhne ke liye kisi bhi screen par scroll icon dabao.' },
  },
  {
    id: 'i4', kind: 'intro-go',
    title: { en: 'We begin with the Mahabharata.', hi: 'हम शुरू करते हैं महाभारत से।', hg: 'Shuru karte hain Mahabharata se.' },
    sub: {
      en: 'One of the longest poems ever composed, with the Bhagavad Gita at its heart.',
      hi: 'दुनिया के सबसे लंबे काव्यों में से एक, जिसके केंद्र में है भगवद्गीता।',
      hg: 'Duniya ki sabse lambi kavitaon mein se ek, jiske beech mein hai Bhagavad Gita.',
    },
    btn: { en: 'Start Episode 1', hi: 'एपिसोड 1 शुरू करें', hg: 'Episode 1 shuru karo' },
  },
];

/* ============================= JOURNEY ============================= */
const STAGES = [
  {
    id: 'vedas', n: '१', dev: 'वेद', status: 'locked',
    name: { en: 'Vedas', hi: 'वेद', hg: 'Ved' },
    line: { en: 'Where it all begins: the oldest hymns', hi: 'जहाँ से सब शुरू हुआ: सबसे प्राचीन सूक्त', hg: 'Jahan se sab shuru hua: sabse purane mantra' },
    teaser: {
      look: 'night',
      sa: 'इयं विसृष्टिर्यत आबभूव\nयदि वा दधे यदि वा न ।\nयो अस्याध्यक्षः परमे व्योम-\nन्त्सो अङ्ग वेद यदि वा न वेद ॥',
      text: {
        en: 'He, the first origin of this creation, whether he formed it all or did not form it, whose eye controls this world in highest heaven, he verily knows it, or perhaps he knows not.',
        hi: 'यह सृष्टि जहाँ से उत्पन्न हुई, उसने इसे रचा या नहीं रचा, जो परम आकाश से इसका अध्यक्ष है, वही जानता है… या शायद वह भी नहीं जानता।',
        hg: 'Yeh srishti kahan se aayi, usne ise banaya ya nahi, jo sabse oonche aakash se iska maalik hai, wahi jaanta hai… ya shayad woh bhi nahi jaanta.',
      },
      cite: { en: 'Rigveda 10.129.7 · Nasadiya Sukta · tr. R. T. H. Griffith', hi: 'ऋग्वेद 10.129.7 · नासदीय सूक्त · अनुवाद: मूल', hg: 'Rigveda 10.129.7 · Nasadiya Sukta · translation: Mool' },
      hook: { en: 'The creation hymn that ends with a question.', hi: 'सृष्टि का वह सूक्त जो एक प्रश्न पर ख़त्म होता है।', hg: 'Srishti ka woh mantra jo ek sawaal par khatam hota hai.' },
    },
  },
  {
    id: 'upanishads', n: '२', dev: 'उपनिषद्', status: 'locked',
    name: { en: 'Upanishads', hi: 'उपनिषद', hg: 'Upanishad' },
    line: { en: 'The big questions: who am I?', hi: 'बड़े प्रश्न: मैं कौन हूँ?', hg: 'Bade sawaal: main kaun hoon?' },
    teaser: {
      look: 'paper',
      sa: 'असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥',
      text: {
        en: 'From the unreal, lead me to the real. From darkness, lead me to light. From death, lead me to immortality.',
        hi: 'असत्य से मुझे सत्य की ओर ले चलो। अंधकार से प्रकाश की ओर। मृत्यु से अमरता की ओर।',
        hg: 'Jhooth se mujhe sach ki taraf le chalo. Andhere se roshni ki taraf. Maut se amarta ki taraf.',
      },
      cite: { en: 'Brihadaranyaka Upanishad 1.3.28 · translation: Mool', hi: 'बृहदारण्यक उपनिषद 1.3.28 · अनुवाद: मूल', hg: 'Brihadaranyaka Upanishad 1.3.28 · translation: Mool' },
      hook: { en: 'You’ve heard this prayer. Here’s where it comes from.', hi: 'यह प्रार्थना आपने सुनी है। यह आती कहाँ से है?', hg: 'Yeh prarthana suni hai na? Yeh aati kahan se hai?' },
    },
  },
  {
    id: 'itihasa', n: '३', dev: 'इतिहास', status: 'live',
    name: { en: 'Itihasa', hi: 'इतिहास', hg: 'Itihasa' },
    line: { en: 'The great epics', hi: 'महाकाव्य', hg: 'Mahakavya' },
    children: [
      {
        id: 'ramayana', status: 'locked',
        name: { en: 'Ramayana', hi: 'रामायण', hg: 'Ramayana' },
        teaser: {
          look: 'art', art: 'valmiki',
          sa: 'मा निषाद प्रतिष्ठां त्व-\nमगमः शाश्वतीः समाः ।\nयत्क्रौञ्चमिथुनादेक-\nमवधीः काममोहितम् ॥',
          text: {
            en: '“No fame be thine for endless time, because, base outcast, of thy crime, whose cruel hand was fain to slay one of this gentle pair at play!”',
            hi: '“हे निषाद! तुम्हें अनंत काल तक प्रतिष्ठा न मिले, क्योंकि तुमने प्रेम में मग्न क्रौंच पक्षियों के जोड़े में से एक को मार डाला।”',
            hg: '“Hey shikaari! Tumhe kabhi izzat na mile, kyunki tumne pyaar mein doobe kraunch pakshiyon ke jode mein se ek ko maar diya.”',
          },
          cite: { en: 'Valmiki Ramayana · Bala Kanda, Canto II · tr. R. T. H. Griffith', hi: 'वाल्मीकि रामायण · बाल कांड, सर्ग 2 · अनुवाद: मूल', hg: 'Valmiki Ramayana · Bala Kanda, Sarga 2 · translation: Mool' },
          hook: { en: 'Valmiki’s grief became the first shloka.', hi: 'वाल्मीकि का शोक बना पहला श्लोक।', hg: 'Valmiki ka dukh bana pehla shloka.' },
        },
      },
      {
        id: 'mahabharata', status: 'live',
        name: { en: 'Mahabharata', hi: 'महाभारत', hg: 'Mahabharata' },
      },
    ],
  },
  {
    id: 'puranas', n: '४', dev: 'पुराण', status: 'locked',
    name: { en: 'Puranas', hi: 'पुराण', hg: 'Puran' },
    line: { en: 'Gods, creation and the ages', hi: 'देवता, सृष्टि और युग', hg: 'Devta, srishti aur yug' },
    teaser: {
      look: 'art', art: 'churning',
      text: {
        en: 'The churning of the ocean, the avatars of Vishnu, the stories of Shiva and Devi, told across the eighteen great Puranas.',
        hi: 'समुद्र मंथन, विष्णु के अवतार, शिव और देवी की कथाएँ, अठारह महापुराणों में।',
        hg: 'Samudra manthan, Vishnu ke avatar, Shiv aur Devi ki kahaaniyan, atharah Mahapuranon mein.',
      },
      cite: { en: 'Coming after the epics', hi: 'महाकाव्यों के बाद', hg: 'Epics ke baad' },
      hook: { en: 'Where the gods’ own stories live.', hi: 'जहाँ देवताओं की अपनी कथाएँ हैं।', hg: 'Jahan devtaon ki apni kahaaniyan hain.' },
    },
  },
];

/* =============================== UI =============================== */
const UI = {
  en: {
    story: 'Story', discover: 'Discover', nav_scroll: 'Scroll', nav_journey: 'Journey', nav_saved: 'Saved',
    like: 'Like', save: 'Save', share: 'Share', source: 'Source', lang: 'Lang',
    tier_vyasa: 'In the text', tier_later: 'Later addition', tier_myth: 'Popular myth',
    swipe: 'Swipe up', dbl: 'Double-tap to like',
    read_original: 'Read the original', translation: 'Translation', full_section: 'Read the full section', report: 'Report an error',
    original_note: 'Original public-domain English translation', close: 'Close',
    journey_title: 'Your journey', diya: 'Day 1 · your diya is lit', start_here: 'Start here', start_here_line: 'What these texts are, in five screens',
    live: 'Live now', soon: 'Coming soon', notify: 'Notify me', notified: 'You’re on the list', vote_note: 'Every “Notify me” is a vote for what we build next.',
    continue: 'Continue', screens_read: 'screens read', ep1: 'Season 1 · Episode 1',
    saved_title: 'Saved', saved_empty: 'Nothing saved yet. Tap the bookmark on any screen.',
    sources_credits: 'Sources & credits', reset: 'Reset prototype',
    toast_saved: 'Saved', toast_unsaved: 'Removed from saved', toast_copied: 'Copied with source', toast_report: 'Thanks. Flagged for review.',
    toast_sound_on: 'Tanpura on', toast_sound_off: 'Tanpura off', choose_lang: 'Choose your language', change_later: 'You can switch on any screen.',
    teaser_label: 'A first taste', go_journey: 'Open Journey', ver_label: 'Verdict',
  },
  hi: {
    story: 'कथा', discover: 'खोजें', nav_scroll: 'स्क्रॉल', nav_journey: 'यात्रा', nav_saved: 'सहेजे',
    like: 'पसंद', save: 'सहेजें', share: 'भेजें', source: 'स्रोत', lang: 'भाषा',
    tier_vyasa: 'ग्रंथ में', tier_later: 'बाद का जोड़', tier_myth: 'लोकप्रिय मिथक',
    swipe: 'ऊपर स्वाइप करें', dbl: 'पसंद के लिए दो बार टैप करें',
    read_original: 'मूल पाठ पढ़ें', translation: 'अनुवाद', full_section: 'पूरा खंड पढ़ें', report: 'ग़लती बताएँ',
    original_note: 'मूल सार्वजनिक अंग्रेज़ी अनुवाद', close: 'बंद करें',
    journey_title: 'आपकी यात्रा', diya: 'दिन 1 · आपका दीया जल गया', start_here: 'यहाँ से शुरू करें', start_here_line: 'ये ग्रंथ क्या हैं, पाँच स्क्रीन में',
    live: 'अभी उपलब्ध', soon: 'जल्द आ रहा है', notify: 'मुझे बताएँ', notified: 'आप सूची में हैं', vote_note: 'हर “मुझे बताएँ” एक वोट है, कि हम आगे क्या बनाएँ।',
    continue: 'जारी रखें', screens_read: 'स्क्रीन पढ़ीं', ep1: 'सीज़न 1 · एपिसोड 1',
    saved_title: 'सहेजे गए', saved_empty: 'अभी कुछ नहीं सहेजा। किसी भी स्क्रीन पर बुकमार्क दबाएँ।',
    sources_credits: 'स्रोत और श्रेय', reset: 'प्रोटोटाइप रीसेट करें',
    toast_saved: 'सहेज लिया', toast_unsaved: 'हटा दिया', toast_copied: 'स्रोत सहित कॉपी हुआ', toast_report: 'धन्यवाद। समीक्षा के लिए भेजा गया।',
    toast_sound_on: 'तानपुरा चालू', toast_sound_off: 'तानपुरा बंद', choose_lang: 'अपनी भाषा चुनें', change_later: 'किसी भी स्क्रीन पर बदल सकते हैं।',
    teaser_label: 'एक झलक', go_journey: 'यात्रा देखें', ver_label: 'निष्कर्ष',
  },
  hg: {
    story: 'Story', discover: 'Discover', nav_scroll: 'Scroll', nav_journey: 'Journey', nav_saved: 'Saved',
    like: 'Like', save: 'Save', share: 'Share', source: 'Source', lang: 'Bhasha',
    tier_vyasa: 'Text mein hai', tier_later: 'Baad mein joda', tier_myth: 'Popular myth',
    swipe: 'Upar swipe karo', dbl: 'Like ke liye double-tap',
    read_original: 'Original padho', translation: 'Translation', full_section: 'Poora section padho', report: 'Galti batao',
    original_note: 'Original public-domain English translation', close: 'Band karo',
    journey_title: 'Tumhari journey', diya: 'Day 1 · tumhara diya jal gaya', start_here: 'Yahan se shuru karo', start_here_line: 'Yeh granth kya hain, paanch screens mein',
    live: 'Live hai', soon: 'Jaldi aa raha hai', notify: 'Mujhe batana', notified: 'List mein ho', vote_note: 'Har “Mujhe batana” ek vote hai ki hum aage kya banayein.',
    continue: 'Continue karo', screens_read: 'screens padhi', ep1: 'Season 1 · Episode 1',
    saved_title: 'Saved', saved_empty: 'Abhi kuch save nahi kiya. Kisi bhi screen par bookmark dabao.',
    sources_credits: 'Sources & credits', reset: 'Prototype reset karo',
    toast_saved: 'Save ho gaya', toast_unsaved: 'Hata diya', toast_copied: 'Source ke saath copy hua', toast_report: 'Thanks. Review ke liye bhej diya.',
    toast_sound_on: 'Tanpura on', toast_sound_off: 'Tanpura off', choose_lang: 'Apni bhasha chuno', change_later: 'Kisi bhi screen par badal sakte ho.',
    teaser_label: 'Ek jhalak', go_journey: 'Journey kholo', ver_label: 'Verdict',
  },
};

const SOURCES = [
  ['Mahabharata', 'K. M. Ganguli, English prose translation (1883–96). Project Gutenberg #15474 · sacred-texts.com'],
  ['Bhagavad Gita', 'Annie Besant, 4th edition (1922), via Wikisource'],
  ['Rigveda', 'R. T. H. Griffith, The Hymns of the Rigveda (1889–92), via Wikisource'],
  ['Ramayana', 'R. T. H. Griffith, The Rámáyan of Válmíki (1870–74). Project Gutenberg #24869'],
  ['Reference', 'BORI Critical Edition (used only to identify later additions; not quoted)'],
  ['Hindi & Hinglish', 'Mool’s own translations from the sources above (prototype, pending native review)'],
];

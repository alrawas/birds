const BIRDS = [
  {
    scientific: "Haliaeetus leucocephalus",
    wiki: "Bald_eagle",
    en: {
      name: "Bald Eagle",
      family: "Accipitridae",
      habitat: "North American forests near water",
      description: "A large bird of prey and the national bird of the United States, known for its white head and tail."
    },
    ar: {
      name: "النسر الأصلع",
      family: "البازية",
      habitat: "غابات أمريكا الشمالية قرب المياه",
      description: "طائر جارح كبير وهو الطائر الوطني للولايات المتحدة، يُعرف برأسه وذيله الأبيضين."
    }
  },
  {
    scientific: "Turdus migratorius",
    wiki: "American_robin",
    en: {
      name: "American Robin",
      family: "Turdidae",
      habitat: "Gardens, woodlands, and parks across North America",
      description: "A familiar songbird with a rusty-red breast, often seen pulling worms from lawns."
    },
    ar: {
      name: "أبو الحنّاء الأمريكي",
      family: "السُّمَنية",
      habitat: "الحدائق والغابات والمتنزّهات في أمريكا الشمالية",
      description: "طائر مغرّد مألوف بصدر أحمر صدئ، كثيراً ما يُشاهد وهو يلتقط الديدان من الحدائق."
    }
  },
  {
    scientific: "Anas platyrhynchos",
    wiki: "Mallard",
    en: {
      name: "Mallard",
      family: "Anatidae",
      habitat: "Wetlands, ponds, and rivers worldwide",
      description: "A widespread dabbling duck; males have a glossy green head and yellow bill."
    },
    ar: {
      name: "البطّ البرّي",
      family: "البطّية",
      habitat: "الأراضي الرطبة والبرك والأنهار حول العالم",
      description: "بطّ منتشر يتغذّى على سطح الماء؛ يتميّز الذكر برأس أخضر لامع ومنقار أصفر."
    }
  },
  {
    scientific: "Cardinalis cardinalis",
    wiki: "Northern_cardinal",
    en: {
      name: "Northern Cardinal",
      family: "Cardinalidae",
      habitat: "Woodlands and gardens in eastern North America",
      description: "Males are brilliant red with a black mask; females are warm brown with red accents."
    },
    ar: {
      name: "الكاردينال الشمالي",
      family: "الكاردينالية",
      habitat: "الغابات والحدائق في شرق أمريكا الشمالية",
      description: "الذكور حمراء زاهية بقناع أسود، والإناث بنّية دافئة مع لمسات حمراء."
    }
  },
  {
    scientific: "Tyto alba",
    wiki: "Barn_owl",
    en: {
      name: "Barn Owl",
      family: "Tytonidae",
      habitat: "Open countryside and farmland on every continent except Antarctica",
      description: "A pale, heart-faced owl that hunts silently at night for small mammals."
    },
    ar: {
      name: "بومة المخازن",
      family: "بوميات المخازن",
      habitat: "الأرياف المفتوحة والأراضي الزراعية في كل القارات عدا القطب الجنوبي",
      description: "بومة شاحبة بوجه قلبي الشكل تصطاد الثدييات الصغيرة بصمت في الليل."
    }
  },
  {
    scientific: "Archilochus colubris",
    wiki: "Ruby-throated_hummingbird",
    en: {
      name: "Ruby-throated Hummingbird",
      family: "Trochilidae",
      habitat: "Eastern North American forests and gardens",
      description: "A tiny iridescent green hummingbird; males have a brilliant red throat patch."
    },
    ar: {
      name: "الطنّان ياقوتي الحلق",
      family: "الطنّانية",
      habitat: "غابات وحدائق شرق أمريكا الشمالية",
      description: "طائر طنّان صغير بلون أخضر متلألئ؛ يحمل الذكر بقعة حمراء زاهية على الحلق."
    }
  },
  {
    scientific: "Ardea herodias",
    wiki: "Great_blue_heron",
    en: {
      name: "Great Blue Heron",
      family: "Ardeidae",
      habitat: "Marshes, lakeshores, and coastlines of North and Central America",
      description: "A tall wading bird that stalks fish and frogs in shallow water with patient grace."
    },
    ar: {
      name: "البلشون الأزرق الكبير",
      family: "البلشونية",
      habitat: "المستنقعات وضفاف البحيرات وسواحل أمريكا الشمالية والوسطى",
      description: "طائر خوّاض طويل يتعقّب الأسماك والضفادع في المياه الضحلة بصبر ورشاقة."
    }
  },
  {
    scientific: "Fratercula arctica",
    wiki: "Atlantic_puffin",
    en: {
      name: "Atlantic Puffin",
      family: "Alcidae",
      habitat: "North Atlantic coasts and cliffs",
      description: "A small seabird with a colorful triangular bill that breeds in burrowing colonies."
    },
    ar: {
      name: "البفن الأطلسي",
      family: "الألقية",
      habitat: "سواحل وجروف شمال المحيط الأطلسي",
      description: "طائر بحري صغير بمنقار مثلّث ملوّن، يتكاثر في مستعمرات تحفر الجحور."
    }
  },
  {
    scientific: "Falco peregrinus",
    wiki: "Peregrine_falcon",
    en: {
      name: "Peregrine Falcon",
      family: "Falconidae",
      habitat: "Cliffs, mountains, and cities worldwide",
      description: "The fastest animal on Earth; reaches over 320 km/h in a hunting stoop."
    },
    ar: {
      name: "الصقر الشاهين",
      family: "الصقرية",
      habitat: "الجروف والجبال والمدن حول العالم",
      description: "أسرع كائن حيّ على الأرض؛ يتجاوز ٣٢٠ كم/س في انقضاضه على فرائسه."
    }
  },
  {
    scientific: "Aptenodytes forsteri",
    wiki: "Emperor_penguin",
    en: {
      name: "Emperor Penguin",
      family: "Spheniscidae",
      habitat: "Antarctic ice and surrounding seas",
      description: "The tallest and heaviest penguin; males incubate eggs through the polar winter."
    },
    ar: {
      name: "البطريق الإمبراطور",
      family: "البطريقية",
      habitat: "جليد القطب الجنوبي والبحار المحيطة به",
      description: "أطول وأثقل أنواع البطاريق؛ تحتضن الذكور البيض طوال الشتاء القطبي."
    }
  },
  {
    scientific: "Ara macao",
    wiki: "Scarlet_macaw",
    en: {
      name: "Scarlet Macaw",
      family: "Psittacidae",
      habitat: "Tropical rainforests of Central and South America",
      description: "A vivid red, yellow, and blue parrot with a loud call and strong, curved beak."
    },
    ar: {
      name: "الببغاء القرمزي",
      family: "الببغاوية",
      habitat: "الغابات المطيرة الاستوائية في أمريكا الوسطى والجنوبية",
      description: "ببغاء بألوان حمراء وصفراء وزرقاء زاهية، بصوت عالٍ ومنقار قويّ معقوف."
    }
  },
  {
    scientific: "Bubo scandiacus",
    wiki: "Snowy_owl",
    en: {
      name: "Snowy Owl",
      family: "Strigidae",
      habitat: "Arctic tundra of North America and Eurasia",
      description: "A large white owl that hunts by day, feeding mostly on lemmings and other small mammals."
    },
    ar: {
      name: "البومة الثلجية",
      family: "البومية",
      habitat: "التندرا القطبية في أمريكا الشمالية وأوراسيا",
      description: "بومة بيضاء كبيرة تصطاد نهاراً وتتغذّى أساساً على القوارض الصغيرة."
    }
  },
  {
    scientific: "Alcedo atthis",
    wiki: "Common_kingfisher",
    en: {
      name: "Common Kingfisher",
      family: "Alcedinidae",
      habitat: "Streams and rivers across Eurasia and North Africa",
      description: "A small, jewel-toned bird that dives headfirst into water to catch fish."
    },
    ar: {
      name: "الرفراف الشائع",
      family: "الرفرافية",
      habitat: "الجداول والأنهار في أوراسيا وشمال أفريقيا",
      description: "طائر صغير بألوان جوهرية يغوص رأساً في الماء ليصطاد الأسماك."
    }
  },
  {
    scientific: "Phoenicopterus roseus",
    wiki: "Greater_flamingo",
    en: {
      name: "Greater Flamingo",
      family: "Phoenicopteridae",
      habitat: "Salt lakes and lagoons in Africa, southern Europe, and Asia",
      description: "A tall pink wading bird that filter-feeds on algae and small invertebrates."
    },
    ar: {
      name: "النحّام الكبير",
      family: "النحّامية",
      habitat: "البحيرات المالحة والبرك الساحلية في أفريقيا وجنوب أوروبا وآسيا",
      description: "طائر خوّاض طويل وردي اللون يتغذّى بالترشيح على الطحالب واللافقاريات الصغيرة."
    }
  },
  {
    scientific: "Erithacus rubecula",
    wiki: "European_robin",
    en: {
      name: "European Robin",
      family: "Muscicapidae",
      habitat: "Gardens and woodlands across Europe",
      description: "A small, bold songbird with an orange-red breast; a familiar garden visitor in winter."
    },
    ar: {
      name: "أبو الحنّاء الأوروبي",
      family: "الخاطفية",
      habitat: "الحدائق والغابات في جميع أنحاء أوروبا",
      description: "طائر مغرّد صغير جريء بصدر برتقالي محمرّ، زائر مألوف للحدائق في الشتاء."
    }
  },
  {
    scientific: "Ramphastos toco",
    wiki: "Toco_toucan",
    en: {
      name: "Toco Toucan",
      family: "Ramphastidae",
      habitat: "Semi-open woodlands of South America",
      description: "Famous for its enormous orange bill, used for reaching fruit and regulating body heat."
    },
    ar: {
      name: "طوقان توكو",
      family: "الطوقانية",
      habitat: "الغابات شبه المفتوحة في أمريكا الجنوبية",
      description: "يشتهر بمنقاره البرتقالي الضخم الذي يستخدمه للوصول إلى الفاكهة وتنظيم حرارة الجسم."
    }
  }
];

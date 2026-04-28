const BIRDS = [
  {
    name: "Bald Eagle",
    scientific: "Haliaeetus leucocephalus",
    family: "Accipitridae",
    habitat: "North American forests near water",
    description: "A large bird of prey and the national bird of the United States, known for its white head and tail.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Haliaeetus_leucocephalus_-Kodiak_National_Wildlife_Refuge%2C_Alaska%2C_USA-8.jpg/640px-Haliaeetus_leucocephalus_-Kodiak_National_Wildlife_Refuge%2C_Alaska%2C_USA-8.jpg"
  },
  {
    name: "American Robin",
    scientific: "Turdus migratorius",
    family: "Turdidae",
    habitat: "Gardens, woodlands, and parks across North America",
    description: "A familiar songbird with a rusty-red breast, often seen pulling worms from lawns.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/640px-Turdus-migratorius-002.jpg"
  },
  {
    name: "Mallard",
    scientific: "Anas platyrhynchos",
    family: "Anatidae",
    habitat: "Wetlands, ponds, and rivers worldwide",
    description: "A widespread dabbling duck; males have a glossy green head and yellow bill.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pair_of_mallards.jpg/640px-Pair_of_mallards.jpg"
  },
  {
    name: "Northern Cardinal",
    scientific: "Cardinalis cardinalis",
    family: "Cardinalidae",
    habitat: "Woodlands and gardens in eastern North America",
    description: "Males are brilliant red with a black mask; females are warm brown with red accents.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/20191124_Northern_Cardinal_at_Reed_Lake_Park_in_Calgary.jpg/640px-20191124_Northern_Cardinal_at_Reed_Lake_Park_in_Calgary.jpg"
  },
  {
    name: "Barn Owl",
    scientific: "Tyto alba",
    family: "Tytonidae",
    habitat: "Open countryside and farmland on every continent except Antarctica",
    description: "A pale, heart-faced owl that hunts silently at night for small mammals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg/640px-Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg"
  },
  {
    name: "Ruby-throated Hummingbird",
    scientific: "Archilochus colubris",
    family: "Trochilidae",
    habitat: "Eastern North American forests and gardens",
    description: "A tiny iridescent green hummingbird; males have a brilliant red throat patch.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Archilochus-alexandri-002-edit.jpg/640px-Archilochus-alexandri-002-edit.jpg"
  },
  {
    name: "Great Blue Heron",
    scientific: "Ardea herodias",
    family: "Ardeidae",
    habitat: "Marshes, lakeshores, and coastlines of North and Central America",
    description: "A tall wading bird that stalks fish and frogs in shallow water with patient grace.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Great_Blue_Heron_%28Ardea_herodias%29_-_Walton_County%2C_Georgia.jpg/640px-Great_Blue_Heron_%28Ardea_herodias%29_-_Walton_County%2C_Georgia.jpg"
  },
  {
    name: "Atlantic Puffin",
    scientific: "Fratercula arctica",
    family: "Alcidae",
    habitat: "North Atlantic coasts and cliffs",
    description: "A small seabird with a colorful triangular bill that breeds in burrowing colonies.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Puffin_%28Fratercula_arctica%29.jpg/640px-Puffin_%28Fratercula_arctica%29.jpg"
  },
  {
    name: "Peregrine Falcon",
    scientific: "Falco peregrinus",
    family: "Falconidae",
    habitat: "Cliffs, mountains, and cities worldwide",
    description: "The fastest animal on Earth; reaches over 320 km/h in a hunting stoop.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Falco_peregrinus_-Washington_-USA_-juvenile-8.jpg/640px-Falco_peregrinus_-Washington_-USA_-juvenile-8.jpg"
  },
  {
    name: "Emperor Penguin",
    scientific: "Aptenodytes forsteri",
    family: "Spheniscidae",
    habitat: "Antarctic ice and surrounding seas",
    description: "The tallest and heaviest penguin; males incubate eggs through the polar winter.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Emperor_Penguin_Manchot_empereur.jpg/640px-Emperor_Penguin_Manchot_empereur.jpg"
  },
  {
    name: "Scarlet Macaw",
    scientific: "Ara macao",
    family: "Psittacidae",
    habitat: "Tropical rainforests of Central and South America",
    description: "A vivid red, yellow, and blue parrot with a loud call and strong, curved beak.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ara_macao_-flying_away-8a.jpg/640px-Ara_macao_-flying_away-8a.jpg"
  },
  {
    name: "Snowy Owl",
    scientific: "Bubo scandiacus",
    family: "Strigidae",
    habitat: "Arctic tundra of North America and Eurasia",
    description: "A large white owl that hunts by day, feeding mostly on lemmings and other small mammals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Snowy_Owl_%28240866707%29.jpeg/640px-Snowy_Owl_%28240866707%29.jpeg"
  },
  {
    name: "Common Kingfisher",
    scientific: "Alcedo atthis",
    family: "Alcedinidae",
    habitat: "Streams and rivers across Eurasia and North Africa",
    description: "A small, jewel-toned bird that dives headfirst into water to catch fish.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Common-Kingfisher-Alcedo-atthis.jpg/640px-Common-Kingfisher-Alcedo-atthis.jpg"
  },
  {
    name: "Greater Flamingo",
    scientific: "Phoenicopterus roseus",
    family: "Phoenicopteridae",
    habitat: "Salt lakes and lagoons in Africa, southern Europe, and Asia",
    description: "A tall pink wading bird that filter-feeds on algae and small invertebrates.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Phoenicopterus_roseus_-Camargue%2C_France_-three-8.jpg/640px-Phoenicopterus_roseus_-Camargue%2C_France_-three-8.jpg"
  },
  {
    name: "European Robin",
    scientific: "Erithacus rubecula",
    family: "Muscicapidae",
    habitat: "Gardens and woodlands across Europe",
    description: "A small, bold songbird with an orange-red breast; a familiar garden visitor in winter.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Erithacus_rubecula_with_cocked_head.jpg/640px-Erithacus_rubecula_with_cocked_head.jpg"
  },
  {
    name: "Toco Toucan",
    scientific: "Ramphastos toco",
    family: "Ramphastidae",
    habitat: "Semi-open woodlands of South America",
    description: "Famous for its enormous orange bill, used for reaching fruit and regulating body heat.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Tucano-toco_%28Ramphastos_toco%29.jpg/640px-Tucano-toco_%28Ramphastos_toco%29.jpg"
  }
];

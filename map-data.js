// Aweron map data. Coordinates use a 1153 x 1364 grid, matching the base image.
// zoom: 1 = always shown, 2 = region view, 3 = close view.
// story: true draws a red marker. Everything else is orange.
// See the map-keeper skill for how to add places and chapter views.
window.AWERON = {
  places: [
    // Story locations
    {id:"queens-court",name:"Queen's Court",x:270,y:345,zoom:1,story:true},
    {id:"forest-run",name:"Forest Run",x:300,y:470,zoom:1,story:true},
    {id:"cottage",name:"Ambis's Cottage",x:301,y:554,zoom:1,story:true},
    {id:"hideout",name:"Adrian's Hideout",x:268,y:940,zoom:1,story:true},
    {id:"abhay-lands",name:"Karn Lands",x:300,y:1060,zoom:1,story:true},
    {id:"academy",name:"The Academy",x:660,y:345,zoom:1,story:true},
    {id:"tiny-city",name:"Tiny City",x:739,y:657,zoom:1,story:true},
    {id:"stronghold",name:"Ashborn's Stronghold",x:598,y:1060,zoom:1,story:true},
    {id:"lupara",name:"Lupara, the Wolf King's Hall",x:680,y:855,zoom:1,story:true},
    {id:"wolfs-gate",name:"Wolf's Gate",x:510,y:905,zoom:1,story:true},
    // Elf Queendom and the Great Forest
    {id:"aelwyn",name:"Aelwyn",x:190,y:310,zoom:2},
    {id:"thaloria",name:"Thaloria",x:440,y:300,zoom:2},
    {id:"sylvaren",name:"Sylvaren",x:350,y:415,zoom:2},
    {id:"silverroot",name:"Silverroot",x:180,y:430,zoom:2},
    {id:"mirethil",name:"Mirethil",x:300,y:545,zoom:2},
    {id:"elder-grove",name:"Elder Grove",x:230,y:590,zoom:3},
    {id:"moonwell",name:"Moonwell",x:370,y:490,zoom:3},
    // The Wild Side
    {id:"raptor-run",name:"Raptor Run",x:300,y:680,zoom:2},
    {id:"sunken-glade",name:"Sunken Glade",x:200,y:790,zoom:2},
    {id:"beast-trail",name:"Old Beast Trail",x:360,y:800,zoom:3},
    // Orc Forest
    {id:"black-fen",name:"Black Fen",x:230,y:900,zoom:2},
    {id:"edge-camps",name:"Hunters' Edge Camps",x:400,y:990,zoom:2},
    {id:"bone-thicket",name:"Bone Thicket",x:300,y:1000,zoom:3},
    // Stonecrown Mountains
    {id:"stonewater",name:"Stonewater",x:860,y:205,zoom:1},
    {id:"hawkfall",name:"Hawkfall",x:1005,y:305,zoom:1},
    {id:"aetos",name:"Aetos",x:820,y:300,zoom:2},
    {id:"anvil-gate",name:"Anvil Gate",x:620,y:300,zoom:2},
    {id:"high-crown",name:"High Crown",x:745,y:170,zoom:2},
    {id:"frostmere",name:"Frostmere",x:900,y:262,zoom:3},
    {id:"rim-pass",name:"Rim Pass",x:735,y:335,zoom:2},
    // Beastfolk slopes
    {id:"thornhome",name:"Thornhome",x:530,y:420,zoom:2},
    {id:"hollow-antler",name:"Hollow Antler",x:725,y:362,zoom:2},
    {id:"vinewatch",name:"Vinewatch",x:780,y:430,zoom:2},
    {id:"clawfall",name:"Clawfall",x:865,y:378,zoom:2},
    // Crater and plains
    {id:"rimhold",name:"Rimhold",x:610,y:480,zoom:2},
    {id:"lakeside",name:"Lakeside",x:520,y:575,zoom:3},
    {id:"babrak",name:"Babrak",x:400,y:650,zoom:2},
    {id:"stripe-ford",name:"Stripe Ford",x:440,y:565,zoom:3},
    {id:"gajpur",name:"Gajpur",x:490,y:640,zoom:2},
    {id:"hastina",name:"Hastina",x:640,y:660,zoom:2},
    {id:"great-market",name:"Great Market",x:570,y:725,zoom:3},
    {id:"tusk-bridge",name:"Tusk Bridge",x:470,y:725,zoom:3},
    // Cobra coast
    {id:"serpa",name:"Serpa",x:790,y:570,zoom:2},
    {id:"wadjet",name:"Wadjet",x:880,y:545,zoom:2},
    {id:"port-kemet",name:"Port Kemet",x:930,y:600,zoom:1},
    {id:"reedmouth",name:"Reedmouth",x:845,y:595,zoom:3},
    // Scorpion desert
    {id:"aqrab",name:"Aqrab",x:820,y:790,zoom:2},
    {id:"stinger-wells",name:"Stinger Wells",x:890,y:690,zoom:2},
    {id:"bone-oasis",name:"Bone Oasis",x:780,y:730,zoom:3},
    {id:"smugglers-cove",name:"Smugglers' Cove",x:950,y:800,zoom:3},
    // Wolf Lands and the Cliff
    {id:"greyhold",name:"Greyhold",x:430,y:790,zoom:2},
    {id:"ashfield",name:"Ashfield",x:560,y:775,zoom:3},
    {id:"widow-falls",name:"Widow Falls",x:445,y:930,zoom:2},
    {id:"great-falls",name:"Great Falls",x:560,y:930,zoom:2},
    {id:"east-falls",name:"East Falls",x:812,y:930,zoom:2},
    // Orc Highlands
    {id:"greenvale",name:"Greenvale",x:560,y:965,zoom:2},
    {id:"khurdan",name:"Khurdan",x:470,y:1030,zoom:2},
    {id:"gravnar",name:"Gravnar",x:660,y:1020,zoom:2},
    {id:"hornpeak",name:"Hornpeak",x:420,y:1095,zoom:3},
    {id:"drakhul",name:"Drakhul",x:470,y:1150,zoom:2},
    {id:"rhuun",name:"Rhuun",x:590,y:1140,zoom:2},
    // Islands
    {id:"wardens",name:"Wardens' Isles",x:270,y:145,zoom:1,island:true},
    {id:"gull-reach",name:"Gull Reach",x:680,y:105,zoom:1,island:true},
    {id:"shardlings",name:"The Shardlings",x:100,y:320,zoom:1,island:true},
    {id:"lost-isles",name:"Lost Isles",x:95,y:490,zoom:1,island:true},
    {id:"drowned-crown",name:"Drowned Crown",x:105,y:850,zoom:1,island:true},
    {id:"widows-chain",name:"Widow's Chain",x:300,y:1205,zoom:1,island:true},
    {id:"salt-keys",name:"Salt Keys",x:1005,y:495,zoom:1,island:true},
    {id:"hundred-steps",name:"The Hundred Steps",x:950,y:665,zoom:1,island:true},
    {id:"slavers-teeth",name:"Slaver's Teeth",x:1030,y:765,zoom:1,island:true},
    {id:"ember-rocks",name:"Ember Rocks",x:795,y:1195,zoom:1,island:true}
  ],
  // Sharper painted sections that fade in when zoomed in. x, y and size use the same grid.
  details: [
    {file:"wolf-lands-detail.webp",x:370,y:610,size:440,fadeAt:1.6},
    {file:"academy-detail.webp",x:450,y:190,size:380,fadeAt:1.6},
    {file:"orc-forest-detail.webp",x:120,y:800,size:400,fadeAt:1.6},
    {file:"cottage-detail.webp",x:225,y:410,size:360,fadeAt:1.6},
    {file:"stronghold-detail.webp",x:360,y:905,size:360,fadeAt:1.6},
    {file:"tiny-city-detail.webp",x:535,y:470,size:340,fadeAt:1.6}
  ],
  // A view limits the markers to one part of the story.
  // These are drafts until the Book 1 plot is rebuilt.
  views: {
    "all": {label:"All places", route:true},
    "survival": {label:"Draft: Survival in the forest", route:false, show:["abhay-lands","hideout","black-fen","bone-thicket","edge-camps","sunken-glade","raptor-run","beast-trail"]},
    "cottage": {label:"Draft: Ambis and the cottage", route:false, show:["raptor-run","cottage","mirethil","elder-grove"]},
    "academy": {label:"Draft: The Academy years", route:false, show:["academy","thornhome","anvil-gate","rim-pass","rimhold","hastina"]},
    "forest-run": {label:"Draft: The Forest Run", route:false, show:["academy","forest-run","sylvaren","moonwell"]},
    "wolf-lands": {label:"Draft: Lucan and the Wolf Lands", route:false, show:["lupara","greyhold","ashfield","wolfs-gate","aqrab","tiny-city"]}
  }
};

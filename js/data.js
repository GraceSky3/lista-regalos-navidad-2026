const REGALOS_DATA = {
    ropa: [
        {
            id: "ropa-1",
            categoria: "Pantuflas",
            nombre: "Pantuflas Negras Pingu",
            tienda: "Primark / Similar",
            descripcion: "Calcetines zapatilla Pingu con suela antideslizante",
            prioridad: false,
            foto: "imagenes/Pingu.webp"
        },
        {
            id: "ropa-2",
            categoria: "Pantuflas",
            nombre: "Pantuflas Rosas Bastón de Caramelo",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas peluditas rosa pastel con bordado de bastones de caramelo y lacito rosa.",
            prioridad: false,
            foto: "imagenes/caramelo.webp"
        },
        {
            id: "ropa-3",
            categoria: "Pantuflas",
            nombre: "Pantuflas Blancas Fresitas y Lazos",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas tipo botín blanco borreguito con fresitas, corazones y lazos rojos bordados.",
            prioridad: false,
            foto: "imagenes/fresas.webp"
        },
        {
            id: "ropa-4",
            categoria: "Pantuflas",
            nombre: "Pantuflas Blancas Lazos Rojos",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas destalonadas blanco borreguito con pequeños lazos rojos y puntitos bordados.",
            prioridad: false,
            foto: "imagenes/lazitos.webp"
        },
        {
            id: "ropa-5",
            categoria: "Pijamas Bambi",
            nombre: "Pantalón Pijama Largo Bambi",
            tienda: "Primark (New in Bambi Pyjamas)",
            descripcion: "Pantalón largo de tejido polar súper suave estampado cervatillo con lazo rosa en la cintura.",
            prioridad: false,
            foto: "imagenes/pantalon pj.png"
        },
        {
            id: "ropa-6",
            categoria: "Pijamas Bambi",
            nombre: "Bata Polar con Capucha Bambi",
            tienda: "Primark (Disney Bambi)",
            descripcion: "Bata de estar por casa estampado cervatillo con orejitas en la capucha y bordado 'Disney Bambi' rosa.",
            prioridad: false,
            foto: "imagenes/batamanta.jpg"
        },
        {
            id: "ropa-7",
            categoria: "Pijamas Bambi",
            nombre: "Conjunto Pijama Corto Rosa Bambi",
            tienda: "Primark (Disney Bambi)",
            descripcion: "Conjunto de camiseta de tirantes y pantalón corto rosa claro con estampado de Bambi.",
            prioridad: false,
            foto: "imagenes/pijama corto.png"
        }
    ],
    munecas: [
        // BÁSICAS
        { 
            id: "mh-1", 
            linea: "Básicas", 
            nombre: "Nefera de Nile", 
            nota: "⭐ OPCIÓN 1 (Favorita)", 
            prioridad: true, 
            foto: "imagenes/nefera.webp",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/3474035059-monster-high-nefera?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10269779593-monster-high-nefera-de-nile-signature-g1-2012?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10237923805-monster-high-nefera-de-nil?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/10844810175-monster-high-nefera-de-nile-basica?referrer=catalog" },
                { tienda: "Vinted (Opción 5)", url: "https://www.vinted.es/items/4931971899-bambola-nefera-de-nile-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 6)", url: "https://www.vinted.es/items/7228809455-poupee-monster-high-nefera?referrer=catalog" }

            ]
        },
       /* { 
            id: "mh-2", 
            linea: "Básicas", 
            nombre: "Twyla", 
            nota: "Edición Básica", 
            prioridad: false, 
            foto: "imagenes/twyla.jpg",
            enlaces: [
                { tienda: "Vinted", url: "https://vinted.es/enlace-twyla" }
            ]
        },
        { 
            id: "mh-3", 
            linea: "Básicas", 
            nombre: "Honey Swamp", 
            nota: "Edición Básica", 
            prioridad: false, 
            foto: "imagenes/honey.avif",
            enlaces: [
                { tienda: "Vinted", url: "https://vinted.es/enlace-honey" }
            ]
        },*/
        { 
            id: "mh-4", 
            linea: "Básicas", 
            nombre: "Directora Decapitada", 
            nota: "Edición Básica", 
            prioridad: false, 
            foto: "imagenes/directora.jpg",
            enlaces: [
            { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/7552661083-monster-high-madame-sans-tete-et-son-cheval?referrer=catalog" },
            { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/6210986563-monster-professeure-sans-tete?referrer=catalog" },
            { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/9803596297-proviseur-sans-tete-et-cauchemars-monster-high?referrer=catalog" },        
            { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/7573241681-monster-high-directrice?referrer=catalog" },
            { tienda: "Vinted (Opción 5)", url: "https://www.vinted.es/items/10224604824-poupee-mme-le-proviseur-cheval-monster-high?referrer=catalog" },
            ]
        },
        // DAWN OF THE DANCE
        { 
            id: "mh-5", 
            linea: "Dawn of the Dance", 
            nombre: "Deuce Gorgon", 
            nota: "Colección Dawn of the Dance", 
            prioridad: false, 
            foto: "imagenes/deuce.jpg",
            enlaces: [
                { tienda: "Wallpop", url: "https://es.wallapop.com/item/monster-high-dawn-of-the-dance-leer-precios-1248321442" },
                { tienda: "Vinted (Opción 1 )", url: "https://www.vinted.es/items/9989096851-deuce-gorgon-de-monster-high-g1?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10899207852-poupee-monster-high-deuce-dawn-of-the-dance" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10654387163-deuce-gorgon-de-la-coleccion-dawn-of-the-dance?referrer=catalog" },
            ] 
        },
        // DEAD TIRED
        { 
            id: "mh-6", 
            linea: "Dead Tired", 
            nombre: "Clawdeen Wolf", 
            nota: "Colección Dead Tired", 
            prioridad: false, 
            foto: "imagenes/clawdeen pj.jpg",
            enlaces: [
           
            ] 
        },
        { 
            id: "mh-7", 
            linea: "Dead Tired", 
            nombre: "Cleo de Nile", 
            nota: "Colección Dead Tired", 
            prioridad: false, 
            foto: "imagenes/cleo pj.jpg",
            enlaces: [
                { tienda: "Vinted", url: "https://vinted.es/enlace-cleo-pj" }
            ] 
        },
        // SWEET 1600
        { 
            id: "mh-8", 
            linea: "Sweet 1600", 
            nombre: "Clawdeen Wolf", 
            nota: "Colección Sweet 1600", 
            prioridad: false, 
            foto: "imagenes/clawdeen 1600.avif",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10723959333-monster-high-clawdeen-wolf-sweet-1600-completa-com-vestido-extra?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/7810057724-poupee-monster-high-clawdeen-wolf-1600-anniversaire?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10844152213-clawdeen-sweet-16000-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/9733818983-clawdeen-1600?referrer=catalog" },
            ] 
        },
        { 
            id: "mh-9", 
            linea: "Sweet 1600", 
            nombre: "Frankie Stein", 
            nota: "Colección Sweet 1600", 
            prioridad: false, 
            foto: "imagenes/frankie 1600.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/4679336460-frankie-sweet-1600?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/8299341864-frankie-stein-sweet-1600?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/6636643141-frankie-stein-monster-high-scary-brithday-sweet-1600?referrer=catalog" },

            ] 
        },
        // ROLLER MAZE
        { 
            id: "mh-10", 
            linea: "Roller Maze", 
            nombre: "Abbey Bominable", 
            nota: "Colección Roller Maze", 
            prioridad: false, 
            foto: "imagenes/abby rm.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10904431040-monster-high-roller-maze-abbey?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10042632351-monster-high-abby?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/9477842125-bambola-monster-high-roller-maze?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/10469653130-monster-high-roller-maze-doll-abbey-bominable?referrer=catalog" },
                { tienda: "Vinted (Opción 5)", url: "https://www.vinted.es/items/9477842125-bambola-monster-high-roller-maze?referrer=catalog" },

                
            ] 
        },
        { 
            id: "mh-12", 
            linea: "Roller Maze", 
            nombre: "Ghoulia Yelps", 
            nota: "Colección Roller Maze", 
            prioridad: false, 
            foto: "imagenes/gholuia rm.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10429459961-monster-high-ghoulia-yelps?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10904419507-monster-high-roller-maze-ghoulia?referrer=catalog" },

            ] 
        },
        // DOT DEAD GORGEOUS
        { 
            id: "mh-13", 
            linea: "Dot Dead Gorgeous", 
            nombre: "Lagoona Blue", 
            nota: "Colección Dot Dead Gorgeous", 
            prioridad: false, 
            foto: "imagenes/lagoona dg.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10867804194-lagoona-blue-dot-dead-gorgeous?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10626449992-monster-high-lagoona-blue-dot-dead-gorgeous?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/5890381564-dot-dead-gorgeous-lagoona-blue-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/10084493944-monster-high-lagoona-blue-dot-dead-gorgeous?referrer=catalog" },
                     
            ] 
        },
        { 
            id: "mh-14", 
            linea: "Dot Dead Gorgeous", 
            nombre: "Spectra Vondergeist", 
            nota: "Colección Dot Dead Gorgeous", 
            prioridad: false, 
            foto: "imagenes/spectra dg.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10828566533-spectra-vondergeist-dot-dead-gorgeous-2012?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10922628890-spectra-vondergeist-dor-dead-gorgeus?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10122486709-spectra-dot-dead-gorgeous?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/4106443260-spectra-vondergeist?referrer=catalog" },
                { tienda: "Vinted (Opción 5)", url: "https://www.vinted.es/items/9279687465-muneca-spectra-vondergeist-edicion-dot-dead-gorgeous-fiesta-de-lunares-g1-de-mattel-2012?referrer=catalog" },
            ] 
        },
        { 
            id: "mh-15", 
            linea: "Dot Dead Gorgeous", 
            nombre: "Operetta", 
            nota: "Colección Dot Dead Gorgeous", 
            prioridad: false, 
            foto: "imagenes/opereta dg.jpg",
            enlaces: [
                  { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10627199651-monster-high-operetta-dot-dead-gorgeous?referrer=catalog" },         
                    { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10900954776-operetta-dot-dead-gorgeous?referrer=catalog" },
                    { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10826031083-operetta-dot-dead-gorgeous?referrer=catalog" },
                    { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/10455219124-operetta-g1-dot-dead-gorgeous?referrer=catalog" },    
                
            ] 
        },
        // PICTURE DAY
        { 
            id: "mh-16", 
            linea: "Picture Day", 
            nombre: "Lagoona Blue", 
            nota: "Colección Picture Day", 
            prioridad: false, 
            foto: "imagenes/lagoona pd.webp",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10726676752-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/4323245112-muneca-lagoona-blue-picture-day-monster-high?referrer=catalog" },
               
            ] 
        },
        { 
            id: "mh-16-2", 
            linea: "Picture Day", 
            nombre: "Draculaura", 
            nota: "Colección Picture Day", 
            prioridad: false, 
            foto: "imagenes/dracu pd.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/5480130962-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://es.wallapop.com/item/monster-high-draculaura-g1-picture-day-1305883219" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10816444826-monster-high-draculaura?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://es.wallapop.com/item/muneca-monsterhigh-1326083108" },
            ] 
        },
        { 
            id: "mh-16-3", 
            linea: "Picture Day", 
            nombre: "Abbey Bominable", 
            nota: "Colección Picture Day", 
            prioridad: false, 
            foto: "imagenes/Abby pd.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10924523591-muneca-abbey-abominable-monster-high-picture-day?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/8516259503-poupee-monster-high-picture-day-abbey-bominable-amie-de-draculaura?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10158917412-abbey-picture-day?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/3014978044-abbey-bominable-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 5)", url: "https://www.vinted.es/items/8443329241-poupee-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 6)", url: "https://www.vinted.es/items/6091247327-monster-high-picture-day-abbey-bominable?referrer=catalog" },
                { tienda: "Vinted (Opción 7)", url: "https://www.vinted.es/items/6920652773-abbey-monster-high?referrer=catalog" },
            ] 
        },
        { 
            id: "mh-16-4", 
            linea: "Picture Day", 
            nombre: "Operetta", 
            nota: "Colección Picture Day", 
            prioridad: false, 
            foto: "imagenes/opereta pd.webp",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/6400280488-monster-high-operetta?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/8491379046-monster-high-operetta?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10952525165-muneca-monster-high-operetta?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/10573066437-poupee-operetta-g1-picture-day-monster-high?referrer=catalog" },
            ] 
        },
        { 
            id: "mh-16-5", 
            linea: "Picture Day", 
            nombre: "Frankie", 
            nota: "Colección Picture Day", 
            prioridad: false, 
            foto: "imagenes/frankie pd.avif",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/4836857435-monster-high-frankie-stein?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10543574963-monster-high-frankie-stein-picture-day?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10679502338-frankie-picture-day?referrer=catalog" },
            ] 
        },
        // MUSIC FESTIVAL
        { 
            id: "mh-17", 
            linea: "Music Festival", 
            nombre: "Abbey Bominable", 
            nota: "Colección Music Festival", 
            prioridad: false, 
            foto: "imagenes/abby mf.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/2560574791-abbey-bominable" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/7710551711-abby-bambola?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://es.wallapop.com/item/muneca-monster-high-abbey-bominable-festival-1172836064" },
                { tienda: "Vinted (Opción 4)", url: "https://www.vinted.es/items/10290641932-abbey-bominable?referrer=catalog" },
            ] 
        },
        { 
            id: "mh-18", 
            linea: "Music Festival", 
            nombre: "Clawdeen Wolf", 
            nota: "Colección Music Festival", 
            prioridad: false, 
            foto: "imagenes/clawdeen mf.png",
            enlaces: [
                 { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10791903672-muneca-monster-high-clawdeen-wolf-music-festival-2013?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10775545725-muneca-monster-high-claedeen-wolf-g1?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10425599504-monster-high-clawdeen-wolf-music-festival-bambola-mattel-da-collezione?referrer=catalog" },
            ] 
        },
        // GHOULS NIGHT OUT
        { 
            id: "mh-19", 
            linea: "Ghouls Night Out", 
            nombre: "Rochelle Goyle", 
            nota: "Colección Ghouls Night Out", 
            prioridad: false, 
            foto: "imagenes/rochelle gn.png",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "" },
                { tienda: "Vinted (Opción 2)", url: "" },
                { tienda: "Vinted (Opción 3)", url: "" },
                { tienda: "Vinted (Opción 4)", url: "" },
            ] 
        },
        { 
            id: "mh-20", 
            linea: "Ghouls Night Out", 
            nombre: "Clawdeen Wolf", 
            nota: "Colección Ghouls Night Out", 
            prioridad: false, 
            foto: "imagenes/clawdeen gn.jpg",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10687427201-clawdeen-wolf-dans-sa-version-ghouls-night-out?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/10562882185-bmb-bambola-monster-high-clawdeen-ghouls-night-out?referrer=catalog" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10836464391-clawdeen-ghouls-night-out-monster-high?referrer=catalog" },
            ] 
        },
        { 
            id: "mh-21", 
            linea: "Ghouls Night Out", 
            nombre: "Lagoona Blue", 
            nota: "Colección Ghouls Night Out", 
            prioridad: false, 
            foto: "imagenes/lagoona gn.jpg",
            enlaces: [
               { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/5826246475-monster-high?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10948040277-lagoona-blue-ghouls-night-out?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "" },
            ] 
        },
        { 
            id: "mh-22", 
            linea: "Ghouls Night Out", 
            nombre: "Venus McFlytrap", 
            nota: "Colección Ghouls Night Out", 
            prioridad: false, 
            foto: "imagenes/venus gn.png",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/10907097714-venus-mcflytrapbeetle" },
                { tienda: "Vinted (Opción 2)", url: "" },
                { tienda: "Vinted (Opción 3)", url: "https://www.vinted.es/items/10067618162-monster-high-venus-ghouls-night-out?referrer=catalog" },
                { tienda: "Vinted (Opción 4)", url: "" },
            ] 
        },
        { 
            id: "mh-23", 
            linea: "Ghouls Night Out", 
            nombre: "Spectra Vondergeist", 
            nota: "Colección Ghouls Night Out", 
            prioridad: false, 
            foto: "imagenes/spectra gn.webp",
            enlaces: [
                { tienda: "Vinted (Opción 1)", url: "https://www.vinted.es/items/9917872226-spectra-ghouls-night-out?referrer=catalog" },
                { tienda: "Vinted (Opción 2)", url: "" },
                { tienda: "Vinted (Opción 3)", url: "" },
                { tienda: "Vinted (Opción 4)", url: "" },
            ] 
        },
        // FRIGHTS, CAMERA, ACTION!
        { 
            id: "mh-25", 
            linea: "Frights, Camera, Action!", 
            nombre: "Operetta", 
            nota: "Colección Frights, Camera, Action!", 
            prioridad: false, 
            foto: "imagenes/operetta fc.jpg",
            enlaces: [
                { tienda: "Vinted", url: "https://vinted.es/enlace-operetta-fc" }
            ] 
        },
        // HAUNTED
        { 
            id: "mh-26", 
            linea: "Haunted", 
            nombre: "Porter Geiss", 
            nota: "Colección Haunted", 
            prioridad: false, 
            foto: "imagenes/porter.avif",
            enlaces: [
                { tienda: "Vinted", url: "https://vinted.es/enlace-porter" }
            ] 
        },
        { 
            id: "mh-27", 
            linea: "Haunted", 
            nombre: "Draculaura", 
            nota: "Colección Haunted", 
            prioridad: false, 
            foto: "imagenes/dracu hd.jpg",
            enlaces: [
                { tienda: "Vinted", url: "https://vinted.es/enlace-draculaura-hd" }
            ] 
        }
    ]
};

const REGALOS_DATA = {
    ropa: [
        {
            id: "ropa-1",
            categoria: "Pantuflas",
            nombre: "Pantuflas Negras Pingu",
            tienda: "Primark / Similar",
            descripcion: "Calcetines zapatilla Pingu con suela antideslizante",
            prioridad: false,
            foto: "Pingu.webp"
        },
        {
            id: "ropa-2",
            categoria: "Pantuflas",
            nombre: "Pantuflas Rosas Bastón de Caramelo",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas peluditas rosa pastel con bordado de bastones de caramelo y lacito rosa.",
            prioridad: false,
            foto: "caramelo.webp"
        },
        {
            id: "ropa-3",
            categoria: "Pantuflas",
            nombre: "Pantuflas Blancas Fresitas y Lazos",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas tipo botín blanco borreguito con fresitas, corazones y lazos rojos bordados.",
            prioridad: false,
            foto: "fresas.webp"
        },
        {
            id: "ropa-4",
            categoria: "Pantuflas",
            nombre: "Pantuflas Blancas Lazos Rojos",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas destalonadas blanco borreguito con pequeños lazos rojos y puntitos bordados.",
            prioridad: false,
            foto: "lazitos.webp"
        },
        {
            id: "ropa-5",
            categoria: "Pijamas Bambi",
            nombre: "Pantalón Pijama Largo Bambi",
            tienda: "Primark (New in Bambi Pyjamas)",
            descripcion: "Pantalón largo de tejido polar súper suave estampado cervatillo con lazo rosa en la cintura.",
            prioridad: false,
            foto: "pantalon pj.png"
        },
        {
            id: "ropa-6",
            categoria: "Pijamas Bambi",
            nombre: "Bata Polar con Capucha Bambi",
            tienda: "Primark (Disney Bambi)",
            descripcion: "Bata de estar por casa estampado cervatillo con orejitas en la capucha y bordado 'Disney Bambi' rosa.",
            prioridad: false,
            foto: "batamanta.jpg"
        },
        {
            id: "ropa-7",
            categoria: "Pijamas Bambi",
            nombre: "Conjunto Pijama Corto Rosa Bambi",
            tienda: "Primark (Disney Bambi)",
            descripcion: "Conjunto de camiseta de tirantes y pantalón corto rosa claro con estampado de Bambi.",
            prioridad: false,
            foto: "pijama corto.png"
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
                { tienda: "Vinted (Opción )", url: "https://www.vinted.es/items/10654387163-deuce-gorgon-de-la-coleccion-dawn-of-the-dance?referrer=catalog" },
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
                { tienda: "Vinted (Opción 2)", url: "https://www.vinted.es/items/6636643141-frankie-stein-monster-high-scary-brithday-sweet-1600?referrer=catalog" },

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
                { tienda: "Vinted (Opción 1)", url: "" },
                { tienda: "Vinted (Opción )", url: "" },
                { tienda: "Vinted (Opción )", url: "" },
                { tienda: "Vinted (Opción )", url: "" },
                { tienda: "Vinted (Opción )", url: "" },


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
                { tienda: "Vinted", url: "https://vinted.es/enlace-lagoona-dg" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-spectra-dg" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-operetta-dg" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-lagoona-pd" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-draculaura-pd" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-abby-pd" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-operetta-pd" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-frankie-pd" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-abby-mf" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-clawdeen-mf" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-rochelle-gn" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-clawdeen-gn" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-lagoona-gn" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-venus-gn" }
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
                { tienda: "Vinted", url: "https://vinted.es/enlace-spectra-gn" }
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

const REGALOS_DATA = {
    ropa: [
        {
            id: "ropa-1",
            categoria: "Pantuflas",
            nombre: "Pantuflas Negras Pingu",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas mullidas negras con carita de pingüino (ojitos y pico rojo).",
            prioridad: false,
            emoji: "🐧"
        },
        {
            id: "ropa-2",
            categoria: "Pantuflas",
            nombre: "Pantuflas Rosas Bastón de Caramelo",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas peluditas rosa pastel con bordado de bastones de caramelo y lacito rosa.",
            prioridad: false,
            emoji: "🍬"
        },
        {
            id: "ropa-3",
            categoria: "Pantuflas",
            nombre: "Pantuflas Blancas Fresitas y Lazos",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas tipo botín blanco borreguito con fresitas, corazones y lazos rojos bordados.",
            prioridad: false,
            emoji: "🍓"
        },
        {
            id: "ropa-4",
            categoria: "Pantuflas",
            nombre: "Pantuflas Blancas Lazos Rojos",
            tienda: "Primark / Similar",
            descripcion: "Pantuflas destalonadas blanco borreguito con pequeños lazos rojos y puntitos bordados.",
            prioridad: false,
            emoji: "🎀"
        },
        {
            id: "ropa-5",
            categoria: "Pijamas Bambi",
            nombre: "Pantalón Pijama Largo Bambi",
            tienda: "Primark (New in Bambi Pyjamas)",
            descripcion: "Pantalón largo de tejido polar súper suave estampado cervatillo con lazo rosa en la cintura.",
            prioridad: false,
            emoji: "🦌"
        },
        {
            id: "ropa-6",
            categoria: "Pijamas Bambi",
            nombre: "Bata Polar con Capucha Bambi",
            tienda: "Primark (Disney Bambi)",
            descripcion: "Bata de estar por casa estampado cervatillo con orejitas en la capucha y bordado 'Disney Bambi' rosa.",
            prioridad: false,
            emoji: "🧥"
        },
        {
            id: "ropa-7",
            categoria: "Pijamas Bambi",
            nombre: "Conjunto Pijama Corto Rosa Bambi",
            tienda: "Primark (Disney Bambi)",
            descripcion: "Conjunto de camiseta de tirantes y pantalón corto rosa claro con estampado de Bambi.",
            prioridad: false,
            emoji: "👚"
        }
    ],
    munecas: [
        // BÁSICAS
        { id: "mh-1", linea: "Básicas", nombre: "Nefera de Nile", nota: "⭐ OPCIÓN 1 (Favorita)", prioridad: true },
        { id: "mh-2", linea: "Básicas", nombre: "Twyla", nota: "Edición Básica", prioridad: false },
        { id: "mh-3", linea: "Básicas", nombre: "Honey Swamp", nota: "Edición Básica", prioridad: false },
        { id: "mh-4", linea: "Básicas", nombre: "Profesora Decapitada (Headless Headmistress Bloodgood)", nota: "Edición Básica", prioridad: false },
        // DAWN OF THE DANCE
        { id: "mh-5", linea: "Dawn of the Dance", nombre: "Deuce Gorgon", nota: "Colección Dawn of the Dance", prioridad: false },
        // DEAD TIRED
        { id: "mh-6", linea: "Dead Tired", nombre: "Clawdeen Wolf", nota: "Colección Dead Tired", prioridad: false },
        { id: "mh-7", linea: "Dead Tired", nombre: "Cleo de Nile", nota: "Colección Dead Tired", prioridad: false },
        // SWEET 1600
        { id: "mh-8", linea: "Sweet 1600", nombre: "Clawdeen Wolf", nota: "Colección Sweet 1600", prioridad: false },
        { id: "mh-9", linea: "Sweet 1600", nombre: "Frankie Stein", nota: "Colección Sweet 1600", prioridad: false },
        // ROLLER MAZE
        { id: "mh-10", linea: "Roller Maze", nombre: "Abbey Bominable", nota: "Colección Roller Maze", prioridad: false },
        { id: "mh-11", linea: "Roller Maze", nombre: "Lagoona Blue", nota: "Colección Roller Maze", prioridad: false },
        { id: "mh-12", linea: "Roller Maze", nombre: "Ghoulia Yelps", nota: "Colección Roller Maze", prioridad: false },
        // DOT DEAD GORGEOUS
        { id: "mh-13", linea: "Dot Dead Gorgeous", nombre: "Lagoona Blue", nota: "Colección Dot Dead Gorgeous", prioridad: false },
        { id: "mh-14", linea: "Dot Dead Gorgeous", nombre: "Spectra Vondergeist", nota: "Colección Dot Dead Gorgeous", prioridad: false },
        { id: "mh-15", linea: "Dot Dead Gorgeous", nombre: "Operetta", nota: "Colección Dot Dead Gorgeous", prioridad: false },
        // PICTURE DAY
        { id: "mh-16", linea: "Picture Day", nombre: "Cualquiera de la colección", nota: "¡Cualquier personaje de Picture Day me encanta!", prioridad: false },
        // MUSIC FESTIVAL
        { id: "mh-17", linea: "Music Festival", nombre: "Abbey Bominable", nota: "Colección Music Festival", prioridad: false },
        { id: "mh-18", linea: "Music Festival", nombre: "Clawdeen Wolf", nota: "Colección Music Festival", prioridad: false },
        // GHOULS NIGHT OUT
        { id: "mh-19", linea: "Ghouls Night Out", nombre: "Rochelle Goyle", nota: "Colección Ghouls Night Out", prioridad: false },
        { id: "mh-20", linea: "Ghouls Night Out", nombre: "Clawdeen Wolf", nota: "Colección Ghouls Night Out", prioridad: false },
        { id: "mh-21", linea: "Ghouls Night Out", nombre: "Lagoona Blue", nota: "Colección Ghouls Night Out", prioridad: false },
        { id: "mh-22", linea: "Ghouls Night Out", nombre: "Venus McFlytrap", nota: "Colección Ghouls Night Out", prioridad: false },
        { id: "mh-23", linea: "Ghouls Night Out", nombre: "Spectra Vondergeist", nota: "Colección Ghouls Night Out", prioridad: false },
        // FRIGHTS, CAMERA, ACTION!
        { id: "mh-24", linea: "Frights, Camera, Action!", nombre: "Honey Swamp", nota: "Colección Frights, Camera, Action!", prioridad: false },
        { id: "mh-25", linea: "Frights, Camera, Action!", nombre: "Operetta", nota: "Colección Frights, Camera, Action!", prioridad: false },
        // HAUNTED
        { id: "mh-26", linea: "Haunted", nombre: "Porter Geiss", nota: "Colección Haunted", prioridad: false }
    ]
};

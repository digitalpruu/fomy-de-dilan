const title = "Fomy de Dilan";
const email = "gloriaballesterosgalvis@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre los muñecos y flores de fomy. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3134775891";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Fomy de Dilan se especializa en la creación de muñecos y flores de fomy, combinando ingenio y creatividad en cada uno de sus productos. Nos enfocamos en ofrecer decoraciones únicas y personalizadas.",
        description2: "Nuestros productos son hechos a mano, con especial atención en los detalles y utilizando materiales de la más alta calidad para asegurar durabilidad y belleza en cada pieza. En Fomy de Dilan, estamos comprometidos a brindar productos que no solo sean visualmente atractivos, sino también funcionales, perfectos para decorar cualquier espacio con un toque único y creativo.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: "Creatividad e ingenio en cada pieza",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/profile.php?id=61566310071047&mibextid=ZbWKwL",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;

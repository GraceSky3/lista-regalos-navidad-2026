document.addEventListener("DOMContentLoaded", () => {
    crearNieve();
    actualizarContadorGlobal();
});

// Efecto de nieve navideña
function crearNieve() {
    const snowContainer = document.getElementById("snow-container");
    if (!snowContainer) return;
    const copos = ["❄", "❅", "❆", "•"];
    for (let i = 0; i < 35; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.textContent = copos[Math.floor(Math.random() * copos.length)];
        flake.style.left = Math.random() * 100 + "vw";
        flake.style.animationDuration = (Math.random() * 6 + 6) + "s";
        flake.style.animationDelay = (Math.random() * 5) + "s";
        flake.style.fontSize = (Math.random() * 12 + 10) + "px";
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        snowContainer.appendChild(flake);
    }
}

// Gestión de reservas en localStorage compartido entre páginas
function obtenerReservas() {
    try {
        return JSON.parse(localStorage.getItem("regalos_reservados_2026")) || {};
    } catch (e) {
        return {};
    }
}

function guardarReservas(reservas) {
    localStorage.setItem("regalos_reservados_2026", JSON.stringify(reservas));
    actualizarContadorGlobal();
}

function toggleReserva(id, nombreCompleto) {
    const reservas = obtenerReservas();
    if (reservas[id]) {
        delete reservas[id];
    } else {
        reservas[id] = nombreCompleto;
    }
    guardarReservas(reservas);
    return !!reservas[id];
}

function actualizarContadorGlobal() {
    const reservas = obtenerReservas();
    const total = Object.keys(reservas).length;
    const badges = document.querySelectorAll(".reserva-count");
    badges.forEach(b => b.textContent = total);
}

function copiarResumenWhatsApp() {
    const reservas = obtenerReservas();
    const items = Object.values(reservas);
    if (items.length === 0) {
        mostrarToast("Aún no has marcado ningún regalo. ¡Pulsa en '¡Yo lo regalo!' en alguno!");
        return;
    }
    const texto = "🎄🎁 *Regalos que me pido para regalar (Cumple / Navidad):*\n\n" +
        items.map(item => "✅ " + item).join("\n") +
        "\n\n_(Lo marco para que nadie lo repita)_";

    navigator.clipboard.writeText(texto).then(() => {
        mostrarToast("¡Lista copiada! Ya puedes pegarla en el grupo de WhatsApp de la familia 🎄");
    }).catch(() => {
        alert(texto);
    });
}

function mostrarToast(mensaje) {
    let toast = document.getElementById("toast-msg");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-msg";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = mensaje;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3500);
}

// 1. Giriş Animasyonu (2 Saniye)
window.addEventListener('load', () => {
    setTimeout(() => {
        const welcome = document.getElementById('welcome-screen');
        if(welcome) {
            welcome.style.opacity = '0';
            setTimeout(() => welcome.style.display = 'none', 800);
        }
    }, 2000);
});

// 2. Menü Kontrolü
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// 3. Chatbot Kontrolü
function toggleChat() {
    const chatWin = document.getElementById('chatbot-window');
    chatWin.style.display = (chatWin.style.display === 'flex') ? 'none' : 'flex';
}

function handleChatKey(event) {
    if (event.key === 'Enter') sendMessage();
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const userMsg = input.value.trim().toLowerCase();

    if (!userMsg) return;

    // Kullanıcı mesajını ekrana bas
    chatBody.innerHTML += `<div class="message user">${input.value}</div>`;
    input.value = ""; // Kutuyu temizle

    // Bot Yanıt Mantığı
    setTimeout(() => {
        let botResponse = "";

        // Soru Kontrolleri
        if (userMsg.includes("civan kim") || userMsg.includes("civan göbel kim")) {
            botResponse = "Civan Göbel hakkında detaylı bilgiyi <b>Hakkımızda</b> sayfasında bulabilirsin. Ama bana sorarsan; Civan gerçekten çok iyi ve inanılmaz çalışkan biridir! 🚀";
        } 
        else if (userMsg.includes("hakkında") || userMsg.includes("bilgi")) {
            botResponse = "Civan ile ilgili tüm merak ettiklerin için <b>Hakkımızda</b> kısmından bilgi alabilirsin.";
        } 
        else if (userMsg.includes("iletişim") || userMsg.includes("ulaşmak") || userMsg.includes("telefon") || userMsg.includes("mail")) {
            botResponse = "Civan'a ulaşmak çok kolay! <b>İletişim</b> sayfasına giderek tüm iletişim kanallarını görebilirsin. 📧";
        } 
        else if (userMsg.includes("selam") || userMsg.includes("merhaba")) {
            botResponse = "Selam! Ben Civan'ın dijital asistanıyım. Civan hakkında bilgi almak istersen bana sorabilirsin.";
        }
        else {
            botResponse = "Bunu tam anlayamadım ama Civan hakkında bilgi için 'Hakkımızda', ona ulaşmak için 'İletişim' sayfasına göz atabilirsin!";
        }

        // Botun mesajını ekle
        chatBody.innerHTML += `<div class="message bot">${botResponse}</div>`;
        
        // Chat'i en aşağı kaydır
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);

    chatBody.scrollTop = chatBody.scrollHeight;
}
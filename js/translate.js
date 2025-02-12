// Definición de traducciones
const translations = {
    en: {
        // Navegación
        "My Portfolio": "My Portfolio",
        "home": "Home",
        "projects": "Projects",
        "about": "About me",
        "contact": "Contact",
        
        // Sección Hero
        "welcome": "Welcome to my Portfolio",
        "title": "IT PROFESSIONAL: Bachelor in Networks and Telecommunications",
        "download": "Download CV",
        
        // Sobre mí
        "about-text": "Computer scientist by vocation and recent graduate in Networks and Telecommunications, my passion for technology drives me to explore new frontiers in web development. I have experience in front-end and back-end, and I'm eager to apply my knowledge in innovative projects.",
        
        // Habilidades
        "skills": "My Skills",
        "frontend": "Frontend",
        "solid_knowledge": "Solid Knowledge",
        "backend": "Backend",
        "databases": "Databases",
        
        // Proyectos
        "project1_title": "Project 1 - E-COMMERCE",
        "project1_description": "Discover a sophisticated online shopping experience accessible for all budgets",
        "project2_title": "Project 2 - SCHOOL WEBSITE",
        "project2_description": "A school website, providing a wide range of information for education.",
        "project3_title": "Project 3 - Dashboard",
        "project3_description": "is a visual tool that summarizes and presents key information in a clear and concise manner",
        "See project" : "See project",
        "project4_title" : "Project 4 - FORM",
        "project4_description" : "Entering data for a login",
        "project5_title" : "Project 5 - WEB GYM",
        "project5_description" : "Gym website",
        "project6_title" : "Project 6 - ONLINE FOOD",
        "project6_description" : "selling your favorite food online with a single click",

        
        // Formulario de contacto
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "Send message",
        
        // Footer
        "footer_about_text": "I am a web developer passionate about creating unique and functional digital experiences. Always looking for new challenges and learning opportunities.",
        "social networks": "social networks",
        "copy" : " NZO ANDEME Cirilo Bolopo All rights reserved."
    }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (language === 'es') {
            // Restaurar el texto original en español
            element.textContent = element.getAttribute('data-original-text') || element.textContent;
        } else if (translations[language] && translations[language][key]) {
            // Guardar el texto original en español si aún no se ha guardado
            if (!element.getAttribute('data-original-text')) {
                element.setAttribute('data-original-text', element.textContent);
            }
            // Aplicar la traducción
            element.textContent = translations[language][key];
        }
    });
}

// Evento para el selector de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('languageSwitcher');
    
    // Guardar textos originales al cargar la página
    document.querySelectorAll('[data-translate]').forEach(element => {
        element.setAttribute('data-original-text', element.textContent);
    });
    
    languageSwitcher.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });
});
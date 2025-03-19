//Raccolta dati
const factoryForm = document.getElementById("factoryform");
const firstNameSelect = document.getElementById("name");
const lastNameSelect = document.getElementById("lastName");
const emailSelect = document.getElementById("email");
const selectedJob = document.getElementById("requestedJob");
const textareaSelect= document.getElementById("textarea");
const promocodeSelect = document.getElementById("promoCode");
const messageElement = document.getElementById("message");


factoryForm.addEventListener("submit", gestioneForm);

    //FUNZIONE

function gestioneForm(event){
    event.preventDefault();
    const name = firstNameSelect.value;
    const lastname = lastNameSelect.value;
    const email = emailSelect.value;
    const requestedJob = selectedJob.value;
    const textarea = textareaSelect.value;
    const promoCode = promocodeSelect.value;

    let finalPrice = 0;
    if (requestedJob === "Sviluppo backend") {
        finalPrice = (20.50 * 10);
    } else if (requestedJob === "Sviluppo frontend") {
        finalPrice = (15.30 * 10);
    } else if (requestedJob === "Analisi progettuale") {
        finalPrice = (33.60 * 10);
    }
    console.log(finalPrice);
    
    //SCONTO
    // Utilizzabile anche includes (o, in alternativa, ciclo for)
    let discount = 0;
    if (promoCode === "YHDNU32") {
        discount = (finalPrice * 25 / 100);
        console.log(discount);
        alert ("Codice applicato con successo. Hai diritto ad uno sconto del 25%!");
    } else if (promoCode === "JANJC63") {
        discount = (finalPrice * 25 / 100)
        console.log(discount);
        alert ("Codice applicato con successo. Hai diritto ad uno sconto del 25%!");
    } else if (promoCode === "PWKCN25") {
        discount = (finalPrice * 25 / 100);
        console.log(discount);
        alert ("Codice applicato con successo. Hai diritto ad uno sconto del 25%!");
    } else if (promoCode === "SJDPO96") {
        discount = (finalPrice * 25 / 100)
        console.log(discount);
        alert ("Codice applicato con successo. Hai diritto ad uno sconto del 25%!");
    } else if (promoCode === "POCIE24") {
        discount = (finalPrice * 25 / 100);
        console.log(discount);
        alert ("Codice applicato con successo. Hai diritto ad uno sconto del 25%!");
    } else if (promoCode === "") {
        discount = 0;
        console.log(discount);
    } else 
        alert ("Il codice da te inserito non è valido. Pertanto, non sarà applicato nessuno sconto");
    

        //PREZZO FINALE PER L'UTENTE
        
        const messageDiscount = (finalPrice - discount);
        messageElement.innerHTML = `<span id="message" style="font-weight: bold; font-size: larger;">€ ${messageDiscount.toFixed(2)}</span>`;
        
}
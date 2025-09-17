  // Lista oficial de convidados
  const convidados = [
    "Jamile", "Alcion", "Vilma", "Josy", "Thierry", "Jailton", "Tainá", "Natalia", 
    "Denison", "Verena", "Sabrina", "Yasmin", "Célia", "Igor", "Antônio José", "Tânia", 
    "Taiane", "Murilo", "Adriane", "Paula", "Ana Paula", "Albert", "Rebeca", "Nilda", 
    "Jessica", "Tuca", "Antônio Carlos", "Joventino", "Julmara", "Marcos", "Milena", 
    "Joseildes", "Tiene", "Dilsinho", "Nalva", "Beatriz", "Regina", "Rayane", "Luci", 
    "Luciara", "Nádia", "Paloma", "Ailton", "Eduardo", "Helsis", "Manuel", "Silvo", 
    "Rita", "Iago", "Samuel", "Tatiane", "Sandra", "Veca", "Bia", "Cene", "Nete", 
    "Solange", "Jeferson", "Isabele", "Kelvin", "Enio", "Rose", "Meire", "João Victor", 
    "Ilana", "Lorena Barreto", "Lorena Oliveira", "Fernando", "Jajai", "Elizangela", 
    "Joilson", "Eliana", "Vitor", "João", "Amanda", "Diana", "Fernanda Oliveira", 
    "Fernanda Damasceno", "Dalila", "Suelen", "Édison", "Edmundo", "Wallace (professor)", 
    "Elza", "Fabiana", "Andressa", "Zé Mário", "Stephany", "Vitória", "Aylla", "Caique", 
    "Lucas Nery", "Marcel", "Luccas", "Mila", "Gracielle", "Gabriel Barros", "Gabriel", 
    "Walace", "Laisa", "Josué", "Erick", "Ramon", "Geovanna", "Whoston", "Juliana", 
    "Daniel", "Reish", "William", "Luara", "Maria Luiza", "Bernardo de Meire", "Alexandre", 
    "Ayla Stefani", "Ariela", "Maria Helena", "Claudinho", "Cecilia", "Carlos Junior", 
    "Heitor", "Alexa", "Bernardo", "Guilherme", "Júlia", "Miguel"
  ];

  // Normaliza (remove acentos, coloca minúsculas e remove espaços extras)
  function normalizar(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  document.getElementById("confirmForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    const nomeDigitado = normalizar(formData.get("entry.824567417"));

    // Verifica se o nome digitado bate exatamente com algum da lista
    const autorizado = convidados.some(nomeLista =>
      normalizar(nomeLista) === nomeDigitado
    );

    if (!autorizado) {
      alert("❌ Nome não encontrado na lista. Digite exatamente como no convite.");
      return;
    }

    // Se válido, envia para o Google Forms
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSf04i08w0vJwUgfBPFZRoko1mkc_ZXYzpgm14kEWG96vJ_gSw/formResponse", {
      method: "POST",
      body: formData,
      mode: "no-cors"
    }).then(() => {
      alert("🎉 Presença confirmada com sucesso!");
      closeModal();
    }).catch(() => {
      alert("❌ Erro ao confirmar. Tente novamente.");
    });
  });
    function openModal() {
      document.getElementById("modal").style.display = "flex";
    }
    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }

    document.getElementById("confirmForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(this);

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
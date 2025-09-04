// Mecanismo antfuga: redireciona qualquer clique para a página de vendas
const salesUrl = "https://ed290nqaj6xw5mcb4loc0job3l.hop.clickbank.net";

document.body.addEventListener("click", function(e) {
  // Permite clicar em links normais sem redirecionar se já for o destino
  if (e.target.tagName === "A" && e.target.href === salesUrl) return;
  window.location.href = salesUrl;
});

// Botão CTA também redireciona
const ctaBtn = document.getElementById("cta");
if (ctaBtn) {
  ctaBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = salesUrl;
  });
}
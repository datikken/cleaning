if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  $("#contactLink").attr("href", "tel:7778921843");
} else {
  $("#contactLink").attr("href", "#3");
}

const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    let score = 0;

    const family = document.querySelector('input[name="family"]:checked');
    if (family) score += Number(family.value);

    const income = document.querySelector('input[name="income"]:checked');
    if (income) score += (6 - Number(income.value));

    const electric = Number(document.getElementById("electric").value || 0);
    if (electric < 200) score += 1;
    else if (electric < 350) score += 2;
    else if (electric < 500) score += 3;
    else score += 4;

    const gas = Number(document.getElementById("gas").value || 0);
    if (gas < 30) score += 1;
    else if (gas < 60) score += 2;
    else if (gas < 100) score += 3;
    else score += 4;

    if (document.getElementById("cutoff")?.checked) score += 2;
    if (document.getElementById("limit")?.checked) score += 2;
    if (document.getElementById("reduce")?.checked) score += 2;

    let level = "";
    if (score <= 10) level = "낮음";
    else if (score <= 15) level = "중간";
    else if (score <= 20) level = "높음";
    else level = "매우 높음";

    document.getElementById("result").innerHTML =
      `<h2>에너지 부담 위험도: ${level}</h2>
       <p>총점: ${score}점</p>`;
  });
}

console.log("JS 로드됨");

document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;

  // 1. 가구원 수
  const family = document.querySelector('input[name="family"]:checked');
  if (family) score += Number(family.value);

  // 2. 소득 (역점수)
  const income = document.querySelector('input[name="income"]:checked');
  if (income) score += (6 - Number(income.value));

  // 3. 전기 사용량
  const electric = Number(document.getElementById("electric").value);
  if (electric < 200) score += 1;
  else if (electric < 350) score += 2;
  else if (electric < 500) score += 3;
  else score += 4;

  // 4. 가스 사용량
  const gas = Number(document.getElementById("gas").value);
  if (gas < 30) score += 1;
  else if (gas < 60) score += 2;
  else if (gas < 100) score += 3;
  else score += 4;

  // 5. 체감 문항
  if (document.getElementById("cutoff").checked) score += 2;
  if (document.getElementById("limit").checked) score += 2;
  if (document.getElementById("reduce").checked) score += 2;

  // 6. 위험도 판정
  let level = "";
  let message = "";

  if (score <= 10) {
    level = "낮음";
    message = "현재 에너지 사용 수준은 비교적 안정적인 상태입니다. 기존 사용 습관을 유지하시고, 계절 변화에 따른 사용량 증가는 주기적으로 점검하시기 바랍니다.";
  } else if (score <= 15) {
    level = "중간";
    message = "에너지 비용이 향후 부담으로 이어질 가능성이 있습니다. 사용량 관리와 함께 에너지 절감 관련 공공 정보를 확인하시길 권장합니다.";
  } else if (score <= 20) {
    level = "높음";
    message = "에너지 비용이 가계에 부담으로 작용하고 있을 가능성이 있습니다. 관련 지원 정책 및 요금 감면 제도를 검토해 보시기 바랍니다.";
  } else {
    level = "매우 높음";
    message = "에너지 비용 부담이 매우 큰 상태로 판단됩니다. 에너지 바우처 및 공공 지원 제도 대상 여부를 조속히 확인하시길 권장드립니다.";
  }

  // 7. 결과 출력
  document.getElementById("result").innerHTML = `
    <h2>에너지 부담 위험도: ${level}</h2>
    <p>총점: ${score}점</p>
    <hr>
    <p><strong>[맞춤 피드백]</strong></p>

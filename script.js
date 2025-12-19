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

  // 6. 위험도 판정 + 정책 안내
  let level = "";
  let cssClass = "";
  let message = "";
  let policy = "";

  if (score <= 10) {
    level = "낮음";
    cssClass = "level-low";
    message = "현재 에너지 사용 수준은 비교적 안정적인 상태입니다.";
    policy = `
      에너지 절약 행동 가이드 및 계절별 사용량 관리 정보를
      사전에 확인해 두는 것이 바람직합니다.
    `;
  } else if (score <= 15) {
    level = "중간";
    cssClass = "level-mid";
    message = "에너지 비용이 향후 부담으로 이어질 가능성이 있습니다.";
    policy = `
      에너지 바우처 제도 및 지자체 에너지 효율 개선 사업과 같은
      공공 제도를 사전에 확인해볼 필요가 있습니다.
    `;
  } else if (score <= 20) {
    level = "높음";
    cssClass = "level-high";
    message = "에너지 비용이 가계에 부담으로 작용하고 있을 가능성이 있습니다.";
    policy = `
      에너지 바우처 제도, 전기·가스 요금 감면 제도 등
      공공 지원 정책 검토가 필요합니다.
    `;
  } else {
    level = "매우 높음";
    cssClass = "level-very-high";
    message = "에너지 비용 부담이 매우 큰 상태로 판단됩니다.";
    policy = `
      에너지 바우처 및 긴급 복지 지원 등
      공공 지원 제도의 우선적 검토가 권장됩니다.
    `;
  }

  // 7. 결과 출력
  document.getElementById("result").innerHTML = `
    <div class="${cssClass}">
      <h2>에너지 부담 위험도: ${level}</h2>
      <p>총점: ${score}점</p>
    </div>

    <div class="policy-box">
      <p><strong>[맞춤 피드백]</strong></p>
      <p>${message}</p>
      <p><strong>[정책·정보 안내]</strong></p>
      <p>${policy}</p>
    </div>
  `;
});

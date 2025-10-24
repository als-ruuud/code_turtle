<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>회원가입 / 로그인</title>

  <style>
    body {
      font-family: 'Noto Sans KR', sans-serif;
      background-color: #f5f6fa;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-container {
      background-color: #fff;
      border-radius: 20px; /* 둥근 사각형 */
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 40px 50px;
      width: 340px;
      text-align: center;
    }

    h2 {
      margin-bottom: 25px;
      font-size: 22px;
      color: #333;
    }

    .input-box {
      margin-bottom: 15px;
    }

    .input-box input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 14px;
    }

    .button-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    }

    .button-group button {
      background-color: #57a3ff;
      color: #fff;
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-size: 15px;
      cursor: pointer;
      transition: 0.2s;
    }

    .button-group button:hover {
      background-color: #3d8bfd;
    }
  </style>
</head>

<body>
  <div class="login-container">
    <h2>회원가입 / 로그인</h2>
    <div class="input-box">
      <input type="email" placeholder="아이디 입력" />
    </div>
    <div class="input-box">
      <input type="password" placeholder="비밀번호 입력(6자 이상)" />
    </div>
    <div class="button-group">
      <button id="signup-btn">회원가입</button>
      <button id="login-btn">로그인</button>
    </div>
  </div>

  <script>
    document.getElementById("signup-btn").addEventListener("click", () => {
      alert("회원가입 기능은 아직 준비 중입니다.");
    });

    document.getElementById("login-btn").addEventListener("click", () => {
      alert("로그인 기능은 아직 준비 중입니다.");
    });
  </script>
</body>
</html>

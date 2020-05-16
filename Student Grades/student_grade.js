function calculate() {
    let id = document.getElementById("studentId").value;
    document.getElementById("studentId_Output").value = id;

    let score1 = parseInt(document.getElementById("score_1").value);

    let score2 = parseInt(document.getElementById("score_2").value);

    let score3 = parseInt(document.getElementById("score_3").value);

    if (score1 <= 10 && score2 <= 10 && score3 <= 10) {
      document.getElementById("studentId_Output").value = id;
      document.getElementById("score_1_Output").value = score1;
      document.getElementById("score_2_Output").value = score2;
      document.getElementById("score_3_Output").value = score3;
      document.getElementById("totalScore").value =
        score1 + score2 + score3;

      let percentageScore = (
        ((score1 + score2 + score3) / 30) *
        100
      ).toFixed(2);
      document.getElementById("percentageScore").value = percentageScore;
      if (percentageScore >= 50) {
        document.getElementById("textOutput").style.color = "black";
        document.getElementById("textOutput").value = "Passed";
      } else {
        document.getElementById("textOutput").style.color = "red";
        document.getElementById("textOutput").value = "Failed";  
      }
    } else {
      alert("Score should be in range 0 to 10");
    }
  }
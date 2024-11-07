document.getElementById('analyzeBtn').addEventListener('click', function () {
  const revenue = parseFloat(document.getElementById('revenue').value);
  const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);
  const variableCosts = parseFloat(document.getElementById('variableCosts').value);

  if (isNaN(revenue) || isNaN(fixedCosts) || isNaN(variableCosts)) {
    alert('全てのフィールドに有効な数値を入力してください。');
    return;
  }

  // 変動費率の計算
  const variableCostRatio = variableCosts / revenue;

  // 損益分岐点売上の計算
  const breakEvenSales = fixedCosts / (1 - variableCostRatio);

  // 損益分岐点比率の計算
  const breakEvenRatio = (breakEvenSales / revenue) * 100;

  // 分析結果の表示
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = `
        <p>損益分岐点売上: ${breakEvenSales.toFixed(2)} 円</p>
        <p>損益分岐点比率: ${breakEvenRatio.toFixed(2)}%</p>
    `;

  // グラフの作成
  const ctx = document.getElementById('analysisChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['損益分岐点売上', '収益 (売上)'],
      datasets: [{
        label: '金額 (円)',
        data: [breakEvenSales, revenue],
        backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

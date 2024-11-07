document.getElementById('analyzeBtn').addEventListener('click', function () {
  const revenue = parseFloat(document.getElementById('revenue').value);
  const expenses = parseFloat(document.getElementById('expenses').value);
  const assets = parseFloat(document.getElementById('assets').value);
  const liabilities = parseFloat(document.getElementById('liabilities').value);

  if (isNaN(revenue) || isNaN(expenses) || isNaN(assets) || isNaN(liabilities)) {
    alert('全てのフィールドに有効な数値を入力してください。');
    return;
  }

  // 財務分析
  const netIncome = revenue - expenses;
  const profitMargin = (netIncome / revenue) * 100;
  const debtRatio = (liabilities / assets) * 100;

  // 分析結果の表示
  console.log(`利益率: ${profitMargin.toFixed(2)}%`);
  console.log(`負債比率: ${debtRatio.toFixed(2)}%`);

  // グラフの作成
  const ctx = document.getElementById('analysisChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['利益率 (%)', '負債比率 (%)'],
      datasets: [{
        label: '分析結果',
        data: [profitMargin, debtRatio],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
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

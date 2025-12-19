const templates = {
  aave: {
    protocol: "Aave",
    asset: "USDC",
    strategy: "Lending",
    risk: "Low",
    expectedApr: 4.8,
  },
  lido: {
    protocol: "Lido",
    asset: "ETH",
    strategy: "Staking",
    risk: "Medium",
    expectedApr: 5.2,
  },
  uniswap: {
    protocol: "Uniswap",
    asset: "ETH/USDC",
    strategy: "Liquidity Providing",
    risk: "High",
    expectedApr: 11.6,
  },
};

const form = document.querySelector("#position-form");
const templateSelect = document.querySelector("#protocol-template");
const transactionToggle = document.querySelector("#add-transaction");
const transactionFields = document.querySelector("#transaction-fields");
const positionsContainer = document.querySelector("#positions");

const assetInput = document.querySelector("#asset");
const strategyInput = document.querySelector("#strategy");
const riskInput = document.querySelector("#risk");
const expectedAprInput = document.querySelector("#expected-apr");
const txDateInput = document.querySelector("#tx-date");
const txAmountInput = document.querySelector("#tx-amount");
const txCurrencyInput = document.querySelector("#tx-currency");
const txCommentInput = document.querySelector("#tx-comment");

const formatDate = (value) => {
  if (!value) {
    return "Сегодня";
  }
  const date = new Date(value);
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const templateBadge = (templateKey) => {
  if (!templateKey || !templates[templateKey]) {
    return "Custom";
  }
  return templates[templateKey].protocol;
};

const updateTemplateValues = () => {
  const selectedTemplate = templates[templateSelect.value];
  if (!selectedTemplate) {
    return;
  }
  assetInput.value = selectedTemplate.asset;
  strategyInput.value = selectedTemplate.strategy;
  riskInput.value = selectedTemplate.risk;
  expectedAprInput.value = selectedTemplate.expectedApr;
  if (!txCurrencyInput.value) {
    txCurrencyInput.value = selectedTemplate.asset.split("/")[0] ?? selectedTemplate.asset;
  }
};

templateSelect.addEventListener("change", updateTemplateValues);

transactionToggle.addEventListener("change", (event) => {
  const isEnabled = event.target.checked;
  transactionFields.setAttribute("aria-hidden", String(!isEnabled));
  if (isEnabled && !txDateInput.value) {
    txDateInput.valueAsDate = new Date();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedTemplate = templateSelect.value;
  const position = {
    template: selectedTemplate,
    asset: assetInput.value.trim(),
    strategy: strategyInput.value.trim(),
    risk: riskInput.value.trim(),
    expectedApr: Number(expectedAprInput.value),
    transactionEnabled: transactionToggle.checked,
    transaction: {
      date: txDateInput.value,
      amount: txAmountInput.value,
      currency: txCurrencyInput.value.trim(),
      comment: txCommentInput.value.trim(),
    },
  };

  const card = document.createElement("article");
  card.className = "position-card";
  card.innerHTML = `
    <div class="position-header">
      <div>
        <strong>${position.asset}</strong>
        <div class="muted">${position.strategy}</div>
      </div>
      <span class="badge">${templateBadge(position.template)}</span>
    </div>
    <div class="position-meta">
      <div>Риск: <span>${position.risk}</span></div>
      <div>Ожидаемый APR: <span>${position.expectedApr}%</span></div>
    </div>
  `;

  if (position.transactionEnabled && position.transaction.amount) {
    const transaction = document.createElement("div");
    transaction.className = "transaction-card";
    transaction.innerHTML = `
      <div><strong>IN транзакция</strong></div>
      <div>Дата: ${formatDate(position.transaction.date)}</div>
      <div>Сумма: ${position.transaction.amount} ${position.transaction.currency}</div>
      <div>Комментарий: ${position.transaction.comment || "—"}</div>
    `;
    card.appendChild(transaction);
  }

  positionsContainer.prepend(card);
  form.reset();
  transactionFields.setAttribute("aria-hidden", "true");
});

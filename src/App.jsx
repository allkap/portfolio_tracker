export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Portfolio Tracker</p>
          <h1>Wireframes: Dashboard / Positions / Transactions</h1>
          <p className="subtitle">
            Инструмент: <strong>Figma</strong> (файл проекта подготовлен для
            согласования). Ниже — каркас ключевых экранов с подписями и
            плейсхолдерами.
          </p>
        </div>
      </header>

      <section className="section" aria-label="Dashboard wireframe">
        <div className="section-header">
          <h2>Dashboard</h2>
          <span className="tag">KPI · Summary · Chart · Quick actions</span>
        </div>
        <div className="dashboard-grid">
          <div className="card">
            <h3>Основные KPI</h3>
            <div className="kpi-grid">
              <div className="kpi-item">
                <span className="kpi-label">Total NAV</span>
                <span className="kpi-value">$ 1 245 000</span>
                <span className="kpi-meta">+2.8% за 24ч</span>
              </div>
              <div className="kpi-item">
                <span className="kpi-label">Доходность (YTD)</span>
                <span className="kpi-value">14.6%</span>
                <span className="kpi-meta">Target: 12%</span>
              </div>
              <div className="kpi-item">
                <span className="kpi-label">Exposure</span>
                <span className="kpi-value">8 протоколов</span>
                <span className="kpi-meta">Top: Lido 22%</span>
              </div>
              <div className="kpi-item">
                <span className="kpi-label">Риск-профиль</span>
                <span className="kpi-value">Moderate</span>
                <span className="kpi-meta">Alert: 2 позиции</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Сводные блоки</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-title">Asset allocation</span>
                <div className="summary-placeholder">Пирог / stacked bars</div>
              </div>
              <div className="summary-item">
                <span className="summary-title">Top movers</span>
                <div className="summary-placeholder">Список 3-5 активов</div>
              </div>
              <div className="summary-item">
                <span className="summary-title">Cashflow (30d)</span>
                <div className="summary-placeholder">Мини-график</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>График</h3>
            <div className="chart-placeholder">
              <div className="chart-header">NAV / PnL · Диапазон: 1M / 3M / 1Y</div>
              <div className="chart-body">
                Основной график (линейный/area)
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Быстрые действия</h3>
            <div className="actions-grid">
              <button className="ghost-button" type="button">
                + Новая позиция
              </button>
              <button className="ghost-button" type="button">
                Импорт транзакций
              </button>
              <button className="ghost-button" type="button">
                Сформировать отчет
              </button>
              <button className="ghost-button" type="button">
                Настроить алерты
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Positions wireframe">
        <div className="section-header">
          <h2>Positions</h2>
          <span className="tag">Positions list · Position detail</span>
        </div>
        <div className="positions-grid">
          <div className="card">
            <h3>Positions list</h3>
            <div className="table">
              <div className="table-row table-head">
                <span>Актив / Протокол</span>
                <span>Стратегия</span>
                <span>TVL</span>
                <span>APR</span>
                <span>Риск</span>
                <span>Статус</span>
              </div>
              <div className="table-row">
                <span>ETH · Lido</span>
                <span>Staking</span>
                <span>$420k</span>
                <span>5.2%</span>
                <span>Medium</span>
                <span>Active</span>
              </div>
              <div className="table-row">
                <span>USDC · Aave</span>
                <span>Lending</span>
                <span>$310k</span>
                <span>4.1%</span>
                <span>Low</span>
                <span>Active</span>
              </div>
              <div className="table-row">
                <span>ETH/USDC · Uniswap</span>
                <span>LP</span>
                <span>$215k</span>
                <span>11.6%</span>
                <span>High</span>
                <span>Review</span>
              </div>
            </div>
            <div className="table-footer">
              Плейсхолдер: пагинация · поиск · фильтры
            </div>
          </div>

          <div className="card">
            <h3>Position detail</h3>
            <div className="detail-grid">
              <div className="detail-block">
                <span className="detail-title">Основные атрибуты</span>
                <ul>
                  <li>Протокол: Lido</li>
                  <li>Стратегия: Staking</li>
                  <li>Срок: 12M</li>
                  <li>Ответственный: Team Alpha</li>
                </ul>
              </div>
              <div className="detail-block">
                <span className="detail-title">Финансовые метрики</span>
                <ul>
                  <li>Invested: $420k</li>
                  <li>Unrealized PnL: +$18k</li>
                  <li>APR: 5.2%</li>
                  <li>Fees: 0.4%</li>
                </ul>
              </div>
              <div className="detail-block">
                <span className="detail-title">Риски и алерты</span>
                <ul>
                  <li>Health factor: 1.9</li>
                  <li>Risk tier: Medium</li>
                  <li>Alert: TVL drop 5%</li>
                </ul>
              </div>
              <div className="detail-block">
                <span className="detail-title">История / активность</span>
                <div className="summary-placeholder">
                  Timeline / logs placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Transactions wireframe">
        <div className="section-header">
          <h2>Transactions</h2>
          <span className="tag">Table · Filters · Add / Import</span>
        </div>
        <div className="transactions-grid">
          <div className="card">
            <h3>Таблица транзакций</h3>
            <div className="filters">
              <span className="filter">Период: 7d / 30d / YTD</span>
              <span className="filter">Тип: IN / OUT / Reward</span>
              <span className="filter">Актив</span>
              <span className="filter">Протокол</span>
            </div>
            <div className="table">
              <div className="table-row table-head">
                <span>Дата</span>
                <span>Тип</span>
                <span>Актив</span>
                <span>Сумма</span>
                <span>Позиция</span>
                <span>Комментарий</span>
              </div>
              <div className="table-row">
                <span>12.09</span>
                <span>IN</span>
                <span>USDC</span>
                <span>$50k</span>
                <span>Aave Lending</span>
                <span>Monthly top-up</span>
              </div>
              <div className="table-row">
                <span>08.09</span>
                <span>Reward</span>
                <span>ETH</span>
                <span>1.2</span>
                <span>Lido Staking</span>
                <span>Staking rewards</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Добавить / импортировать</h3>
            <div className="form-grid">
              <label>
                Источник
                <div className="input-placeholder">Ручной ввод / CSV / API</div>
              </label>
              <label>
                Тип транзакции
                <div className="input-placeholder">IN / OUT / Reward / Fee</div>
              </label>
              <label>
                Дата
                <div className="input-placeholder">YYYY-MM-DD</div>
              </label>
              <label>
                Сумма и актив
                <div className="input-placeholder">50 000 USDC</div>
              </label>
              <label>
                Привязка к позиции
                <div className="input-placeholder">Выбрать позицию</div>
              </label>
              <label>
                Комментарий
                <div className="input-placeholder">Optional note</div>
              </label>
            </div>
            <div className="actions-grid">
              <button className="ghost-button" type="button">
                Добавить транзакцию
              </button>
              <button className="ghost-button" type="button">
                Импортировать CSV
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

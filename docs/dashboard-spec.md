# Dashboard spec (summary metrics, filters, charts)

Документ описывает вычисления и UI-компоненты для сводного дашборда портфеля.

## 1. Summary-метрики

Метрики считаются по всем позициям с учётом активных фильтров.

### 1.1 Total Value
**Определение:** текущая стоимость портфеля.

```
Total Value = Σ net_position (в базовой валюте портфеля)
net_position = current_deposit + Σ Yield.amount
current_deposit = total_in - total_out
```

### 1.2 Total In/Out
**Определение:** суммарный ввод и вывод средств.

```
Total In  = Σ Transaction.amount where type = IN
Total Out = Σ Transaction.amount where type = OUT
```

### 1.3 Real PnL
**Определение:** реализованный результат по закрытым позициям.

```
Real PnL = Σ (total_out - total_in + Σ Yield.amount) for closed positions
```

### 1.4 Average APR
**Определение:** средневзвешенный фактический APR по активным позициям.

```
Average APR = Σ (actual_apr * current_deposit) / Σ current_deposit
```

> Если `current_deposit = 0`, метрика считается как 0 или показывается как N/A.

## 2. Распределения

Распределения строятся по `current_deposit` (или `net_position`, если включаем доход) с конвертацией в базовую валюту.

1. **По активам (Asset)** — сумма по `asset_id`.
2. **По стратегиям (Strategy)** — сумма по `strategy_id`.
3. **По риску (RiskRating)** — сумма по `risk_rating_id`.
4. **По сети/региону (Network/Region)** — сумма по `network_id`.

## 3. Фильтры

Фильтры применяются ко всем метрикам, распределениям и графикам.

- **Дата**: диапазон `from/to` для операций и доходов.
- **Стратегия**: `strategy_id`.
- **Актив**: `asset_id`.
- **Риск**: `risk_rating_id`.
- **Платформа**: `protocol_id`.
- **Статус**: `open/closed`.

## 4. Виджеты и графики

### 4.1 KPI-виджеты (cards)
- Total Value
- Total In
- Total Out
- Real PnL
- Average APR

### 4.2 Графики распределений
- **Pie**: по активам, стратегиям, риску, сети/региону.
- **Bar**: топ-5 активов/стратегий по объёму.

### 4.3 Таймсерия
- **Time series**: динамика Total Value по датам.
- Опция агрегации: day/week/month.

## 5. UI-структура (предложение)

1. Панель фильтров (верхняя строка).
2. Ряд KPI-карт.
3. Блок распределений (pie + bar).
4. Блок таймсерии (time series).

## 6. Примечания по данным

- Если `Yield` отсутствует, `net_position = current_deposit`.
- Для мультивалютных портфелей требуется конвертация в `portfolio.base_currency`.
- Для time series рекомендуется использовать дневную гранулярность по умолчанию.

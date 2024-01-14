// For more information on each counter type please refer to the following documentation - https://w.amazon.com/index.php/ClientSideMetrics/UserDocs/Instrumentation/ClientSideCounters#In_PMET

const COUNTER_TYPES = {
  COUNT: 'Count',
  AVG: 'AvgCount',
  FIRST: 'FirstCount',
  LAST: 'LastCount',
  SUM: 'SumCount',
};

const SERVICE_NAME = 'US-BIL-Sims-2023';

module.exports = { COUNTER_TYPES, SERVICE_NAME };

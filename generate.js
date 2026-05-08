const fs = require('fs')

const template = fs.readFileSync('index-template.html', 'utf8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

const html = template
  .replace(/__MONTH_YEAR__/g, data.month_year || 'N/A')
  .replace(/__TOTAL_OPENED__/g, data.total_opened || '0')
  .replace(/__TOTAL_CLOSED__/g, data.total_closed || '0')
  .replace(/__CLOSING_RATIO__/g, data.closing_ratio || '0%')
  .replace(/__NET_PIPELINE__/g, data.net_pipeline || '0')
  .replace(/__TOTAL_REVENUE__/g, data.total_revenue || '$0')
  .replace(/__TOTAL_ERRORS__/g, data.total_errors || '$0')
  .replace(/__AVG_REVENUE_PER_FILE__/g, data.avg_revenue_per_file || '$0')
  .replace(/__DMV_REVENUE__/g, data.dmv_revenue || '$0')
  .replace(/__PA_REVENUE__/g, data.pa_revenue || '$0')
  .replace(/__IL_REVENUE__/g, data.il_revenue || '$0')
  .replace(/__WI_REVENUE__/g, data.wi_revenue || '$0')
  .replace(/__TX_REVENUE__/g, data.tx_revenue || '$0')
  .replace(/__PTG_REVENUE__/g, data.ptg_revenue || '$0')
  .replace(/__DTG_REVENUE__/g, data.dtg_revenue || '$0')

fs.writeFileSync('index.html', html)
console.log('Generated index.html for', data.month_year)

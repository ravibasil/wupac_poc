const { getDomain } = require('../util/getDomain');

exports.getAnalytics = (req, res) => {

  let browserHistoryObj = req.body["Browser History"];

  let domainList = {};

  if (Array.isArray(browserHistoryObj)) {
    browserHistoryObj.map(item => {
      let domain = getDomain(item.url);
      if (domainList[domain]) {
        domainList[domain] = domainList[domain] + 1;
      } else {
        domainList[domain] = 1;
      }
    });
  }

  let labels = [];
  let values = [];

  Object.keys(domainList).map(function (key) {
    labels.push(key);
    values.push(domainList[key]);
  })

  res.status(200).send({
    chart_data: { labels: labels, values: values }
  });
} 
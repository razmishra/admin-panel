const axios = require("axios");
const getData = async (req, res) => {
    // console.log(req.query)
  const { timePeriod } = req.query;
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/qzawljRxB5bYu/history`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: timePeriod,
    },
    headers: {
      "X-RapidAPI-Key": "1f6a9db988msha0faaf742b4e34ep1362f1jsna692f3c4e0d1",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return res.status(200).json({ data: response.data.data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getData;

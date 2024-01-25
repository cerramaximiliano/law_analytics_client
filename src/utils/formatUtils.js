function numberWithCommas(x, arr) {
    let results = [];
    if (arr === true) {
      x.forEach(function (arr) {
        arr.toFixed(2);
        results.push(
          arr
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      });
      return results;
    } else {
      return Number(x)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };


export {numberWithCommas};
async function send_symbol(){
    const stock_symbol = document.getElementById("stock_symbol").value;
    const api_url = `income_statement/${stock_symbol}`;
    const response = await fetch(api_url);
    const data = await response.json();
    const searched_stock = document.getElementById("searched_stock");
    //console.log(data);

    //---------------------abreviation func---------------------

    const abbrNum = (number, decPlaces) => {
        decPlaces = Math.pow(10, decPlaces)
        var abbrev = ['K', 'M', 'B', 'T']
        for (var i = abbrev.length - 1; i >= 0; i--) {
            var size = Math.pow(10, (i + 1) * 3)
            if (size <= number) {
            number = Math.round((number * decPlaces) / size) / decPlaces
            if (number == 1000 && i < abbrev.length - 1) {
                number = 1
                i++
            }
            number += abbrev[i]
            break
            }
        }
        return number
    }

    //------------------------table-----------------------------

    let years = ["Assets"];
    for (var i = 0; i < data.length; i++) {
        years.push(data[i].date);
    }

    const arr_assets = ['Filling Date', 'Revenue', 'Cost Of Revenue', 'Gross Profit', 'Gross Profit Ratio', 'Research And Development Expenses', 'Operating Expenses', 'Cost And Expenses', 'Interest Income', 'Interest Expense', 'Depreciation And Amortization', 'Ebitda', 'Ebitda Ratio', 'Operating Income', 'Operating Income Ratio', 'Total Other Income Expenses Net', 'Income Before Tax', 'Income Before Tax Ratio', 'Income Tax Expense', 'Net Income', 'Net Income Ratio', 'EPS', 'EPS Diluted', 'Weighted Average ShsOut', 'Weighted Average ShsOutDil', '10K'];
    var values_latest = Object.keys(data[0]).map(function (key) { 
        return abbrNum(data[0][key], 2); 
    });
    values_latest.splice(0, 4); 
    values_latest.splice(1, 3); 
    values_latest.splice(6, 4); 
    values_latest.splice(25, 2);
    var values_1yr_prior = Object.keys(data[1]).map(function (key) { 
        return abbrNum(data[1][key], 2);
    });
    values_1yr_prior.splice(0, 4); 
    values_1yr_prior.splice(1, 3); 
    values_1yr_prior.splice(6, 4); 
    values_1yr_prior.splice(25, 2);
    var values_2yr_prior = Object.keys(data[2]).map(function (key) { 
        return abbrNum(data[2][key], 2);
    });
    values_2yr_prior.splice(0, 4); 
    values_2yr_prior.splice(1, 3); 
    values_2yr_prior.splice(6, 4); 
    values_2yr_prior.splice(25, 2);
    var values_3yr_prior = Object.keys(data[3]).map(function (key) { 
        return abbrNum(data[3][key], 2);
    });
    values_3yr_prior.splice(0, 4); 
    values_3yr_prior.splice(1, 3); 
    values_3yr_prior.splice(6, 4); 
    values_3yr_prior.splice(25, 2);
    var values_4yr_prior = Object.keys(data[4]).map(function (key) { 
        return abbrNum(data[4][key], 2); 
    });
    values_4yr_prior.splice(0, 4); 
    values_4yr_prior.splice(1, 3); 
    values_4yr_prior.splice(6, 4); 
    values_4yr_prior.splice(25, 2);

    var final_table = document.createElement("table");
    var final_tr = final_table.insertRow(-1);

    for (var i = 0; i < years.length; i++) {
        var theader = document.createElement("th");
        theader.textContent = years[i];
        final_tr.appendChild(theader);
    }

    for (var i = 0; i < values_latest.length; i++) {
        trow = final_table.insertRow(-1);
        var cell_0 = trow.insertCell(0);
        cell_0.textContent = arr_assets[i];
        var cell_1 = trow.insertCell(1);
        cell_1.textContent = values_latest[i];
        var cell_2 = trow.insertCell(2);
        cell_2.textContent = values_1yr_prior[i];
        var cell_3 = trow.insertCell(3);
        cell_3.textContent = values_2yr_prior[i];
        var cell_4 = trow.insertCell(4);
        cell_4.textContent = values_3yr_prior[i];
        var cell_5 = trow.insertCell(5);
        cell_5.textContent = values_4yr_prior[i];            
    }

    var final_table_result = document.getElementById("final_table");
    final_table_result.textContent = "";
    final_table_result.appendChild(final_table);
}
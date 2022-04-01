let selectedInstrument = new Infront.Instrument(6460, 'Indices');

function infrontReady() {
    createChart();
    createQuoteList();
    createTitle();
}

function chartClick() {
    console.log('chart click:', selectedInstrument);
    window.location.href = `overview.html#${selectedInstrument.feed}:${selectedInstrument.ticker}`;

}

function createTitle() {
    let opts = new Infront.QuoteWidgetOptions();
    opts.instrument = selectedInstrument;
    opts.name = "FULL_NAME";
    opts.linkChannels = 1;
    const widget = infront.quoteWidget("quoteWidget", opts);
}

function createChart() {
    let opts = new Infront.ChartWidgetOptions2();
    opts.instruments = selectedInstrument;
    opts.defaultPeriod = '6M';
    opts.showVolume = false;
    opts.zoom = false;
    opts.chartTypeID = 'line';
    opts.invertYAxis = true;
    opts.invertXAxis = true;
    opts.noSpacing = true;
    opts.selectablePeriods = ['1D', '2D', '5D', '30D', '6M', '1Y', '5Y', 'YTD', 'ALL'];
    opts.chartUI = {
        tooltipVersion: 'none',
        periodMenu: true,
        indicatorMenu: false,
        expandButton: false,
        chartTypeMenu: false,
        searchBox: false,
        showStaticInfo: true,
    };

    opts.linkChannels = 1;

    const widget = infront.chartWidget2('chart', opts);
}

function createQuoteList() {
    const opts = new Infront.QuoteListWidgetOptions();
    opts.sortable = false;
    opts.enableChangeStatusColors = true;
    opts.onInstrumentSelected = instrument => {
        selectedInstrument = instrument;
        console.log('selected:', instrument);
    }
    opts.instruments = [
        new Infront.Instrument(6460, 'J203'),
        new Infront.Instrument(2087, 'COMP'),
        new Infront.Instrument(2087, 'NDX'),
        new Infront.Instrument(2087, 'NQGBLM'),
        new Infront.Instrument(2087, 'NQHKMC'),
    ];
    opts.columns = [{
            name: 'FULL_NAME',
            hover: 'TICKER',
            flag: false
        },
        {
            name: 'LAST_VALID'
        },
        {
            name: 'PCT_CHANGE',
            translate: (rowid, value) => {
                return `${value >= 0 ? '+' : '-'}${InfrontUtil.formatPercent(value)}`
            }
        },
        {
            name: 'CHANGE',
        }
    ];

    opts.linkChannels = 1;

    const widget = infront.quoteList('quotelist', opts);
}
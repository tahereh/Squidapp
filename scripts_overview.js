let selectedInstrument = new Infront.Instrument(6460, 'OMXSPI');

function infrontReady() {
    let instrument = new Infront.Instrument(6460, 'J200');
    if (window.location.hash) {
        const fragment = window.location.hash.replace('#', '');
        const [feed, ticker] = fragment.split(':');
        instrument = new Infront.Instrument(parseInt(feed), ticker);
        console.log(fragment, instrument);
    } else {
        console.log('no fragment');
    }

    createChart(instrument);
    createIndexOverview(instrument);
    symbolInfo(instrument);
}

function createChart(instrument) {
    let opts = new Infront.ChartWidgetOptions2();
    opts.instruments = instrument;
    opts.defaultPeriod = '6M';
    opts.showVolume = true;
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
        showStaticInfo: false,
    };

    opts.linkChannels = 1;
    opts.onClick = () => { console.log('Hello') }

    const widget = infront.chartWidget2('chart', opts);
}

function createIndexOverview(instrument) {
    let opts = new Infront.InstrumentOverviewWidgetOptions();
    opts.instrument = instrument;
    opts.mainField = "LAST";
    const widget = infront.instrumentOverviewWidget("overview", opts);
}

function symbolInfo(instrument) {
    const opts = new Infront.InstrumentValuesWidgetOptions();
    opts.widgetTitle = '';
    opts.instrument = instrument;
    opts.layout = Infront.MultipleValuesWidgetLayout.VERTICAL;
    opts.fields = ["OPEN", "HIGH", "LOW"];

    const widget = infront.instrumentValuesWidget("instrumentValues", opts);
}
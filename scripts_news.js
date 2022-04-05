function infrontReady() {
    createNewsList();
    showMore();
}



function createNewsList() {
const opts = new Infront.NewsListWidgetOptions();
opts.columns = ["TIME", "HEADLINE","SHORT_SOURCE"];
opts.feeds = [
    1470
    // add more news feeds here    
 ]
opts.streaming = true;
opts.pageItems = 10; 

let widget = infront.newsListWidget("#newsWidget", opts);
}

function showMore() {
    opts.pageItems = (opts.pageItems + 5);
    console.log(opts)
    widget.destroy();
    widget = infront.newsListWidget("#newsWidget", opts);
}

const widget = infront.newsListWidget("#newsWidget", opts);



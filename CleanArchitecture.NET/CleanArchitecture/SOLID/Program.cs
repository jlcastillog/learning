//***********************************
// Single Responsability principle
//***********************************

using SOLID.Domain.SingleResponsability.Good;

// Resposability 1 - Class BeerData (Store beer data)
var beerData = new BeerData();
beerData.Add("Corona");
beerData.Add("Mahou");
// Responsability 2 - Build report content 
var reportGenerator = new ReportGeneratorBeer(beerData);
// Resposability 3 - Create report file
var report = new Report();
report.SaveReport(reportGenerator, "cervezas.txt");

//***********************************
// Open/Close principle
//***********************************
var reportGeneratorHTML = new ReportGeneratorHTMLBeer(beerData);
report.SaveReport(reportGeneratorHTML, "cervezas.html");

//***********************************
// Liskov substitution principle
//***********************************

// Wrong - We have changed the parent behaviour
BeerData beerData2 = new LimitedBeerData(2);
beerData.Add("Corona");
beerData.Add("Mahou");
beerData.Add("Aguila");

// Correct - We create a composition class (internal BeerData property)
var beerData3 = new LimitedBeerData2(2, beerData2);

//***********************************
// Interface segregation principle
//***********************************
if (report is IPrintable reportPrintable)
{
    reportPrintable.Show();
}

//***********************************
// Dependency inversion principle
//***********************************

// We inject the objcet that implement the inferface Irepository
var beerData4 = new LimitedBeerData2(2, beerData2);
namespace SOLID.Domain.SingleResponsability.Good
{
    public class ReportGeneratorBeer : IReportGenerator, IPrintable
    {
        private BeerData _beerData;

        public ReportGeneratorBeer(BeerData beerData)
        {
            _beerData = beerData;            
        }

        public string Generate()
        {
            var data = string.Empty;

            foreach (var beer in _beerData.Get())
            {
                data += $"Cerveza: {beer}\n";
            }
            return data;
        }

        public void Show()
        {
            _beerData?.Get()?.ForEach(beer => Console.WriteLine($"Cerveza: {beer}"));
        }
    }
}

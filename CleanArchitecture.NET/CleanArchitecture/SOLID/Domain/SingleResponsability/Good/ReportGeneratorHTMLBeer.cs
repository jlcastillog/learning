namespace SOLID.Domain.SingleResponsability.Good
{
    public class ReportGeneratorHTMLBeer : IReportGenerator
    {
        private BeerData _beerData;

        public ReportGeneratorHTMLBeer(BeerData beerData)
        {
            _beerData = beerData;
        }

        public string Generate()
        {
            var data = "<html lang=\"en\">" +
                       "<head>" +
                       "<meta charset=\"UTF-8\">" +
                       "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                       "<title>Document</title>" +
                       "</head>";

            data += "<body>";

            if (_beerData.Get().Count() > 0)
            {
                data += "<ul>";

                foreach (var beer in _beerData.Get())
                {
                    data += $"<li>Cerveza: {beer}</li>";
                }

                data += "</ul>";
            }
            
            data += "</body>" +
                    "</html>";

            return data;
        }
    }
}

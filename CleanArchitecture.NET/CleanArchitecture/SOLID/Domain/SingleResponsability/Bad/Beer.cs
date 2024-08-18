namespace SOLID.Domain.SingleResponsability.Bad
{
    /// <summary>
    /// Wrong class definition -> It don't fit with Single Responsability principle
    /// </summary>
    public class Beer
    {
        private List<string> _beers;

        public Beer()
        {
            _beers = new List<string>();
        }

        // Resposability 1

        public void Add(string beer) => _beers.Add(beer);

        public List<string> Get() => _beers;

        // Resposability 2

        public List<string> GetReport()
        {
            var data = new List<string>();

            foreach (var beer in _beers)
            {
                data.Add("Cerveza: " + beer);
            }
            return data;
        }

        // Responsability 3

        public void SaveReport(string filePath)
        {
            using (var writer = new StreamWriter(filePath))
            {
                foreach (var beer in GetReport())
                {
                    writer.WriteLine(beer);
                }
            }
        }
    }
}

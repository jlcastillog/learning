using BusinessComponent;

namespace TestComponent
{
    public class DefaultRepository : IRepository
    {
        public void Add(string name)
        {
        }

        public string Get()
        {
            return "Agguila, Amstel";
        }
    }
}

namespace Interface_Adapters_Adapter
{
    public interface IExternalService<T>
    {
        public Task<IEnumerable<T>> GetContentAsync();
    }
}

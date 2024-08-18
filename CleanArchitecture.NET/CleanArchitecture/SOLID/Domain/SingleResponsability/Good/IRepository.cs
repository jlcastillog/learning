namespace SOLID.Domain.SingleResponsability.Good
{
    public interface IRepository<T>
    {
        public void Add(T item);
        public List<T> Get();
    }
}

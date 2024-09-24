using System.Linq.Expressions;

namespace ApplicationLayer
{
    public interface IRespositorySearch<TModel, TEntity>
    {
        Task<IEnumerable<TEntity>> GetBySearchAsync(Expression<Func<TModel, bool>> predicate);
    }
}

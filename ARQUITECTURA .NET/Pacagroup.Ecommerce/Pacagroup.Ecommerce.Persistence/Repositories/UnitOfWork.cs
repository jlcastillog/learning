using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Persistence.Contexts;

namespace Pacagroup.Ecommerce.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        public ICustomersRepository Customers { get; }

        public IUsersRepository Users { get; }

        public ICategoriesRepository Categories { get; }

        public IDiscountRepository Discounts { get; }

        private readonly ApplicationDbContext _applicaDbContext;

        public UnitOfWork(ICustomersRepository customers, IUsersRepository users, ICategoriesRepository categories, IDiscountRepository discounts, ApplicationDbContext applicationDbContext)
        {
            Customers = customers;
            Users = users;
            Categories = categories;
            Discounts = discounts;
            _applicaDbContext = applicationDbContext;
        }

        public async Task<int> Save(CancellationToken cancellationToken)
        {
            return await _applicaDbContext.SaveChangesAsync(cancellationToken);
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}

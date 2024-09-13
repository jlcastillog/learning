using ApplicationLayer;
using EnterpriseLayer;
using InterfaceAdapters_Data;
using InterfaceAdapters_Models;
using Microsoft.EntityFrameworkCore;

namespace InterfaceAdapters_Repository
{
    public class Repository : IRepository<BeerEntity>
    {
        private readonly AppDbContext _dbContext;

        public Repository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddAsync(BeerEntity beer)
        {
            var newBeer = new BeerModel()
            {
                Id = beer.Id,
                Name = beer.Name,
                Alcohol = beer.Alcohol,
                Description = beer.Description,
                Type = beer.Type,
            };
            await _dbContext.Beers.AddAsync(newBeer);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<BeerEntity>> GetAllAsync()
        {
            return await _dbContext.Beers.
                Select(b => new BeerEntity()
                {
                    Id = b.Id,
                    Name = b.Name,
                    Alcohol = b.Alcohol,
                    Description = b.Description,
                })
                .ToListAsync();
        }

        public async Task<BeerEntity> GetByIdAsync(int id)
        {
            var beerModel = await _dbContext.Beers.FirstOrDefaultAsync(beer => beer.Id == id);
            return new BeerEntity()
            {
                Id = beerModel.Id,
                Name = beerModel.Name,
                Alcohol = beerModel.Alcohol,
                Description = beerModel.Description,
            };
        }
    }
}

using ApplicationLayer;
using EnterpriseLayer;
using InterfaceAdapters_Data;
using InterfaceAdapters_Presenters;
using InterfaceAdapters_Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange:true);

IConfiguration configuration = builder.Build();

var container = new ServiceCollection()
    .AddDbContext<AppDbContext>(options =>
    {
        options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
    })
    .AddScoped<IRepository<BeerEntity>, Repository>()
    .AddScoped<GetBeersUseCase<BeerEntity, BeerViewModel>>()
    .AddScoped<IPresenter<BeerEntity, BeerViewModel>, BeerPresenter>()
    .BuildServiceProvider();

var getBeerUseCase = container.GetService<GetBeersUseCase<BeerEntity, BeerViewModel>>();

var beers = await getBeerUseCase.ExecuteAsync();

foreach (var beer in beers)
{
    Console.WriteLine($"Cerveza {beer.Name} con {beer.Alcohol} alcohol");
}
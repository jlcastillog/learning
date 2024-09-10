using BeersRepositoryComponent;
using BusinessComponent;
using Microsoft.Extensions.DependencyInjection;
using OperationComponent;
using RepositoryComponent;
using TestComponent;

var operations = new Operations();
var result1 = operations.Add(2, 3);
var result2 = operations.Mul(2, 3);
Console.WriteLine($"Suma: {result1}");
Console.WriteLine($"Multiplicación: {result2}");
Console.ReadLine();

var beers = new Beers();

///////////////////////////////////////////////////////////////////

//Inyeccion de dependencias
var container = new ServiceCollection()
    .AddSingleton<IRepository, BeerRepository>()
    .AddTransient<BeerManager>()
    .BuildServiceProvider();

//var beerManager = new BeerManager(new DefaultRepository());
//Console.WriteLine(beerManager.Get());

var beerManager2 = container.GetService<BeerManager>();
beerManager2.Add("Budweiser");
beerManager2.Add("Coronita");
Console.WriteLine(beerManager2.Get());

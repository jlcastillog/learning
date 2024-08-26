using BeersRepositoryComponent;
using OperationComponent;

var operations = new Operations();
var result1 = operations.Add(2, 3);
var result2 = operations.Mul(2, 3);
Console.WriteLine($"Suma: {result1}");
Console.WriteLine($"Multiplicación: {result2}");
Console.ReadLine();

var beers = new Beers();
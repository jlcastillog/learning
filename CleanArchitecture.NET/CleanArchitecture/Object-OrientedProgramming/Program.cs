using Object_OrientedProgramming.Domain;

Beer coronaBeer = new Beer("Corona", 3, 2, 300);
ExpiringBeer mahouBeer = new ExpiringBeer("Mahou", 4, 2, 250, DateTime.Now.AddMonths(1));

Console.WriteLine(coronaBeer.GetInfo());
Console.WriteLine(mahouBeer.GetInfo());

Drink drink1 = new Wine(500);
Drink drink2 = new Beer("Estrella",4,2.4m,500);

var drinks = new List<Drink>()
{
    drink1,
    drink2,
    coronaBeer,
    mahouBeer
};

foreach (var drink in drinks)
{
    Show(drink);
}

Send(coronaBeer);

var service = new Service(10, 2);

ShowPrice(service);

void Show(Drink drink) => Console.WriteLine(drink.GetCategory());

void Send(ISend item)
{
    item.Send();
}

void ShowPrice(ISalable item)
{
    Console.WriteLine(item.GetPrice());
}

var colIntegers = new Collection<int>(3);
colIntegers.Add(1);
colIntegers.Add(2); 
colIntegers.Add(3);
colIntegers.Add(4);

foreach (var item in colIntegers.Get())
{
    Console.WriteLine(item);
}

var colStrings = new Collection<string>(2);
colStrings.Add("Primera cadena");
colStrings.Add("Segunda cadena");
colStrings.Add("Tercera cadena");

foreach (var item in colStrings.Get())
{
    Console.WriteLine(item);
}

Console.WriteLine(Beer.QuantityObjects.ToString());
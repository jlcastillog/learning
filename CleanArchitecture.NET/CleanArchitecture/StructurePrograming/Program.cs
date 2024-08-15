int limit = 10;
var beers = new string[limit];
int iBeers = 0;
int op = 0;


do
{
    Console.Clear();
    ShowMenu();
    op = int.Parse(Console.ReadLine() ?? "0");

    switch (op)
    {
        case 1:
            InsertBeer();
            break;
        case 2:
            ShowBeers();
            break;
        case 3:
            Console.WriteLine("Adios");
            break;
        default:
            Console.WriteLine("Opción no válida");
            break;
    }
}
while (op != 3);


void ShowMenu()
{
    Console.WriteLine("Introduzca opcion:");
    Console.WriteLine("1. Agregar nombres");
    Console.WriteLine("2. Mostrar nombres");
    Console.WriteLine("3. Salir");
}

void InsertBeer()
{
    if (iBeers < limit)
    {
        Console.Clear();
        Console.WriteLine("Escribe nombre de cerveza:");
        var beerName = Console.ReadLine();
        if (!string.IsNullOrEmpty(beerName))
        {
            beers[iBeers] = beerName;
            iBeers++;
        }
        else
        {
            Console.WriteLine("Nombre de cerveza incorrecto");
        }
    }
    else
    {
        Console.WriteLine("Ya no puedes insertar mas cervezas");
    }
}

void ShowBeers()
{
    Console.Clear();
    Console.WriteLine("----- Cervezas -----");
    for(int i = 0; i <= iBeers; i++)
    {
        Console.WriteLine(beers[i]);
    }
    Console.WriteLine("Presione una tecla para continuar");
    Console.ReadLine();
}
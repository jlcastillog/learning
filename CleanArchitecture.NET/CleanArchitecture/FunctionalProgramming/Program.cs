

Console.WriteLine(Tomorrow());
Console.WriteLine(TomorrowPure(new DateTime(2010, 10, 2)));

// Funciones de primerra clase
var fn = TomorrowPure;

Console.WriteLine(fn(new DateTime(2024, 08, 17)));

// Actions
Action<string> show = Console.WriteLine;

show("Action test");

// Lambda expressions
Action<string> arrowFn = (name) => {
    Console.WriteLine(name);
};

arrowFn("Jose Luis");

// Tipo Func
Func<int, int, int> add = (a, b) =>  a + b;

show("Suma: " + add(1, 2).ToString());

// Función de orden superior
List<int> list = new List<int>() { 1,2,3,4,5,6,7,8,9};

Predicate<int> greaterThan5 = a => a > 5;

List<int> result = Filter(list, greaterThan5);

result.ForEach(x => Console.WriteLine(x));

List<int> Filter(List<int> list, Predicate<int> condition)
{
    var resultList = new List<int>();

    resultList = list.Where(p => condition(p)).ToList();

    return resultList;
}

// Predicados
Predicate<int> condition = x => x % 2 == 0;

Console.WriteLine(condition(2));

// Función no pura
DateTime Tomorrow()
{
    return DateTime.Now.AddDays(1);
}

// Función pura
DateTime TomorrowPure(DateTime date)
{
    return date.AddDays(1);
}
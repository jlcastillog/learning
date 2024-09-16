using ApplicationLayer;
using EnterpriseLayer;
using FrameworkDrivers_API.Middlewares;
using InterfaceAdapters_Data;
using InterfaceAdapters_Mappers;
using InterfaceAdapters_Mappers.Dtos.Requests;
using InterfaceAdapters_Presenters;
using InterfaceAdapters_Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// dependencias
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddScoped<IRepository<BeerEntity>, Repository>();
builder.Services.AddScoped<IPresenter<BeerEntity, BeerViewModel>, BeerPresenter>();
builder.Services.AddScoped<IMapper<BeerRequestDto, BeerEntity>, BeerMapper>();
builder.Services.AddScoped<GetBeersUseCase<BeerEntity, BeerViewModel>>();
builder.Services.AddScoped<AddBeerUseCase<BeerRequestDto>>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseMiddleware<ExceptionMiddleware>();

app.MapGet("/beer", async (GetBeersUseCase<BeerEntity, BeerViewModel> beerUseCase) =>
{
    return await beerUseCase.ExecuteAsync();
})
.WithName("beers")
.WithOpenApi();

app.MapPost("/beer", async (BeerRequestDto beerRequest, AddBeerUseCase<BeerRequestDto> addBeerUseCase) =>
{
    await addBeerUseCase.ExecuteAsync(beerRequest);
})
.WithName("addBeer")
.WithOpenApi(); ;

app.Run();


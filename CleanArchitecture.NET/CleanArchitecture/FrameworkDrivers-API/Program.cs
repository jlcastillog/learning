using ApplicationLayer;
using EnterpriseLayer;
using FluentValidation;
using FluentValidation.AspNetCore;
using FrameworkDrivers_API.Middlewares;
using FrameworkDrivers_API.Validators;
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

// validadores
builder.Services.AddValidatorsFromAssemblyContaining<BeerValidator>();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddFluentValidationClientsideAdapters();

// dependencias
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddScoped<IRepository<BeerEntity>, Repository>();
builder.Services.AddScoped<IPresenter<BeerEntity, BeerViewModel>, BeerPresenter>();
builder.Services.AddScoped<IPresenter<BeerEntity, BeerDetailViewModel>, BeerDetailPresenter>();
builder.Services.AddScoped<IMapper<BeerRequestDto, BeerEntity>, BeerMapper>();
builder.Services.AddScoped<GetBeersUseCase<BeerEntity, BeerViewModel>>();
builder.Services.AddScoped<GetBeersUseCase<BeerEntity, BeerDetailViewModel>>();
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

app.MapPost("/beer", async (BeerRequestDto beerRequest, 
                            AddBeerUseCase<BeerRequestDto> addBeerUseCase,
                            IValidator<BeerRequestDto> validator) =>
{
    var result = await validator.ValidateAsync(beerRequest);

    if (!result.IsValid)
    {
        return Results.ValidationProblem(result.ToDictionary());
    }

    await addBeerUseCase.ExecuteAsync(beerRequest);
    return Results.Created();
})
.WithName("addBeer")
.WithOpenApi();

app.MapGet("/beerDetail", async (GetBeersUseCase<BeerEntity, BeerDetailViewModel> beerUseCase) =>
{
    return await beerUseCase.ExecuteAsync();
})
.WithName("beerDetail")
.WithOpenApi();

app.Run();

